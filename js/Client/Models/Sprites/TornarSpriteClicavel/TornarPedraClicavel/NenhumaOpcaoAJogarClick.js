var NenhumaOpcaoAJogarClick = function() {}

NenhumaOpcaoAJogarClick.prototype.Tornar(pedra) {
	
	var Callback = function() {
		alert("N�o existe jogada poss�vel para essa pedra");
	}
	
	return new TornarSpriteClicavel().Tornar(pedra.sprite.phaserSprite, Callback);
}