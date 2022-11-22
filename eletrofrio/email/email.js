
/* Chamada de dados do HTML */

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

/* Variáveis para facilitar a escrita de funções  */

let optiontag = "option"
let inputtag = "input"
let labeltag = "label"
let brtag = "br"
let detailstag = "details"
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

/* Variáveis para facilitar a troca de textos repetitivos  */

let selectoption = "(SELECIONE UMA OPÇÃO)"
let sim = "sim"
let nao = "não"
let classsempedido = "classsempedido"

/* Arrays com dados a serem inseridos */

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

let cadastro = [
    {funçao:"Ajuste", numero:"nnn", nome:"Cláudia", emailcomercial:"claudia.carvalho@eletrofrio.com.br", emailopcional:"email"},
    {funçao:"Ajuste", numero:"nnn", nome:"Cleber", emailcomercial:"cleber.medeiros@eletrofrio.com.br", emailopcional:"email"},
    {funçao:"Ajuste", numero:"nnn", nome:"Ellen", emailcomercial:"ellen@eletrofrio.com.br", emailopcional:"email"},
    {funçao:"Ajuste", numero:"nnn", nome:"Letícia", emailcomercial:"leticia.karoline@eletrofrio.com.br", emailopcional:"email"},
    {funçao:"Ajuste", numero:"nnn", nome:"Luiz Fernando Gonsalvez", emailcomercial:"luiz.goncalves@eletrofrio.com.br", emailopcional:"email"},
    {funçao:"Analista", numero:"nnn", nome:"Alexandre Ribeiro", emailcomercial:"alexandre.ribeiro@eletrofrio.com.br", emailopcional:"email"},
    {funçao:"Analista", numero:"nnn", nome:"João Cláudio", emailcomercial:"jclaudio@eletrofrio.com.br", emailopcional:"email"},
    {funçao:"Analista", numero:"nnn", nome:"Luiz Eduardo", emailcomercial:"luiz.eduardo@eletrofrio.com.br", emailopcional:"email"},
    {funçao:"Analista", numero:"nnn", nome:"Nilson", emailcomercial:"nilson@eletrofrio.com.br", emailopcional:"email"},
    {funçao:"Analista", numero:"nnn", nome:"Suelen", emailcomercial:"suelen.assis@eletrofrio.com.br", emailopcional:"email"},
    {funçao:"Executivo", numero:"nnn", nome:"Bruno", emailcomercial:"bruno.garcia@eletrofrio.com.br", emailopcional:"email"},
    {funçao:"Executivo", numero:"nnn", nome:"Carlos", emailcomercial:"carlos.margon@eletrofrio.com.br", emailopcional:"email"},
    {funçao:"Executivo", numero:"nnn", nome:"Rubens", emailcomercial:"rubens@eletrofrio.com.br", emailopcional:"email"},
    {funçao:"Executivo", numero:"nnn", nome:"Susan", emailcomercial:"susan.colsani@eletrofrio.com.br", emailopcional:"email"},
    {funçao:"Grupo", numero:"nnn", nome:"Continuum - Planilhamento para Produção", emailcomercial:"PLANIC.F@uhygb1yu6fxo7a.onmicrosoft.com", emailopcional:"email"},
    {funçao:"Grupo", numero:"nnn", nome:"Continuum - Planilhamento", emailcomercial:"planilhamento@continuum.ind.br", emailopcional:"email"},
    {funçao:"Grupo", numero:"nnn", nome:"Continuum - Projeto Executivo", emailcomercial:"projetos@continuum.ind.br", emailopcional:"email"},
    {funçao:"Liderança", numero:"nnn", nome:"Carla", emailcomercial:"carlaadriana@eletrofrio.com.br", emailopcional:"email"},
    {funçao:"Liderança", numero:"nnn", nome:"Roney", emailcomercial:"roney@eletrofrio.com.br", emailopcional:"email"},
    {funçao:"Liderança", numero:"nnn", nome:"Alexandre Cavagnoli", emailcomercial:"alexandre.cavagnoli@eletrofrio.com.br", emailopcional:"email"},
    {funçao:"Liderança", numero:"nnn", nome:"Leandro Vianna", emailcomercial:"leandro.vianna@eletrofrio.com.br", emailopcional:"email"},
    {funçao:"Liderança", numero:"nnn", nome:"Simone", emailcomercial:"simone@eletrofrio.com.br", emailopcional:"email"},
    {funçao:"Planilhamento", numero:"nnn", nome:"Amarildo", emailcomercial:"amarildo.cruz@eletrofrio.com.br", emailopcional:"email"},
    {funçao:"Planilhamento", numero:"nnn", nome:"Gabriel", emailcomercial:"gabriel.aguiar@eletrofrio.com.br", emailopcional:"email"},
    {funçao:"Planilhamento", numero:"500016", nome:"Henrique", emailcomercial:"henrique.souza@eletrofrio.com.br", emailopcional:"email"},
    {funçao:"Representante", numero:"001", nome:"Venda Direta Curitiba", emailcomercial:"email", emailopcional:"indefinido"},
    {funçao:"Representante", numero:"004", nome:"Tecnimet", emailcomercial:"email", emailopcional:"marcosm@tecnimet.com; div.comercial@tecnimet.com"},
    {funçao:"Representante", numero:"011", nome:"FG", emailcomercial:"email", emailopcional:"nathan@fgrefrigeracao.com.br"},
    {funçao:"Representante", numero:"016", nome:"Lobo", emailcomercial:"email", emailopcional:"loboinstalacoescomerciais@yahoo.com.br"},
    {funçao:"Representante", numero:"018", nome:"Silva Filho", emailcomercial:"email", emailopcional:"silva.filho@ymail.com"},
    {funçao:"Representante", numero:"024", nome:"Mallet", emailcomercial:"email", emailopcional:"helcio@mallet.net.br"},
    {funçao:"Representante", numero:"035", nome:"Clecio", emailcomercial:"email", emailopcional:"indefinido"},
    {funçao:"Representante", numero:"057", nome:"Refripan", emailcomercial:"email", emailopcional:"nidia.roza@hotmail.com"},
    {funçao:"Representante", numero:"062", nome:"M Weidner", emailcomercial:"email", emailopcional:"marceloweidner@globo.com"},
    {funçao:"Representante", numero:"067", nome:"Tortelli", emailcomercial:"email", emailopcional:"torteli@torteli.com.br"},
    {funçao:"Representante", numero:"070", nome:"Venda Direta São Paulo", emailcomercial:"email", emailopcional:"oswaldocassan@gmail.com"},
    {funçao:"Representante", numero:"077", nome:"Llampe Frio PR", emailcomercial:"email", emailopcional:"llampefrio@llampefrio.com.br"},
    {funçao:"Representante", numero:"082", nome:"HB", emailcomercial:"email", emailopcional:"hb-bene@uol.com.br"},
    {funçao:"Representante", numero:"087", nome:"Baldissera", emailcomercial:"email", emailopcional:"baldissera@redesul.com.br"},
    {funçao:"Representante", numero:"093", nome:"Gurgel", emailcomercial:"email", emailopcional:"gurgel61@terra.com.br"},
    {funçao:"Representante", numero:"094", nome:"Luiz Nachbar", emailcomercial:"email", emailopcional:"indefinido"},
    {funçao:"Representante", numero:"096", nome:"Kalliel", emailcomercial:"email", emailopcional:"kallielprojetos@gmail.com"},
    {funçao:"Representante", numero:"097", nome:"DE", emailcomercial:"email", emailopcional:"daniel@deequipamentos.com.br; vendas@deequipamentos.com.br"},
    {funçao:"Representante", numero:"101", nome:"Da Roz", emailcomercial:"email", emailopcional:"douglas@darozrepresentacoes.com.br; darozrep@gmail.com"},
    {funçao:"Representante", numero:"102", nome:"Superbrasil", emailcomercial:"email", emailopcional:"luiz@superb.com.br"},
    {funçao:"Representante", numero:"106", nome:"Vitoria", emailcomercial:"email", emailopcional:"jeffersondsrf@uol.com.br; jucelito@msn.com"},
    {funçao:"Representante", numero:"112", nome:"Ronald", emailcomercial:"email", emailopcional:"ronaldioliveira@ronaldmaquinas.com.br"},
    {funçao:"Representante", numero:"114", nome:"Scallet", emailcomercial:"email", emailopcional:"indefinido"},
    {funçao:"Representante", numero:"115", nome:"Guide", emailcomercial:"email", emailopcional:"guidi@guidisc.com.br; rinaldo@guidisc.com.br"},
    {funçao:"Representante", numero:"118", nome:"Fast Sul", emailcomercial:"email", emailopcional:"mbariano@fastsul.com"},
    {funçao:"Representante", numero:"120", nome:"Rio Fast", emailcomercial:"email", emailopcional:"riofasteletro@yahoo.com.br"},
    {funçao:"Representante", numero:"121", nome:"Eletrofast", emailcomercial:"email", emailopcional:"eletrofast@yahoo.com.br; luizamorimp@yahoo.com.br"},
    {funçao:"Representante", numero:"182", nome:"Afonso Araujo", emailcomercial:"email", emailopcional:"afonsovargasaraujo@gmail.com"},
    {funçao:"Representante", numero:"187", nome:"ETCO", emailcomercial:"email", emailopcional:"etcorep@terra.com.br"},
    {funçao:"Representante", numero:"189", nome:"Refriged", emailcomercial:"email", emailopcional:"ednilson.eletrofrio@gmail.com"},
    {funçao:"Representante", numero:"190", nome:"A&F", emailcomercial:"email", emailopcional:"fernando@aefbolsadenegocios.com.br"},
    {funçao:"Representante", numero:"191", nome:"Produtiva", emailcomercial:"email", emailopcional:"michel@produtivarepresentacoes.com.br"},
    {funçao:"Representante", numero:"193", nome:"Llampe Frio SC", emailcomercial:"email", emailopcional:"llampefrio@llampefrio.com.br"},
    {funçao:"Representante", numero:"195", nome:"DNC Dealer", emailcomercial:"email", emailopcional:"dinar@dealerrs.com.br"},
    {funçao:"Representante", numero:"196", nome:"Brites", emailcomercial:"email", emailopcional:"vendas@brites.srv.br"},
    {funçao:"Representante", numero:"198", nome:"Euro", emailcomercial:"email", emailopcional:"equipamentoseuro@gmail.com; jacksonkiatkoski@gmail.com"},
    {funçao:"Representante", numero:"199", nome:"Erco", emailcomercial:"email", emailopcional:"mario.erco1@gmail.com"},
    {funçao:"Representante", numero:"202", nome:"Eder Mathias", emailcomercial:"email", emailopcional:"eder.mathias@uol.com.br"},
    {funçao:"Representante", numero:"203", nome:"HCM", emailcomercial:"email", emailopcional:"hamilton@hcm.com.br"},
    {funçao:"Representante", numero:"207", nome:"Brava", emailcomercial:"email", emailopcional:"eac_cunha@yahoo.com.br"},
    {funçao:"Representante", numero:"213", nome:"Mercato", emailcomercial:"email", emailopcional:"denis@mercatorepresentacoes.com.br"},
    {funçao:"Representante", numero:"217", nome:"Cold Import", emailcomercial:"email", emailopcional:"jlescano@coldimport.com.pe"},
    {funçao:"Representante", numero:"218", nome:"Cencosud", emailcomercial:"email", emailopcional:"indefinido"},
    {funçao:"Representante", numero:"223", nome:"Hercold", emailcomercial:"email", emailopcional:"fastlest@uol.com.br"},
    {funçao:"Representante", numero:"226", nome:"EC", emailcomercial:"email", emailopcional:"leonardomoura@record-maq.com.br"},
    {funçao:"Representante", numero:"227", nome:"Edeval (MIL)", emailcomercial:"email", emailopcional:"edevalvendas@gmail.com"},
    {funçao:"Representante", numero:"228", nome:"JPC", emailcomercial:"email", emailopcional:"alexandre@pontodarefrigeracao.com.br"},
    {funçao:"Representante", numero:"229", nome:"Wesley Dal Pozzo", emailcomercial:"email", emailopcional:"dlpz@onda.com.br"},
    {funçao:"Representante", numero:"230", nome:"Ergosystem", emailcomercial:"email", emailopcional:"ergosystem.comercial@outlook.com"},
    {funçao:"Representante", numero:"231", nome:"SM", emailcomercial:"email", emailopcional:"indefinido"},
    {funçao:"Representante", numero:"232", nome:"S&I", emailcomercial:"email", emailopcional:"geraldo@siautomacao.com.br; carol@siautomacao.com.br; alexandre@siautomacao.com.br"},
    {funçao:"Representante", numero:"233", nome:"Control y Sostenibilidad", emailcomercial:"email", emailopcional:"indefinido"},
    {funçao:"Representante", numero:"234", nome:"Aarci", emailcomercial:"email", emailopcional:"juan.avila@aarci.co; info@aarci.co"},
    {funçao:"Representante", numero:"236", nome:"T&G", emailcomercial:"email", emailopcional:"ed_wanderson@yahoo.com.br"},
    {funçao:"Representante", numero:"237", nome:"Rematec", emailcomercial:"email", emailopcional:"alessandra@remaqbh.com.br"},
    {funçao:"Representante", numero:"238", nome:"FMG", emailcomercial:"email", emailopcional:" fmg_representacoes@hotmail.com"},
    {funçao:"Representante", numero:"239", nome:"PSK", emailcomercial:"email", emailopcional:"indefinido"},
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
    {numero:01, nome:"Janeiro"},
    {numero:02, nome:"Fevereiro"},
    {numero:03, nome:"Março"},
    {numero:04, nome:"Abril"},
    {numero:05, nome:"Maio"},
    {numero:06, nome:"Junho"},
    {numero:07, nome:"Julho"},
    {numero:08, nome:"Agosto"},
    {numero:09, nome:"Setembro"},
    {numero:10, nome:"Outubro"},
    {numero:11, nome:"Novembro"},
    {numero:12, nome:"Dezembro"}
]

