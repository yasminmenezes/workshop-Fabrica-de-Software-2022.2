let dados = [];

const elementoH1 = document.querySelector("h1");

//CRIANDO UMA FUNÇÃO PARA O BOTÃO LIMPAR MONSTROS
const btn = document.querySelector(".btn-azul");
//criou-se um evento no botão com uma função anônima
btn.addEventListener("click", () => {
  let articles = document.querySelectorAll("article");
  for(let i=0; i < articles.length; i++) {
    articles[i].remove();
  }
  dados = []
  elementoH1.innerText = `${dados.length} Monstros`;

});

//PARA CONSUMIR A API
async function renderizar (){
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const dadosJSON = await response.json();

  dados = dadosJSON.slice(0,5);
  elementoH1.innerText = `${dados.length} Monstros`;
//PARA ADICIONAR OS MONSTROS
  for (let objeto of dados) {
    const elementoArticle = document.createElement("article");
    //adicionando à classe
    elementoArticle.classList.add("monstros");
    //inserir no html o elemento article com tudo oq foi criado dentro da div
    elementoArticle.innerHTML = `
       <img src="https://robohash.org/${objeto.id}set=set2" alt="imagem de um monstro">
       <div>
           <h2>${objeto.name}</h2>
           <p>${objeto.email}</p>
       </div>
       `;
    //adicionar o elemento article logo abaixo do h1
    elementoH1.insertAdjacentElement("afterend", elementoArticle);
  }
}

renderizar();

  