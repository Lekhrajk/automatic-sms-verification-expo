import { Formik } from "formik";
import { useEffect, useRef, useState } from "react";
import {
    Button,
    Form,
    Input,
    Label,
    Spinner,
    YStack,
    Text,
    View,
} from "tamagui";
import AuthWrapper from "~components/auth/AuthWrapper";
import { COLORS } from "~constants/theme";
import VALIDATIONS from "~constants/validations";
import useOtpReader from "~hooks/useOtpReader";
import { showMessage } from 'react-native-flash-message';
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "~store/reducers/userSlice";
const { otpVS } = VALIDATIONS;

const VerifyOTPScreen = ({ navigation, route }) => {
    const { phone } = route.params.data;
    const initialValues = { code: "" };
    const [shouldSubmit, setShouldSubmit] = useState(false);
    const { code, isReading, setIsReading } = useOtpReader();

    // read user values from the redux store;
    const userData = useSelector(state => state.user.userData);
    const dispatch = useDispatch();

    // Ref to store handleSubmit
    const handleSubmitRef = useRef(null);
    // Ref to store setFieldValue
    const handleCodeRef = useRef(null);

    useEffect(() => {
        if (!isReading && code) {
            if (handleCodeRef.current) {
                handleCodeRef.current("code", code);
                setShouldSubmit(true);
            }
        }
    }, [code, isReading])


    // Call handleSubmit to submit the form
    useEffect(() => {
        if (shouldSubmit) {
            if (handleSubmitRef.current) {
                handleSubmitRef.current();
            }
            // Reset the state to prevent re-submission
            setShouldSubmit(false);
        }
    }, [shouldSubmit]);


    // function to handle otp verification from the server and login user
    const handleFormSubmit = async (values, { setSubmitting }) => {
        setSubmitting(true);
        if (values.code == "123456") {
            const updatedUserValue = {
                ...userData,
                is_verified: true,
            }
            dispatch(updateUser(updatedUserValue))
            showMessage({
                message: "Account verification successful!",
                type: "success",
                icon: "auto"
            })
            navigation.reset({
                index: 0,
                routes: [{ name: 'LoginScreen' }],
            });
        }
        else {
            showMessage({
                message: "Invalid OTP!",
                description: "Account verification failed!",
                type: "danger",
                icon: "auto"
            })
        }
        setSubmitting(false);
    };


    // function that returns current text of the button based on conditions
    const getButtonText = (isReading, isSubmitting) => {
        if (isReading) {
            return "Auto verifying...";
        } else if (isSubmitting) {
            return "Please wait...";
        } else {
            return "Verify";
        }
    };

    return (
        <AuthWrapper
            title="Verify OTP"
            message={`we have sent a verification code to ${phone}`}
        >
            <Formik
                enableReinitialize={true}
                initialValues={initialValues}
                validationSchema={otpVS}
                onSubmit={handleFormSubmit}
            >
                {({
                    isSubmitting,
                    isValid,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    setFieldValue,
                    values,
                    errors,
                }) => {
                    handleSubmitRef.current = handleSubmit;
                    handleCodeRef.current = setFieldValue;

                    return (
                        <Form
                            minWidth={300}
                            gap="$4"
                            onSubmit={handleSubmit}
                        >
                            {/* Verification Input */}
                            <YStack width="100%" gap="$2">
                                <Label htmlFor="code" lineHeight={20}>
                                    Verification code
                                </Label>
                                <Input
                                    borderColor={COLORS.lightGray}
                                    onChangeText={handleChange("code")}
                                    onBlur={handleBlur("code")}
                                    value={values.code}
                                    size="$5"
                                    name="code"
                                    keyboardType="default"
                                    textContentType="oneTimeCode"
                                    placeholder="enter your code"
                                />
                                {errors && errors.code && (
                                    <Text color={COLORS.red}>{errors.code}</Text>
                                )}
                            </YStack>

                            {/* Form action button */}
                            <Form.Trigger
                                asChild
                                disabled={!isValid || isSubmitting || isReading}
                                marginTop={20}
                            >
                                <Button
                                    icon={(isSubmitting || isReading) ? () => <Spinner color={COLORS.white} /> : undefined}
                                    size="$6"
                                    backgroundColor={COLORS.appPrimary}
                                    color={COLORS.white}
                                    disabledStyle={{
                                        backgroundColor: COLORS.appGray,
                                    }}
                                >
                                    {getButtonText(isReading, isSubmitting)}
                                </Button>
                            </Form.Trigger>
                        </Form>
                    )
                }}
            </Formik>
            {
                isReading &&
                <View marginTop={20}>
                    <Button size="$2"
                        chromeless
                        marginTop={10}
                        color={COLORS.blue}
                        onPress={() => setIsReading(false)}
                    >
                        Enter manually
                    </Button>
                </View>
            }
        </AuthWrapper>
    );
};

export default VerifyOTPScreen;
