import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Calendar from 'assets/icons/calendar-white.svg';
import Car from 'assets/icons/dashboard-car-white.svg';
import Home from 'assets/icons/dashboard-white.svg';
import DollarSign from 'assets/icons/dollar-sign-white.png';
import Message from 'assets/icons/message-white.svg';
import Help from 'assets/icons/question-white.svg';
import Settings from 'assets/icons/settings-white.svg';
import { Sidebar, SidebarButton } from 'HyreCar/components/Sidebar';
import { RoutePath } from 'HyreCar/Enums/RoutePath';
import { withRouter } from 'utils';

interface DashboardMenu {
  buttonText: string;
  img: string;
  path: string;
  pathnames: string[];
}

const menus: DashboardMenu[] = [
  {
    buttonText: 'Dashboard',
    img: Home,
    path: RoutePath.demoWidget,
    pathnames: [RoutePath.demoWidget]
  },
  {
    buttonText: 'Rentals',
    img: Calendar,
    path: RoutePath.demoDrawer,
    pathnames: [RoutePath.demoWidget]
  },
  {
    buttonText: 'Listings',
    img: Car,
    path: RoutePath.demoTab,
    pathnames: [RoutePath.demoTab]
  },
  {
    buttonText: 'Transactions',
    img: DollarSign,
    path: RoutePath.demoDialog,
    pathnames: [RoutePath.demoDialog]
  },
  {
    buttonText: 'Inbox',
    img: Message,
    path: '/demo/inbox',
    pathnames: ['/demo/inbox']
  },
  {
    buttonText: 'Resources',
    img: Help,
    path: '/demo/resources',
    pathnames: ['/demo/resources']
  },
  {
    buttonText: 'Settings',
    img: Settings,
    path: '/demo/settings',
    pathnames: ['/demo/settings']
  }
];

@withRouter
export class DemoDashboardNav extends React.PureComponent {
  get injected() {
    return this.props as RouteComponentProps;
  }

  render() {
    const { pathname } = this.injected.location;

    return (
      <Sidebar>
        {menus.map((x, i) => (
          <SidebarButton
            key={i}
            path={x.path}
            pathname={pathname}
            pathnames={x.pathnames}
            text={x.buttonText}
            img={x.img}
          />
        ))}
      </Sidebar>
    );
  }
}
