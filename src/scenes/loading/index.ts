import { GameObjects, Scene } from 'phaser';

export class LoadingScene extends Scene {
  private king!: GameObjects.Sprite;

  constructor() {
    super("loading-scene");
  }

  create(): void {
    console.log("Loading scene was created");
    this.king = this.add.sprite(100, 100, "king");
  }

  preload(): void {
    this.load.setBaseURL("/assets/");
    this.load.image("king", "sprites/king.png");
  }
}