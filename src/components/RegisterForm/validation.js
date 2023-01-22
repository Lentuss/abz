import * as Yup from 'yup';

const regexPhone = /^[+]{0,1}380([0-9]{9})$/
const FILE_SIZE = 5242880;
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg'];

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Must contain at least 2 letters!')
        .max(60, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().matches(regexPhone, 'Enter phone number in format +380987654321').typeError("Enter phone number in format +380987654321")
        .required('Required'),
    position_id: Yup.string().required('Required'),
    photo: Yup.mixed()
    .test(
      'FILE_SIZE',
      'Uploaded file is too big',
      value => !value || (value && value.size <= FILE_SIZE)
    )
    .test(
      'FILE_FORMAT',
      'Uploaded file unsupported format',
      value => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
    ).required('Required'),
})

export default SignupSchema