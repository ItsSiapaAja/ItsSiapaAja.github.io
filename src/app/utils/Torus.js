const THREE = require("./three");

module.exports = function TorusNormalBackground(scene) {
    const torusG = new THREE.TorusGeometry(7, 4, 30, 79);
    const torusM = new THREE.MeshNormalMaterial({wireframe: true});

    this.torus = new THREE.Mesh(torusG, torusM);

    this.addTorus = () => {
        this.torus.position.set(0, 0, 0);
        scene.add(this.torus);
    };

    this.doAnimate = () => {
        this.torus.rotation.x += 0.01;
        this.torus.rotation.y += 0.01;
    };

    this.removeTorus = () => {
        scene.remove(this.torus);
    };
}