import { lazy, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { gsap } from "gsap";

function App() {
	const [count, setCount] = useState(0);

	// useEffect(() => {
	// 	gsap.to(".pink", { duration: 1, immediateRender: true, lazy: false, ease: "bounce.out", y: 70 });
	// }, [])

	return (
		<div className="App">
			<div className='logo'>
				<div className="ball"></div>
				<svg xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1000 1000">
					<path class="letterS"
						fill="none" stroke="#FCFCEF" strokeMiterlimit="10" strokeWidth="30"
						d="M 522.00,397.50
						C 516.00,376.50 498.49,357.93 468.00,369.00
						84.80,493.14 843.68,698.04 463.50,844.50
						248.36,891.75 534.00,561.00 601.50,526.50" />

					<path class="letterH" fill="none" stroke="#FCFCEF" strokeMiterlimit="10" strokeWidth="30"
						d="M 619.50,304.50
						C 606.00,358.50 607.91,840.15 618.00,838.50
						  638.49,481.32 832.20,503.83 813.00,838.50" />
				</svg>
			</div>
			{/* <button onClick={() => setCount(count => count + 1)}>Click</button>
			<p>counter : {count} </p> */}
		</div >
	)
}

export default App
