import * as Yup from 'yup';
const containsOneUpperCaseLetter = /^(?=.*?[A-Z]).{0,}$/
const containsOneLowerCaseLetter = /^(?=.*?[a-z]).{0,}$/
const containsNumber = /^(?=.*?[0-9]).{0,}$/


const loginVS = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
})

const signupVS = Yup.object().shape({
    phone: Yup.string()
    .matches(/^\+91\d{10}$/, 'Phone number must be in the format +91123456789')
    .required('Phone number is required'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .matches(
            containsOneUpperCaseLetter,
            'Password must contain one uppercase letter'
        )
        .matches(
            containsOneLowerCaseLetter,
            'Password must contain one lowercase letter'
        )
        .matches(
            containsNumber,
            'Password must contain a number'
        ),
    username: Yup.string().trim().min(3, "Username must be at least 3 characters")
        .max(25, "Username can't exceed 25 characters")
        .matches(/^\S+$/, "Username must not contain only spaces")
        .required('Username is required')
})

const forgotPassVS = Yup.object().shape({
    username: Yup.string().required('Username is required'),
})

const otpVS = Yup.object().shape({
    code: Yup.string()
        .required('OTP is required')
        .matches(/^\d{6}$/, 'OTP must be a 6-digit number'),
});


const VALIDATIONS = {
    loginVS,
    signupVS,
    forgotPassVS,
    otpVS,
}

export default VALIDATIONS;