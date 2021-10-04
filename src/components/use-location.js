import { useLocation } from "react-router-dom";
export default function UseLocationHook() {
	const location = useLocation();
	console.log(location.pathname)
	const atLocationPage = location.pathname === '/uselocationhook';
	return atLocationPage && < div>
		<h1>UseLocation hook component {location.pathname}</h1>
	</div>
	}