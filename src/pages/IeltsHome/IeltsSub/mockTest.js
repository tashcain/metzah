import React from "react";
import PassageMockTest from "../layouts/passageMockTest";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Stopwatch from "../layouts/stopwatch";
import ListeningMockTest from "../layouts/listeningMockTest";
import WritingMockTest from "../layouts/writingMocktest";

function MockTest() {
  return (
    <div className="page-content">
      <Stopwatch />
      {/* <PassageMockTest /> */}
      <Router>
        <div>
          <Switch>
            <Route path="/mockTest" exact component={PassageMockTest} />
            <Route
              path="/mockTest/listeningMockTest"
              exact
              component={ListeningMockTest}
            />
            <Route
              path="/mockTest/writingMockTest"
              exact
              component={WritingMockTest}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default MockTest;
