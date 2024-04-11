import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from "react-native-flash-message";
import { generateToken } from '~utils/functions';
import { useNavigation } from '@react-navigation/native';
import { addToken } from '~store/reducers/userSlice';


const useLogin = () => {
    const navigation = useNavigation();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.userData);


    const handleLogin = async (values) => {
        setIsSubmitting(true);

        try {
            if (!userData || userData.username !== values.username || userData.password !== values.password) {
                showMessage({
                    message: "Invalid Credentials!",
                    description: "Please check your username and password and try again!",
                    type: "danger",
                    icon: "auto",
                });
                setIsSubmitting(false);
                return;
            }

            if (userData && userData.is_verified === true) {
                const token = generateToken(values.username, values.password);
                if (token) {
                    dispatch(addToken(token));
                    showMessage({
                        message: "Login Successful!",
                        description: "Checkout today's statistics",
                        type: "success",
                        icon: "auto",
                    });
                }
            }
            else {
                showMessage({
                    message: "Account is not verified!",
                    description: "Please verify your account to continue...",
                    type: "warning",
                    icon: "auto",
                });
                navigation.navigate("VerifyOTPScreen", { data: { phone: userData.phone } })
            }

        } catch (error) {
            console.error("Error during login:", error);
            showMessage({
                message: "Error!",
                description: "An error occurred during login. Please try again.",
                type: "error",
                icon: "auto",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return { isSubmitting, handleLogin };
};

export default useLogin;
