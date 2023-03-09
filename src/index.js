import {
    CubeTextureLoader,
    CylinderGeometry,
    Mesh,
    MeshBasicMaterial,
    MeshPhongMaterial,
    PerspectiveCamera,
    PlaneGeometry,
    PointLight,
    Scene,
    TextureLoader,
    TorusGeometry,
    WebGLRenderer,
} from 'three';

import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const getLight = () => {
    return new PointLight(0xFFFFFF, 0.95, 5000);
}

const getCylinder = () => {
    const radiusTop = 30;
    const radiusBottom = 30;
    const height = 20;
    const radialSegments = 6;
    const heightSegments = 2;
    const openEnded = false;  

    const cylinder = new CylinderGeometry(
                radiusTop,
                radiusBottom,
                height,
                radialSegments,
                heightSegments,
                openEnded
            );

    const loader2 = new CubeTextureLoader();

    const materialGlobal = new MeshBasicMaterial({
        color: 0x999999,
        envMapIntensity: 1,
        metalness: 1,
        roughness: 0,
        envMap: loader2.setPath('texture/').load(['1.jpg', '1.jpg', '1.jpg', '1.jpg', '1.jpg', '1.jpg']),
        castShadow: true,
        receiveShadow: true,
    });

    return new Mesh(cylinder, materialGlobal);
}

const getTorus = () => {
    const geometry = new TorusGeometry(50, 3, 20, 100);
    const material = new MeshPhongMaterial({
        color: 0x78DBE2,
    });
    return new Mesh(geometry, material);
}

const getCamera = () => {
    const fov = 50;
    const near = 0.1;
    const far = 3000;
    return new PerspectiveCamera(fov, window.innerWidth / window.innerHeight, near, far);
}

const getFloor = () => {
    const floorGeometry = new PlaneGeometry(5000, 5000, 1, 1);
    const floorMaterial = new MeshPhongMaterial({
        color: 0xffffff
    });

    return new Mesh(floorGeometry, floorMaterial);
}

const scene = new Scene();

const light = getLight();
const cylinder = getCylinder();
const torus = getTorus();
const floor = getFloor();

light.castShadow = true;
light.receiveShadow = true;
cylinder.castShadow = true;
cylinder.receiveShadow = true;
torus.castShadow = true;
torus.receiveShadow = true;
floor.castShadow = true;
floor.receiveShadow = true;

scene.add(light);
scene.add(cylinder);
scene.add(torus);
scene.add(floor);

const camera = getCamera();

const renderer = new WebGLRenderer({ alpha: true, antialias: true, logarithmicDepthBuffer: true});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xFFFFFF, 1);
renderer.shadowMap.enabled = true;
document.querySelector('#root').appendChild(renderer.domElement);

const loader = new TextureLoader();

const materialWood = new MeshBasicMaterial({
    map: loader.load('texture/wood.jpg'),
    castShadow: true,
    receiveShadow: true
});

const materialWood2 = new MeshPhongMaterial({
    color: 0xFFFFFF,
    castShadow: true,
    receiveShadow: true
});

const controls = new OrbitControls(camera, renderer.domElement);

const animate = () => {
    requestAnimationFrame(animate);

    controls.update();
    renderer.render(scene, camera);
}

let door;

const changePosition = () => {
    camera.position.set(-150, 150, 200);

    light.position.set(0, 300, 50);

    cylinder.position.set(0, 20, 0);
    torus.position.set(0, 20, 0);
    door.position.set(0, 50, -100);
    floor.position.set(0, -55, 0);
    floor.rotation.set(300, 0, 0)
}

const fbxLoader = new FBXLoader()

fbxLoader.load('models/door_optimum.fbx', (object) => {
    door = object;

    door.children?.forEach((door, index) => {
        if (index === 0) {
            door.material = materialWood2
        } else {
            door.material = materialWood
        }

        door.castShadow = true;
        door.receiveShadow = true;
    });

    scene.add(door);

    changePosition();
    animate();
});