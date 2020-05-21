import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import makeStyles from '@material-ui/core/styles/makeStyles';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { Tabs } from 'HyreCar/components/Tabs';

import { DemoTabTooltip } from './DemoTabTooltip';

// import { RoutePath } from 'HyreCar/Enums/RoutePath';

const useStyles = makeStyles(theme => ({
  container: {
    margin: '0 auto',
    maxWidth: '90%',
    padding: '50px 0 0 50px',

    [theme.breakpoints.down('sm')]: {
      maxWidth: '95%',
      padding: '0 0 0 0'
    },

    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%'
    }
  }
}));

const DemoTab: React.FC<RouteComponentProps> = props => {
  const classes = useStyles();
  const contents = [
    {
      title: 'Listings',
      description: 'Your "Listings" are cars that you have listed on HyreCar to rent to drivers.'
    },
    {
      title: 'In Progress',
      description:
        'In Progress cars are listings that you started and have not finished yet OR are currently in the process of being verified by HyreCar.'
    },
    {
      title: 'Inventory Feed',
      description:
        'Your "On the Lot" is a list of cars that are available for you to list on HyreCar. We pull this data from your Inventory Feed Provider.'
    }
  ];

  const [open, setOpen] = React.useState(false);

  return (
    <div className={classes.container}>
      <Tabs
        tooltipIcon={HelpOutlineIcon}
        tooltipOnclick={() => setOpen(true)}
        tooltipTitle="What's the difference?"
        routes={[
          {
            path: `/listings`,
            title: 'Listings'
          },
          {
            path: `/progress`,
            title: 'In Progress'
          },
          {
            path: `/all`,
            title: 'On the Lot'
          }
        ]}
      />

      <DemoTabTooltip open={open} contents={contents} onClose={() => setOpen(false)} />
    </div>
  );
};

export default DemoTab;
