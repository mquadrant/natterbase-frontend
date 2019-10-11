import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const HomePage = lazy(() => import("./containers/HomePage/HomePage"));
const AppRoutes = lazy(() => import("./routes/appRoutes"));

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/app" component={AppRoutes} />
          </Switch>
        </Suspense>
      </Router>
    </React.Fragment>
  );
};

export default App;
