import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid
} from 'material-ui';
import Experiments from './Experiments';
import Transformers from './Transformers';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Typography type="title" color="inherit">
                Generators&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Typography>
              <Button color="contrast" component={Link} to="/experiments">
                Experiments
              </Button>
              <Button color="contrast" component={Link} to="/transformers">
                Transformers
              </Button>
            </Toolbar>
          </AppBar>
          <Route exact path="/">
            <Redirect to="/experiments"/>
          </Route>
          <Route path="/experiments" component={Experiments}/>
          <Route path="/transformers" component={Transformers}/>
        </div>
      </Router>
    );
  }
}

export default App;
