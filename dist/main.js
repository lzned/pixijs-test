const app = new PIXI.Application();
await app.init({ width: 640, height: 360 });
document.body.appendChild(app.canvas);

//load the PNG asynchronously
await PIXI.Assets.load("image.png");
let sprite = PIXI.Sprite.from('image.png');
app.stage.addChild(sprite);

let elapsed = 0.0;
app.ticker.add((ticker) => {
    elapsed += ticker.deltaTime;
    sprite.x = 100.0 + Math.cos(elapsed/50) * 100;
});