
const inputs = document.querySelectorAll('.quantidade');
const totais = document.querySelectorAll('.total');

inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        const preco = parseFloat(input.dataset.preco);
        const qtd = parseInt(input.value) || 0;
        totais[index].textContent = (preco * qtd).toFixed(2);
    });
});

function enviarWhatsApp() {
    let mensagem = '*Pedido Trufinhas da Laura*%0A';
    let totalGeral = 0;

    inputs.forEach((input, index) => {
        const nome = input.parentElement.querySelector('h2').textContent;
        const qtd = parseInt(input.value) || 0;
        const preco = parseFloat(input.dataset.preco);
        if (qtd > 0) {
            const subtotal = preco * qtd;
            totalGeral += subtotal;
            mensagem += `• ${nome}: ${qtd} x R$${preco.toFixed(2)} = R$${subtotal.toFixed(2)}%0A`;
        }
    });

    mensagem += `%0ATotal: *R$${totalGeral.toFixed(2)}*`;

    const fone = '5511999999999'; // Substitua com o número do WhatsApp da loja
    const url = `https://wa.me/${fone}?text=${mensagem}`;
    window.open(url, '_blank');
}
