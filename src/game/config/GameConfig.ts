import Phaser from "phaser"
import { TestScene } from "../scene/TestScene";

export const ConfigureGame = (parent: HTMLDivElement | undefined): Phaser.Game => {
    const config: Phaser.Types.Core.GameConfig = {
        type: Phaser.AUTO,
        backgroundColor: '#00FF00',
        seed: [ (Date.now() * Math.random()).toString() ],
        scale: {
            parent: 'phaser-game',
            autoCenter: Phaser.Scale.CENTER_BOTH,
            mode: Phaser.Scale.NONE,
            width: (window.innerWidth),
            height: (window.innerHeight),
        },
        scene: [
            TestScene,
        ],
        render: {
            pixelArt: false,
            antialias: true,
            roundPixels: true,
            transparent: false,
        },
        autoRound: true,
        autoFocus: true,
        audio: {
            disableWebAudio: false
        },
        dom: {
            createContainer: true
        }
    }
return new Phaser.Game(config);
}