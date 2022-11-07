let idfunçao = document.querySelector("#idfunçao")
let idtipo = document.querySelector("#idtipo")
let classtipo = document.querySelectorAll(".classtipo")
let idnumerorepresentante = document.querySelector("#idnumerorepresentante")
let idlimpatipodeemail = document.querySelector("#idlimpatipodeemail")


let valueattribute = "value"
let classattribute = "class"
let displaynone = "none"
let displayinline_block = "inline-block"
let selectoption = "(SELECIONE UMA OPÇÃO)"
let problem = "problem"

let email = [
    {funçao:selectoption, tipo:selectoption},
    {area:"Comercial", funçao:"Analista", grupo:"Analista", tipo:"Liberação Parcial"},
    {area:"Comercial", funçao:"Analista", grupo:"Analista", tipo:"Liberação Total"},
    {area:"Comercial", funçao:"Analista", grupo:"Analista", tipo:"Linhas Atualizadas"},
    {area:"Comercial", funçao:"Analista", grupo:"Analista", tipo:"Feito"},
    {area:"Comercial", funçao:"Analista", grupo:"Analista", tipo:"Atualizar"},
    {area:"Comercial", funçao:"Ajuste", grupo:"Ajuste", tipo:"Dúvidas"},
    {area:"Comercial", funçao:"Ajuste", grupo:"Ajuste", tipo:"Aguardando Dúvidas"},
    {area:"Comercial", funçao:"Ajuste", grupo:"Ajuste", tipo:"Arquivos de Ajuste"},
    {area:"Comercial", funçao:"Ajuste", grupo:"Ajuste", tipo:"Aguardando Conferência"},
    {area:"Comercial", funçao:"Ajuste", grupo:"Ajuste", tipo:"Alteração"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Planilhamento", tipo:"Planilhamento Total"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Planilhamento", tipo:"Planilhamento Parcial"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Planilhamento", tipo:"Planilhamento Alteração"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Dúvida", tipo:"Dúvida Geral"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Dúvida", tipo:"Dúvida de Porta Seccional"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Dúvida", tipo:"Aguardando Dúvida"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Cotação", tipo:"Cotação de Porta Walk-In"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Cotação", tipo:"Cotação de Porta Seccional"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Cotação", tipo:"Cotação de Portal de Selamento"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Cotação", tipo:"Cotação de Niveladora de Doca"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Cotação", tipo:"Cotação de Porta Rápida"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Cotação", tipo:"Cotação de Porta Automática"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Cotação", tipo:"Cotação de Porta Beer Cave"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Cotação", tipo:"Cotação de Visor Corrediço"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Cotação", tipo:"Cotação de Porta Vai e Vem Isolada"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Cotação", tipo:"Cotação de Porta Vai e Vem de Tamanho Especial"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Cotação", tipo:"Cotação de Resistência"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Cotação", tipo:"Cotação de Termostato"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Compra", tipo:"Compra de Porta Walk-In"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Compra", tipo:"Compra de Porta Seccional"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Compra", tipo:"Compra de Portal de Selamento"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Compra", tipo:"Compra de Niveladora de Doca"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Compra", tipo:"Compra de Porta Rápida"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Compra", tipo:"Compra de Porta Automática"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Compra", tipo:"Compra de Porta Beer Cave"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Compra", tipo:"Compra de Visor Corrediço"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Compra", tipo:"Compra de Porta Vai e Vem Isolada"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Compra", tipo:"Compra de Porta Vai e Vem de Tamanho Especial"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Compra", tipo:"Compra de Resistência"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Compra", tipo:"Compra de Termostato"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Suporte TI", tipo:"Geral"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Suporte TI", tipo:"Baan - Geral"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Suporte TI", tipo:"Baan - Inclusão de Item"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Suporte TI", tipo:"Baan - Exclusão de Item"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Suporte TI", tipo:"Baan - Troca de Item"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Suporte TI", tipo:"Baan - Exclusão de Alfa"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Suporte TI", tipo:"Baan - Remoção de Alfa"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Suporte TI", tipo:"Baan - Estorno de Alfa"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Suporte TI", tipo:"Baan - Derrubar Usuário"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Suporte TI", tipo:"Baan - Liberação de Tela"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Suporte TI", tipo:"SIP - Geral"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Suporte TI", tipo:"SIP - Liberação para Edição de Painéis Altos"},
    {area:"Continnum", funçao:"Planilhamento", grupo:"Encaminhar", tipo:"Encaminhar"},
    {area:"Continnum", funçao:"Executivo", grupo:"Executivo", tipo:"Pré Projeto"},
    {area:"Continnum", funçao:"Executivo", grupo:"Executivo", tipo:"Projeto Executivo"},
    {area:"Externo", funçao:"Representante", grupo:"Representante", tipo:"Representante"}
]

