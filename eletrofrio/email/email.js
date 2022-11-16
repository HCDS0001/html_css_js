let idfunçao = document.querySelector("#idfunçao")
let idtipo = document.querySelector("#idtipo")
let classtipo = document.querySelectorAll(".classtipo")
let iddadosdopedido = document.querySelector("#iddadosdopedido")
let idnomerepresentante = document.querySelector("#idnomerepresentante")
let idnumerorepresentante = document.querySelector("#idnumerorepresentante")
let idlimpatipodeemail = document.querySelector("#idlimpatipodeemail")
let idoptionano = document.querySelector("#idoptionano")
let idoptionmes = document.querySelector("#idoptionmes")
let idlimpadadosdepedido = document.querySelector("#idlimpadadosdepedido")
let idemailspara = document.querySelector("#idemailspara")
let idemailscc = document.querySelector("#idemailscc")
let idlimpaemailsselecionados = document.querySelector("#idlimpaemailsselecionados")

let optiontag = "option"
let inputtag = "input"
let labeltag = "label"
let brtag = "br"
let summarytag = "summary"
let valueattribute = "value"
let idattribute = "id"
let classattribute = "class"
let typeattribute = "type"
let checkboxattribute = "checkbox"
let forattribute = "for"
let displaynone = "none"
let displayinline_block = "inline-block"
let displayblock = "block"

let selectoption = "(SELECIONE UMA OPÇÃO)"
let sim = "sim"
let nao = "não"
let classsempedido = "classsempedido"

let email = [
    {funçao:selectoption, tipo:selectoption, dadosdopedido:nao},
    {area:"Comercial", funçao:"Analista", subgrupo:"Analista", tipo:"Liberação Parcial", dadosdopedido:sim},
    {area:"Comercial", funçao:"Analista", subgrupo:"Analista", tipo:"Liberação Total", dadosdopedido:sim},
    {area:"Comercial", funçao:"Analista", subgrupo:"Analista", tipo:"Linhas Atualizadas", dadosdopedido:sim},
    {area:"Comercial", funçao:"Analista", subgrupo:"Analista", tipo:"Feito", dadosdopedido:sim},
    {area:"Comercial", funçao:"Analista", subgrupo:"Analista", tipo:"Atualizar", dadosdopedido:sim},
    {area:"Comercial", funçao:"Ajuste", subgrupo:"Ajuste", tipo:"Dúvidas", dadosdopedido:sim},
    {area:"Comercial", funçao:"Ajuste", subgrupo:"Ajuste", tipo:"Aguardando Dúvidas", dadosdopedido:sim},
    {area:"Comercial", funçao:"Ajuste", subgrupo:"Ajuste", tipo:"Arquivos de Ajuste", dadosdopedido:sim},
    {area:"Comercial", funçao:"Ajuste", subgrupo:"Ajuste", tipo:"Aguardando Conferência", dadosdopedido:sim},
    {area:"Comercial", funçao:"Ajuste", subgrupo:"Ajuste", tipo:"Alteração", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Planilhamento", tipo:"Planilhamento Total", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Planilhamento", tipo:"Planilhamento Parcial", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Planilhamento", tipo:"Planilhamento Alteração", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Dúvida", tipo:"Dúvida Geral", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Dúvida", tipo:"Dúvida de Porta Seccional", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Dúvida", tipo:"Aguardando Dúvida", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Cotação", tipo:"Cotação de Porta Walk-In", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Cotação", tipo:"Cotação de Porta Seccional", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Cotação", tipo:"Cotação de Portal de Selamento", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Cotação", tipo:"Cotação de Niveladora de Doca", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Cotação", tipo:"Cotação de Porta Rápida", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Cotação", tipo:"Cotação de Porta Automática", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Cotação", tipo:"Cotação de Porta Beer Cave", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Cotação", tipo:"Cotação de Visor Corrediço", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Cotação", tipo:"Cotação de Porta Vai e Vem Isolada", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Cotação", tipo:"Cotação de Porta Vai e Vem de Tamanho Especial", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Cotação", tipo:"Cotação de Resistência", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Cotação", tipo:"Cotação de Termostato", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Compra", tipo:"Compra de Porta Walk-In", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Compra", tipo:"Compra de Porta Seccional", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Compra", tipo:"Compra de Portal de Selamento", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Compra", tipo:"Compra de Niveladora de Doca", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Compra", tipo:"Compra de Porta Rápida", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Compra", tipo:"Compra de Porta Automática", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Compra", tipo:"Compra de Porta Beer Cave", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Compra", tipo:"Compra de Visor Corrediço", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Compra", tipo:"Compra de Porta Vai e Vem Isolada", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Compra", tipo:"Compra de Porta Vai e Vem de Tamanho Especial", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Compra", tipo:"Compra de Resistência", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Compra", tipo:"Compra de Termostato", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Suporte TI", tipo:"Geral", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Suporte TI", tipo:"Baan - Geral", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Suporte TI", tipo:"Baan - Inclusão de Item", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Suporte TI", tipo:"Baan - Exclusão de Item", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Suporte TI", tipo:"Baan - Troca de Item", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Suporte TI", tipo:"Baan - Exclusão de Alfa", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Suporte TI", tipo:"Baan - Remoção de Alfa", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Suporte TI", tipo:"Baan - Estorno de Alfa", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Suporte TI", tipo:"Baan - Derrubar Usuário", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Suporte TI", tipo:"Baan - Liberação de Tela", dadosdopedido:nao},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Suporte TI", tipo:"SIP - Geral", dadosdopedido:nao},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Suporte TI", tipo:"SIP - Liberação para Edição de Painéis Altos", dadosdopedido:nao},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Encaminhar", tipo:"Encaminhar", dadosdopedido:sim},
    {area:"Continnum", funçao:"Executivo", subgrupo:"Executivo", tipo:"Pré Projeto", dadosdopedido:sim},
    {area:"Continnum", funçao:"Executivo", subgrupo:"Executivo", tipo:"Projeto Executivo", dadosdopedido:sim},
    {area:"Externo", funçao:"Representante", subgrupo:"Representante", tipo:"Representante", dadosdopedido:sim}
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

