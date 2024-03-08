import { useThree, extend, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import CustomObject from './CustomObject';

extend({ OrbitControls: OrbitControls })

function Experience() {
	const three = useThree()
	const cubeRef = useRef()
	const groupRef = useRef()


	useFrame((state, delta) => {
		// const angle = state.clock.elapsedTime
		// state.camera.position.x = Math.sin(angle) * 8
		// state.camera.position.z = Math.cos(angle) * 8
		// state.camera.lookAt(0, 0, 0)

		cubeRef.current.rotation.y += delta
	})

	return (
		<>
			<orbitControls args={  [ three.camera,  three.gl.domElement ] }/>

			<directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
			<ambientLight intensity={ 0.5 } />

			<group ref={groupRef} >
				<mesh position-x={-2} scale={1}>
					<sphereGeometry scale={1.5} />
					<meshStandardMaterial color="orange" />
				</mesh>
				<mesh ref={cubeRef}rotation-y={Math.PI * 0.23} position-x={2} scale={1.5}>
					<boxGeometry scale={1.5} />
					<meshStandardMaterial color="mediumpurple" />
				</mesh>
			</group>

			<mesh rotation-x={- Math.PI * 0.5} position-y={-1} scale={10}>
				{/* <sphereGeometry args={ [ 1.5, 32, 32 ] } /> */}
				<planeGeometry scale={5} />
				<meshStandardMaterial color="greenyellow" />
			</mesh>

			<CustomObject />
		</>
	)
}

export default Experience