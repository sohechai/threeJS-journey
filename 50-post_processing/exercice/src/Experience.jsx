import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import {  SSR, DepthOfField, Bloom,  Noise, Glitch, Vignette, EffectComposer } from '@react-three/postprocessing'
import  { GlitchMode, BlendFunction } from 'postprocessing'


export default function Experience()
{
    return <>

		<color args={ [ '#ffffff' ] } attach="background" />

		<EffectComposer >
			{/* <Vignette 
				offset={ 0.3 }
				darkness={ 0.9 }
				blendFunction={ BlendFunction.NORMAL }
			/> */}
			{/* <Glitch 
				delay={ [ 0.5, 1 ] }
				duration={ [ 0.1, 0.3 ] }
				strength={ [ 0.2, 0.4 ] }
				mode={ GlitchMode.CONSTANT_WILD }
			/> */}
			{/* <Noise
				premultiply
				blendFunction={ BlendFunction.SOFT_LIGHT }
			/> */}
			{/* <Bloom
				mipmapBlur
				intensity={ 0.1 }
				luminanceThreshold={ 0 }
			/> */}
			{/* <DepthOfField 
				focusDistance={ 0.025 }
				focalLengt={ 0.025 }
				bokehScale={ 6 }
			/> */}
			{/* <SSR 
				
			/> */}
			


		</EffectComposer>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <mesh castShadow position-x={ - 2 }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>

        <mesh castShadow position-x={ 2 } scale={ 1.5 } >
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}