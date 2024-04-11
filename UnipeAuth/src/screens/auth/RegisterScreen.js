import { Formik } from "formik";
import { useState } from "react";
import {
    Button,
    Form,
    Input,
    Label,
    Spinner,
    YStack,
    View,
    Text,
} from "tamagui";
import AuthWrapper from "~components/auth/AuthWrapper";
import TncMessage from "~components/common/messages/TncMessage";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS } from "~constants/theme";
import VALIDATIONS from "~constants/validations";
import { showMessage } from 'react-native-flash-message';
import RedirectMessage from "~components/common/messages/RedirectMessage";
import { getHash } from "react-native-otp-verify";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "~store/reducers/userSlice";
const { signupVS } = VALIDATIONS;

const RegisterScreen = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(false);
    const initialValues = {
        username: "",
        phone: "",
        password: "",
    };
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.userData);



    // function to handle user registration
    const handleFormSubmit = async (values, { setSubmitting }) => {
        setSubmitting(true);
        try {
            // Check if userData exists and if the username already exists
            if (userData && userData.username === values.username) {
                showMessage({
                    message: "Already exist!",
                    description: "Username already exists please use different username",
                    type: "warning",
                    icon: "auto"
                });
                setSubmitting(false);
                return;
            }
            else {
                showMessage({
                    message: "Congratulations!",
                    description: "Your registration has been successfully completed",
                    type: "success",
                    icon: "auto"
                })

                await getHash().then(hash => {
                    // add this hash value at the end of sms
                    console.log("hash for otp", hash);
                }).catch(console.log);

                const currentDate = new Date();
                dispatch(addUser({
                    ...values,
                    is_verified: false,
                    created_at: currentDate.toString(),
                }))
                navigation.navigate("VerifyOTPScreen", { data: values })
            }

        } catch (error) {
            console.error("Error during form submission:", error);
            showMessage({
                message: "Error!",
                description: "An error occurred during registration. Please try again.",
                type: "error",
                icon: "auto"
            });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <AuthWrapper
            title="Registration"
            message="Please create an account to get started!"
        >
            <Formik
                enableReinitialize={true}
                initialValues={initialValues}
                validationSchema={signupVS}
                onSubmit={handleFormSubmit}
            >
                {({
                    isSubmitting,
                    isValid,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    values,
                    errors,
                }) => (
                    <Form minWidth={300} gap="$4" onSubmit={handleSubmit}>
                        {/* Username Input */}
                        <YStack width="100%" gap="$2">
                            <Label htmlFor="username" lineHeight={20}>
                                Username
                            </Label>
                            <Input
                                borderColor={COLORS.lightGray}
                                onChangeText={handleChange("username")}
                                onBlur={handleBlur("username")}
                                value={values.username}
                                size="$5"
                                name="username"
                                defaultValue=""
                                keyboardType="default"
                                textContentType="username"
                                placeholder="eg: JohnDoe"
                            />
                            {errors && errors.username && (
                                <Text color={COLORS.red}>{errors.username}</Text>
                            )}
                        </YStack>

                        {/* Phone Number Input */}
                        <YStack width="100%" gap="$2">
                            <Label htmlFor="phone" lineHeight={20}>
                                Phone number
                            </Label>
                            <Input
                                borderColor={COLORS.lightGray}
                                onChangeText={handleChange("phone")}
                                onBlur={handleBlur("phone")}
                                value={values.phone}
                                size="$5"
                                name="phone"
                                defaultValue=""
                                keyboardType="phone-pad"
                                textContentType="telephoneNumber"
                                placeholder="eg: +911234567890"
                            />
                            {errors && errors.phone && (
                                <Text color={COLORS.red}>{errors.phone}</Text>
                            )}
                        </YStack>
                        {/* Password Input */}
                        <YStack width="100%" gap="$2" style={{ position: "relative" }}>
                            <Label htmlFor="password" lineHeight={20}>
                                Password
                            </Label>
                            <Input
                                borderColor={COLORS.lightGray}
                                size="$5"
                                onChangeText={handleChange("password")}
                                onBlur={handleBlur("password")}
                                value={values.password}
                                name="password"
                                defaultValue=""
                                secureTextEntry={showPassword ? false : true}
                                keyboardType="default"
                                textContentType="password"
                                placeholder="use a strong password"
                            />
                            <Button
                                onPress={() => setShowPassword(!showPassword)}
                                chromeless
                                size="$2"
                                style={{ position: "absolute", top: 40, right: 10 }}
                            >
                                <Ionicons
                                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                                    size={25}
                                    color={COLORS.appGray}
                                />
                            </Button>
                            {errors && errors.password && (
                                <Text color={COLORS.red}>{errors.password}</Text>
                            )}
                        </YStack>

                        {/* Form action button */}
                        <Form.Trigger
                            asChild
                            disabled={!isValid || isSubmitting}
                            marginTop={20}
                        >
                            <Button
                                icon={isSubmitting ? () => <Spinner /> : undefined}
                                size="$6"
                                backgroundColor={COLORS.appPrimary}
                                color={COLORS.white}
                                disabledStyle={{
                                    backgroundColor: COLORS.appGray,
                                }}
                            >
                                {isSubmitting ? "Please wait..." : "Submit"}
                            </Button>
                        </Form.Trigger>
                    </Form>
                )}
            </Formik>

            {/* footer section */}
            <View marginTop={30}>
                <View flexDirection="row" justifyContent="center">
                    <RedirectMessage
                        message="Already have an account?"
                        link="LoginScreen"
                        linkText="Login here"
                    />
                </View>
                <View marginTop={30}>
                    <TncMessage />
                </View>
            </View>
        </AuthWrapper>
    );
};

export default RegisterScreen;
