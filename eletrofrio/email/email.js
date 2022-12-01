

/* Chamada de dados do HTML */

let idFunção = document.querySelector("#idFunção")
let idTipo = document.querySelector("#idTipo")
let classTipo = document.querySelectorAll(".classTipo")
let idLimpaTipoDeEmail = document.querySelector("#idLimpaTipoDeEmail")
let idDadosDoPedido = document.querySelector("#idDadosDoPedido")
let idNomeRepresentante = document.querySelector("#idNomeRepresentante")
let idNúmeroRepresentante = document.querySelector("#idNúmeroRepresentante")
let idPedido = document.querySelector("#idPedido")
let idAno = document.querySelector("#idAno")
let idOrdemDeVenda = document.querySelector("#idOrdemDeVenda")
let idNomeDoCliente = document.querySelector("#idNomeDoCliente")
let idNomeFantasia = document.querySelector("#idNomeFantasia")
let idMês = document.querySelector("#idMês")
let idAnexarAssinatura = document.querySelector("#idAnexarAssinatura")
let idRevisão = document.querySelector("#idRevisão")
let idLimpaDadosDePedido = document.querySelector("#idLimpaDadosDePedido")
let idLimpaDadosPessoais = document.querySelector("#idLimpaDadosPessoais")
let idEmailsPara = document.querySelector("#idEmailsPara")
let idEmailsCc = document.querySelector("#idEmailsCc")
let idLimpaEmailSelecionado = document.querySelector("#idLimpaEmailSelecionado")
let idResultadoPara = document.querySelector("#idResultadoPara")
let idResultadoCc = document.querySelector("#idResultadoCc")
let idResultadoAssunto = document.querySelector("#idResultadoAssunto")
let idApresentaEmail = document.querySelector("#idApresentaEmail")
let idResultadoCorpoDoEmail = document.querySelector("#idResultadoCorpoDoEmail")
let idLimpaResultado = document.querySelector("#idLimpaResultado")
let idCopiaCorpoDoEmail = document.querySelector("#idCopiaCorpoDoEmail")
let idAssinatura = document.querySelector("#idAssinatura")
let idBackgroundColor = document.querySelector("#idBackgroundColor")
let idTextoColor = document.querySelector("#idTextoColor")
let idOpçõesCores = document.querySelector("#idOpçõesCores")
let idLimpaExtras = document.querySelector("#idLimpaExtras")
let idGeraEmail = document.querySelector("#idGeraEmail")

/* Variáveis para facilitar a escrita de funções  */

let optionTag = "option"
let inputTag = "input"
let labelTag = "label"
let brTag = "br"
let detailsTag = "details"
let summaryTag = "summary"
let hrefTag = "href"
let valueAttribute = "value"
let idAttribute = "id"
let classAttribute = "class"
let typeAttribute = "type"
let checkboxAttribute = "checkbox"
let forAttribute = "for"
let displayNone = "none"
let displayInlineBlock = "inline-block"
let displayBlock = "block"

/* Variáveis para facilitar a troca de textos repetitivos  */

let selectOption = "(SELECIONE UMA OPÇÃO)"
let sim = "sim"
let não = "não"
let classSemPedido = "classSemPedido"
let henrique = ""
let br1 = "<br>".repeat(1)
let br2 = "<br>".repeat(2)
let br3 = "<br>".repeat(3)
let mailto = "mailto:"
let cc = "?cc="
let bcc = "&bcc="
let subject = "&subject="
let body = "&body="
let OV = "OV: "
let localização = "LOCALIZAÇÃO: "
let arquivo = "ARQUIVO: "
let agradecimento = "Atenciosamente,"
let enter = "%0D"

/* Arrays com dados a serem inseridos */

