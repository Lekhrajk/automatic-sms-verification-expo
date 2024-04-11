import { Formik } from "formik";
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
import { COLORS } from "~constants/theme";
import VALIDATIONS from "~constants/validations";
import { showMessage } from "react-native-flash-message";
import RedirectMessage from "~components/common/messages/RedirectMessage";
const { forgotPassVS } = VALIDATIONS;

const ForgotPasswordScreen = ({ navigation }) => {
    const initialValues = {
        username: "",
    };

    // function to handle user registration
    const handleFormSubmit = async (values, { setSubmitting }) => {
        console.log("🚀 ~ handleFormSubmit ~ values:", values)
        setSubmitting(true);
        showMessage({
            message: "Email sent!",
            description: "Please check your email for password reset instructions",
            type: "success",
            icon: "auto",
        });
        navigation.navigate("LoginScreen");
    };

    return (
        <AuthWrapper
            title="Forgot Password?"
            message="Do not worry we will help you to reset your password!"
        >
            <Formik
                enableReinitialize={true}
                initialValues={initialValues}
                validationSchema={forgotPassVS}
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
                                placeholder="enter your username"
                            />
                            {errors && errors.username && (
                                <Text color={COLORS.red}>{errors.username}</Text>
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
                                {isSubmitting ? "Please wait..." : "Reset Password"}
                            </Button>
                        </Form.Trigger>
                    </Form>
                )}
            </Formik>

            {/* Footer section */}
            <View marginTop={30}>
                <View flexDirection="row" justifyContent="center">
                    <RedirectMessage
                        message="Go back to"
                        link="LoginScreen"
                        linkText="Login Screen"
                    />
                </View>
            </View>
        </AuthWrapper>
    );
};

export default ForgotPasswordScreen;
