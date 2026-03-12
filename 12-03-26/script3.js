let preco = 120;
let idade = 80;


if (idade > 60 && preco > 100) {
    let desconto = preco * 0.20;
    let precoFinal = preco - desconto;
    console.log("desconto autorizado,preço a pagar:", precoFinal);
} else {
    console.log("desconto nao autorizado,preço a pagar:", preco);
}