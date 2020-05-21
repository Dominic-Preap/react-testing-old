import * as React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { BankNote } from 'HyreCar/components/Icon/BankNote';
import { OpenMail } from 'HyreCar/components/Icon/OpenMail';
import { Widget, WidgetElement, WidgetIcon, WidgetList, WidgetListItem } from 'HyreCar/components/Widget';
import { WidgetBarChart } from 'HyreCar/components/Widget/WidgetBarChart';
import { WidgetDonutChart } from 'HyreCar/components/Widget/WidgetDonutChart';
import { WidgetHeader } from 'HyreCar/components/Widget/WidgetHeader';

const barChartData = [
  { name: '30 +', uv: 10, pv: 12 },
  { name: '60 +', uv: 18, pv: 20 },
  { name: '90 +', uv: 30, pv: 27 }
];

const doughnutChartData = [
  // -----
  { name: 'New Rental', value: 39 },
  { name: 'Pre Owned', value: 13 },
  { name: 'Wholesale', value: 21 }
];

const DemoWidget: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  return (
    <Container maxWidth="lg">
      <br />
      <Typography variant="h4" component="h1" gutterBottom>
        Widget Demo
      </Typography>

      <button onClick={() => setLoading(!loading)}>Trigger Loading</button>
      <br />
      <br />

      <Grid container spacing={4} direction="row" justify="flex-start" alignItems="stretch">
        <Grid item xs={12} sm={12} md={8}>
          <Widget>
            <WidgetHeader title="Rental" />
            <WidgetElement loading={loading} value="0" caption="today" md={3} sm={3} />
            <WidgetElement loading={loading} value="6" caption="past 7 days" md={3} sm={3} />
            <WidgetElement loading={loading} value="26" caption="past 30 days" md={3} sm={3} />
            <WidgetElement loading={loading} value="215" caption="year to date" md={3} sm={3} />
          </Widget>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Widget>
            <WidgetHeader title="Action Needed" />
            <WidgetElement loading={loading} value="3" caption="rental requests" sm={6} />
            <WidgetElement loading={loading} value="4" caption="late rentals" sm={6} />
          </Widget>
        </Grid>

        {/* ############################################################################### */}

        <Grid item xs={12} sm={5} md={6}>
          <Widget>
            <WidgetHeader title="Rental Status" />
            <WidgetDonutChart loading={loading} md={6} data={doughnutChartData} />
            <WidgetList md={6}>
              <WidgetListItem loading={loading} caption="New Rental" value="39" />
              <WidgetListItem loading={loading} caption="Pre Owned" value="13" />
              <WidgetListItem loading={loading} caption="Wholesale" value="21" />
              <WidgetListItem loading={loading} caption="Total" value="73" />
            </WidgetList>
          </Widget>
        </Grid>
        <Grid item xs={12} sm={7} md={6}>
          <Widget>
            <WidgetHeader title="Inventory on Lot" />
            <WidgetBarChart
              data={loading ? [] : barChartData}
              md={12}
              pvName="Retail"
              uvName="Wholesale"
              xAxisLabel="Number of Cars"
              yAxisLabel="Days on Lot"
              loading={loading}
            />
          </Widget>
        </Grid>

        {/* ############################################################################### */}

        <Grid item xs={12} sm={6} md={4}>
          <Widget>
            <WidgetHeader title="Rental List" />
            <WidgetElement loading={loading} sm={6} value="6" caption="vehicle (s) to rent" />
            <WidgetElement loading={loading} sm={6} value="30 days" caption="rental duration" />
            <WidgetElement loading={loading} value="$5,400" caption="projected income" md={12} />
          </Widget>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Widget>
            <WidgetHeader title="Wholesale Inventory" />
            <WidgetElement loading={loading} sm={6} value="68" caption="new vehicles" md={12} />
            <WidgetElement loading={loading} sm={6} value="36 Days" caption="average day on lot" md={12} />
          </Widget>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Widget>
            <WidgetHeader title="Rental Activity" />
            <WidgetElement loading={loading} sm={6} value="6" caption="vehicle (s)" />
            <WidgetElement loading={loading} sm={6} value="2" caption="Active Rental" />
            <WidgetElement loading={loading} sm={6} value="2" caption="Drivers" />
            <WidgetElement loading={loading} sm={6} value="560 miles" caption="Total Distances" />
          </Widget>
        </Grid>

        {/* ############################################################################### */}

        <Grid item xs={12} sm={6} md={4}>
          <Widget>
            <WidgetHeader title="Action Required" />
            <WidgetIcon md={3} icon={OpenMail} />
            <WidgetList md={9}>
              <WidgetListItem loading={loading} caption="pending approval" value="6" />
              <WidgetListItem loading={loading} caption="total approval" value="12" />
            </WidgetList>
          </Widget>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Widget>
            <WidgetHeader title="Rental Revenue" />
            <WidgetIcon sm={12} md={3} icon={BankNote} />
            <WidgetList sm={12} md={9}>
              <WidgetListItem loading={loading} value="$174.56" caption="past 3 days" />
              <WidgetListItem loading={loading} value="$349.12" caption="past 7 days" />
              <WidgetListItem loading={loading} value="$3,151.98" caption="past 14 days" />
              <WidgetListItem loading={loading} value="$18,409.09" caption="past 30 days" />
            </WidgetList>
          </Widget>
        </Grid>
      </Grid>
    </Container>
  );
};
export default DemoWidget;
