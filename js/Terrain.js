function TerrainBackground(scene, dir)
{
    this.height = new THREE.TextureLoader().load(dir);

    const planeG = new THREE.PlaneGeometry(200, 200, 60, 60);
    const planeM = new THREE.MeshLambertMaterial({color: 0xafafaf, displacementMap: this.height, displacementScale: 20, wireframe: true});
    const plane = new THREE.Mesh(planeG, planeM);

    const sun = new THREE.PointLight(0xffffff);
    sun.position.set(0, 100, 0);

    this.addTerrain = () => {
        plane.rotation.x = -Math.PI / 2;
        plane.rotation.z = Math.random() * (180 - 0) + 0;
        plane.position.y = -30;
        scene.add(plane);
        scene.add(sun);
    };

    this.doAnimate = () => {
        plane.rotation.z += 0.001;
    }

    this.removeTerrain = () => {
        scene.remove(plane);
        scene.remove(sun);
    };
}