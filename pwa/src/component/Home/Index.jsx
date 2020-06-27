import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// core components

import Gallery from './Gallery';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem('token'),
    };
  }
  render() {
    console.log(this.state.token == null);
    if (
      this.state.token == '' ||
      this.state.token == null ||
      this.state.token == 'undefined'
    ) {
      return <Redirect to="/" />;
    }
    return (
      <>
        {/* <Sidebar /> */}
        <BrowserRouter>
          <Switch>
            <Route path="/home/index" component={Gallery} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default Home;
