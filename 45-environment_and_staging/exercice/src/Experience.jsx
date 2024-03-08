import { useFrame } from '@react-three/fiber'
import {  Lightformer, Environment, Sky, ContactShadows, RandomizedLight, AccumulativeShadows, SoftShadows, useHelper, OrbitControls, Stage } from '@react-three/drei'
import { useRef } from 'react'
import { Perf } from 'r3f-perf'
import * as THREE from 'three'

export default function Experience() {
	const directionalLight = useRef()
	useHelper(directionalLight, THREE.DirectionalLightHelper, 1)

	const cube = useRef()
	const sunPosition = 2;

	useFrame((state, delta) => {
		// const time = state.clock.elapsedTime
		// cube.current.position.x = 2 + Math.sin(time)
		cube.current.rotation.y += delta * 0.2
	})

	return <>

		{/* <Environment
			// background
			preset="sunset"
			ground={ { // make the objects like if there were on the ground
				height: 7,
				radius: 28,
				scale: 100
			}}
			// resolution={ 32 } // good for perfomances to lower the resolution if we cant see the background
			// files={ 
				// './environmentMaps/the_sky_is_on_fire_2k.hdr'
				// [
				// './environmentMaps/2/px.jpg',
				// './environmentMaps/2/nx.jpg',
				// './environmentMaps/2/py.jpg',
				// './environmentMaps/2/ny.jpg',
				// './environmentMaps/2/pz.jpg',
				// './environmentMaps/2/nz.jpg',
			// ] 
		// }
		> */}
		{/* <color args={ [ '#000000' ] } attach="background" />
		<Lightformer
			position-z={ -5 }
			scale={ 10 }
			color="red"
			intensity={ 10 }
			form="ring"
		/> */}
		{/* <mesh position-z={ -5 } scale={ 10 }>
			<planeGeometry />
			<meshBasicMaterial color={ [ 100, 0, 0 ] } />
		</mesh> */}
		{/* </Environment> */}

		{/* <SoftShadows
			frustum={ 3.75 }
			size={ 0.005 }
			near={ 9.5 }
			samples={ 17 }
			rings={ 11 }
 		/> */}

		<color args={['ivory']} attach="background" />

		<Perf position="top-left" />

		<OrbitControls makeDefault />

		{/* <ContactShadows
			position={ [ 0, 0, 0 ] }
			scale={ 10 }
			resolution={ 128 }
			far={ 5 }
			color={ "#4b2709" }
			opacity={ 0.4 }
			blur={ 2.8 }
			frames={ 1 }
		/> */}

		{/* <AccumulativeShadows // not great for animated objects
			position={ [ 0, -0.99, 0 ] }
			scale={ 10 }
			color="#316d39"
			opacity={ 0.8 }
			frames={ Infinity }
			temporal
			blend={ 100 }
		>
			<RandomizedLight
				amount={ 8 }
				radius={ 1 }
				ambient={ 0.5 }
				intensity={ 1 }
				position={ [ 1, 2, 3 ] }
				bias={ 0.001 }
			/>
		</AccumulativeShadows> */}

		{/* <directionalLight
			ref={directionalLight}
			castShadow
			position={ sunPosition }
			intensity={1.5}
			shadow-mapSize={[1024 * 2, 1024 * 2]}
			shadow-camera-near={1}
			shadow-camera-far={10}
			shadow-camera-top={5}
			shadow-camera-right={5}
			shadow-camera-bottom={- 5}
			shadow-camera-left={- 5}

		/> */}
		
		{/* <ambientLight intensity={0.5} /> */}

		{/* <Sky sunPosition={ sunPosition }/> */}

		<Stage
			shadows={ { type: 'contact', opacity: 0.2, blur: 3 } }
			environment="sunset"
			preset="portrait"
		>
		<mesh castShadow position-y={ 1 } position-x={- 2}>
			<sphereGeometry />
			<meshStandardMaterial color="orange" envMapIntensity={ 3.5 } />
		</mesh>

		<mesh castShadow ref={cube} position-y={ 1 } position-x={2} scale={1.5} envMapIntensity={ 3.5 } >
			<boxGeometry />
			<meshStandardMaterial color="mediumpurple" />
		</mesh>
		</Stage>

		{/* <mesh position-y={0} rotation-x={- Math.PI * 0.5} scale={10} envMapIntensity={ 3.5 } >
			<planeGeometry />
			<meshStandardMaterial color="greenyellow" />
		</mesh> */}

	</>
}