let email = [
    {funçao:selectOption, tipo:selectOption, dadosdopedido:não},
    //{area:"Comercial", funçao:"Analista", subgrupo:"Analista", tipo:"Liberação Parcial", dadosdopedido:sim},
    //{area:"Comercial", funçao:"Analista", subgrupo:"Analista", tipo:"Liberação Total", dadosdopedido:sim},
    //{area:"Comercial", funçao:"Analista", subgrupo:"Analista", tipo:"Linhas Atualizadas", dadosdopedido:sim},
    //{area:"Comercial", funçao:"Analista", subgrupo:"Analista", tipo:"Feito", dadosdopedido:sim},
    //{area:"Comercial", funçao:"Analista", subgrupo:"Analista", tipo:"Atualizar", dadosdopedido:sim},
    //{area:"Comercial", funçao:"Ajuste", subgrupo:"Ajuste", tipo:"Dúvidas", dadosdopedido:sim},
    //{area:"Comercial", funçao:"Ajuste", subgrupo:"Ajuste", tipo:"Aguardando Dúvidas", dadosdopedido:sim},
    //{area:"Comercial", funçao:"Ajuste", subgrupo:"Ajuste", tipo:"Arquivos de Ajuste", dadosdopedido:sim},
    //{area:"Comercial", funçao:"Ajuste", subgrupo:"Ajuste", tipo:"Aguardando Conferência", dadosdopedido:sim},
    //{area:"Comercial", funçao:"Ajuste", subgrupo:"Ajuste", tipo:"Alteração", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Executivo", subgrupo:"Executivo", tipo:"Pré Projeto", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Executivo", subgrupo:"Executivo", tipo:"Projeto Executivo", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Compra", tipo:"Compra de Porta Walk-In", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Compra", tipo:"Compra de Porta Seccional", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Compra", tipo:"Compra de Portal de Selamento", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Compra", tipo:"Compra de Niveladora de Doca", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Compra", tipo:"Compra de Porta Rápida", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Compra", tipo:"Compra de Porta Automática", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Compra", tipo:"Compra de Porta Beer Cave", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Compra", tipo:"Compra de Visor Corrediço", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Compra", tipo:"Compra de Porta Vai e Vem Isolada", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Compra", tipo:"Compra de Porta Vai e Vem de Tamanho Especial", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Compra", tipo:"Compra de Resistência", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Compra", tipo:"Compra de Termostato", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Cotação", tipo:"Cotação de Porta Walk-In", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Cotação", tipo:"Cotação de Porta Seccional", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Cotação", tipo:"Cotação de Portal de Selamento", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Cotação", tipo:"Cotação de Niveladora de Doca", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Cotação", tipo:"Cotação de Porta Rápida", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Cotação", tipo:"Cotação de Porta Automática", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Cotação", tipo:"Cotação de Porta Beer Cave", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Cotação", tipo:"Cotação de Visor Corrediço", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Cotação", tipo:"Cotação de Porta Vai e Vem Isolada", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Cotação", tipo:"Cotação de Porta Vai e Vem de Tamanho Especial", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Cotação", tipo:"Cotação de Resistência", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Cotação", tipo:"Cotação de Termostato", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Dúvida", tipo:"Dúvida Geral", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Dúvida", tipo:"Dúvida de Porta Seccional", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Dúvida", tipo:"Aguardando Dúvida", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Encaminhar", tipo:"Encaminhar", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Planilhamento", tipo:"Planilhamento Total", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Planilhamento", tipo:"Planilhamento Parcial", dadosdopedido:sim},
    {area:"Continnum", funçao:"Planilhamento", subgrupo:"Planilhamento", tipo:"Planilhamento Alteração", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Suporte TI", tipo:"Geral", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Suporte TI", tipo:"Baan - Geral", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Suporte TI", tipo:"Baan - Inclusão de Item", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Suporte TI", tipo:"Baan - Exclusão de Item", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Suporte TI", tipo:"Baan - Troca de Item", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Suporte TI", tipo:"Baan - Exclusão de Alfa", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Suporte TI", tipo:"Baan - Remoção de Alfa", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Suporte TI", tipo:"Baan - Estorno de Alfa", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Suporte TI", tipo:"Baan - Derrubar Usuário", dadosdopedido:sim},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Suporte TI", tipo:"Baan - Liberação de Tela", dadosdopedido:não},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Suporte TI", tipo:"SIP - Geral", dadosdopedido:não},
    //{area:"Continnum", funçao:"Planilhamento", subgrupo:"Suporte TI", tipo:"SIP - Liberação para Edição de Painéis Altos", dadosdopedido:não},
    //{area:"Externo", funçao:"Representante", subgrupo:"Representante", tipo:"Representante", dadosdopedido:sim},
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
    {funçao:"Fabrica", numero:"nnn", nome:"Christian", emailcomercial:"christian@eletrofrio.com.br", emailopcional:"email"},
    {funçao:"Fabrica", numero:"nnn", nome:"Marcio", emailcomercial:"tosta@eletrofrio.com.br", emailopcional:"email"},
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

let selectemail = [
    //{tipo: "Dúvida Geral", emailspara: [], emailscc: ["Continuum - Planilhamento", "Cláudia", "Cleber", "Ellen", "Letícia", "Luiz Fernando Gonsalvez", "Alexandre Ribeiro", "João Cláudio", "Luiz Eduardo", "Nilson", "Suelen", "Carla", "Roney"], emailsbcc: []},
    //{tipo: "Dúvida de Porta Seccional", emailspara: [], emailscc: ["Continuum - Planilhamento", "Cláudia", "Cleber", "Ellen", "Letícia", "Luiz Fernando Gonsalvez", "Alexandre Ribeiro", "João Cláudio", "Luiz Eduardo", "Nilson", "Suelen", "Carla", "Roney"], emailsbcc: []},
    //{tipo: "Aguardando Dúvida", emailspara: [], emailscc: ["Continuum - Planilhamento", "Cláudia", "Cleber", "Ellen", "Letícia", "Luiz Fernando Gonsalvez", "Alexandre Ribeiro", "João Cláudio", "Luiz Eduardo", "Nilson", "Suelen", "Carla", "Roney"], emailsbcc: []},
    //{tipo: "Encaminhar", emailspara: [], emailscc: [], emailsbcc: []},
    {tipo: "Planilhamento Total", emailspara: ["Continuum - Planilhamento para Produção"], emailscc: [], emailsbcc: []},
    {tipo: "Planilhamento Parcial", emailspara: ["Continuum - Planilhamento para Produção"], emailscc: [], emailsbcc: []},
    {tipo: "Planilhamento Alteração", emailspara: ["Continuum - Planilhamento para Produção"], emailscc: [], emailsbcc: []},
]

let ano = [
    //"00",
    //"01",
    //"02",
    //"03",
    //"04",
    //"05",
    //"06",
    //"07",
    //"08",
    //"09",
    //"10",
    //"11",
    //"12",
    //"13",
    //"14",
    //"15",
    //"16",
    //"17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    //"24",
    //"25",
    //"26",
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
    {numero:12, nome:"Dezembro"},
]

let cores = [
    {cor:"Branco", valor:"#FFFFFF"},
    {cor:"Cinza Claro", valor:"#C0C0C0"},
    {cor:"Cinza", valor:"#808080"},
    {cor:"Cinza Escuro", valor:"#404040"},
    {cor:"Preto", valor:"#000000"},
    {cor:"Azul Claro", valor:"#8080FF"},
    {cor:"Azul", valor:"#0000FF"},
    {cor:"Azul Escuro", valor:"#000080"},
    {cor:"Verde Claro", valor:"#80FF80"},
    {cor:"Verde", valor:"#00FF00"},
    {cor:"Verde Escuro", valor:"#008000"},
    {cor:"Vermelho Claro", valor:"#FF8080"},
    {cor:"Vermelho", valor:"#FF0000"},
    {cor:"Vermelho Escuro", valor:"#800000"},
    {cor:"Amarelo Claro", valor:"#FFFF80"},
    {cor:"Amarelo", valor:"#FFFF00"},
    {cor:"Amarelo Escuro", valor:"#808000"},

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

/* Criação de array para comparar com ele mesmo */

let email2 = email.slice()
email2.unshift(0)
let funçaoemail = []

for (let index in email) {if (email[index].funçao != email2[index].funçao) {funçaoemail.push(email[index])}}

let cadastro2 = cadastro.slice()
cadastro2.unshift(0)
let funçaocadastro = []

for (let index in cadastro) {if (cadastro[index].funçao != cadastro2[index].funçao) {funçaocadastro.push(cadastro[index])}}

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

/* Função que oculta a seleção de tipo e os dados do pedido */

function hidetipo() {
    classTipo[0].style.display = displayNone
    classTipo[1].style.display = displayNone
    idDadosDoPedido.style.display = displayNone
}

/* Tipo de E-mail */

/* - Cria as opções de função */

funçaoemail.map((el)=>{
    let optionfunçao = document.createElement(optionTag)
    let textofunçao = document.createTextNode(el.funçao)
    optionfunçao.appendChild(textofunçao)
    optionfunçao.setAttribute(valueAttribute, el.funçao)
    idFunção.insertAdjacentElement("beforeend",optionfunçao)
})

/* - Cria os subgrupos e as opções de tipo */

/* -- Controla a visualização de seleções e limpa seleções anteriores */

function changefunçao() {
    limparesultado()
    if (idFunção.value == selectOption) {hidetipo()}
    else {
        classTipo[0].style.display = displayInlineBlock
        classTipo[1].style.display = displayInlineBlock
        idDadosDoPedido.style.display = displayNone
    }
    while (idTipo.hasChildNodes()) {idTipo.removeChild(idTipo.firstChild)}

/* -- Filtra as opções de subgrupos de acordo com a função */
    
    let subgrupo = []
    for (let index in email) {if (email[index].funçao == idFunção.value && email[index].subgrupo != email2[index].subgrupo) {subgrupo.push(email[index])}}
    
/* -- Cria a opção Selection para a seleção de tipos */

    let emailtiposelectOption = email.filter((el)=>el.funçao == selectOption)
    emailtiposelectOption.map((el)=>{
        let optiontipo = document.createElement(optionTag)
        let textotipo = document.createTextNode(el.tipo)
        optiontipo.appendChild(textotipo)
        if (el.dadosdopedido == não) {optiontipo.setAttribute(classAttribute, classSemPedido)}
        idTipo.insertAdjacentElement("beforeend",optiontipo)
    })
    
/* -- Cria os subgrupos */

    subgrupo.map((el)=>{
        let capitalizenomepara = `idpara${(el.subgrupo.replace(/ /g, "")).charAt(0).toLowerCase() + (el.subgrupo.replace(/ /g, "")).slice(1)}`
        let optionsubgrupo = document.createElement("optgroup")
        optionsubgrupo.setAttribute("label", el.subgrupo)
        optionsubgrupo.setAttribute(idAttribute, capitalizenomepara)
        idTipo.insertAdjacentElement("beforeend",optionsubgrupo)
    })

/* -- Cria os tipos de acordo com a função */

    let emailtipo = email.filter((el)=>el.funçao == idFunção.value && idFunção.value != selectOption)
    emailtipo.map((el)=>{
        let capitalizesubgrupo = `idpara${(el.subgrupo.replace(/ /g, "")).charAt(0).toLowerCase() + (el.subgrupo.replace(/ /g, "")).slice(1)}`
        let idTipo = document.querySelector(`#${capitalizesubgrupo}`)
        let optiontipo = document.createElement(optionTag)
        let textotipo = document.createTextNode(el.tipo)
        optiontipo.appendChild(textotipo)
        if (el.dadosdopedido == não) {optiontipo.setAttribute(classAttribute, classSemPedido)}
        idTipo.insertAdjacentElement("beforeend",optiontipo)
    })
}

/* -- Limpa as informações de tipo de e-mail */

function limpatipodeemail() {
    limparesultado()
    hidetipo()
    while (idTipo.hasChildNodes()) {idTipo.removeChild(idTipo.firstChild)}
}

/* Dados do Pedido */

function changetipo() {
    limparesultado()

/* - Oculta e limpa os dados do pedido caso seja da classe sem pedido */

    if (idTipo.selectedOptions[0].className == classSemPedido) {
        idDadosDoPedido.style.display = displayNone
        idLimpaDadosDePedido.click()
    }
    else {idDadosDoPedido.style.display = displayBlock}

/* - Limpa as checkbox já selecionadas */

    let classparaemail = document.querySelectorAll(".classparaemail")
    for (let index in cadastro) {classparaemail[index].checked = false}

    let classccemail = document.querySelectorAll(".classccemail")
    for (let index in cadastro) {classccemail[index].checked = false}

/* - Seleciona as checkbox dos e-mails de acordo com o tipo de pedido */

    for (let index in selectemail) {
        if (idTipo.value == selectemail[index].tipo) {
            for (let index2 in selectemail[index].emailspara) {
                let capitalizenomepara = `idpara${(selectemail[index].emailspara[index2].replace(/ /g, "")).charAt(0).toLowerCase() + (selectemail[index].emailspara[index2].replace(/ /g, "")).slice(1)}`
                let idcheckboxpara = document.querySelector(`#${capitalizenomepara}`)
                idcheckboxpara.checked = true
            }
            for (let index2 in selectemail[index].emailscc) {
                let capitalizenomecc = `idcc${(selectemail[index].emailscc[index2].replace(/ /g, "")).charAt(0).toLowerCase() + (selectemail[index].emailscc[index2].replace(/ /g, "")).slice(1)}`
                let idcheckboxcc = document.querySelector(`#${capitalizenomecc}`)
                idcheckboxcc.checked = true
            }
        }
    }
}

/* - Cria as opções de números dos representantes */

idNomeRepresentante.setAttribute(valueAttribute,cadastrorepresentante[0].nome)
for (let index in cadastrorepresentante) {
    let optionrepresentante = document.createElement('option')
    let textoptionrepresentante = document.createTextNode(cadastrorepresentante[index].numero)
    optionrepresentante.appendChild(textoptionrepresentante)
    optionrepresentante.setAttribute(valueAttribute,cadastrorepresentante[index].numero)
    idNúmeroRepresentante.insertAdjacentElement('beforeend',optionrepresentante)
}

/* - Cria as opções de nomes dos representantes */

function changenumerorepresentante() {
    limparesultado()
    for (let index in cadastrorepresentante) {if (idNúmeroRepresentante.value == cadastrorepresentante[index].numero) {idNomeRepresentante.setAttribute(valueAttribute,cadastrorepresentante[index].nome)}}
}

/* - Cria as opções de ano do pedido */

ano.map((el)=>{
    let optionano = document.createElement(optionTag)
    let textoano = document.createTextNode(el)
    optionano.appendChild(textoano)
    optionano.setAttribute(valueAttribute, el)
    idAno.insertAdjacentElement("beforeend",optionano)
})

/* - Define o ano selecionado padrão */

idAno.value = new Date().getFullYear() - 2000

/* - Cria as opções de mês do pedido */

mes.map((el)=>{
    let optionmes = document.createElement(optionTag)
    let textomes = document.createTextNode(el.nome)
    optionmes.appendChild(textomes)
    optionmes.setAttribute(valueAttribute, el.nome)
    idMês.insertAdjacentElement("beforeend",optionmes)
})

/* -- Limpa as informações dos dados do pedido */

function limpadadosdopedido() {
    limparesultado()
    idNomeRepresentante.setAttribute(valueAttribute,cadastrorepresentante[0].nome)
}

function limpadadospessoais() {
    idArquivoAssinatura.setAttribute("src", "")
    idArquivoAssinatura.style.display = displayNone
}

/* E-mails Selecionados */

/* - Cria e-mails para */

for (let index in funçaocadastro) {

/* -- Cria details para as funções para */

    let capitalizenomefunçaocadastro = `${(funçaocadastro[index].funçao.replace(/ /g, "")).charAt(0).toLowerCase() + (funçaocadastro[index].funçao.replace(/ /g, "")).slice(1)}`
    let detailsparaemail = document.createElement(detailsTag)
    detailsparaemail.setAttribute(idAttribute, `iddetailspara${capitalizenomefunçaocadastro}`)
    idEmailsPara.insertAdjacentElement("beforeend",detailsparaemail)

/* -- Cria summary para as funções para */

    let iddetailspara = document.querySelector(`#iddetailspara${capitalizenomefunçaocadastro}`)
    let summaryparaemail = document.createElement(summaryTag)
    let summaryparatextoemail = document.createTextNode(funçaocadastro[index].funçao)
    summaryparaemail.appendChild(summaryparatextoemail)
    summaryparaemail.setAttribute(idAttribute, `idsummarypara${capitalizenomefunçaocadastro}`)
    iddetailspara.insertAdjacentElement("beforeend",summaryparaemail)

/* -- Cria label para selecionar todas as checkbox das funções para */

    let labelemail = document.createElement(labelTag)
    let textolabelemail = document.createTextNode(`Selecionar todos do grupo ${funçaocadastro[index].funçao}`)
    labelemail.appendChild(textolabelemail)
    labelemail.setAttribute(idAttribute, `idselecionartodospara${capitalizenomefunçaocadastro}`)
    labelemail.setAttribute(forAttribute, `idselecionartodospara${capitalizenomefunçaocadastro}`)
    iddetailspara.insertAdjacentElement("beforeend",labelemail)

/* -- Cria espaçamento entre o label (função) e a checkbox seguinte das funções para */

    let bremail = document.createElement(brTag)
    iddetailspara.insertAdjacentElement("beforeend",bremail)

/* -- Cria os inputs das checkbox das funções para */

    let funçaocadastrooptionfunçao = cadastroemail.filter((el)=>el.funçao == funçaocadastro[index].funçao)
    funçaocadastrooptionfunçao.map((el)=>{
        let capitalizenomepara = `idpara${(el.nome.replace(/ /g, "")).charAt(0).toLowerCase() + (el.nome.replace(/ /g, "")).slice(1)}`
        let optionemailcadastro = document.createElement(inputTag)
        let textoemailcadastro = document.createTextNode(el.nome)
        optionemailcadastro.appendChild(textoemailcadastro)
        optionemailcadastro.setAttribute(typeAttribute, checkboxAttribute)
        optionemailcadastro.setAttribute(idAttribute, capitalizenomepara)
        optionemailcadastro.setAttribute(classAttribute, `classparaemailcadastro${capitalizenomefunçaocadastro} classparaemail`)
        optionemailcadastro.setAttribute(valueAttribute, el.emailcomercial)
        iddetailspara.insertAdjacentElement("beforeend",optionemailcadastro)

/* -- Cria os labels das checkbox das funções para */

        let labelemailcadastro = document.createElement(labelTag)
        let textolabelemailcadastro = document.createTextNode(el.nome)
        labelemailcadastro.appendChild(textolabelemailcadastro)
        labelemailcadastro.setAttribute(forAttribute, capitalizenomepara)
        iddetailspara.insertAdjacentElement("beforeend",labelemailcadastro)

/* -- Cria espaçamento entre o label (option) e a checkbox seguinte das funções para */

        let bremail = document.createElement(brTag)
        iddetailspara.insertAdjacentElement("beforeend",bremail)
    })

/* -- Controla a visualização de seleção das checkbox das funções para */

    let checkedpara = 0
    let idselecionartodospara = document.querySelector(`#idselecionartodospara${capitalizenomefunçaocadastro}`)
    function selectallpara() {
        limparesultado()
        if (checkedpara == 0) {
            for (let index in funçaocadastrooptionfunçao) {
                let classparaemail = document.querySelectorAll(`.classparaemailcadastro${capitalizenomefunçaocadastro}`)
                classparaemail[index].checked = true
                checkedpara = 1
            }
        }
        else {
            for (let index in funçaocadastrooptionfunçao) {
                let classparaemail = document.querySelectorAll(`.classparaemailcadastro${capitalizenomefunçaocadastro}`)
                classparaemail[index].checked = false
                checkedpara = 0
            }
        }
    }

/* -- Limpa as checkbox das funções para */

    function limpaemailsselecionados() {
        limparesultado()
        checkedpara = 0
    }

/* Eventos das funções para*/

    idselecionartodospara.addEventListener("click", selectallpara)
    idLimpaEmailSelecionado.addEventListener("click", limpaemailsselecionados)
}

/* - Cria e-mails cc */

for (let index in funçaocadastro) {

/* -- Cria details para as funções cc */

    let capitalizenomefunçaocadastro = `${(funçaocadastro[index].funçao.replace(/ /g, "")).charAt(0).toLowerCase() + (funçaocadastro[index].funçao.replace(/ /g, "")).slice(1)}`
    let detailsccemail = document.createElement(detailsTag)
    detailsccemail.setAttribute(idAttribute, `iddetailscc${capitalizenomefunçaocadastro}`)
    idEmailsCc.insertAdjacentElement("beforeend",detailsccemail)

/* -- Cria summary para as funções cc */

    let iddetailscc = document.querySelector(`#iddetailscc${capitalizenomefunçaocadastro}`)
    let summaryccemail = document.createElement(summaryTag)
    let summarycctextoemail = document.createTextNode(funçaocadastro[index].funçao)
    summaryccemail.appendChild(summarycctextoemail)
    summaryccemail.setAttribute(idAttribute, `idsummarycc${capitalizenomefunçaocadastro}`)
    iddetailscc.insertAdjacentElement("beforeend",summaryccemail)

/* -- Cria label para selecionar todas as checkbox das funções cc */

    let labelemail = document.createElement(labelTag)
    let textolabelemail = document.createTextNode(`Selecionar todos do grupo ${funçaocadastro[index].funçao}`)
    labelemail.appendChild(textolabelemail)
    labelemail.setAttribute(idAttribute, `idselecionartodoscc${capitalizenomefunçaocadastro}`)
    labelemail.setAttribute(forAttribute, `idselecionartodoscc${capitalizenomefunçaocadastro}`)
    iddetailscc.insertAdjacentElement("beforeend",labelemail)

/* -- Cria espaçamento entre o label (função) e a checkbox seguinte das funções cc */

    let bremail = document.createElement(brTag)
    iddetailscc.insertAdjacentElement("beforeend",bremail)

/* -- Cria os inputs das checkbox das funções cc */

    let funçaocadastrooptionfunçao = cadastroemail.filter((el)=>el.funçao == funçaocadastro[index].funçao)

    funçaocadastrooptionfunçao.map((el)=>{
        let capitalizenomecc = `idcc${(el.nome.replace(/ /g, "")).charAt(0).toLowerCase() + (el.nome.replace(/ /g, "")).slice(1)}`
        let optionemailcadastro = document.createElement(inputTag)
        let textoemailcadastro = document.createTextNode(el.nome)
        optionemailcadastro.appendChild(textoemailcadastro)
        optionemailcadastro.setAttribute(typeAttribute, checkboxAttribute)
        optionemailcadastro.setAttribute(idAttribute, capitalizenomecc)
        optionemailcadastro.setAttribute(classAttribute, `classccemailcadastro${capitalizenomefunçaocadastro} classccemail`)
        optionemailcadastro.setAttribute(valueAttribute, el.emailcomercial)
        iddetailscc.insertAdjacentElement("beforeend",optionemailcadastro)

/* -- Cria os labels das checkbox das funções cc */

        let labelemailcadastro = document.createElement(labelTag)
        let textolabelemailcadastro = document.createTextNode(el.nome)
        labelemailcadastro.appendChild(textolabelemailcadastro)
        labelemailcadastro.setAttribute(forAttribute, capitalizenomecc)
        iddetailscc.insertAdjacentElement("beforeend",labelemailcadastro)

/* -- Cria espaçamento entre o label (option) e a checkbox seguinte das funções cc */

        let bremail = document.createElement(brTag)
        iddetailscc.insertAdjacentElement("beforeend",bremail)
    })

/* -- Controla a visualização de seleção das checkbox das funções cc */

    let checkedcc = 0
    let idselecionartodoscc = document.querySelector(`#idselecionartodoscc${capitalizenomefunçaocadastro}`)
    function selectallcc() {
        limparesultado()
        if (checkedcc == 0) {
            for (let index in funçaocadastrooptionfunçao) {
                let classccemail = document.querySelectorAll(`.classccemailcadastro${capitalizenomefunçaocadastro}`)
                classccemail[index].checked = true
                checkedcc = 1
            }
        }
        else {
            for (let index in funçaocadastrooptionfunçao) {
                let classccemail = document.querySelectorAll(`.classccemailcadastro${capitalizenomefunçaocadastro}`)
                classccemail[index].checked = false
                checkedcc = 0
            }
        }
    }

/* -- Limpa as checkbox das funções cc */

    function limpaemailsselecionados() {
        limparesultado()
        checkedcc = 0
    }

/* Eventos das funções cc*/

    idselecionartodoscc.addEventListener("click", selectallcc)
    idLimpaEmailSelecionado.addEventListener("click", limpaemailsselecionados)
}

/* Gera resultados */

function gerar() {
    limparesultado()
    
/* - Verifica e gera a assinatura carregada */

if (idAssinatura.files.length == 0) {
    idArquivoAssinatura.setAttribute("src", "")
    idArquivoAssinatura.style.display = displayNone
}
else {
    idArquivoAssinatura.style.display = displayInlineBlock
    idArquivoAssinatura.setAttribute("src", URL.createObjectURL(idAssinatura.files[0]))
    idArquivoAssinatura.setAttribute("height", 100)
}

/* - Gera e-mails para */

    idResultadoPara.innerHTML = ""
    let classparaemail = document.querySelectorAll(".classparaemail")
    for (let index in cadastro) {if (classparaemail[index].checked == true) {idResultadoPara.innerHTML += `${classparaemail[index].value}; `}}

/* - Gera e-mails cc */

    idResultadoCc.innerHTML = ""
    let classccemail = document.querySelectorAll(".classccemail")
    for (let index in cadastro) {if (classccemail[index].checked == true) {idResultadoCc.innerHTML += `${classccemail[index].value}; `}}

/* - Gera assunto */

/* -- Verifica se tem dados não preenchidos e corrige a formatação */
    let verificanumerorepresentante = ""
    let verificanomedocliente = ""
    let verificanomefantasia = ""
    let verificatipo = `${idTipo.value}`

    if (idPedido.value != "") {verificanumerorepresentante = `PED ${idNúmeroRepresentante.value}-${idPedido.value}/${idAno.value}`}
    if (idTipo.value != "" && idPedido.value != "") {verificatipo = ` - ${idTipo.value}`}
    if (idNomeDoCliente.value != "" && idTipo.value != "" && idPedido.value != "") {verificanomedocliente = ` - ${idNomeDoCliente.value}`}
    if (idNomeFantasia.value != "") {verificanomefantasia = ` - ${idNomeFantasia.value}`}

    idResultadoAssunto.innerHTML = `${verificanumerorepresentante}${verificatipo}${verificanomedocliente}${verificanomefantasia}`

/* - Gera corpor do e-mail */

/* -- Verifica periodo do dia */

    let hora = new Date().getHours()
    let periodo = ""
    if (hora < 6 || hora >= 18) {periodo = "Boa noite"}
    if (hora >= 6 && hora < 12) {periodo = "Bom dia"}
    if (hora >= 12 && hora < 18) {periodo = "Boa tarde"}

/* -- Variáveis Auxiliares */

    let marciohiperlink = `<a href=${mailto}${cadastro[cadastro.map((el) => el.nome).indexOf("Marcio")].emailcomercial}>@Marcio Tosta</a>`
    let christianhiperlink = `<a href=${mailto}${cadastro[cadastro.map((el) => el.nome).indexOf("Christian")].emailcomercial}>Christian Aparecido dos Santos Pereira</a>`
    let simonehiperlink = `<a href=${mailto}${cadastro[cadastro.map((el) => el.nome).indexOf("Simone")].emailcomercial}>@Simone da Luz</a>`
    let amarelo = 'style="background-color: rgb(255, 255, 0)"'

/* -- Gera modelos de e-mails de acordo com o tipo */

    switch (idTipo.value) {
        case "Planilhamento Total":
            informaçaoespecial = `<span ${amarelo}><mark>Informação especial.</mark></span>`
            idResultadoCorpoDoEmail.innerHTML = `${periodo},${br2}${idTipo.value}${br2}${verificanumerorepresentante}${verificanomedocliente}${verificanomefantasia}${br1}${OV}${idOrdemDeVenda.value}${br1}${localização}${idMês.value} / ${idNomeRepresentante.value}${br1}${arquivo}${idAnexarAssinatura.value}${idRevisão.value}${br2}${informaçaoespecial}${br2}${agradecimento}${br3}`
            break;
        case "Planilhamento Parcial":
            informaçaoespecial = `<span ${amarelo}><mark>Informação especial.</mark></span>`
            idResultadoCorpoDoEmail.innerHTML = `${periodo},${br2}${idTipo.value}${br2}${verificanumerorepresentante}${verificanomedocliente}${verificanomefantasia}${br1}${OV}${idOrdemDeVenda.value}${br1}${localização}${idMês.value} / ${idNomeRepresentante.value}${br1}${arquivo}${idAnexarAssinatura.value}${idRevisão.value}${br2}${informaçaoespecial}${br2}${agradecimento}${br3}`
            break;
        case "Planilhamento Alteração":
            informaçaoespecial = `<span ${amarelo}><mark>Atualizado o alfa de OOOOOOOO.</mark></span>`
            contatos = ``
            idResultadoCorpoDoEmail.innerHTML = `${periodo},${br2}${idTipo.value}${br2}${marciohiperlink} e ${christianhiperlink}${br2}${informaçaoespecial}${br2}${simonehiperlink}${br2}Por favor verificar a necessidade de atualização do projeto executivo.${br2}${agradecimento}${br3}`
            break;
        default:
            idResultadoCorpoDoEmail.innerHTML = "<mark>(OPÇÃO DE E-MAIL AINDA NÃO CONFIGURADA)</mark>"
            break;
    }

/* -- Gera os dados do e-mail no formato correto para o mailto */

    emailtextocompleto = `${mailto}${idResultadoPara.innerHTML}${cc}${idResultadoCc.innerHTML}${bcc}${henrique}${subject}${idResultadoAssunto.innerHTML}`.replace(/; /g,";")
    let bcc2 = bcc.replace(/&/,"?")
    let subject2 = subject.replace(/&/,"?")
    if (idResultadoCc.innerHTML == "") {emailtextocompleto = `${mailto}${idResultadoPara.innerHTML}${bcc2}${henrique}${subject}${idResultadoAssunto.innerHTML}`.replace(/; /g,";")}
    if (henrique == "") {emailtextocompleto = `${mailto}${idResultadoPara.innerHTML}${cc}${idResultadoCc.innerHTML}${subject}${idResultadoAssunto.innerHTML}`.replace(/; /g,";")}
    if (idResultadoCc.innerHTML == "" && henrique == "") {emailtextocompleto = `${mailto}${idResultadoPara.innerHTML}${subject2}${idResultadoAssunto.innerHTML}`.replace(/; /g,";")}
    if (emailtextocompleto) {idGeraEmail.setAttribute(hrefTag, emailtextocompleto)}

/* -- Copia o corpo do e-mail */

    function copiacorpodoemail() {navigator.clipboard.write([new ClipboardItem({ "text/plain": new Blob([idResultadoCorpoDoEmail.innerText], { type: "text/plain" }), "text/html": new Blob([idResultadoCorpoDoEmail.outerHTML], { type: "text/html" })})])}
    idCopiaCorpoDoEmail.addEventListener("click", copiacorpodoemail)
}

/* - Limpa os resultados gerados */

function limparesultado() {
    idResultadoPara.innerHTML = ""
    idResultadoCc.innerHTML = ""
    idResultadoAssunto.innerHTML = ""
    idResultadoCorpoDoEmail.innerHTML = ""
    idArquivoAssinatura.setAttribute("src", "")
    idArquivoAssinatura.style.display = displayNone
}

/* Opções Extras */

/* Cria as Opções de Cores padrão */

cores.map((el)=>{
    let optioncores = document.createElement(optionTag)
    let textocores = document.createTextNode(el.nome)
    optioncores.appendChild(textocores)
    optioncores.setAttribute(valueAttribute, el.valor)
    idOpçõesCores.insertAdjacentElement("beforeend",optioncores)
})

/* - Muda a cor do Background */

function changecorbackground() {document.body.style.background = idBackgroundColor.value}

/* - Muda a cor do Texto */

function changecortexto() {document.body.style.color = idTextoColor.value}

/* - Limpa os extras */

function limpaextras() {
    document.body.style.background = "#FFFFFF"
    document.body.style.color = "#000000"
}

/* Eventos do HTML*/

idFunção.addEventListener("change", changefunçao)
idLimpaTipoDeEmail.addEventListener("click", limpatipodeemail)
idTipo.addEventListener("change", changetipo)
idNúmeroRepresentante.addEventListener("change", changenumerorepresentante)
idLimpaDadosDePedido.addEventListener("click", limpadadosdopedido)
idLimpaDadosPessoais.addEventListener("click", limpadadospessoais)
idApresentaEmail.addEventListener("click", gerar)
idLimpaResultado.addEventListener("click", limparesultado)
idBackgroundColor.addEventListener("change", changecorbackground)
idTextoColor.addEventListener("change", changecortexto)
idLimpaExtras.addEventListener("click", limpaextras)

/* FIM */