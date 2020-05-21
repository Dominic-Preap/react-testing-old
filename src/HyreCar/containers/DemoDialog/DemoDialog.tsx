import * as React from 'react';

import { FlatButton } from 'HyreCar/components/Button';
import { Dialog } from 'HyreCar/components/Dialog';

export default class DemoDialog extends React.Component {
  state = { open: false };

  handleClickOpen = () => this.setState({ open: true });

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 100 }}>
        <FlatButton onClick={this.handleClickOpen}>Open dialog</FlatButton>

        <Dialog
          title=" Are you sure you want to exit?"
          contentText="You may lose some of your progress. It only takes a few minutes to finish listing your cars."
          open={this.state.open}
          cancelText="Cancel"
          onCancel={this.handleClose}
          confirmText="Yes, Exit"
          onConfirm={this.handleClose}
        />
      </div>
    );
  }
}
