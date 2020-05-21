import { object, string } from 'yup';

export const initialValues = { email: '', password: '' };

export const validationSchema = object().shape({
  email: string()
    .email('Invalid email')
    .required('Required'),
  password: string().required('Required')
});
