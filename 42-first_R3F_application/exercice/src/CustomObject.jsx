import * as THREE from 'three'
import { useEffect, useRef, useMemo } from 'react'

function CustomObject() {
	const verticesCounts = 10 * 3
	const geometryRef = useRef()

	const positions = useMemo(() => {
		const positions = new Float32Array(verticesCounts * 3)

		for (let i = 0; i < verticesCounts * 3; i++) {
			positions[i] = (Math.random() - 0.5) * 3
		}
		return positions
	}, [])

	useEffect(() => {
		geometryRef.current.computeVertexNormals()
	}, [])

	return (
		<mesh>
			<bufferGeometry ref={ geometryRef }>
				<bufferAttribute
					attach="attributes-position"
					count={verticesCounts}
					itemSize={3}
					array={positions}
				/>
			</bufferGeometry>
			<meshStandardMaterial color="red" side={THREE.DoubleSide} />
		</mesh>
	)
}

export default CustomObject