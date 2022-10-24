let idfunction = document.getElementById('idfunction')
let optionfunction = document.getElementsByClassName('optionfunction')
let idanalista = document.getElementById('idanalista')
let classanalista = document.getElementsByClassName('classanalista')
let optionanalista = document.getElementsByClassName('optionanalista')
let idajuste = document.getElementById('idajuste')
let classajuste = document.getElementsByClassName('classajuste')
let optionajuste = document.getElementsByClassName('optionajuste')
let idplanilhamento = document.getElementById('idplanilhamento')
let classplanilhamento = document.getElementsByClassName('classplanilhamento')
let optionplanilhamento = document.getElementsByClassName('optionplanilhamento')
let idexecutivo = document.getElementById('idexecutivo')
let classexecutivo = document.getElementsByClassName('classexecutivo')
let optionexecutivo = document.getElementsByClassName('optionexecutivo')
let sempedido = document.getElementsByClassName('sempedido')
let classnumerorepresentante = document.getElementsByClassName('classnumerorepresentante')
let optionnumerorepresentante = document.getElementsByClassName('optionnumerorepresentante')
let idrepresentante = document.getElementById('idrepresentante')
let optionnomerepresentante = document.getElementsByClassName('optionnomerepresentante')
let iddadosdopedido = document.getElementById('iddadosdopedido')
let classemail = document.getElementsByClassName('classemail')
let idpara = document.getElementById('idpara')
let idcc = document.getElementById('idcc')
let idassunto = document.getElementById('idassunto')
let idcorpo = document.getElementById('idcorpo')

let valueattribute = 'value'
let displayblock = "block"
let displayinline_block = "inline-block"
let displaynone = "none"
let cliquegerar = "(CLIQUE EM GERAR)"
let problem = "(PROBLEMA)"
let vazio = "(VAZIO)"

function selectfunction() {
    let selectidfunction = idfunction.value
        switch (selectidfunction) {
        case optionfunction[1].value:
            idanalista.value = optionanalista[0].value
            idpara.innerHTML = optionanalista[0].value
            idcc.innerHTML = optionanalista[0].value
            idassunto.innerHTML = optionanalista[0].value
            idcorpo.innerHTML = optionanalista[0].value
            classanalista[0].style.display = displayinline_block
            classanalista[1].style.display = displayinline_block
            classajuste[0].style.display = displaynone
            classajuste[1].style.display = displaynone
            classplanilhamento[0].style.display = displaynone
            classplanilhamento[1].style.display = displaynone
            classexecutivo[0].style.display = displaynone
            classexecutivo[1].style.display = displaynone
            break;
        case optionfunction[2].value:
            idajuste.value = optionajuste[0].value
            idpara.innerHTML = optionajuste[0].value
            idcc.innerHTML = optionajuste[0].value
            idassunto.innerHTML = optionajuste[0].value
            idcorpo.innerHTML = optionajuste[0].value
            classanalista[0].style.display = displaynone
            classanalista[1].style.display = displaynone
            classajuste[0].style.display = displayinline_block
            classajuste[1].style.display = displayinline_block
            classplanilhamento[0].style.display = displaynone
            classplanilhamento[1].style.display = displaynone
            classexecutivo[0].style.display = displaynone
            classexecutivo[1].style.display = displaynone
            break;
        case optionfunction[3].value:
            idplanilhamento.value = optionplanilhamento[0].value
            idpara.innerHTML = optionplanilhamento[0].value
            idcc.innerHTML = optionplanilhamento[0].value
            idassunto.innerHTML = optionplanilhamento[0].value
            idcorpo.innerHTML = optionplanilhamento[0].value
            classanalista[0].style.display = displaynone
            classanalista[1].style.display = displaynone
            classajuste[0].style.display = displaynone
            classajuste[1].style.display = displaynone
            classplanilhamento[0].style.display = displayinline_block
            classplanilhamento[1].style.display = displayinline_block
            classexecutivo[0].style.display = displaynone
            classexecutivo[1].style.display = displaynone
            break;
        case optionfunction[4].value:
            idexecutivo.value = optionexecutivo[0].value
            idpara.innerHTML = optionexecutivo[0].value
            idcc.innerHTML = optionexecutivo[0].value
            idassunto.innerHTML = optionexecutivo[0].value
            idcorpo.innerHTML = optionexecutivo[0].value
            classanalista[0].style.display = displaynone
            classanalista[1].style.display = displaynone
            classajuste[0].style.display = displaynone
            classajuste[1].style.display = displaynone
            classplanilhamento[0].style.display = displaynone
            classplanilhamento[1].style.display = displaynone
            classexecutivo[0].style.display = displayinline_block
            classexecutivo[1].style.display = displayinline_block
            break;
        default:
            idanalista.value = optionanalista[0].value
            idajuste.value = optionajuste[0].value
            idplanilhamento.value = optionplanilhamento[0].value
            idexecutivo.value = optionexecutivo[0].value
            idpara.innerHTML = optionfunction[0].value
            idcc.innerHTML = optionfunction[0].value
            idassunto.innerHTML = optionfunction[0].value
            idcorpo.innerHTML = optionfunction[0].value
            classanalista[0].style.display = displaynone
            classanalista[1].style.display = displaynone
            classajuste[0].style.display = displaynone
            classajuste[1].style.display = displaynone
            classplanilhamento[0].style.display = displaynone
            classplanilhamento[1].style.display = displaynone
            classexecutivo[0].style.display = displaynone
            classexecutivo[1].style.display = displaynone
            break;
    }
    iddadosdopedido.style.display = displaynone
}

