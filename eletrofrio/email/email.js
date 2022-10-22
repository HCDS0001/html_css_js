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
    switch (selectanalista) {
        case optionanalista[1].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionanalista[2].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionanalista[3].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionanalista[4].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionanalista[5].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
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

function selectajuste() {
    let selectajuste = classajuste[1].value
    switch (selectajuste) {
        case optionajuste[1].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionajuste[2].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionajuste[3].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionajuste[4].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionajuste[5].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
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

function selectplanilhamento() {
    let selectplanilhamento = classplanilhamento[1].value
    switch (selectplanilhamento) {
        case optionplanilhamento[1].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[2].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[3].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[4].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[5].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[6].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[7].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[7].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[8].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[9].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[10].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[11].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[12].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[13].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[14].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[15].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[16].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[17].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[18].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[19].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[20].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[21].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[22].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[23].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[24].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[25].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[26].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[27].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[28].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[29].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[30].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[31].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[32].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[33].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[34].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[35].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[36].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[37].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[38].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[39].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[40].value:
            iddadosdopedido.style.display = displaynone
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[41].value:
            iddadosdopedido.style.display = displaynone
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[42].value:
            iddadosdopedido.style.display = displaynone
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionplanilhamento[43].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
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

function selectexecutivo() {
    let selectexecutivo = classexecutivo[1].value
    switch (selectexecutivo) {
        case optionexecutivo[1].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
            break;
        case optionexecutivo[2].value:
            iddadosdopedido.style.display = displayblock
            idpara.innerHTML = cliquegerar
            idcc.innerHTML = cliquegerar
            idassunto.innerHTML = cliquegerar
            idcorpo.innerHTML = cliquegerar
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

function selectrepresentante() {
    let selectclassnumerorepresentante = classnumerorepresentante[1].value
    switch (selectclassnumerorepresentante) {
        case optionnumerorepresentante[0].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[0].value)
            break;
        case optionnumerorepresentante[1].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[1].value)
            break;
        case optionnumerorepresentante[2].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[2].value)
            break;
        case optionnumerorepresentante[3].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[3].value)
            break;
        case optionnumerorepresentante[4].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[4].value)
            break;
        case optionnumerorepresentante[5].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[5].value)
            break;
        case optionnumerorepresentante[6].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[6].value)
            break;
        case optionnumerorepresentante[7].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[7].value)
            break;
        case optionnumerorepresentante[8].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[8].value)
            break;
        case optionnumerorepresentante[9].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[9].value)
            break;
        case optionnumerorepresentante[10].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[10].value)
            break;
        case optionnumerorepresentante[11].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[11].value)
            break;
        case optionnumerorepresentante[12].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[12].value)
            break;
        case optionnumerorepresentante[13].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[13].value)
            break;
        case optionnumerorepresentante[14].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[14].value)
            break;
        case optionnumerorepresentante[15].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[15].value)
            break;
        case optionnumerorepresentante[16].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[16].value)
            break;
        case optionnumerorepresentante[17].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[17].value)
            break;
        case optionnumerorepresentante[18].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[18].value)
            break;
        case optionnumerorepresentante[19].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[19].value)
            break;
        case optionnumerorepresentante[20].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[20].value)
            break;
        case optionnumerorepresentante[21].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[21].value)
            break;
        case optionnumerorepresentante[22].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[22].value)
            break;
        case optionnumerorepresentante[23].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[23].value)
            break;
        case optionnumerorepresentante[24].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[24].value)
            break;
        case optionnumerorepresentante[25].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[25].value)
            break;
        case optionnumerorepresentante[26].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[26].value)
            break;
        case optionnumerorepresentante[27].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[27].value)
            break;
        case optionnumerorepresentante[28].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[28].value)
            break;
        case optionnumerorepresentante[29].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[29].value)
            break;
        case optionnumerorepresentante[30].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[30].value)
            break;
        case optionnumerorepresentante[31].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[31].value)
            break;
        case optionnumerorepresentante[32].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[32].value)
            break;
        case optionnumerorepresentante[33].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[33].value)
            break;
        case optionnumerorepresentante[34].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[34].value)
            break;
        case optionnumerorepresentante[35].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[35].value)
            break;
        case optionnumerorepresentante[36].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[36].value)
            break;
        case optionnumerorepresentante[37].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[37].value)
            break;
        case optionnumerorepresentante[38].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[38].value)
            break;
        case optionnumerorepresentante[39].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[39].value)
            break;
        case optionnumerorepresentante[40].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[40].value)
            break;
        case optionnumerorepresentante[41].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[41].value)
            break;
        case optionnumerorepresentante[42].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[42].value)
            break;
        case optionnumerorepresentante[43].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[43].value)
            break;
        case optionnumerorepresentante[44].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[44].value)
            break;
        case optionnumerorepresentante[45].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[45].value)
            break;
        case optionnumerorepresentante[46].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[46].value)
            break;
        case optionnumerorepresentante[47].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[47].value)
            break;
        case optionnumerorepresentante[48].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[48].value)
            break;
        case optionnumerorepresentante[49].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[49].value)
            break;
        case optionnumerorepresentante[50].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[50].value)
            break;
        case optionnumerorepresentante[51].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[51].value)
            break;
        case optionnumerorepresentante[52].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[52].value)
            break;
        case optionnumerorepresentante[53].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[53].value)
            break;
        case optionnumerorepresentante[54].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[54].value)
            break;
        case optionnumerorepresentante[55].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[55].value)
            break;
        case optionnumerorepresentante[56].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[56].value)
            break;
        case optionnumerorepresentante[57].value:
            idrepresentante.setAttribute(valueattribute,optionnomerepresentante[57].value)
            break;
        default:
            idpara.innerHTML = problem
            idcc.innerHTML = problem
            idassunto.innerHTML = problem
            idcorpo.innerHTML = problem
            break;
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
            switch (selectanalista) {
                case optionanalista[1].value:
                    idpara.innerHTML = `${selectidfunction} - ${selectanalista}`
                    idcc.innerHTML = `${selectidfunction} - ${selectanalista}`
                    idassunto.innerHTML = `${selectidfunction} - ${selectanalista}`
                    idcorpo.innerHTML = `${selectidfunction} - ${selectanalista}`
                    break;
                case optionanalista[2].value:
                    idpara.innerHTML = `${selectidfunction} - ${selectanalista}`
                    idcc.innerHTML = `${selectidfunction} - ${selectanalista}`
                    idassunto.innerHTML = `${selectidfunction} - ${selectanalista}`
                    idcorpo.innerHTML = `${selectidfunction} - ${selectanalista}`
                    break;
                case optionanalista[3].value:
                    idpara.innerHTML = `${selectidfunction} - ${selectanalista}`
                    idcc.innerHTML = `${selectidfunction} - ${selectanalista}`
                    idassunto.innerHTML = `${selectidfunction} - ${selectanalista}`
                    idcorpo.innerHTML = `${selectidfunction} - ${selectanalista}`
                    break;
                case optionanalista[4].value:
                    idpara.innerHTML = `${selectidfunction} - ${selectanalista}`
                    idcc.innerHTML = `${selectidfunction} - ${selectanalista}`
                    idassunto.innerHTML = `${selectidfunction} - ${selectanalista}`
                    idcorpo.innerHTML = `${selectidfunction} - ${selectanalista}`
                    break;
                case optionanalista[5].value:
                    idpara.innerHTML = `${selectidfunction} - ${selectanalista}`
                    idcc.innerHTML = `${selectidfunction} - ${selectanalista}`
                    idassunto.innerHTML = `${selectidfunction} - ${selectanalista}`
                    idcorpo.innerHTML = `${selectidfunction} - ${selectanalista}`
                    break;
                default:
                    idpara.innerHTML = optionanalista[0].value
                    idcc.innerHTML = optionanalista[0].value
                    idassunto.innerHTML = optionanalista[0].value
                    idcorpo.innerHTML = optionanalista[0].value
                    break;
            }
            break;
        case optionfunction[2].value:
            let selectajuste = classajuste[1].value
            switch (selectajuste) {
                case optionajuste[1].value:
                    idpara.innerHTML = `${selectidfunction} - ${selectajuste}`
                    idcc.innerHTML = `${selectidfunction} - ${selectajuste}`
                    idassunto.innerHTML = `${selectidfunction} - ${selectajuste}`
                    idcorpo.innerHTML = `${selectidfunction} - ${selectajuste}`
                    break;
                case optionajuste[2].value:
                    idpara.innerHTML = `${selectidfunction} - ${selectajuste}`
                    idcc.innerHTML = `${selectidfunction} - ${selectajuste}`
                    idassunto.innerHTML = `${selectidfunction} - ${selectajuste}`
                    idcorpo.innerHTML = `${selectidfunction} - ${selectajuste}`
                    break;
                case optionajuste[3].value:
                    idpara.innerHTML = `${selectidfunction} - ${selectajuste}`
                    idcc.innerHTML = `${selectidfunction} - ${selectajuste}`
                    idassunto.innerHTML = `${selectidfunction} - ${selectajuste}`
                    idcorpo.innerHTML = `${selectidfunction} - ${selectajuste}`
                    break;
                case optionajuste[4].value:
                    idpara.innerHTML = `${selectidfunction} - ${selectajuste}`
                    idcc.innerHTML = `${selectidfunction} - ${selectajuste}`
                    idassunto.innerHTML = `${selectidfunction} - ${selectajuste}`
                    idcorpo.innerHTML = `${selectidfunction} - ${selectajuste}`
                    break;
                case optionajuste[5].value:
                    idpara.innerHTML = `${selectidfunction} - ${selectajuste}`
                    idcc.innerHTML = `${selectidfunction} - ${selectajuste}`
                    idassunto.innerHTML = `${selectidfunction} - ${selectajuste}`
                    idcorpo.innerHTML = `${selectidfunction} - ${selectajuste}`
                    break;
                default:
                    idpara.innerHTML = optionajuste[0].value
                    idcc.innerHTML = optionajuste[0].value
                    idassunto.innerHTML = optionajuste[0].value
                    idcorpo.innerHTML = optionajuste[0].value
                    break;
            }
            break;
        case optionfunction[3].value:
                let selectplanilhamento = classplanilhamento[1].value
                switch (selectplanilhamento) {
                    case optionplanilhamento[1].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[2].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[3].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[4].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[5].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[6].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[7].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[8].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[9].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[10].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[11].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[12].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[13].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[14].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[15].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[16].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[17].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[18].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[19].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[20].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[21].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[22].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[23].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[24].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[25].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[26].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[27].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[28].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[29].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[30].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[31].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[32].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[33].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[34].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[35].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[36].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[37].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[38].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[39].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[40].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                    break;
                    case optionplanilhamento[41].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[42].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                    case optionplanilhamento[43].value:
                        idpara.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcc.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idassunto.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        idcorpo.innerHTML = `${selectidfunction} - ${selectplanilhamento}`
                        break;
                }
                break;
        case optionfunction[4].value:
            let selectexecutivo = classexecutivo[1].value
            switch (selectexecutivo) {
                case optionexecutivo[1].value:
                    idpara.innerHTML = `${selectidfunction} - ${selectexecutivo}`
                    idcc.innerHTML = `${selectidfunction} - ${selectexecutivo}`
                    idassunto.innerHTML = `${selectidfunction} - ${selectexecutivo}`
                    idcorpo.innerHTML = `${selectidfunction} - ${selectexecutivo}`
                    break;
                case optionexecutivo[2].value:
                    idpara.innerHTML = `${selectidfunction} - ${selectexecutivo}`
                    idcc.innerHTML = `${selectidfunction} - ${selectexecutivo}`
                    idassunto.innerHTML = `${selectidfunction} - ${selectexecutivo}`
                    idcorpo.innerHTML = `${selectidfunction} - ${selectexecutivo}`
                    break;
                default:
                    idpara.innerHTML = optionexecutivo[0].value
                    idcc.innerHTML = optionexecutivo[0].value
                    idassunto.innerHTML = optionexecutivo[0].value
                    idcorpo.innerHTML = optionexecutivo[0].value
                    break;
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