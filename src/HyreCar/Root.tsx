import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Redirect, Route, Switch } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

// import { FleetHeader } from './components/Header/FleetHeader';
import { DemoDashboardNav } from './containers/DemoDashboardNav/DemoDashboardNav';
import { RoutePath } from './Enums/RoutePath';
import { apolloClient } from './providers/ApolloProvider';
import { theme } from './providers/ThemeProvider';

// Do Code-Splitting
// https://reactjs.org/docs/code-splitting.html
const DemoRightDrawer = React.lazy(() => import('./containers/DemoRightDrawer/DemoRightDrawer'));
const DemoWidget = React.lazy(() => import('./containers/DemoWidget/DemoWidget'));
const DemoTab = React.lazy(() => import('./containers/DemoTab/DemoTab'));
const DemoDialog = React.lazy(() => import('./containers/DemoDialog/DemoDialog'));
const LoginController = React.lazy(() => import('./containers/Login'));

const Root: React.FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {/* <FleetHeader /> */}
        <DemoDashboardNav />

        <main>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path={RoutePath.login} component={LoginController} />
              <Route path={RoutePath.demoDialog} component={DemoDialog} />
              <Route path={RoutePath.demoDrawer} component={DemoRightDrawer} />
              <Route path={RoutePath.demoTab} component={DemoTab} />
              <Route path={RoutePath.demoWidget} component={DemoWidget} />
              <Redirect from={RoutePath.baseRoute} to={RoutePath.demoWidget} />
            </Switch>
          </React.Suspense>
        </main>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default Root;
