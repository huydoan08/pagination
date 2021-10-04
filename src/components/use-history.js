import { useHistory } from "react-router-dom";
export default function UseHistoryHook() {
	const history = useHistory();
	return < div>
		<h1>Usehistory hook component</h1>
		<button onClick={() => history.push("/hi")} >Go to another page</button>
	</div>
	}