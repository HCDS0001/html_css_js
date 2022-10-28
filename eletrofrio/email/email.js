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
let idnomerepresentante = document.getElementById('idnomerepresentante')
let idnumerorepresentante = document.getElementById('idnumerorepresentante')
let idoptionnomerepresentante = document.getElementById('idoptionnomerepresentante')
let optionnomerepresentante = document.getElementsByClassName('optionnomerepresentante')


let iddadosdopedido = document.getElementById('iddadosdopedido')
let classemail = document.getElementsByClassName('classemail')
let idpara = document.getElementById('idpara')
let idcc = document.getElementById('idcc')
let idassunto = document.getElementById('idassunto')
let idcorpo = document.getElementById('idcorpo')

let valueattribute = 'value'
let checkedattribute = 'checked'
let displayblock = "block"
let displayinline_block = "inline-block"
let displaynone = "none"
let cliquegerar = "(CLIQUE EM GERAR)"
let problem = "(PROBLEMA)"
let vazio = "(VAZIO)"


let representante = [
    {numero:'001', nome:'Venda Direta Curitiba', email:'email'},
    {numero:'004', nome:'Tecnimet', email:'email'},
    {numero:'011', nome:'FG', email:'email'},
    {numero:'016', nome:'Lobo', email:'email'},
    {numero:'018', nome:'Silva Filho', email:'email'},
    {numero:'024', nome:'Mallet', email:'email'},
    {numero:'035', nome:'Clecio', email:'email'},
    {numero:'057', nome:'Refripan', email:'email'},
    {numero:'062', nome:'M Weidner', email:'email'},
    {numero:'067', nome:'Tortelli', email:'email'},
    {numero:'070', nome:'Venda Direta São Paulo', email:'email'},
    {numero:'077', nome:'Llampe Frio PR', email:'email'},
    {numero:'082', nome:'HB', email:'email'},
    {numero:'087', nome:'Baldissera', email:'email'},
    {numero:'093', nome:'Gurgel', email:'email'},
    {numero:'094', nome:'Luiz Nachbar', email:'email'},
    {numero:'096', nome:'Kalliel', email:'email'},
    {numero:'097', nome:'DE', email:'email'},
    {numero:'101', nome:'Da Roz', email:'email'},
    {numero:'102', nome:'Superbrasil', email:'email'},
    {numero:'106', nome:'Vitoria', email:'email'},
    {numero:'112', nome:'Ronald', email:'email'},
    {numero:'114', nome:'Scallet', email:'email'},
    {numero:'115', nome:'Guide', email:'email'},
    {numero:'118', nome:'Fast Sul', email:'email'},
    {numero:'120', nome:'Rio Fast', email:'email'},
    {numero:'121', nome:'Eletrofast', email:'email'},
    {numero:'182', nome:'Afonso Araujo', email:'email'},
    {numero:'187', nome:'ETCO', email:'email'},
    {numero:'189', nome:'Refriged', email:'email'},
    {numero:'190', nome:'A&F', email:'email'},
    {numero:'191', nome:'Produtiva', email:'email'},
    {numero:'193', nome:'Llampe Frio SC', email:'email'},
    {numero:'195', nome:'DNC Dealer', email:'email'},
    {numero:'196', nome:'Brites', email:'email'},
    {numero:'198', nome:'Euro', email:'email'},
    {numero:'199', nome:'Erco', email:'email'},
    {numero:'202', nome:'Eder Mathias', email:'email'},
    {numero:'203', nome:'HCM', email:'email'},
    {numero:'207', nome:'Brava', email:'email'},
    {numero:'213', nome:'Mercato', email:'email'},
    {numero:'217', nome:'Cold Import', email:'email'},
    {numero:'218', nome:'Cencosud', email:'email'},
    {numero:'223', nome:'Hercold', email:'email'},
    {numero:'226', nome:'EC', email:'email'},
    {numero:'227', nome:'Edeval', email:'email'},
    {numero:'228', nome:'JPC', email:'email'},
    {numero:'229', nome:'Wesley Dal Pozzo', email:'email'},
    {numero:'230', nome:'Ergosystem', email:'email'},
    {numero:'231', nome:'SM', email:'email'},
    {numero:'232', nome:'S&I', email:'email'},
    {numero:'233', nome:'Control y Sostenibilidad', email:'email'},
    {numero:'234', nome:'Aarci', email:'email'},
    {numero:'236', nome:'T&G', email:'email'},
    {numero:'237', nome:'Rematec', email:'email'},
    {numero:'238', nome:'FMG', email:'email'},
    {numero:'239', nome:'PSK', email:'email'},
]

let quantidadeoptionrepresentante = representante.length

document.body.onload = numerorepresentante


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

function selecttipo(classefunçao, numeroquantidadeoptionfuçao, optionfunçao) {
    let clique = document.getElementById('clique')
    clique.click()
    let selectfunçao = classefunçao[1].value
    let quantidadeoptionfuçao = numeroquantidadeoptionfuçao
    for (let number = 1; number <= quantidadeoptionfuçao; number++) {
        switch (selectfunçao) {
            case optionfunçao[number].value:
                if (optionfunçao[number].value == sempedido[0].value || optionfunçao[number].value == sempedido[1].value || optionfunçao[number].value == sempedido[2].value) {
                    iddadosdopedido.style.display = displaynone
                    idpara.innerHTML = cliquegerar
                    idcc.innerHTML = cliquegerar
                    idassunto.innerHTML = cliquegerar
                    idcorpo.innerHTML = cliquegerar
                    number = quantidadeoptionfuçao
                } else { 
                    iddadosdopedido.style.display = displayblock
                    idpara.innerHTML = cliquegerar
                    idcc.innerHTML = cliquegerar
                    idassunto.innerHTML = cliquegerar
                    idcorpo.innerHTML = cliquegerar
                    number = quantidadeoptionfuçao
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

function numerorepresentante() {
    for (let number = 0; number < quantidadeoptionrepresentante; number++) {
        let optionrepresentante = document.createElement('option')
        optionrepresentante.setAttribute('value',representante[number].numero)
        let textoptionrepresentante = document.createTextNode(representante[number].numero)
        optionrepresentante.appendChild(textoptionrepresentante)
        idnumerorepresentante.insertAdjacentElement('beforeend',optionrepresentante)
    }
}

function nomerepresentante() {
    
    for (let number = 0; number < quantidadeoptionrepresentante; number++) {
        switch (idnumerorepresentante.value) {
            case representante[number].numero:
                idnomerepresentante.setAttribute(valueattribute,representante[number].nome)
                number = quantidadeoptionrepresentante
                idpara.innerHTML = cliquegerar
                idcc.innerHTML = cliquegerar
                idassunto.innerHTML = cliquegerar
                idcorpo.innerHTML = cliquegerar
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
    idnomerepresentante.setAttribute(valueattribute,representante[0].nome)
    idnumerorepresentante.value = representante[0].numero
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