let resultado = [
    {descriçao: "Para"},
    {descriçao: "Cc"},
    {descriçao: "Assunto"},
    {descriçao: "Corpo do E-mail"}
]

/* Organização dos Arrays */

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

cadastro.sort((el1,el2) => {
    if (el1.funçao < el2.funçao) {return -1}
    if (el1.funçao > el2.funçao) {return 1}
    if (el1.numero < el2.numero) {return -1}
    if (el1.numero > el2.numero) {return 1}
    return 0
})

ano.sort((el1,el2) => {
    if (el1 < el2) {return -1}
    if (el1 > el2) {return 1}
    return 0
})

mes.sort((el1,el2) => {
    if (el1.numero < el2.numero) {return -1}
    if (el1.numero > el2.numero) {return 1}
    return 0
})

/* Filtra os Arrays */

let cadastrorepresentante = cadastro.filter((el)=>el.funçao == "Representante")

let cadastroemail = cadastro.filter((el)=>el)

/* Organização dos arrays filtrados diferente do array original */

cadastroemail.sort((el1,el2) => {
    if (el1.funçao < el2.funçao) {return -1}
    if (el1.funçao > el2.funçao) {return 1}
    if (el1.nome < el2.nome) {return -1}
    if (el1.nome > el2.nome) {return 1}
    return 0
})

