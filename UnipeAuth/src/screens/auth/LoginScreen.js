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
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS, SIZES } from "~constants/theme";
import VALIDATIONS from "~constants/validations";
import RedirectMessage from "~components/common/messages/RedirectMessage";
import { Pressable } from "react-native";
const { loginVS } = VALIDATIONS;

const LoginScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const initialValues = {
    username: "",
    password: "",
  };

  // function to handle user registration
  const handleFormSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    console.log("🚀 ~ handleFormSubmit ~ values:", values);
  };

  return (
    <AuthWrapper
      title="Login"
      message="Welcome back enter your login details!"
    >
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={loginVS}
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
                placeholder="enter username"
              />
              {errors && errors.username && (
                <Text color={COLORS.red}>{errors.username}</Text>
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
                placeholder="enter password"
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

            <View flexDirection="row" justifyContent="flex-end">
              <Pressable
                onPress={() => navigation.navigate("ForgotPasswordScreen")}
              >
                <Text
                  color={COLORS.blue}
                  fontSize={SIZES.smd}
                >
                  Forgot Password?
                </Text>
              </Pressable>
            </View>

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
                {isSubmitting ? "Please wait..." : "Login"}
              </Button>
            </Form.Trigger>
          </Form>
        )}
      </Formik>

      {/* Footer section */}
      <View marginTop={30}>
        <View flexDirection="row" justifyContent="center">
          <RedirectMessage
            message="Do not have an account?"
            link="RegisterScreen"
            linkText="Create here"
          />
        </View>
      </View>
    </AuthWrapper>
  );
};

export default LoginScreen;
