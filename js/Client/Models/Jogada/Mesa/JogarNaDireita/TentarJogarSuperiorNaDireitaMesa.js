var TentarJogarSuperiorNaDireitaMesa = function() {}

TentarJogarSuperiorNaDireitaMesa.prototype.Jogar = function(pedra, pedraAnterior, valorDireita) {
  if (pedra.valorSuperior != valorDireita)
    throw "Jogada inválida";
  return new JogadaMesa(LadoPedra.Superior, pedraAnterior, pedra.valorInferior);
}
