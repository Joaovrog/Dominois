var VirarParaCimaEmPedraDuzentosESetentaValorSuperior = function() {}

VirarParaCimaEmPedraDuzentosESetentaValorSuperior.prototype.Jogar = function(pedra) {
	console.log(this);
	return new JogadaSprite
	(
		pedra.sprite.phaserSprite.position.x,
		pedra.sprite.phaserSprite.position.y,
		RotacaoSprite.CentoEOitenta
	);
}