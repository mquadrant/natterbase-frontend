import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import "../App.css";
import Header from "./../components/Header";

const DashboardPage = lazy(() =>
  import("../containers/Dashboard/DashboardPage")
);
const SettingPage = lazy(() => import("../containers/Settings/SettingPage"));

export default function AppRoutes() {
  return (
    <React.Fragment>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/app/dashboard" component={DashboardPage} />
          <Route path="/app/settings" component={SettingPage} />
        </Switch>
      </Suspense>
    </React.Fragment>
  );
}
