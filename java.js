
const tarefas = document.querySelectorAll(".tarefa");
const listas = document.querySelectorAll(".tarefas");

// Permite começar a arrastar um cartão
tarefas.forEach((tarefa) => {
    tarefa.addEventListener("dragstart", () => {
        tarefa.classList.add("arrastando");
    });

    // Remove o efeito ao terminar de arrastar
    tarefa.addEventListener("dragend", () => {
        tarefa.classList.remove("arrastando");
    });
});

// Configura as três colunas para receber cartões
listas.forEach((lista) => {

    lista.addEventListener("dragover", (evento) => {
        evento.preventDefault();
        lista.parentElement.classList.add("destacada");
    });

    lista.addEventListener("dragleave", () => {
        lista.parentElement.classList.remove("destacada");
    });

    lista.addEventListener("drop", (evento) => {
        evento.preventDefault();

        const tarefa = document.querySelector(".arrastando");

        if (tarefa) {
            lista.appendChild(tarefa);
        }

        lista.parentElement.classList.remove("destacada");
    });

});