let representante = [
    {numero:"001", nome:"Venda Direta Curitiba", emailcliente:"indefinido", emailcomercial:"email"},
    {numero:"004", nome:"Tecnimet", emailcliente:"marcosm@tecnimet.com; div.comercial@tecnimet.com", emailcomercial:"email"},
    {numero:"011", nome:"FG", emailcliente:"nathan@fgrefrigeracao.com.br", emailcomercial:"email"},
    {numero:"016", nome:"Lobo", emailcliente:"loboinstalacoescomerciais@yahoo.com.br", emailcomercial:"email"},
    {numero:"018", nome:"Silva Filho", emailcliente:"silva.filho@ymail.com", emailcomercial:"email"},
    {numero:"024", nome:"Mallet", emailcliente:"helcio@mallet.net.br", emailcomercial:"email"},
    {numero:"035", nome:"Clecio", emailcliente:"indefinido", emailcomercial:"email"},
    {numero:"057", nome:"Refripan", emailcliente:"nidia.roza@hotmail.com", emailcomercial:"email"},
    {numero:"062", nome:"M Weidner", emailcliente:"marceloweidner@globo.com", emailcomercial:"email"},
    {numero:"067", nome:"Tortelli", emailcliente:"torteli@torteli.com.br", emailcomercial:"email"},
    {numero:"070", nome:"Venda Direta São Paulo", emailcliente:"oswaldocassan@gmail.com", emailcomercial:"email"},
    {numero:"077", nome:"Llampe Frio PR", emailcliente:"llampefrio@llampefrio.com.br", emailcomercial:"email"},
    {numero:"082", nome:"HB", emailcliente:"hb-bene@uol.com.br", emailcomercial:"email"},
    {numero:"087", nome:"Baldissera", emailcliente:"baldissera@redesul.com.br", emailcomercial:"email"},
    {numero:"093", nome:"Gurgel", emailcliente:"gurgel61@terra.com.br", emailcomercial:"email"},
    {numero:"094", nome:"Luiz Nachbar", emailcliente:"indefinido", emailcomercial:"email"},
    {numero:"096", nome:"Kalliel", emailcliente:"kallielprojetos@gmail.com", emailcomercial:"email"},
    {numero:"097", nome:"DE", emailcliente:"daniel@deequipamentos.com.br; vendas@deequipamentos.com.br", emailcomercial:"email"},
    {numero:"101", nome:"Da Roz", emailcliente:"douglas@darozrepresentacoes.com.br; darozrep@gmail.com", emailcomercial:"email"},
    {numero:"102", nome:"Superbrasil", emailcliente:"luiz@superb.com.br", emailcomercial:"email"},
    {numero:"106", nome:"Vitoria", emailcliente:"jeffersondsrf@uol.com.br; jucelito@msn.com", emailcomercial:"email"},
    {numero:"112", nome:"Ronald", emailcliente:"ronaldioliveira@ronaldmaquinas.com.br", emailcomercial:"email"},
    {numero:"114", nome:"Scallet", emailcliente:"indefinido", emailcomercial:"email"},
    {numero:"115", nome:"Guide", emailcliente:"guidi@guidisc.com.br; rinaldo@guidisc.com.br", emailcomercial:"email"},
    {numero:"118", nome:"Fast Sul", emailcliente:"mbariano@fastsul.com", emailcomercial:"email"},
    {numero:"120", nome:"Rio Fast", emailcliente:"riofasteletro@yahoo.com.br", emailcomercial:"email"},
    {numero:"121", nome:"Eletrofast", emailcliente:"eletrofast@yahoo.com.br; luizamorimp@yahoo.com.br", emailcomercial:"email"},
    {numero:"182", nome:"Afonso Araujo", emailcliente:"afonsovargasaraujo@gmail.com"},
    {numero:"187", nome:"ETCO", emailcliente:"etcorep@terra.com.br", emailcomercial:"email"},
    {numero:"189", nome:"Refriged", emailcliente:"ednilson.eletrofrio@gmail.com", emailcomercial:"email"},
    {numero:"190", nome:"A&F", emailcliente:"fernando@aefbolsadenegocios.com.br", emailcomercial:"email"},
    {numero:"191", nome:"Produtiva", emailcliente:"michel@produtivarepresentacoes.com.br", emailcomercial:"email"},
    {numero:"193", nome:"Llampe Frio SC", emailcliente:"llampefrio@llampefrio.com.br", emailcomercial:"email"},
    {numero:"195", nome:"DNC Dealer", emailcliente:"dinar@dealerrs.com.br", emailcomercial:"email"},
    {numero:"196", nome:"Brites", emailcliente:"vendas@brites.srv.br", emailcomercial:"email"},
    {numero:"198", nome:"Euro", emailcliente:"equipamentoseuro@gmail.com; jacksonkiatkoski@gmail.com", emailcomercial:"email"},
    {numero:"199", nome:"Erco", emailcliente:"mario.erco1@gmail.com", emailcomercial:"email"},
    {numero:"202", nome:"Eder Mathias", emailcliente:"eder.mathias@uol.com.br", emailcomercial:"email"},
    {numero:"203", nome:"HCM", emailcliente:"hamilton@hcm.com.br", emailcomercial:"email"},
    {numero:"207", nome:"Brava", emailcliente:"eac_cunha@yahoo.com.br", emailcomercial:"email"},
    {numero:"213", nome:"Mercato", emailcliente:"denis@mercatorepresentacoes.com.br", emailcomercial:"email"},
    {numero:"217", nome:"Cold Import", emailcliente:"jlescano@coldimport.com.pe", emailcomercial:"email"},
    {numero:"218", nome:"Cencosud", emailcliente:"indefinido", emailcomercial:"email"},
    {numero:"223", nome:"Hercold", emailcliente:"fastlest@uol.com.br", emailcomercial:"email"},
    {numero:"226", nome:"EC", emailcliente:"leonardomoura@record-maq.com.br", emailcomercial:"email"},
    {numero:"227", nome:"Edeval (MIL)", emailcliente:"edevalvendas@gmail.com", emailcomercial:"email"},
    {numero:"228", nome:"JPC", emailcliente:"alexandre@pontodarefrigeracao.com.br", emailcomercial:"email"},
    {numero:"229", nome:"Wesley Dal Pozzo", emailcliente:"dlpz@onda.com.br", emailcomercial:"email"},
    {numero:"230", nome:"Ergosystem", emailcliente:"ergosystem.comercial@outlook.com", emailcomercial:"email"},
    {numero:"231", nome:"SM", emailcliente:"indefinido", emailcomercial:"email"},
    {numero:"232", nome:"S&I", emailcliente:"geraldo@siautomacao.com.br; carol@siautomacao.com.br; alexandre@siautomacao.com.br", emailcomercial:"email"},
    {numero:"233", nome:"Control y Sostenibilidad", emailcliente:"indefinido", emailcomercial:"email"},
    {numero:"234", nome:"Aarci", emailcliente:"juan.avila@aarci.co; info@aarci.co", emailcomercial:"email"},
    {numero:"236", nome:"T&G", emailcliente:"ed_wanderson@yahoo.com.br", emailcomercial:"email"},
    {numero:"237", nome:"Rematec", emailcliente:"alessandra@remaqbh.com.br", emailcomercial:"email"},
    {numero:"238", nome:"FMG", emailcliente:" fmg_representacoes@hotmail.com", emailcomercial:"email"},
    {numero:"239", nome:"PSK", emailcliente:"indefinido", emailcomercial:"email"},
]

