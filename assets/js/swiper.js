var swiper = new Swiper(".swiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    keyboard: true,
  });


// Pega os elementos da tela
const addBtn = document.getElementById('add-btn');
const removeBtn = document.getElementById('remove-btn');
const precoElement = document.getElementById('preco');

// Define as variáveis de peso e preço
let peso = 100;
let preco = 3.9;

// Adiciona evento de clique ao botão "add"
addBtn.addEventListener('click', () => {
  // Aumenta o peso em 100g
  peso += 100;

  // Atualiza o preço com base no novo peso
  preco = (peso / 100) * 3.9;

  // Atualiza o valor exibido na tela
  precoElement.innerText = `R$ ${preco.toFixed(2)}`;

});

// Adiciona evento de clique ao botão "remove"
removeBtn.addEventListener('click', () => {
  // Diminui o peso em 100g, desde que não seja menor que 100g
  if (peso > 100) {
    peso -= 100;

    // Atualiza o preço com base no novo peso
    preco = (peso / 100) * 3.9;

    // Atualiza o valor exibido na tela
    precoElement.innerText = `R$ ${preco.toFixed(2)}`;
  }
});