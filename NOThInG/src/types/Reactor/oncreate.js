MMovable(this, true);
MContainer(this, 1);
const transmitter = MTransmitter(this, SIGNAL.ELECTRICITY, 2);

const isTh = obj => obj.MElement.getType().type === EL.Th.type;

this.MEvent.on("elementTaken", (el) => {
    //ct.sound.spawn("generator")
    if (isTh(el)) {
        transmitter.activate();
    }
});

this.MEvent.on("elementDropped", (el, remainingEls) => {
    //ct.sound.spawn("generator")
    if(!remainingEls.find(isTh)) {
        transmitter.deactivate();
    }
});

// setTimeout(() => { 
//     console.log(utils.getUnderDistance(this,3,'MOpenable'));
// }, 0);
this.emitter = new PIXI.particles.Emitter(this, ct.res.getTexture('electricity'), {
	"alpha": {
		"start": 1,
		"end": 0.85
	},
	"scale": {
		"start": 0.16,
		"end": 0.35,
		"minimumScaleMultiplier": 1
	},
	"color": {
		"start": "#e4f9ff",
		"end": "#3fcbff"
	},
	"speed": {
		"start": 91,
		"end": 100,
		"minimumSpeedMultiplier": 1
	},
	"acceleration": {
		"x": -2,
		"y": -2
	},
	"maxSpeed": 0,
	"startRotation": {
		"min": 74,
		"max": 999
	},
	"noRotation": false,
	"rotationSpeed": {
		"min": 0,
		"max": 6
	},
	"lifetime": {
		"min": 0.47,
		"max": 1.19
	},
	"blendMode": "overlay",
	"frequency": 0.001,
	"emitterLifetime": -1,
	"maxParticles": 10,
	"pos": {
		"x": 0,
		"y": 0
	},
	"addAtBack": true,
	"spawnType": "circle",
	"spawnCircle": {
		"x": 0,
		"y": 0,
		"r": 33
	}
})
this.emitter.emit = false

this.body.tex = -1;
this.body.background = this.body.addChild(new PIXI.Sprite(ct.res.getTexture('Reactor_Background', 0)));
this.body.core = this.body.addChild(new ct.types.Copy());