/* Criação de array para comparar com ele mesmo */

let email2 = email.slice()
email2.unshift(0)
let funçaoemail = []

for (let index = 0; index < email.length; index++) {
    if (email[index].funçao != email2[index].funçao) {funçaoemail.push(email[index])}
}

let cadastro2 = cadastro.slice()
cadastro2.unshift(0)
let funçaocadastro = []

for (let index = 0; index < cadastro.length; index++) {
    if (cadastro[index].funçao != cadastro2[index].funçao) {funçaocadastro.push(cadastro[index])}
}

/* Função que oculta a seleção de tipo e os dados do pedido */

function hidetipo() {
    classtipo[0].style.display = displaynone
    classtipo[1].style.display = displaynone
    iddadosdopedido.style.display = displaynone
}

/* Tipo de E-mail */

/* - Cria as opções de função */

funçaoemail.map((el)=>{
    let optionfunçao = document.createElement(optiontag)
    let textofunçao = document.createTextNode(el.funçao)
    optionfunçao.appendChild(textofunçao)
    optionfunçao.setAttribute(valueattribute, el.funçao)
    idfunçao.insertAdjacentElement("beforeend",optionfunçao)}
)

/* - Cria os subgrupos e as opções de tipo */

/* -- Controla a visualização de seleções e limpa seleções anteriores */

