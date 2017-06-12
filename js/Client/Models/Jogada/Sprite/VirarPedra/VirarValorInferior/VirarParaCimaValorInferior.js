var VirarParaCimaValorInferior = function() {}

VirarParaCimaValorInferior.prototype.Jogar = function(pedra) {
	switch (pedra.sprite.rotacaoSprite) {
        case RotacaoSprite.NaoRotacionar: 
            return new VirarParaCimaEmPedraZeroValorInferior().Jogar(pedra);
        case RotacaoSprite.Noventa:
            return new VirarParaBaixoEmPedraNoventaValorInferior().Jogar(pedra);
        case RotacaoSprite.DuzentosESetenta:
            return new VirarParaCimaEmPedraDuzentosESetentaValorInferior().Jogar(pedra);
    }
}