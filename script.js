const jumbotron = document.querySelector(".jumbotron");
let jumbotronW = jumbotron.getBoundingClientRect().width;
let jumbotronH = jumbotron.getBoundingClientRect().height;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, jumbotronW / jumbotronH, 0.1, 1000);
camera.position.z = 150;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(jumbotronW, jumbotronH);
jumbotron.appendChild(renderer.domElement);

const sphere = [];
const redSphereG = new THREE.SphereGeometry(7);
const redSphereM = new THREE.MeshLambertMaterial({color: 0xff0000, wireframe: true});

const greenSphereG = new THREE.SphereGeometry(7);
const greenSphereM = new THREE.MeshLambertMaterial({color: 0x00ff00, wireframe: true});

const blueSphereG = new THREE.SphereGeometry(7);
const blueSphereM = new THREE.MeshLambertMaterial({color: 0x0000ff, wireframe: true});

function addSphere()
{
    for(let i = 0; i < 70; i++)
    {
        let randomChoice = Math.round(Math.random() * (3 - 0) + 0);
        if(randomChoice == 1 || randomChoice == 0)
        {
            sphere[i] = new THREE.Mesh(redSphereG, redSphereM);
        }
        else if(randomChoice == 2)
        {
            sphere[i] = new THREE.Mesh(greenSphereG, greenSphereM);
        }
        else if(randomChoice == 3)
        {
            sphere[i] = new THREE.Mesh(blueSphereG, blueSphereM);
        }

        sphere[i].position.x = (Math.random() - 0.5) * 400;
        sphere[i].position.y = (Math.random() - 0.5) * 300;
        sphere[i].position.z = (Math.random() - 0.5) * 100;
        scene.add(sphere[i]);
    }
}

function posSphere()
{
    for(let i = 0; i < 70; i++)
    {
        sphere[i].position.x += -0.01;
        sphere[i].rotation.y += 0.01;
        sphere[i].rotation.x += 0.01;
    }
}

addSphere();

// const directionalLightBackUp = new THREE.DirectionalLight(0xffffff, 0.7);
// directionalLightBackUp.position.set(0, 2, 5);
// scene.add(directionalLightBackUp);

const directionalLightBack = new THREE.DirectionalLight(0xffffff, 0.7);
directionalLightBack.position.set(0, 0, 5);
scene.add(directionalLightBack);

// const directionalLightFrontDown = new THREE.DirectionalLight(0xffffff, 0.7);
// directionalLightFrontDown.position.set(0, -2, 0);
// scene.add(directionalLightFrontDown);

// const lightFront = new THREE.PointLight();
// lightFront.position.set(2, 1, 3);
// scene.add(lightFront);

// const lightBack = new THREE.PointLight();
// lightBack.position.set(-2, -1, 7);
// scene.add(lightBack);

function animate()
{
    requestAnimationFrame(animate);

    posSphere();

    renderer.render(scene, camera);
}

animate();