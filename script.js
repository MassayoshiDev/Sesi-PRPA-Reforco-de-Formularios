function print(msg) {
    console.log(msg)
}


function setVet(tid) {
    tid += 1
    if (tid == 0) {
        return document.getElementById("formSeu")
    } else {
        return document.getElementById("formDele")
    }
}

function checkValuesInBothForms(oid) {
    var form = setVet(oid)
    print(form.inNome.value)
}

function validarForm() {
    let id = -1
    checkValuesInBothForms(id)
    id = 0
    checkValuesInBothForms(id)
}
