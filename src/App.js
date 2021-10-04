import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import UseHistoryHook from './components/use-history';
import UseParamsHook from './components/use-params';
import UseLocationHook from './components/use-location';
import UseRouteMatchHook from './components/use-routematch';
import UseReducer from './components/use-reducer';
import ThemeContextProvider from "./components/themecontext";
import UseEffectHook from "./components/use-effect";
import Table from './components/table';
import FormHook from './components/react-form-hook';

function App() {
  return (
	  <ThemeContextProvider>
		  	<Router>
      <div>
        <Navbar />
		<Switch>
		<Route path="/home">
          <Home />
        </Route>
        <Route path="/usehistoryhook">
          <UseHistoryHook/>
        </Route>
        <Route path="/useparamshook/:slug">
          <UseParamsHook />
        </Route>
        <Route path="/uselocationhook">
          <UseLocationHook />
        </Route>
        <Route path="/useroutematchhook">
          <UseRouteMatchHook />
        </Route>
        <Route path="/usereducerhook">
          <UseReducer />
        </Route>
        <Route path="/useeffecthook">
          <UseEffectHook />
        </Route>
        <Route path="/table">
          <Table />
        </Route>
        <Route path="/hookform">
          <FormHook />
        </Route>
		</Switch>
      </div>
    </Router>
	  </ThemeContextProvider>
    
  );
}

export default App;
