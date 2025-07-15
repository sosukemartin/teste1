function incrementar(botao) {
  let input = botao.parentNode.querySelector('input');
  input.value = parseInt(input.value) + 1;
}

function decrementar(botao) {
  let input = botao.parentNode.querySelector('input');
  if (parseInt(input.value) > 0) {
    input.value = parseInt(input.value) - 1;
  }
}
