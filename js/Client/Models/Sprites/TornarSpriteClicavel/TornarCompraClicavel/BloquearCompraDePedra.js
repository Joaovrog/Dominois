var BloquearComprarDePedra = function() {}

BloquearComprarDePedra.prototype.Tornar = function(spriteComprar) {
	
	var Callback = function() {
		alert("Voc� possui pedras dispon�veis para jogar.");
	}
	
	return new TornarSpriteClicavel().Tonar(spriteComprar.phaserSprite, Callback);
}