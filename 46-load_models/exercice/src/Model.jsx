import { Clone, useGLTF } from '@react-three/drei'

function Model() {
	const model = useGLTF('./hamburger-draco.glb')
	return (
		<>
			<Clone object={model.scene} scale={0.35} position-x={ 0 } />
		</>
	)
}

useGLTF.preload('./hamburger-draco.glb')

export default Model