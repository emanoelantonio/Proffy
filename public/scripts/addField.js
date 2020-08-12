// Procurar o botão
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField(){
    //Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    
    //pegar os campos. - Que campos?
    const fields = newFieldContainer.querySelectorAll('input')
    
    //para cada campo, limpar
    fields.forEach(function(field) {
        //pega o field do comento e limpa
        field.value = ""
    });

    //Colorcar na página. - Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}