email.sort((el1,el2) => {
    if (el1.area < el2.area) {return -1}
    if (el1.area > el2.area) {return 1}
    if (el1.funçao < el2.funçao) {return -1}
    if (el1.funçao > el2.funçao) {return 1}
    if (el1.subgrupo < el2.subgrupo) {return -1}
    if (el1.subgrupo > el2.subgrupo) {return 1}
    if (el1.tipo < el2.tipo) {return -1}
    if (el1.tipo > el2.tipo) {return 1}
    return 0
})

let quantidadeemail = email.length
let quantidadeoptionrepresentante = representante.length
let quantidadefuncionario = funcionario.length

/* Tipo de E-mail */

function hidetipo() {
    classtipo[0].style.display = displaynone
    classtipo[1].style.display = displaynone
    iddadosdopedido.style.display = displaynone
}

/* - Cria Função */

let email2 = email.slice()
email2.unshift(0)
let funçao = []

for (let number = 0; number < quantidadeemail; number++) {
    if (email[number].funçao != email2[number].funçao) {funçao.push(email[number])}
}

funçao.map((el)=>{
    let optionfunçao = document.createElement(optiontag)
    let textofunçao = document.createTextNode(el.funçao)
    optionfunçao.appendChild(textofunçao)
    optionfunçao.setAttribute(valueattribute, el.funçao)
    idfunçao.insertAdjacentElement("beforeend",optionfunçao)}
)

/* - Cria Tipo e Subgrupo */

