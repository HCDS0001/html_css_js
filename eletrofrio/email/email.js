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
    {numero:'001', nome:'Venda Direta Curitiba', emailcompra:'indefinido', emailcomercial:'email'},
    {numero:'004', nome:'Tecnimet', emailcompra:'marcosm@tecnimet.com; div.comercial@tecnimet.com'},
    {numero:'011', nome:'FG', emailcompra:'nathan@fgrefrigeracao.com.br'},
    {numero:'016', nome:'Lobo', emailcompra:'loboinstalacoescomerciais@yahoo.com.br'},
    {numero:'018', nome:'Silva Filho', emailcompra:'silva.filho@ymail.com'},
    {numero:'024', nome:'Mallet', emailcompra:'helcio@mallet.net.br'},
    {numero:'035', nome:'Clecio', emailcompra:'indefinido'},
    {numero:'057', nome:'Refripan', emailcompra:'nidia.roza@hotmail.com'},
    {numero:'062', nome:'M Weidner', emailcompra:'marceloweidner@globo.com'},
    {numero:'067', nome:'Tortelli', emailcompra:'torteli@torteli.com.br'},
    {numero:'070', nome:'Venda Direta São Paulo', emailcompra:'oswaldocassan@gmail.com'},
    {numero:'077', nome:'Llampe Frio PR', emailcompra:'llampefrio@llampefrio.com.br'},
    {numero:'082', nome:'HB', emailcompra:'hb-bene@uol.com.br'},
    {numero:'087', nome:'Baldissera', emailcompra:'baldissera@redesul.com.br'},
    {numero:'093', nome:'Gurgel', emailcompra:'gurgel61@terra.com.br'},
    {numero:'094', nome:'Luiz Nachbar', emailcompra:'indefinido'},
    {numero:'096', nome:'Kalliel', emailcompra:'kallielprojetos@gmail.com'},
    {numero:'097', nome:'DE', emailcompra:'daniel@deequipamentos.com.br; vendas@deequipamentos.com.br'},
    {numero:'101', nome:'Da Roz', emailcompra:'douglas@darozrepresentacoes.com.br; darozrep@gmail.com'},
    {numero:'102', nome:'Superbrasil', emailcompra:'luiz@superb.com.br'},
    {numero:'106', nome:'Vitoria', emailcompra:'jeffersondsrf@uol.com.br; jucelito@msn.com'},
    {numero:'112', nome:'Ronald', emailcompra:'ronaldioliveira@ronaldmaquinas.com.br'},
    {numero:'114', nome:'Scallet', emailcompra:'indefinido'},
    {numero:'115', nome:'Guide', emailcompra:'guidi@guidisc.com.br; rinaldo@guidisc.com.br'},
    {numero:'118', nome:'Fast Sul', emailcompra:'mbariano@fastsul.com'},
    {numero:'120', nome:'Rio Fast', emailcompra:'riofasteletro@yahoo.com.br'},
    {numero:'121', nome:'Eletrofast', emailcompra:'eletrofast@yahoo.com.br; luizamorimp@yahoo.com.br'},
    {numero:'182', nome:'Afonso Araujo', emailcompra:'afonsovargasaraujo@gmail.com'},
    {numero:'187', nome:'ETCO', emailcompra:'etcorep@terra.com.br'},
    {numero:'189', nome:'Refriged', emailcompra:'ednilson.eletrofrio@gmail.com'},
    {numero:'190', nome:'A&F', emailcompra:'fernando@aefbolsadenegocios.com.br'},
    {numero:'191', nome:'Produtiva', emailcompra:'michel@produtivarepresentacoes.com.br'},
    {numero:'193', nome:'Llampe Frio SC', emailcompra:'llampefrio@llampefrio.com.br'},
    {numero:'195', nome:'DNC Dealer', emailcompra:'dinar@dealerrs.com.br'},
    {numero:'196', nome:'Brites', emailcompra:'vendas@brites.srv.br'},
    {numero:'198', nome:'Euro', emailcompra:'equipamentoseuro@gmail.com; jacksonkiatkoski@gmail.com'},
    {numero:'199', nome:'Erco', emailcompra:'mario.erco1@gmail.com'},
    {numero:'202', nome:'Eder Mathias', emailcompra:'eder.mathias@uol.com.br'},
    {numero:'203', nome:'HCM', emailcompra:'hamilton@hcm.com.br'},
    {numero:'207', nome:'Brava', emailcompra:'eac_cunha@yahoo.com.br'},
    {numero:'213', nome:'Mercato', emailcompra:'denis@mercatorepresentacoes.com.br'},
    {numero:'217', nome:'Cold Import', emailcompra:'jlescano@coldimport.com.pe'},
    {numero:'218', nome:'Cencosud', emailcompra:'indefinido'},
    {numero:'223', nome:'Hercold', emailcompra:'fastlest@uol.com.br'},
    {numero:'226', nome:'EC', emailcompra:'leonardomoura@record-maq.com.br'},
    {numero:'227', nome:'Edeval (MIL)', emailcompra:'edevalvendas@gmail.com'},
    {numero:'228', nome:'JPC', emailcompra:'alexandre@pontodarefrigeracao.com.br'},
    {numero:'229', nome:'Wesley Dal Pozzo', emailcompra:'dlpz@onda.com.br'},
    {numero:'230', nome:'Ergosystem', emailcompra:'ergosystem.comercial@outlook.com'},
    {numero:'231', nome:'SM', emailcompra:'indefinido'},
    {numero:'232', nome:'S&I', emailcompra:'geraldo@siautomacao.com.br; carol@siautomacao.com.br; alexandre@siautomacao.com.br'},
    {numero:'233', nome:'Control y Sostenibilidad', emailcompra:'indefinido'},
    {numero:'234', nome:'Aarci', emailcompra:'juan.avila@aarci.co; info@aarci.co'},
    {numero:'236', nome:'T&G', emailcompra:'ed_wanderson@yahoo.com.br'},
    {numero:'237', nome:'Rematec', emailcompra:'alessandra@remaqbh.com.br'},
    {numero:'238', nome:'FMG', emailcompra:' fmg_representacoes@hotmail.com'},
    {numero:'239', nome:'PSK', emailcompra:'indefinido'},
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