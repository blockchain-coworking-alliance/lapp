import React, { Component } from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Navbar from './components/navbar';
import Footer from './components/footer';

import Lapps from './containers/Lapps';
import About from './containers/About';
import Detail from './containers/Detail';
import Category from './containers/Category';
import Tag from './containers/Tag';

import { getAllItems } from './actions/ActionCreator';

class App extends Component {
  componentDidMount() {
    this.props.getAllItems();
  }

  render() {
    return (
      <Router>
        <div style={{ paddingLeft: '0.5em', paddingRight: '0.5em'}}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Lapps} />
            <Route exact path="/lapps" component={Lapps} />
            <Route exact path="/about" component={About} />

            <Route exact path="/lapps/category/:_category" component={Category} />
            <Route exact path="/lapps/tags/:_tag" component={Tag} />
            <Route exact path="/lapps/:_lapp" component={Detail} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getAllItems,
    },
    dispatch,
  );
};

export default connect(null, mapDispatchToProps)(App);
