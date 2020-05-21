import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// Do Code-Splitting
// https://reactjs.org/docs/code-splitting.html
const HyreCar = React.lazy(() => import('./HyreCar/Root'));

const App: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/hyrecar" component={HyreCar} />
        <Redirect from="/" to="/hyrecar" />
      </Switch>
    </React.Suspense>
  );
};

export default App;