let ano = [
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22"
]

let mes = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
]

let grupo = [
    {grupo:"Continuum", nome:"Planilhamento para Produção", email:"PLANIC.F@uhygb1yu6fxo7a.onmicrosoft.com"},
    {grupo:"Continuum", nome:"Planilhamento", email:"planilhamento@continuum.ind.br"},
    {grupo:"Continuum", nome:"Projeto Executivo", email:"projetos@continuum.ind.br"},
]

let funcionario = [
    {funçao:"Analista", nome:"Alexandre Ribeiro", email:"alexandre.ribeiro@eletrofrio.com.br"},
    {funçao:"Analista", nome:"João Cláudio", email:"jclaudio@eletrofrio.com.br"},
    {funçao:"Analista", nome:"Luiz Eduardo", email:"luiz.eduardo@eletrofrio.com.br"},
    {funçao:"Analista", nome:"Nilson", email:"nilson@eletrofrio.com.br"},
    {funçao:"Analista", nome:"Suelen", email:"suelen.assis@eletrofrio.com.br"},
    {funçao:"Ajuste", nome:"Cláudia", email:"claudia.carvalho@eletrofrio.com.br"},
    {funçao:"Ajuste", nome:"Cleber", email:"cleber.medeiros@eletrofrio.com.br"},
    {funçao:"Ajuste", nome:"Ellen", email:"ellen@eletrofrio.com.br"},
    {funçao:"Ajuste", nome:"Letícia", email:"leticia.karoline@eletrofrio.com.br"},
    {funçao:"Ajuste", nome:"Luiz Fernando Gonsalvez", email:"luiz.goncalves@eletrofrio.com.br"},
    {funçao:"Planilhamento", nome:"Amarildo", email:"amarildo.cruz@eletrofrio.com.br"},
    {funçao:"Planilhamento", nome:"Gabriel", email:"gabriel.aguiar@eletrofrio.com.br"},
    {funçao:"Planilhamento", nome:"Henrique", email:"henrique.souza@eletrofrio.com.br"},
    {funçao:"Executivo", nome:"Bruno", email:"bruno.garcia@eletrofrio.com.br"},
    {funçao:"Executivo", nome:"Carlos", email:"carlos.margon@eletrofrio.com.br"},
    {funçao:"Executivo", nome:"Rubens", email:"rubens@eletrofrio.com.br"},
    {funçao:"Executivo", nome:"Susan", email:"susan.colsani@eletrofrio.com.br"},
    {funçao:"Liderança", nome:"Carla", email:"carlaadriana@eletrofrio.com.br"},
    {funçao:"Liderança", nome:"Roney", email:"roney@eletrofrio.com.br"},
    {funçao:"Liderança", nome:"Alexandre Cavagnoli", email:"alexandre.cavagnoli@eletrofrio.com.br"},
    {funçao:"Liderança", nome:"Leandro Vianna", email:"leandro.vianna@eletrofrio.com.br"},
    {funçao:"Liderança", nome:"Simone", email:"simone@eletrofrio.com.br"},
]

