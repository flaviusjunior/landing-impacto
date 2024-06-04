var btn = document.querySelector("#back-to-top");

// Define a opacidade inicial como 0 (totalmente transparente)
btn.style.opacity = 0;

// Mostra o botão quando o usuário rolar 100 pixels ou mais
window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    btn.style.display = "block";
    btn.style.opacity = 1; // Define a opacidade como 1 (totalmente visível)
  } else {
    btn.style.opacity = 0; // Define a opacidade como 0 (totalmente transparente)
  }
});

// Adiciona um evento de clique para rolar a página de volta ao topo
btn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

// Define a transição suave para a propriedade de opacidade
btn.style.transition = "opacity 0.5s ease"; // Ajuste a duração conforme necessário






var btnfix = document.querySelector("#rolar-baixo");

// Define a opacidade inicial como 0 (totalmente transparente)
btnfix.style.opacity = 1;

// Mostra o botão quando o usuário rolar 100 pixels ou mais
window.addEventListener("scroll", function () {
  if (window.scrollY >= 20) {
    btnfix.style.display = "block";
    btnfix.style.opacity = 0; // Define a opacidade como 1 (totalmente visível)
  } else {
    btnfix.style.opacity = 1; // Define a opacidade como 0 (totalmente transparente)
  }
});

// Adiciona um evento de clique para rolar a página de volta ao topo
btnfix.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

// Define a transição suave para a propriedade de opacidade
btnfix.style.transition = "opacity 0.3s ease"; // Ajuste a duração conforme necessário

function clickMenu() {
  if (itens.style.display == "block") {
    itens.style.display = 'none'
  } else {
    itens.style.display = 'block'
  }
}
