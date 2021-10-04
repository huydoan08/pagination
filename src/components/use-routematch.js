import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Topic from "./Topic";
export default function UseRouteMatchHook() {
  const { url, path } = useRouteMatch();
  return (
    <div>
      <ul className="flex">
        <li className="mr-10">
          <Link to={`${url}/rendering`}>rendering</Link>
        </li>
        <li>
          <Link to={`${url}/renderingtwo`}>rendering two</Link> 
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
		<Route path={`${path}/:slug`}>
          <Topic/>
        </Route>
      </Switch>
    </div>
  );
}
