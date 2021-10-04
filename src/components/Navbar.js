import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from './themecontext';

export default function Navbar() {

	// load themecontext
	const { theme } = useContext(ThemeContext)

	const { isLightTheme, light, dark } = theme

	const style = isLightTheme ? light : dark
  return (
    <div style={style}>
      <ul className="flex ml-10">
        <Link to="/home">
          <li className="ml-10">Home</li>
        </Link>
        <Link to="/usehistoryhook">
          <li className="ml-10">Usehistory</li>
        </Link>
        <Link to="/useparamshook/:slug">
          <li className="ml-10">Useparamshook</li>
        </Link>
        <Link to="/uselocationhook">
          <li className="ml-10">Uselocationhook</li>
        </Link>
        <Link to="/useroutematchhook">
          <li className="ml-10">useroutematchhook</li>
        </Link>
        <Link to="/usereducerhook">
          <li className="ml-10">usereducerhook</li>
        </Link>
        <Link to="/useeffecthook">
          <li className="ml-10">useeffecthook</li>
        </Link>
        <Link to="/table">
          <li className="ml-10">table</li>
        </Link>
        <Link to="/hookform">
          <li className="ml-10">HookForm</li>
        </Link>
      </ul>
    </div>
  );
}
