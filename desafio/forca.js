let vidas = 6;
let palavraCerta = [];
let chutes = [];

class Forca {
	constructor(palavra) {
		this.palavra = palavra;
		this.preencher();
	}

	preencher() {
		for (var indice = 0; indice < this.palavra.length; indice++) {
			palavraCerta.push("_");
		}
	}

	chutar(letra) {
		if (chutes.indexOf(letra) == -1 && letra.length == 1 && letra.match(/[a-z]/i)) {
			chutes.push(letra);
			var palavraSecreta = this.palavra;
			var indexLetra = null;

			for (var indice = 0; indice < palavraSecreta.length; indice++) {
				if (palavraSecreta[indice] == letra) {
					indexLetra = [indice];
					palavraCerta.splice(indexLetra, 1, letra);
				}
			}

			if (indexLetra == null) {
				vidas -= 1;
			}
		}
	}

	buscarEstado() {
		let letrasFaltando = 0;
		for (var indice = 0; indice < palavraCerta.length; indice++) {
			if (palavraCerta[indice] == "_") {
				letrasFaltando++;
			}
		}
		if (letrasFaltando == 0 && vidas > 0) {
			return "ganhou";
		} else if (vidas == 0 && letrasFaltando > 0) {
			return "perdeu";
		} else {
			return "aguardando chute";
		}
	} // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

	buscarDadosDoJogo() {
		return {
			letrasChutadas: chutes, // Deve conter todas as letras chutadas
			vidas: vidas, // Quantidade de vidas restantes
			palavra: palavraCerta, // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
		};
	}
}

module.exports = Forca;
