import * as React from 'react';

import Box from '@material-ui/core/Box';
import { Form, FormikProps } from 'formik';
import { FlatButton } from 'HyreCar/components/Button';
import { TextField } from 'HyreCar/components/Input';

interface Props {
  email: string;
  password: string;
}

export const LoginForm = (props: FormikProps<Props>) => {
  const { values, touched, errors, handleBlur, handleChange } = props;

  return (
    <Form>
      <Box my={2}>
        <TextField
          fullWidth
          label={'Email'}
          name="email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          errorText={touched.email && errors.email ? errors.email : undefined}
        />
      </Box>

      <Box mt={2} mb={4}>
        <TextField
          fullWidth
          label={'Password'}
          name="password"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
          errorText={touched.password && errors.password ? errors.password : undefined}
        />
      </Box>

      <FlatButton fullWidth type="submit" children="Login" />
    </Form>
  );
};
