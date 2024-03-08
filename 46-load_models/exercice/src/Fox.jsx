import { useAnimations, useGLTF } from '@react-three/drei'
import { useEffect } from 'react'

function Fox() {
	const fox = useGLTF('./Fox/glTF/Fox.gltf')
	const animations = useAnimations(fox.animations, fox.scene)

	useEffect(() => {
		const action = animations.actions.Run
		action.play()
	}, [])
	return (
		<>
			<primitive object={fox.scene} scale={0.02} position={[ -2.5, 0, 2.5 ]} />
		</>
	)
}

export default Fox