function tipo() {
    if (idfunçao.value == selectoption) {
        hidetipo()
    } else {
        classtipo[0].style.display = displayinline_block
        classtipo[1].style.display = displayinline_block
    }
    while (idtipo.hasChildNodes()) {idtipo.removeChild(idtipo.firstChild)}
    let subgrupo = []
    for (let number = 0; number < quantidadeemail; number++) {
        if (email[number].funçao == idfunçao.value && email[number].subgrupo != email2[number].subgrupo) {subgrupo.push(email[number])}
    }
    
/* -- Cria Tipo Selection */

    let emailtiposelectoption = email.filter((el)=>el.funçao == selectoption)
    emailtiposelectoption.map((el)=>{
        let optiontipo = document.createElement(optiontag)
        let textotipo = document.createTextNode(el.tipo)
        optiontipo.appendChild(textotipo)
        if (el.dadosdopedido == nao) {optiontipo.setAttribute(classattribute, classsempedido)}
        idtipo.insertAdjacentElement("beforeend",optiontipo)
    })
    
/* -- Cria Subgrupo */

    subgrupo.map((el)=>{
        let capitalizenomepara = `idpara${(el.subgrupo.replace(/ /g, "")).charAt(0).toLowerCase() + (el.subgrupo.replace(/ /g, "")).slice(1)}`
        let optionsubgrupo = document.createElement("optgroup")
        optionsubgrupo.setAttribute("label", el.subgrupo)
        optionsubgrupo.setAttribute(idattribute, capitalizenomepara)
        idtipo.insertAdjacentElement("beforeend",optionsubgrupo)}
    )

/* -- Cria Tipo Todos */

    let emailtipo = email.filter((el)=>el.funçao == idfunçao.value && idfunçao.value != selectoption)
    emailtipo.map((el)=>{
        let optiontipo = document.createElement(optiontag)
        let textotipo = document.createTextNode(el.tipo)
        optiontipo.appendChild(textotipo)
        if (el.dadosdopedido == nao) {optiontipo.setAttribute(classattribute, classsempedido)}
        let capitalizesubgrupo = `idpara${(el.subgrupo.replace(/ /g, "")).charAt(0).toLowerCase() + (el.subgrupo.replace(/ /g, "")).slice(1)}`
        let importar = document.querySelector(`#${capitalizesubgrupo}`)
        importar.insertAdjacentElement("beforeend",optiontipo)
    })
}

idfunçao.addEventListener("change", tipo)

function limpatipodeemail() {
    hidetipo()
    iddadosdopedido.style.display = displaynone
    while (idtipo.hasChildNodes()) {idtipo.removeChild(idtipo.firstChild)}
}

idlimpatipodeemail.addEventListener("click", limpatipodeemail)

/* Dados do Pedido */

function sempedido() {
    if (idtipo.selectedOptions[0].className == classsempedido) {
        iddadosdopedido.style.display = displaynone
    } else {
        iddadosdopedido.style.display = displayblock
    }
}

idtipo.addEventListener("change", sempedido)

/* - Cria Número do Representante */

idnomerepresentante.setAttribute(valueattribute,representante[0].nome)
for (let number = 0; number < quantidadeoptionrepresentante; number++) {
    let optionrepresentante = document.createElement('option')
    let textoptionrepresentante = document.createTextNode(representante[number].numero)
    optionrepresentante.appendChild(textoptionrepresentante)
    optionrepresentante.setAttribute(valueattribute,representante[number].numero)
    idnumerorepresentante.insertAdjacentElement('beforeend',optionrepresentante)
}

/* - Cria Nome do Representante */

function nomerepresentante() {
    for (let number = 0; number < quantidadeoptionrepresentante; number++) {
        if (idnumerorepresentante.value == representante[number].numero) {
            idnomerepresentante.setAttribute(valueattribute,representante[number].nome)
            number = quantidadeoptionrepresentante
        }
    }
}

idnumerorepresentante.addEventListener("change", nomerepresentante)

/* - Cria Opções de Ano */

ano.map((el)=>{
    let optionano = document.createElement(optiontag)
    let textoano = document.createTextNode(el)
    optionano.appendChild(textoano)
    optionano.setAttribute(valueattribute, el)
    idoptionano.insertAdjacentElement("beforeend",optionano)}
)

/* - Cria Opções de Mês */

mes.map((el)=>{
    let optionmes = document.createElement(optiontag)
    let textomes = document.createTextNode(el)
    optionmes.appendChild(textomes)
    optionmes.setAttribute(valueattribute, el)
    idoptionmes.insertAdjacentElement("beforeend",optionmes)}
)

function limpadadosdopedido() {
    idnomerepresentante.setAttribute(valueattribute,representante[0].nome)
}

idlimpadadosdepedido.addEventListener("click", limpadadosdopedido)

/* E-mails Selecionados */

/* - Cria e-mails para */

