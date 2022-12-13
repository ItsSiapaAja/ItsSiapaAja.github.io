const THREE = require("./three");

module.exports = function SphereBackground(scene)
{
    const sphere = [];
    const redSphereG = new THREE.SphereGeometry(7);
    const redSphereM = new THREE.MeshLambertMaterial({color: 0xff0000, wireframe: true});

    const greenSphereG = new THREE.SphereGeometry(7);
    const greenSphereM = new THREE.MeshLambertMaterial({color: 0x00ff00, wireframe: true});

    const blueSphereG = new THREE.SphereGeometry(7);
    const blueSphereM = new THREE.MeshLambertMaterial({color: 0x0000ff, wireframe: true});

    this.addSphere = () => {
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

            sphere[i].position.x = (Math.random() - 0.5) * 300;
            sphere[i].position.y = (Math.random() - 0.5) * 300;
            sphere[i].position.z = (Math.random() - 0.5) * 100;
            scene.add(sphere[i]);
        }
    };

    this.doAnimate = () => {
        sphere.forEach((sp) => {
            sp.rotation.y += 0.01;
            sp.rotation.x += 0.01;
        });
    };

    this.removeSphere = () => {
        sphere.forEach((sp) => {
            scene.remove(sp);
        });
    }
}