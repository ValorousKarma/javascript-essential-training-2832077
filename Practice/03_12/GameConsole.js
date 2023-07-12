/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

const GameConsole = class {
	constructor(name, portable, res, frames, game) {
		this.name = name;
		this.portable = portable;
		this.videoOutput = {
			resolution: res,
			framerate: frames,
		};
		this.game = game;
	}

	changeVideo(newRes, newFramerate) {
		this.videoOutput.resolution = newRes;
		this.videoOutput.framerate = newFramerate;
	}

	changeGame(newGame) {
		this.game = newGame;
	}
};

export default GameConsole;