let resultado = [
    {descriçao: "Para"},
    {descriçao: "Cc"},
    {descriçao: "Assunto"},
    {descriçao: "Corpo do E-mail"}
]

/* Tipo de E-mail */

let quantidadeemail = email.length
let quantidadeoptionrepresentante = representante.length

document.body.onload = hidetipo

function hidetipo() {
    classtipo[0].style.display = displaynone
    classtipo[1].style.display = displaynone 
}

let email2 = email.slice()
email2.unshift(0)
let funçao = []
for (let number = 0; number < quantidadeemail; number++) {
    if (email[number].funçao != email2[number].funçao) {funçao.push(email[number])}
}

funçao.map((el)=>{
    let optionfunçao = document.createElement("option")
    let textofunçao = document.createTextNode(el.funçao)
    optionfunçao.appendChild(textofunçao)
    optionfunçao.setAttribute(valueattribute, el.funçao)
    idfunçao.insertAdjacentElement("beforeend",optionfunçao)}
)

function tipo() {
    if (idfunçao.value == selectoption) {
        hidetipo()
    } else {
        classtipo[0].style.display = displayinline_block
        classtipo[1].style.display = displayinline_block
    }
    while (idtipo.hasChildNodes()) {idtipo.removeChild(idtipo.firstChild)}
    let emailtipo = email.filter((el)=>el.funçao == idfunçao.value || el.funçao == selectoption)
    emailtipo.map((el)=>{
        let optiontipo = document.createElement("option")
        let textotipo = document.createTextNode(el.tipo)
        optiontipo.appendChild(textotipo)
        optiontipo.setAttribute(classattribute, "classoptiontipo")
        idtipo.insertAdjacentElement("beforeend",optiontipo)
    })
}

idfunçao.addEventListener("change", tipo)

/* Dados do Pedido */

for (let number = 0; number < quantidadeoptionrepresentante; number++) {
    let optionrepresentante = document.createElement('option')
    let textoptionrepresentante = document.createTextNode(representante[number].numero)
    optionrepresentante.appendChild(textoptionrepresentante)
    optionrepresentante.setAttribute('value',representante[number].numero)
    idnumerorepresentante.insertAdjacentElement('beforeend',optionrepresentante)
}

idnomerepresentante.setAttribute(valueattribute,representante[0].nome)

function nomerepresentante() {
    for (let number = 0; number < quantidadeoptionrepresentante; number++) {
        switch (idnumerorepresentante.value) {
            case representante[number].numero:
                idnomerepresentante.setAttribute(valueattribute,representante[number].nome)
                number = quantidadeoptionrepresentante
                break;
            default:
                break;
        }
    }
}

idnumerorepresentante.addEventListener("change", nomerepresentante)





function limpatipodeemail() {
    idfunçao.value = selectoption
    idtipo.value = selectoption
    hidetipo()
    while (idtipo.hasChildNodes()) {idtipo.removeChild(idtipo.firstChild)}
}

idlimpatipodeemail.addEventListener("click", limpatipodeemail)