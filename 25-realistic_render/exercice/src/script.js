import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'


/**
 * Loaders
 */
const gltfLoader = new GLTFLoader();
const cubeTextureLoader = new THREE.CubeTextureLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/draco/');
gltfLoader.setDRACOLoader(dracoLoader);

gltfLoader.load(
	'/models/Duck/glTF-Draco/Duck.gltf',
	(gltf) => {
		// while(gltf.scene.children.length) {
		// 	scene.add(gltf.scene.children[0])
		// }
		scene.add(gltf.scene)
	},
)
/**
 * Base
 */
// Debug
const gui = new dat.GUI()
const debugObject = {}

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * update all materials
 */
const updateAllMaterials = () => {
	scene.traverse((child) => {
		if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
			// child.material.envMap = environmentMap;
			child.material.envMapIntensity = debugObject.envMapIntensity;
			child.castShadow = true;
			child.receiveShadow = true;
		}
	})
}

/**
 * Environment map
 */
const environmentMap = cubeTextureLoader.load([
	'/textures/environmentMaps/3/px.jpg',
	'/textures/environmentMaps/3/nx.jpg',
	'/textures/environmentMaps/3/py.jpg',
	'/textures/environmentMaps/3/ny.jpg',
	'/textures/environmentMaps/3/pz.jpg',
	'/textures/environmentMaps/3/nz.jpg',
])
environmentMap.encoding = THREE.sRGBEncoding
scene.background = environmentMap;
scene.environment = environmentMap
debugObject.envMapIntensity = 5;
gui.add(debugObject, 'envMapIntensity').min(0).max(10).step(0.001).onChange(updateAllMaterials)
/**
 * Models
 */
gltfLoader.load(
	'/models/hamburger.glb',
	(gltf) => {
		gltf.scene.scale.set(0.3, 0.3, 0.3);
		gltf.scene.position.set(0, -2, 0);
		scene.add(gltf.scene)

		gui.add(gltf.scene.rotation, 'y').min(-Math.PI).max(Math.PI).step(0.001).name('rotation')

		updateAllMaterials();
	}
)

/**
 * Lights
 */
const directionalLights = new THREE.DirectionalLight('#ffffff', 3);
directionalLights.position.set(0.25, 3, -2.25);
directionalLights.castShadow = true;
directionalLights.shadow.camera.far = 15;
directionalLights.shadow.mapSize.set(1024, 1024);
// directionalLights.shadow.normalBias = 0.10
scene.add(directionalLights);

// const directionalLightsCameraHelper = new THREE.CameraHelper(directionalLights.shadow.camera);
// scene.add(directionalLightsCameraHelper);

gui.add(directionalLights, 'intensity').min(0).max(10).step(0.001).name('lightIntensity');
gui.add(directionalLights.position, 'x').min(-5).max(5).step(0.001).name('lightX');
gui.add(directionalLights.position, 'y').min(-5).max(5).step(0.001).name('lightY');
gui.add(directionalLights.position, 'z').min(-5).max(5).step(0.001).name('lightZ');

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(4, 1, - 4)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
	antialias: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.physicallyCorrectLights = true;
renderer.outputEncoding = THREE.sRGBEncoding
renderer.toneMapping = THREE.ReinhardToneMapping
renderer.toneMappingExposure = 3
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFShadowMap

gui.add(renderer, 'toneMapping', {
	No: THREE.NoToneMapping,
	Linear: THREE.LinearToneMapping,
	Reinhard: THREE.ReinhardToneMapping,
	Cineon: THREE.CineonToneMapping,
	ACESFilmic: THREE.ACESFilmicToneMapping
})

gui.add(renderer, 'toneMappingExposure').min(0).max(10).step(0.001).name('tonemapping exposure')
/**
 * Animate
 */
const tick = () =>
{
    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()