import { Game, Types } from "phaser"
import { Level1, LoadingScene } from "@/scenes"
import { UIScene } from "./scenes/ui";

declare global {
    interface Window { game: Game; sizeChanged: () => void; initializeGame: (config: GameConfigExtended) => Game; gameConfig: GameConfigExtended; }
}

type GameConfigExtended = Types.Core.GameConfig & {
    winScore: number;
}

export const gameConfig: GameConfigExtended = {
    title: "Phaser game tutorial",
    type: Phaser.WEBGL,
    parent: "game",
    backgroundColor: "#351f1b",
    scale: {
        mode: Phaser.Scale.ScaleModes.NONE,
        width: window.innerWidth,
        height: window.innerHeight,
    },
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
        }
    },
    render: {
        antialias: false,
        pixelArt: true,
    },
    callbacks: {
        postBoot: () => {
            window.sizeChanged();
        },
    },
    canvasStyle: "display: block; width: 100%; height: 100%;",
    autoFocus: true,
    audio: {
        disableWebAudio: false,
    },
    scene: [LoadingScene, Level1, UIScene],
    winScore: 40,
}

window.sizeChanged = () => {
    if (window.game.isBooted) {
        setTimeout(() => {
            window.game.scale.resize(window.innerWidth, window.innerHeight);
            window.game.canvas.setAttribute(
                "style",
                `display: block; width: ${window.innerWidth}px; height: ${window.innerHeight}px;`
            )
        }, 100);
    }
}

window.gameConfig = gameConfig;
window.onresize = () => window.sizeChanged();

window.initializeGame = (config: GameConfigExtended) => {
    window.game = new Game(config);
    return window.game;
}

window.game = new Game(gameConfig)