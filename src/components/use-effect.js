import { useEffect, useState } from "react";

export default function UseEffectHook() {
	const [count, setCount] = useState(0)
	const [action, setAction] = useState('')
	useEffect(() => {
		document.title = `you click ${count} time`;
		console.log("useEffect")
	}, [count, action])
	return (
		<div>
			<p>you click {count} time</p>
			<button onClick={() => setCount(count + 1)}>click me</button>
			<button onClick={() => setAction('user')}>user</button>
			<button onClick={() => setAction('comment')}>comment</button>
		</div>
	)
}