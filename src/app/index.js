const SphereBackground = require("./utils/Sphere");
const TerrainBackground = require("./utils/Terrain");
const TorusNormalBackground = require("./utils/Torus");
const SocialMedia = require("./utils/SocialMedia");
const Navigator = require("./utils/Navigator");
const THREE = require("./utils/three");

const jumbotron = document.querySelector(".jumbotron");
let jumbotronW = jumbotron.getBoundingClientRect().width;
let jumbotronH = jumbotron.getBoundingClientRect().height;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, jumbotronW / jumbotronH, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(jumbotronW, jumbotronH);
jumbotron.appendChild(renderer.domElement);

// Begin here ////////////////////////////////

const sphere = new SphereBackground(scene);
const plane = new TerrainBackground(scene, "../img/height.png");
const torus = new TorusNormalBackground(scene);

const next = document.querySelector(".jumbotron .wrap #right");
const previous = document.querySelector(".jumbotron .wrap #left");
 
function ChangeBackground()
{
    let background = 1;
    let range = 3;
    this.display = () => {
        if(background == 1)
        {
            camera.position.z = 10;
            camera.position.y = 0;

            sphere.removeSphere();
            plane.removeTerrain();

            torus.addTorus();
        }
        else if(background == 2)
        {
            camera.position.y = 0;
            camera.position.z = 150;

            plane.removeTerrain();
            torus.removeTorus();

            sphere.addSphere();
        }
        else if(background == 3)
        {
            camera.position.y = -10;
            camera.position.z = 0;

            sphere.removeSphere();
            torus.removeTorus();

            plane.addTerrain();
        }
    };

    this.animate = () => {
        if(background == 1)
        {
            torus.doAnimate();
        }
        else if(background == 2)
        {
            sphere.doAnimate();
        }
        else if(background == 3)
        {
            plane.doAnimate();
        }
    }

    this.click = () => {
        next.addEventListener("click", () => {
            previous.classList.add("show");
            background++;
            if(background == range) next.classList.remove("show");
            this.display();
        });
        previous.addEventListener("click", () => {
            next.classList.add("show");
            background--;
            if(background == 1) previous.classList.remove("show");
            this.display();
        });
    }
}

const bg = new ChangeBackground();
bg.click();
bg.display();

/////////////////////////////////////////////

const directionalLightBack = new THREE.DirectionalLight(0xffffff, 0.7);
directionalLightBack.position.set(0, 0, 5);
scene.add(directionalLightBack);

function animate()
{
    requestAnimationFrame(animate);

    // Animate
    bg.animate();

    renderer.render(scene, camera);
    camera.updateProjectionMatrix();
}

animate();

SocialMedia();
Navigator();
