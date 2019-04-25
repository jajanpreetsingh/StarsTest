(function () {

    let canvas: HTMLCanvasElement;
    let stage: createjs.Stage;

    let currentScene: scenes.Scene;

    //let stageSound: createjs.AbstractSoundInstance;

    function Init(): void {
        managers.GameManager.ResourceManager = new managers.ResourceManager(Start);
    }

    function Start(): void {

        console.log("started");

        LoadSprites();

        canvas = document.getElementsByTagName("canvas")[0];

        let height = screen.availHeight - 120;

        managers.GameManager.Screen = new config.Screen(height);

        canvas.width = managers.GameManager.Screen.Width;
        canvas.height = managers.GameManager.Screen.Height;

        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        managers.GameManager.Stage = stage;

        createjs.Ticker.framerate = 60; // game will run at 60fps
        createjs.Ticker.on("tick", Update);

        managers.GameManager.CurrentState = config.Scene.GAMEPLAY;

        Main();
    }

    function LoadSprites(): void {

        resources.Resources.AnimationFrameData.images = ["./Assets/images/cards.png"];
        resources.Resources.AnimationFrameData.frames = [];

        resources.Resources.AnimationFrameData.animations = {};

        resources.Resources.AnimationFrameData.framerate = 0;

        let i = -1;
        resources.Resources.RawJson.frames.forEach(frameData => {

            ++i;

            let frameDataArray: Number[] = [];

            frameDataArray.push(frameData.frame.x);
            frameDataArray.push(frameData.frame.y);

            if (!frameData.rotated) {
                frameDataArray.push(frameData.frame.w);
                frameDataArray.push(frameData.frame.h);
            }
            else {
                frameDataArray.push(frameData.frame.h);
                frameDataArray.push(frameData.frame.w);
            }

            frameDataArray.push(0);
            frameDataArray.push(0);
            frameDataArray.push(0);

            resources.Resources.AnimationFrameData.frames.push(frameDataArray);

            let name: string = frameData.filename.replace(".png", "");

            resources.Resources.AnimationFrameData.animations[name] = { "frames": [i], "speed": 0 };
        });

        managers.GameManager.TextureAtlas = new createjs.SpriteSheet(resources.Resources.AnimationFrameData);
    }

    // this is the main game loop
    function Update(): void {

        stage.update();

        if (currentScene) {
            if (managers.GameManager.CurrentState != currentScene.sceneState) {
                Main();
            }

            currentScene.Update();
        }
    }

    function Main(): void {

        stage.removeChild(currentScene);

        switch (managers.GameManager.CurrentState) {
            case config.Scene.GAMEPLAY:

                // stageSound = createjs.Sound.play("battle");
                // stageSound.volume = 0.05;
                // stageSound.loop = -1;
                currentScene = new scenes.GameplayScene();
                break;
        }
        managers.GameManager.CurrentScene = currentScene;

        stage.addChild(currentScene);

        console.log(currentScene);
    }

    window.addEventListener("load", Init);
})();