let sumaryparaemailrepresentante = document.createElement(summarytag)
let summaryparatextoemailrepresentante = document.createTextNode("Representante")
sumaryparaemailrepresentante.appendChild(summaryparatextoemailrepresentante)
sumaryparaemailrepresentante.setAttribute(idattribute, "idsummarypararepresentante")
idemailspara.insertAdjacentElement("beforeend",sumaryparaemailrepresentante)

representante.map((el)=>{
    let capitalizenomepara = `idpara${(el.nome.replace(/ /g, "")).charAt(0).toLowerCase() + (el.nome.replace(/ /g, "")).slice(1)}`
    let optionemailrepresentante = document.createElement(inputtag)
    let textoemailrepresentante = document.createTextNode(el.nome)
    optionemailrepresentante.appendChild(textoemailrepresentante)
    optionemailrepresentante.setAttribute(typeattribute, checkboxattribute)
    optionemailrepresentante.setAttribute(idattribute, capitalizenomepara)
    optionemailrepresentante.setAttribute(classattribute, "classparaemailrepresentante")
    optionemailrepresentante.setAttribute(valueattribute, el.emailcliente)
    idemailspara.insertAdjacentElement("beforeend",optionemailrepresentante)

    let labelemailrepresentante = document.createElement(labeltag)
    let textolabelemailrepresentante = document.createTextNode(el.nome)
    labelemailrepresentante.appendChild(textolabelemailrepresentante)
    labelemailrepresentante.setAttribute(forattribute, capitalizenomepara)
    idemailspara.insertAdjacentElement("beforeend",labelemailrepresentante)

    let bremailrepresentante = document.createElement(brtag)
    idemailspara.insertAdjacentElement("beforeend",bremailrepresentante)}
)

let checkedpara = 0
let idsummarypararepresentante = document.querySelector("#idsummarypararepresentante")
function selectallpara() {
    if (checkedpara == 0) {
        for (let number = 0; number < quantidadeoptionrepresentante; number++) {
            let classparaemailrepresentante = document.querySelectorAll(".classparaemailrepresentante")
            classparaemailrepresentante[number].checked = true
            checkedpara = 1
        }
    } else {
        for (let number = 0; number < quantidadeoptionrepresentante; number++) {
            let classparaemailrepresentante = document.querySelectorAll(".classparaemailrepresentante")
            classparaemailrepresentante[number].checked = false
            checkedpara = 0
        }
    }
}

idsummarypararepresentante.addEventListener("click", selectallpara)

/* teste */

let funcionario2 = funcionario.slice()
funcionario2.unshift(0)
let funçaofuncionario = []

for (let number = 0; number < quantidadefuncionario; number++) {
    if (funcionario[number].funçao != funcionario2[number].funçao) {funçaofuncionario.push(funcionario[number])}
}

for (let number = 0; number < funçaofuncionario.length; number++) {
    let capitalizenomefunçaofuncionario = `idcc${(funçaofuncionario[number].funçao.replace(/ /g, "")).charAt(0).toLowerCase() + (funçaofuncionario[number].funçao.replace(/ /g, "")).slice(1)}`
    let sumaryemailfuncionario = document.createElement(summarytag)
    let sumarytextoemailfuncionario = document.createTextNode(`${funçaofuncionario[number].funçao}`)
    sumaryemailfuncionario.appendChild(sumarytextoemailfuncionario)
    sumaryemailfuncionario.setAttribute(idattribute, `idsummary${capitalizenomefunçaofuncionario}`)
    idemailspara.insertAdjacentElement("beforeend",sumaryemailfuncionario)

    /* teste */

    let funçaofuncionariooptionfunçao = funcionario.filter((el)=>el.funçao == funçaofuncionario[number].funçao)

    funçaofuncionariooptionfunçao.map((el)=>{
    let capitalizenomepara = `idpara${(el.nome.replace(/ /g, "")).charAt(0).toLowerCase() + (el.nome.replace(/ /g, "")).slice(1)}`
    let optionemailfuncionario = document.createElement(inputtag)
    let textoemailfuncionario = document.createTextNode(el.nome)
    optionemailfuncionario.appendChild(textoemailfuncionario)
    optionemailfuncionario.setAttribute(typeattribute, checkboxattribute)
    optionemailfuncionario.setAttribute(idattribute, capitalizenomepara)
    optionemailfuncionario.setAttribute(classattribute, "classparaemailfuncionario")
    optionemailfuncionario.setAttribute(valueattribute, el.email)
    idemailspara.insertAdjacentElement("beforeend",optionemailfuncionario)

    let labelemailfuncionario = document.createElement(labeltag)
    let textolabelemailfuncionario = document.createTextNode(el.nome)
    labelemailfuncionario.appendChild(textolabelemailfuncionario)
    labelemailfuncionario.setAttribute(forattribute, capitalizenomepara)
    idemailspara.insertAdjacentElement("beforeend",labelemailfuncionario)

    let bremailrepresentante = document.createElement(brtag)
    idemailspara.insertAdjacentElement("beforeend",bremailrepresentante)}
    
)
}



