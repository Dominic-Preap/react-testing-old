import * as React from 'react';
import { withRouter as __withRouter } from 'react-router-dom';

/**
 * Custom Decorator of HOC of React Router
 *
 * @see https://dev.to/phillipmalboeuf/simple-steps-to-a-typescript-class-decorator-apd
 */
export function withRouter<C extends React.ComponentClass>(Component: C): C {
  return __withRouter(Component as any) as any;
}