function tipo() {
    if (idfunçao.value == selectoption) {
        hidetipo()
    } else {
        classtipo[0].style.display = displayinline_block
        classtipo[1].style.display = displayinline_block
        iddadosdopedido.style.display = displaynone
    }
    while (idtipo.hasChildNodes()) {idtipo.removeChild(idtipo.firstChild)}

/* -- Filtra as opções de subgrupos de acordo com a função */
    
    let subgrupo = []
    for (let index = 0; index < email.length; index++) {
        if (email[index].funçao == idfunçao.value && email[index].subgrupo != email2[index].subgrupo) {subgrupo.push(email[index])}
    }
    
/* -- Cria a opção Selection para a seleção de tipos */

    let emailtiposelectoption = email.filter((el)=>el.funçao == selectoption)
    emailtiposelectoption.map((el)=>{
        let optiontipo = document.createElement(optiontag)
        let textotipo = document.createTextNode(el.tipo)
        optiontipo.appendChild(textotipo)
        if (el.dadosdopedido == nao) {optiontipo.setAttribute(classattribute, classsempedido)}
        idtipo.insertAdjacentElement("beforeend",optiontipo)
    })
    
/* -- Cria os subgrupos */

    subgrupo.map((el)=>{
        let capitalizenomepara = `idpara${(el.subgrupo.replace(/ /g, "")).charAt(0).toLowerCase() + (el.subgrupo.replace(/ /g, "")).slice(1)}`
        let optionsubgrupo = document.createElement("optgroup")
        optionsubgrupo.setAttribute("label", el.subgrupo)
        optionsubgrupo.setAttribute(idattribute, capitalizenomepara)
        idtipo.insertAdjacentElement("beforeend",optionsubgrupo)}
    )

/* -- Cria os tipos de acordo com a função */

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

/* -- Limpa as informações de tipo de e-mail */

function limpatipodeemail() {
    hidetipo()
    iddadosdopedido.style.display = displaynone
    while (idtipo.hasChildNodes()) {idtipo.removeChild(idtipo.firstChild)}
}

/* Dados do Pedido */

/* - Oculta os dados do pedido caso seja da classe sem pedido */

function sempedido() {
    if (idtipo.selectedOptions[0].className == classsempedido) {
        iddadosdopedido.style.display = displaynone
    } else {
        iddadosdopedido.style.display = displayblock
    }
}

/* - Cria as opções de números dos representantes */

idnomerepresentante.setAttribute(valueattribute,cadastrorepresentante[0].nome)
for (let index = 0; index < cadastrorepresentante.length; index++) {
    let optionrepresentante = document.createElement('option')
    let textoptionrepresentante = document.createTextNode(cadastrorepresentante[index].numero)
    optionrepresentante.appendChild(textoptionrepresentante)
    optionrepresentante.setAttribute(valueattribute,cadastrorepresentante[index].numero)
    idnumerorepresentante.insertAdjacentElement('beforeend',optionrepresentante)
}

/* - Cria as opções de nomes dos representantes */

function nomerepresentante() {
    for (let index = 0; index < cadastrorepresentante.length; index++) {
        if (idnumerorepresentante.value == cadastrorepresentante[index].numero) {
            idnomerepresentante.setAttribute(valueattribute,cadastrorepresentante[index].nome)
            index = cadastrorepresentante.length
        }
    }
}

/* - Cria as opções de ano do pedido */

ano.map((el)=>{
    let optionano = document.createElement(optiontag)
    let textoano = document.createTextNode(el)
    optionano.appendChild(textoano)
    optionano.setAttribute(valueattribute, el)
    idoptionano.insertAdjacentElement("beforeend",optionano)}
)

/* - Cria as opções de mês do pedido */

mes.map((el)=>{
    let optionmes = document.createElement(optiontag)
    let textomes = document.createTextNode(el.nome)
    optionmes.appendChild(textomes)
    optionmes.setAttribute(valueattribute, el.nome)
    idoptionmes.insertAdjacentElement("beforeend",optionmes)}
)

/* -- Limpa as informações dos dados do pedido */

function limpadadosdopedido() {
    idnomerepresentante.setAttribute(valueattribute,cadastro[0].nome)
}

/* E-mails Selecionados */

/* - Cria e-mails para */

for (let index = 0; index < funçaocadastro.length; index++) {

/* -- Cria details para as funções para */

    let capitalizenomefunçaocadastro = `${(funçaocadastro[index].funçao.replace(/ /g, "")).charAt(0).toLowerCase() + (funçaocadastro[index].funçao.replace(/ /g, "")).slice(1)}`
    let detailsparaemail = document.createElement(detailstag)
    detailsparaemail.setAttribute(idattribute, `iddetailspara${capitalizenomefunçaocadastro}`)
    idemailspara.insertAdjacentElement("beforeend",detailsparaemail)

/* -- Cria summary para as funções para */

    let iddetailspara = document.querySelector(`#iddetailspara${capitalizenomefunçaocadastro}`)

    let summaryparaemail = document.createElement(summarytag)
    let summaryparatextoemail = document.createTextNode(funçaocadastro[index].funçao)
    summaryparaemail.appendChild(summaryparatextoemail)
    summaryparaemail.setAttribute(idattribute, `idsummarypara${capitalizenomefunçaocadastro}`)
    iddetailspara.insertAdjacentElement("beforeend",summaryparaemail)

/* -- Cria label para selecionar todas as checkbox das funções para */

    let labelemail = document.createElement(labeltag)
    let textolabelemail = document.createTextNode(`Selecionar todos do grupo ${funçaocadastro[index].funçao}`)
    labelemail.appendChild(textolabelemail)
    labelemail.setAttribute(idattribute, `idselecionartodospara${capitalizenomefunçaocadastro}`)
    labelemail.setAttribute(forattribute, `idselecionartodospara${capitalizenomefunçaocadastro}`)
    iddetailspara.insertAdjacentElement("beforeend",labelemail)

/* -- Cria espaçamento entre o label (função) e a checkbox seguinte das funções para */

    let bremail = document.createElement(brtag)
    iddetailspara.insertAdjacentElement("beforeend",bremail)

/* -- Cria os inputs das checkbox das funções para */

    let funçaocadastrooptionfunçao = cadastroemail.filter((el)=>el.funçao == funçaocadastro[index].funçao)

    funçaocadastrooptionfunçao.map((el)=>{
    let capitalizenomepara = `idpara${(el.nome.replace(/ /g, "")).charAt(0).toLowerCase() + (el.nome.replace(/ /g, "")).slice(1)}`
    let optionemailcadastro = document.createElement(inputtag)
    let textoemailcadastro = document.createTextNode(el.nome)
    optionemailcadastro.appendChild(textoemailcadastro)
    optionemailcadastro.setAttribute(typeattribute, checkboxattribute)
    optionemailcadastro.setAttribute(idattribute, capitalizenomepara)
    optionemailcadastro.setAttribute(classattribute, `classparaemailcadastro${capitalizenomefunçaocadastro}`)
    optionemailcadastro.setAttribute(valueattribute, el.email)
    iddetailspara.insertAdjacentElement("beforeend",optionemailcadastro)

/* -- Cria os labels das checkbox das funções para */

    let labelemailcadastro = document.createElement(labeltag)
    let textolabelemailcadastro = document.createTextNode(el.nome)
    labelemailcadastro.appendChild(textolabelemailcadastro)
    labelemailcadastro.setAttribute(forattribute, capitalizenomepara)
    iddetailspara.insertAdjacentElement("beforeend",labelemailcadastro)

/* -- Cria espaçamento entre o label (option) e a checkbox seguinte das funções para */

    let bremail = document.createElement(brtag)
    iddetailspara.insertAdjacentElement("beforeend",bremail)}
    )

/* -- Controla a visualização de seleção das checkbox das funções para */

    let checkedpara = 0
    let idselecionartodospara = document.querySelector(`#idselecionartodospara${capitalizenomefunçaocadastro}`)
    function selectallpara() {
        if (checkedpara == 0) {
            for (let index = 0; index < funçaocadastrooptionfunçao.length; index++) {
                let classparaemail = document.querySelectorAll(`.classparaemailcadastro${capitalizenomefunçaocadastro}`)
                classparaemail[index].checked = true
                checkedpara = 1
            }
        } else {
            for (let index = 0; index < funçaocadastrooptionfunçao.length; index++) {
                let classparaemail = document.querySelectorAll(`.classparaemailcadastro${capitalizenomefunçaocadastro}`)
                classparaemail[index].checked = false
                checkedpara = 0
            }
        }
    }

/* -- Limpa as checkbox das funções para */

    function limpaemailsselecionados() {
        checkedpara = 0
    }

/* Eventos das funções para*/

    idselecionartodospara.addEventListener("click", selectallpara)
    
    idlimpaemailsselecionados.addEventListener("click", limpaemailsselecionados)
}

/* - Cria e-mails cc */

for (let index = 0; index < funçaocadastro.length; index++) {

/* -- Cria details para as funções cc */

    let capitalizenomefunçaocadastro = `${(funçaocadastro[index].funçao.replace(/ /g, "")).charAt(0).toLowerCase() + (funçaocadastro[index].funçao.replace(/ /g, "")).slice(1)}`
    let detailsccemail = document.createElement(detailstag)
    detailsccemail.setAttribute(idattribute, `iddetailscc${capitalizenomefunçaocadastro}`)
    idemailscc.insertAdjacentElement("beforeend",detailsccemail)

/* -- Cria summary para as funções cc */

    let iddetailscc = document.querySelector(`#iddetailscc${capitalizenomefunçaocadastro}`)

    let summaryccemail = document.createElement(summarytag)
    let summarycctextoemail = document.createTextNode(funçaocadastro[index].funçao)
    summaryccemail.appendChild(summarycctextoemail)
    summaryccemail.setAttribute(idattribute, `idsummarycc${capitalizenomefunçaocadastro}`)
    iddetailscc.insertAdjacentElement("beforeend",summaryccemail)

/* -- Cria label para selecionar todas as checkbox das funções cc */

    let labelemail = document.createElement(labeltag)
    let textolabelemail = document.createTextNode(`Selecionar todos do grupo ${funçaocadastro[index].funçao}`)
    labelemail.appendChild(textolabelemail)
    labelemail.setAttribute(idattribute, `idselecionartodoscc${capitalizenomefunçaocadastro}`)
    labelemail.setAttribute(forattribute, `idselecionartodoscc${capitalizenomefunçaocadastro}`)
    iddetailscc.insertAdjacentElement("beforeend",labelemail)

/* -- Cria espaçamento entre o label (função) e a checkbox seguinte das funções cc */

    let bremail = document.createElement(brtag)
    iddetailscc.insertAdjacentElement("beforeend",bremail)

/* -- Cria os inputs das checkbox das funções cc */

    let funçaocadastrooptionfunçao = cadastroemail.filter((el)=>el.funçao == funçaocadastro[index].funçao)

    funçaocadastrooptionfunçao.map((el)=>{
    let capitalizenomecc = `idcc${(el.nome.replace(/ /g, "")).charAt(0).toLowerCase() + (el.nome.replace(/ /g, "")).slice(1)}`
    let optionemailcadastro = document.createElement(inputtag)
    let textoemailcadastro = document.createTextNode(el.nome)
    optionemailcadastro.appendChild(textoemailcadastro)
    optionemailcadastro.setAttribute(typeattribute, checkboxattribute)
    optionemailcadastro.setAttribute(idattribute, capitalizenomecc)
    optionemailcadastro.setAttribute(classattribute, `classccemailcadastro${capitalizenomefunçaocadastro}`)
    optionemailcadastro.setAttribute(valueattribute, el.email)
    iddetailscc.insertAdjacentElement("beforeend",optionemailcadastro)

/* -- Cria os labels das checkbox das funções cc */

    let labelemailcadastro = document.createElement(labeltag)
    let textolabelemailcadastro = document.createTextNode(el.nome)
    labelemailcadastro.appendChild(textolabelemailcadastro)
    labelemailcadastro.setAttribute(forattribute, capitalizenomecc)
    iddetailscc.insertAdjacentElement("beforeend",labelemailcadastro)

/* -- Cria espaçamento entre o label (option) e a checkbox seguinte das funções cc */

    let bremail = document.createElement(brtag)
    iddetailscc.insertAdjacentElement("beforeend",bremail)}
    )

/* -- Controla a visualização de seleção das checkbox das funções cc */

    let checkedcc = 0
    let idselecionartodoscc = document.querySelector(`#idselecionartodoscc${capitalizenomefunçaocadastro}`)
    function selectallcc() {
        if (checkedcc == 0) {
            for (let index = 0; index < funçaocadastrooptionfunçao.length; index++) {
                let classccemail = document.querySelectorAll(`.classccemailcadastro${capitalizenomefunçaocadastro}`)
                classccemail[index].checked = true
                checkedcc = 1
            }
        } else {
            for (let index = 0; index < funçaocadastrooptionfunçao.length; index++) {
                let classccemail = document.querySelectorAll(`.classccemailcadastro${capitalizenomefunçaocadastro}`)
                classccemail[index].checked = false
                checkedcc = 0
            }
        }
    }

/* -- Limpa as checkbox das funções cc */

    function limpaemailsselecionados() {
        checkedcc = 0
    }

/* Eventos das funções cc*/

    idselecionartodoscc.addEventListener("click", selectallcc)
    
    idlimpaemailsselecionados.addEventListener("click", limpaemailsselecionados)
}

/* Eventos do HTML*/

idfunçao.addEventListener("change", tipo)
idlimpatipodeemail.addEventListener("click", limpatipodeemail)
idtipo.addEventListener("change", sempedido)
idnumerorepresentante.addEventListener("change", nomerepresentante)
idlimpadadosdepedido.addEventListener("click", limpadadosdopedido)

/* FIM */