function selectanalista() {
    let selectanalista = classanalista[1].value
    let quantidadeoptionanalista = 5
    for (let number = 1; number <= quantidadeoptionanalista; number++) {
        switch (selectanalista) {
            case optionanalista[number].value:
                iddadosdopedido.style.display = displayblock
                idpara.innerHTML = cliquegerar
                idcc.innerHTML = cliquegerar
                idassunto.innerHTML = cliquegerar
                idcorpo.innerHTML = cliquegerar
                number = quantidadeoptionanalista
                break;
            default:
                iddadosdopedido.style.display = displayblock
                idpara.innerHTML = optionanalista[0].value
                idcc.innerHTML = optionanalista[0].value
                idassunto.innerHTML = optionanalista[0].value
                idcorpo.innerHTML = optionanalista[0].value
                break;
        }
    }
}

function selectajuste() {
    let selectajuste = classajuste[1].value
    let quantidadeoptionajuste = 5
    for (let number = 1; number <= quantidadeoptionajuste; number++) {
        switch (selectajuste) {
            case optionajuste[number].value:
                iddadosdopedido.style.display = displayblock
                idpara.innerHTML = cliquegerar
                idcc.innerHTML = cliquegerar
                idassunto.innerHTML = cliquegerar
                idcorpo.innerHTML = cliquegerar
                number = quantidadeoptionajuste
                break;
            default:
                iddadosdopedido.style.display = displayblock
                idpara.innerHTML = optionajuste[0].value
                idcc.innerHTML = optionajuste[0].value
                idassunto.innerHTML = optionajuste[0].value
                idcorpo.innerHTML = optionajuste[0].value
                break;
        }
    }
}

function selectplanilhamento() {
    let selectplanilhamento = classplanilhamento[1].value
    let quantidadeoptionplanilhamento = 43
    for (let number = 1; number <= quantidadeoptionplanilhamento; number++) {
        switch (selectplanilhamento) {
            case optionplanilhamento[number].value:
                if (number == 40 || number == 41|| number == 42) {
                    iddadosdopedido.style.display = displaynone
                    idpara.innerHTML = cliquegerar
                    idcc.innerHTML = cliquegerar
                    idassunto.innerHTML = cliquegerar
                    idcorpo.innerHTML = cliquegerar
                    number = quantidadeoptionplanilhamento
                } else {
                    iddadosdopedido.style.display = displayblock
                    idpara.innerHTML = cliquegerar
                    idcc.innerHTML = cliquegerar
                    idassunto.innerHTML = cliquegerar
                    idcorpo.innerHTML = cliquegerar
                    number = quantidadeoptionplanilhamento
                }
                break;
            default:
                iddadosdopedido.style.display = displayblock
                idpara.innerHTML = optionajuste[0].value
                idcc.innerHTML = optionajuste[0].value
                idassunto.innerHTML = optionajuste[0].value
                idcorpo.innerHTML = optionajuste[0].value
                break;
        }
    }
}

function selectexecutivo() {
    let selectexecutivo = classexecutivo[1].value
    let quantidadeoptionexecutivo = 2
    for (let number = 1; number <= quantidadeoptionexecutivo; number++) {
        switch (selectexecutivo) {
            case optionexecutivo[number].value:
                iddadosdopedido.style.display = displayblock
                idpara.innerHTML = cliquegerar
                idcc.innerHTML = cliquegerar
                idassunto.innerHTML = cliquegerar
                idcorpo.innerHTML = cliquegerar
                number = quantidadeoptionexecutivo
                break;
            default:
                iddadosdopedido.style.display = displayblock
                idpara.innerHTML = optionexecutivo[0].value
                idcc.innerHTML = optionexecutivo[0].value
                idassunto.innerHTML = optionexecutivo[0].value
                idcorpo.innerHTML = optionexecutivo[0].value
                break;
        }
    }
}

