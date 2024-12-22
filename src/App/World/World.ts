import * as THREE from "three";

import App from "../App";
export default class World {
  app: App;
  scene: THREE.Scene;

  constructor() {
    this.app = new App();
    this.scene = this.app.scene!;

    this.loop();
  }

  loop() {}
}
