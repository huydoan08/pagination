import { useParams } from "react-router-dom";
export default function UseParamsHook() {
	const { slug } = useParams();
	return < div>
		<h1>Useparams hook component {slug}</h1>
	</div>
	}