import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF } from '@react-three/drei'

export default function Experience() {
	const computer = new useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

	return <>

		<Environment preset='city' />

		<color args={['#A25ECB']} attach="background" />

		<PresentationControls /* enable to the user to moove only the object inside */
			global /* from anywhere */
			rotation={ [ 0.13, 0.1, 0 ] }
			polar={ [ -0.4, 0.2 ] } /* limit vertical rotation -> min - max */
			azimuth={ [ -1, 0.75 ] } /* slimit horizontal rotation -> min - max */
			config={ { mass: 2, tension: 400 } } /* drag-and-drop configuration -> elastic effect */
			snap={ { mass: 4, tension: 400 } } /* go back to initial position when releasing the object */
		>
			<Float rotationIntensity={0.4} >
				<rectAreaLight 
					width={ 2.5 }
					height={ 1.65 }
					intensity={ 65 }
					color={ 'lightpink' }
					rotation={ [ -0.1, Math.PI, 0 ] }
					position={ [ 0, 0.55, -1.15 ] }
				/>
				<primitive
					object={computer.scene}
					position-y={-1.2}
				>
					<Html
						transform
						wrapperClass='htmlScreen'
						distanceFactor={ 1.17 }
						position={ [ 0, 1.56, -1.4 ] }
						rotation-x={ -0.256 }
					>
						<iframe src="https://sofiahechaichi.vercel.app/" />
					</Html>
				</primitive>
				<Text
					font="./bangers-v20-latin-regular.woff"
					fontSize={ 0.7 }
					position={ [ 2, 0.75, 0.55 ] }
					rotation-y={ -1.25 }
					maxWidth={ 2 }
					textAlign="center"
				>
					SOFIA HECHAÏCHI
				</Text>
			</Float>
		</PresentationControls>

		<ContactShadows
			position-y={ -1.4 }
			opacity={ 0.4 }
			scale={ 5 }
			blur={ 2.4 }
		/>
	</>
}