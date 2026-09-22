let corAtual = '#23cdf8';

export function escolherCor(cor, setCor) {
    corAtual = cor;
    setCor(cor);
}

export function pegarCor() {
    return corAtual;
}