/* alert(funçaofuncionario[0].funçao) */




/* let checkedpara = 0
let idsummarypararepresentante = document.querySelector("#idsummarypararepresentante")
idsummarypararepresentante.addEventListener("click", selectallpara)
function selectallpara() {
    if (checkedpara == 0) {
        for (let number = 0; number < quantidadeoptionrepresentante; number++) {
            let classparaemailrepresentante = document.querySelectorAll(".classparaemailfuncionario")
            classparaemailrepresentante[number].checked = true
            checkedpara = 1
        }
    } else {
        for (let number = 0; number < quantidadeoptionrepresentante; number++) {
            let classparaemailrepresentante = document.querySelectorAll(".classparaemailfuncionario")
            classparaemailrepresentante[number].checked = false
            checkedpara = 0
        }
    }
} */

/* teste */

/* - Cria e-mails cc */

let sumaryccemailrepresentante = document.createElement(summarytag)
let summarycctextoemailrepresentante = document.createTextNode("Representante")
sumaryccemailrepresentante.appendChild(summarycctextoemailrepresentante)
sumaryccemailrepresentante.setAttribute(idattribute, "idsummaryccrepresentante")
idemailscc.insertAdjacentElement("beforeend",sumaryccemailrepresentante)

representante.map((el)=>{
    let capitalizenomecc = `idcc${(el.nome.replace(/ /g, "")).charAt(0).toLowerCase() + (el.nome.replace(/ /g, "")).slice(1)}`
    let optionemailrepresentante = document.createElement(inputtag)
    let textoemailrepresentante = document.createTextNode(el.nome)
    optionemailrepresentante.appendChild(textoemailrepresentante)
    optionemailrepresentante.setAttribute(typeattribute, checkboxattribute)
    optionemailrepresentante.setAttribute(idattribute, capitalizenomecc)
    optionemailrepresentante.setAttribute(classattribute, "classccemailrepresentante")
    optionemailrepresentante.setAttribute(valueattribute, el.emailcliente)
    idemailscc.insertAdjacentElement("beforeend",optionemailrepresentante)

    let labelemailrepresentante = document.createElement(labeltag)
    let textolabelemailrepresentante = document.createTextNode(el.nome)
    labelemailrepresentante.appendChild(textolabelemailrepresentante)
    labelemailrepresentante.setAttribute(forattribute, capitalizenomecc)
    idemailscc.insertAdjacentElement("beforeend",labelemailrepresentante)

    let bremailrepresentante = document.createElement(brtag)
    idemailscc.insertAdjacentElement("beforeend",bremailrepresentante)}
)

let checkedcc = 0
let idsummaryccrepresentante = document.querySelector("#idsummaryccrepresentante")
function selectallcc() {
    if (checkedcc == 0) {
        for (let number = 0; number < quantidadeoptionrepresentante; number++) {
            let classccemailrepresentante = document.querySelectorAll(".classccemailrepresentante")
            classccemailrepresentante[number].checked = true
            checkedcc = 1
        }
    } else {
        for (let number = 0; number < quantidadeoptionrepresentante; number++) {
            let classccemailrepresentante = document.querySelectorAll(".classccemailrepresentante")
            classccemailrepresentante[number].checked = false
            checkedcc = 0
        }
    }
}

idsummaryccrepresentante.addEventListener("click", selectallcc)

function limpaemailsselecionados() {
    checkedpara = 0
    checkedcc = 0
}

idlimpaemailsselecionados.addEventListener("click", limpaemailsselecionados)

/* FIM */