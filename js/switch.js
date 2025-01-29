// Usando métodos próprios do JS para simplificar a manipulação de classes
function turnLights() {
  const bulb = document.querySelector(".bulb");
  const button = document.querySelector(".switch");

  // ".toggle()" é um método que adiciona a classe se ela não existir
  // ou remove se ela já existir
  button.classList.toggle("on");
  bulb.classList.toggle("on");
}

// if-else clássico
function _turnLights() {
  const bulb = document.querySelector(".bulb");
  const button = document.querySelector(".switch");

  // Se o elemento button tiver a classe "on", deve desligar a lampada
  if (button.classList.contains("on")) {
    button.classList.remove("on");
    bulb.classList.remove("on");
  } else { // Se não, deve ligar a lampada
    button.classList.add("on");
    bulb.classList.add("on");
  }
}

// if-else usando early return, sem necessidade do else
function __turnLights() {
  const bulb = document.querySelector(".bulb");
  const button = document.querySelector(".switch");

  // Se o elemento button tiver a classe "on", deve desligar a lampada
  if (button.classList.contains("on")) {
    button.classList.remove("on");
    bulb.classList.remove("on");
    return; // Esse return faz com que o código restante não seja executado
  }

  // Isso só é executado se o if acima não for verdadeiro
  // ou seja, se o botão não estiver ligado
  button.classList.add("on");
  bulb.classList.add("on");
}

// switch case
function __turnLights() {
  const bulb = document.querySelector(".bulb");
  const button = document.querySelector(".switch");

  // "element.classList.value"
  // Isso retorna uma string em forma de lista das classes que aquele elemento possui
  switch (button.classList.value) {
    case "switch on":
      button.classList.remove("on");
      bulb.classList.remove("on");
      break;
    case "switch":
      button.classList.add("on");
      bulb.classList.add("on");
      break;
  }
}
