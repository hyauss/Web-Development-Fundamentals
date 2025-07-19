
function done(checkbox) {
    const tarefa = checkbox.closest('li');
    tarefa.remove();
}

function add(event) {
    event.preventDefault();
    const input = document.getElementById('task');
    const texto = input.value.trim();

    if(texto === ""){
        alert("A tarefa precisa de um título.");
        return;
    }
    const htmlTarefa=`
    <li>
        <input type="checkbox" onclick="done(this)"/>
        <span>${texto}</span>
    </li>
    `;

    document.querySelector('#todo-list').insertAdjacentHTML('beforeend',htmlTarefa.trim());
    input.value ='';
}

document.querySelector('#form-add-todo').addEventListener('submit',add)