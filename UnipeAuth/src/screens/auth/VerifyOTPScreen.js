import { Formik } from "formik";
import {
    Button,
    Form,
    Input,
    Label,
    Spinner,
    YStack,
    Text,
} from "tamagui";
import AuthWrapper from "~components/auth/AuthWrapper";
import { COLORS } from "~constants/theme";
import VALIDATIONS from "~constants/validations";
const { forgotPassVS } = VALIDATIONS;

const VerifyOTPScreen = ({ navigation }) => {
    const initialValues = {
        code: "",
    };

    // function to handle user registration
    const handleFormSubmit = async (values, { setSubmitting }) => {
        setSubmitting(true);
        console.log("🚀 ~ handleFormSubmit ~ values:", values);
    };

    return (
        <AuthWrapper
            title="Verify OTP"
            message="Please check your phone sms for the latest OTP!"
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
                                defaultValue=""
                                keyboardType="default"
                                textContentType="code"
                                placeholder="enter your code"
                            />
                            {errors && errors.code && (
                                <Text color={COLORS.red}>{errors.code}</Text>
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
                                {isSubmitting ? "Please wait..." : "Verify"}
                            </Button>
                        </Form.Trigger>
                    </Form>
                )}
            </Formik>
        </AuthWrapper>
    );
};

export default VerifyOTPScreen;
