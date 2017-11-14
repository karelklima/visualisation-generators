import React, { Component } from 'react';

import {
  Typography,
  Button,
  Grid,
  Paper,
  TextField,
  withStyles
} from 'material-ui';

import getExperimentMarkup from './getExperimentMarkup';

class Experiments extends Component {
  constructor() {
    super();
    this.state = {
      id: '1',
      urls: 'https://linked.opendata.cz/ldcp/resource/ldvm/dataset/nkod-dcterms/template',
      experimentMarkup: getExperimentMarkup('1', 'https://linked.opendata.cz/ldcp/resource/ldvm/dataset/nkod-dcterms/template')
    };
  }

  update = (stateChange) => {
    const currentState = { ...this.state, ...stateChange };
    const experimentMarkup = getExperimentMarkup(currentState.id, currentState.urls);
    this.setState({ ...stateChange, experimentMarkup });
    return true;
  }

  render = () => (
    <div style={{ padding: 20 }}>
      <Grid container spacing={40}>
        <Grid item xs={12}>
          <Typography type="headline" color="inherit">
            Experiments generator
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography type="title" color="inherit">
            SETUP
          </Typography>
          <TextField
            id="name"
            label="Experiment ID"
            className="name"
            value={this.state.id}
            onChange={(e) => this.update({ id: e.target.value })}
            margin="normal"
            fullWidth
          /><br/><br/>
          <TextField
            label="URLs (one per line)"
            value={this.state.urls}
            onChange={(e) => this.update({ urls: e.target.value })}
            multiline
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Typography type="title" color="inherit">
            TTL
          </Typography>
          <textarea className="code"
            value={this.state.experimentMarkup}
            onClick={(e) => { e.target.focus(); e.target.select(); }}
            readOnly>
          </textarea>
        </Grid>
      </Grid>
    </div>
  );
}

export default Experiments;