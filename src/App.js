import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import HelmetContainer from './HelmetSeo/HelmetContainer.js';

import Hello from './Components/Hello.js';
import Error404 from './Components/Error404.js';

function App({title, tags}) {
  return (
    <>
    <HelmetContainer title={title} tags={tags}/>
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Hello} />
          <Route exact path="/Home" component={Hello} />
          <Route component={Error404}/>
        </Switch>
      </div>
    </Router>
    </>
  );
}

const mapState = state => ({
  title:state.seo.title,
  tags:state.seo.tags
})
export default connect(mapState)(App);
