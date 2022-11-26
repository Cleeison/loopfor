function clicou() {
    //Criando uma variável para armazenar e selecionar a id teste do arquivo html
    const teste = document.querySelector('#teste');
    //Criando outra variável para buscar o ul dentro da id teste
    const ul = teste.querySelector('ul');

    //variável para armazenar a criação de um novo elemento(ul)
    let newUl = document.createElement('ul');

    //criando um FOR para repetir 5 vezes o li
    for(let i = 0; i < 5; i++) {

        //Criando mais um elemento(li) para poder usar dentro do ul
        let newLi = document.createElement('li');
        //Adicionando um texto dentro deste li que será repetido 5 vezes conforme o loop for
        newLi.innerHTML = 'item adicionado ' + (i + 1);
        //Puxando a variável newUl para acrescentar(append) a variável newLi(que tem o elemento li criado)
        newUl.append(newLi)
    }
    //Após(after) o ul da id teste do arquivo html será adicionado outro elemento ul com li
    ul.after(newUl)
}
