import { GameObjects, Scene } from "phaser";

export class LoadingScene extends Scene {
  constructor() {
    super("loading-scene");
  }

  create(): void {}

  preload(): void {
    this.load.baseURL = "assets/";
  }
}