function selectrepresentante() {
    let selectclassnumerorepresentante = classnumerorepresentante[1].value
    let quantidadeoptionrepresentante = 57
    for (let number = 0; number <= quantidadeoptionrepresentante; number++) {
        switch (selectclassnumerorepresentante) {
            case optionnumerorepresentante[number].value:
                idrepresentante.setAttribute(valueattribute,optionnomerepresentante[number].value)
                number = quantidadeoptionrepresentante
                break;
            default:
                idpara.innerHTML = problem
                idcc.innerHTML = problem
                idassunto.innerHTML = problem
                idcorpo.innerHTML = problem
                break;
        }
    }
}

function limpardadosdopedido() {
    idrepresentante.setAttribute(valueattribute,optionnomerepresentante[0].value)
    idrepresentante.value = optionnomerepresentante[0].value
}

function gerar() {
    let selectidfunction = idfunction.value
    switch (selectidfunction) {
        case optionfunction[1].value:
            let selectanalista = classanalista[1].value
            let quantidadeoptionanalista = 5
            for (let number = 1; number <= quantidadeoptionanalista; number++) {
                switch (selectanalista) {
                    case optionanalista[number].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectanalista}`
                        idcc.innerHTML = `${selectidfunction} - ${selectanalista}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectanalista}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectanalista}`
                        number = quantidadeoptionanalista
                        break;
                    default:
                        idpara.innerHTML = optionanalista[0].value
                        idcc.innerHTML = optionanalista[0].value
                        idassunto.innerHTML = optionanalista[0].value
                        idcorpo.innerHTML = optionanalista[0].value
                        break;
                }
            }
            break;
        case optionfunction[2].value:
            let selectajuste = classajuste[1].value
            let quantidadeoptionajuste = 5
            for (let number = 1; number <= quantidadeoptionajuste; number++) {
                switch (selectajuste) {
                    case optionajuste[number].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectajuste}`
                        idcc.innerHTML = `${selectidfunction} - ${selectajuste}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectajuste}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectajuste}`
                        number = quantidadeoptionajuste
                        break;
                    default:
                        idpara.innerHTML = optionajuste[0].value
                        idcc.innerHTML = optionajuste[0].value
                        idassunto.innerHTML = optionajuste[0].value
                        idcorpo.innerHTML = optionajuste[0].value
                        break;
                }
            }
            break;
        case optionfunction[3].value:
                let selectplanilhamento = classplanilhamento[1].value
                let quantidadeoptionplanilhamento = 43
                for (let number = 1; number <= quantidadeoptionplanilhamento; number++) {
                    switch (selectplanilhamento) {
                        case optionplanilhamento[number].value:
                            idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                            idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                            idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                            idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                            number = quantidadeoptionplanilhamento
                            break;
                        default:
                            idpara.innerHTML = optionplanilhamento[0].value
                            idcc.innerHTML = optionplanilhamento[0].value
                            idassunto.innerHTML = optionplanilhamento[0].value
                            idcorpo.innerHTML = optionplanilhamento[0].value
                            break;
                    }
                }
                break;
        case optionfunction[4].value:
            let selectexecutivo = classexecutivo[1].value
            let quantidadeoptionexecutivo = 2
            for (let number = 1; number <= quantidadeoptionexecutivo; number++) {
                switch (selectexecutivo) {
                    case optionexecutivo[number].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectexecutivo}`
                        idcc.innerHTML = `${selectidfunction} - ${selectexecutivo}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectexecutivo}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectexecutivo}`
                        number = quantidadeoptionexecutivo
                        break;
                    default:
                        idpara.innerHTML = optionexecutivo[0].value
                        idcc.innerHTML = optionexecutivo[0].value
                        idassunto.innerHTML = optionexecutivo[0].value
                        idcorpo.innerHTML = optionexecutivo[0].value
                        break;
                }
            }
            break;
        default:
            idpara.innerHTML = optionfunction[0].value
            idcc.innerHTML = optionfunction[0].value
            idassunto.innerHTML = optionfunction[0].value
            idcorpo.innerHTML = optionfunction[0].value
            break;
    }
}

function limpartipodeemail() {
    idfunction.value = optionfunction[0].value
    idpara.innerHTML = optionfunction[0].value
    idcc.innerHTML = optionfunction[0].value
    idassunto.innerHTML = optionfunction[0].value
    idcorpo.innerHTML = optionfunction[0].value
    classanalista[0].style.display = displaynone
    classanalista[1].style.display = displaynone
    classajuste[0].style.display = displaynone
    classajuste[1].style.display = displaynone
    classplanilhamento[0].style.display = displaynone
    classplanilhamento[1].style.display = displaynone
    classexecutivo[0].style.display = displaynone
    classexecutivo[1].style.display = displaynone
    iddadosdopedido.style.display = displaynone
}

function limparemail() {
    idpara.innerHTML = vazio
    idcc.innerHTML = vazio
    idassunto.innerHTML = vazio
    idcorpo.innerHTML = vazio
}