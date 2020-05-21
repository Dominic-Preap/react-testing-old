import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import { Formik } from 'formik';
import { Background } from 'HyreCar/components/Background';

import { LoginContainer, LoginWrapper, Typography } from './components';
import { initialValues, validationSchema } from './FormikProps';
import { LoginForm } from './LoginForm';

// import { RoutePath } from 'HyreCar/Enums/RoutePath';
// import Auth0 from 'providers/WebAuthProvider';

export default class Login extends React.Component<RouteComponentProps> {
  handleLogin = (e: any) => {
    console.log(e);

    /*  domain: "auth.staging.hyrecar.com",
    clientID: "XdZyNgj7aE7GPPW3fQl2fjmKMg7O0fcm",
    audience: "https://graphql.hyrecar.com/api",
    redirectUri: "https://staging.app.hyrecar.com/",
    fleetRedirectUri: "https://staging.fleet.app.hyrecar.com",
    legacyRedirectUri: "https://staging.legacy.app.hyrecar.com/",
    connection: "legacy-db" */

    // const stagingAuth = {
    //   domain: 'auth.staging.hyrecar.com"',
    //   clientID: 'XdZyNgj7aE7GPPW3fQl2fjmKMg7O0fcm',
    //   redirectUri: `https://staging.app.hyrecar.com/`,
    //   audience: 'https://graphql.hyrecar.com/api',
    //   responseType: 'token id_token'
    // };

    // Auth0.crossOriginAuthentication.login(
    //   {
    //     realm: 'legacy-db',
    //     username: e.email,
    //     password: e.password,
    //     responseType: 'token id_token'
    //   },
    //   (errors: any, response: any) => {
    //     console.log(errors);
    //     console.log(response);
    //   }
    // );

    // this.props.history.push(RoutePath.dealerList);
  };

  render() {
    return (
      <Container maxWidth="sm">
        <LoginWrapper>
          <Background />
          <LoginContainer>
            <Typography variant={'h5'}>Welcome to</Typography>
            <Typography variant={'h4'}>Dealer Activation</Typography>
            <Formik
              onSubmit={this.handleLogin}
              validationSchema={validationSchema}
              initialValues={initialValues}
              render={LoginForm}
            />
          </LoginContainer>
        </LoginWrapper>
      </Container>
    );
  }
}
