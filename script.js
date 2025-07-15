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
        const item = input.closest('.item');
        const titulo = item.querySelector('h2') || item.querySelector('h3');
        const nome = titulo ? titulo.textContent : 'Item sem nome';
        const qtd = parseInt(input.value) || 0;
        const preco = parseFloat(input.dataset.preco);
        if (qtd > 0) {
            const subtotal = preco * qtd;
            totalGeral += subtotal;
            mensagem += `• ${nome}: ${qtd} x R$${preco.toFixed(2)} = R$${subtotal.toFixed(2)}%0A`;
        }
    });

    mensagem += `%0ATotal: *R$${totalGeral.toFixed(2)}*`;

    const fone = '5521965781487';
    const url = `https://wa.me/${fone}?text=${mensagem}`;
    window.location.href = url;
}

document.querySelectorAll('.btn-menor').forEach((btn) => {
    btn.addEventListener('click', () => {
        const input = btn.nextElementSibling;
        input.value = Math.max(0, parseInt(input.value) - 1);
        input.dispatchEvent(new Event('input'));
    });
});

document.querySelectorAll('.btn-maior').forEach((btn) => {
    btn.addEventListener('click', () => {
        const input = btn.previousElementSibling;
        input.value = parseInt(input.value) + 1;
        input.dispatchEvent(new Event('input'));
    });
});