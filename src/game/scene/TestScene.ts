import Phaser from 'phaser';

class TestScene extends Phaser.Scene {

    constructor(){
        super({ 
            key: "TestScene"
        });
    }

    init(){
        
        this.sceneevent();

    }

    preload(){

    }

    create(){
        let rect = this.add.rectangle(0,0,(window.innerWidth*0.5),(window.innerHeight*0.5)).setOrigin(0.5,0.5)
        rect.setFillStyle(0xff0000);
        rect.x = this.cameras.main.centerX
        rect.y = this.cameras.main.centerY
    }

    upload(){


    }

    //Scene Events
    sceneclear(){
        
    }

    scenepause(){
        this.sound.pauseAll();
    }

    sceneresume(){
        this.sound.resumeAll();
    }

    sceneevent(){

        this.events.on(Phaser.Scenes.Events.SHUTDOWN, ()=>{
            this.sceneclear();
        });

        this.events.on(Phaser.Scenes.Events.PAUSE, ()=>{
            this.scenepause();
        });

        this.events.on(Phaser.Scenes.Events.RESUME, ()=>{
            this.sceneresume();
        });

    }

}

export { TestScene };