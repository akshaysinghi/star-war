import React from "react";
import { Route } from "react-router";
import Login from "./containers/Login";
import Dashboard from "./containers/Dashboard";

export default () => {
	return (
		<Route>
			<Route exact path={'/'} component={Login} />
			<Route path="/dashboard" component={Dashboard} />
		</Route>
	);
};
