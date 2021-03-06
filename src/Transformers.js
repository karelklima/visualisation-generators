import React, { Component } from 'react';

import {
  Typography,
  Button,
  Grid,
  Paper,
  TextField,
  withStyles
} from 'material-ui';

import getTransformerMarkup from './getTransformerMarkup';

const transformerDefaults = {
  id: 'dce-to-dcterms-title',
  inputVocabulary: 'Dublin Core elements',
  inputPredicate: 'title',
  outputVocabulary: 'Dublin Core terms',
  outputPredicate: 'title',
  query: `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX dce: <http://purl.org/dc/elements/1.1/>
PREFIX dct: <http://purl.org/dc/terms/>

DELETE {
  ?s dce:title ?title .
}
INSERT {
  ?s dct:title ?title .
} 
WHERE {
  ?s dce:title ?title .
}`,
  descriptor: `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX time: <http://www.w3.org/2006/time#>

ASK {
  ?s dct:issued ?dateTime .
}`
}

class Transformers extends Component {
  constructor() {
    super();
    this.state = {
      ...transformerDefaults,
      transformerMarkup: getTransformerMarkup(transformerDefaults)
    };
  }

  update = (stateChange) => {
    const currentState = { ...this.state, ...stateChange };
    const transformerMarkup = getTransformerMarkup(currentState);
    this.setState({ ...stateChange, transformerMarkup });
    return true;
  }

  render = () => (
    <div style={{ padding: 20 }}>
      <Grid container spacing={40}>
        <Grid item xs={12}>
          <Typography type="headline" color="inherit">
            Transformers generator
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography type="title" color="inherit">
            SETUP
          </Typography>
          <TextField
            id="name"
            label="ID"
            value={this.state.id}
            onChange={(e) => this.update({ id: e.target.value })}
            margin="normal"
            fullWidth
          /><br/><br/>
          <TextField
            id="name"
            label="Input vocabulary"
            value={this.state.inputVocabulary}
            onChange={(e) => this.update({ inputVocabulary: e.target.value })}
            margin="normal"
            fullWidth
          /><br/><br/>
          <TextField
            id="name"
            label="Input predicate"
            value={this.state.inputPredicate}
            onChange={(e) => this.update({ inputPredicate: e.target.value })}
            margin="normal"
            fullWidth
          /><br/><br/>
          <TextField
            id="name"
            label="Output vocabulary"
            value={this.state.outputVocabulary}
            onChange={(e) => this.update({ outputVocabulary: e.target.value })}
            margin="normal"
            fullWidth
          /><br/><br/>
          <TextField
            id="name"
            label="Output predicate"
            value={this.state.outputPredicate}
            onChange={(e) => this.update({ outputPredicate: e.target.value })}
            margin="normal"
            fullWidth
          /><br/><br/>
          <TextField
            label="Query"
            value={this.state.query}
            onChange={(e) => this.update({ query: e.target.value })}
            multiline
            fullWidth
          /><br/><br/>
          <TextField
            label="Descriptor"
            value={this.state.descriptor}
            onChange={(e) => this.update({ descriptor: e.target.value })}
            multiline
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Typography type="title" color="inherit">
            TTL
          </Typography>
          <textarea className="code"
            value={this.state.transformerMarkup}
            onClick={(e) => { e.target.focus(); e.target.select(); }}
            readOnly>
          </textarea>
        </Grid>
      </Grid>
    </div>
  );
}

export default Transformers;