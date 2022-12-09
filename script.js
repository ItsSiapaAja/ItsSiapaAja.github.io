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
    sphere.forEach((sp) => {
        sp.position.x += -0.01;
        sp.rotation.y += 0.01;
        sp.rotation.x += 0.01;
    })
}

addSphere();

const directionalLightBack = new THREE.DirectionalLight(0xffffff, 0.7);
directionalLightBack.position.set(0, 0, 5);
scene.add(directionalLightBack);

function animate()
{
    requestAnimationFrame(animate);

    posSphere();

    renderer.render(scene, camera);
}

animate();

const smLink = document.querySelectorAll(".socialmedia #show");

smLink.forEach((sm) => {
    sm.addEventListener("click", () => {
        if(sm.className == "scm dc")
        {
            navigator.clipboard.writeText("paran#4130");
        }
        else if(sm.className == "scm gh")
        {
            location.href = "https://github.com/ItsSiapaAja";
        }
        else if(sm.className == "scm yt")
        {
            location.href = "https://www.youtube.com/channel/UCC01wjaHIuqkfmYMnz70baw";
        }
    });
});

const navLink = document.querySelectorAll(".jumbotron ul li");

const about = document.querySelector(".about").getBoundingClientRect().top;
const socialmedia = document.querySelector(".socialmedia").getBoundingClientRect().top;


navLink.forEach((nav) => {
    nav.addEventListener("click", () => {
        if(nav.className == "about-me")
        {
            window.scrollTo({
                top: about,
                behavior: "smooth"
            });
        }
        else if(nav.className == "social-media")
        {
            window.scrollTo({
                top: socialmedia,
                behavior: "smooth"
            });
        }
        else if(nav.className == "home")
        {
            location.reload();
        }
    });
});