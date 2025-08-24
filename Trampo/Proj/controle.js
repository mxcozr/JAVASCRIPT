let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa(){
    let valorInput = input.value;

    if((valorInput !=="") && (valorInput !==null) && (valorInput!==undefined)){
        
        ++contador; 

        let novoItem = `<div id="${(contador)}" class="item">
            <div class="itemIcone">
                <i class="mdi mdi-circle-outline"></i>
            </div>
            <div class="itemNome">
                ${valorInput}
            </div>
            <div class="itemBotao">
                <button onclick="deletar(${(contador)})" class="deLete"><i class="mdi mdi-delete"></i> Deletar</button>
            </div>
        </div>`;

        main.innerHTML += novoItem;

        input.value = "";
        input.focus();
    }
}

function deletar (id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

input.addEventListener("keyup", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        btnAdd.click();
    }
})