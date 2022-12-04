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
let idArquivo = document.querySelector("#idArquivo")
let idRevisão = document.querySelector("#idRevisão")
let idLimpaDadosDePedido = document.querySelector("#idLimpaDadosDePedido")
let idLimpaDadosPessoais = document.querySelector("#idLimpaDadosPessoais")
let idEmailsPara = document.querySelector("#idEmailsPara")
let idEmailsCc = document.querySelector("#idEmailsCc")
let idEmailsBcc = document.querySelector("#idEmailsBcc")
let idLimpaEmailSelecionado = document.querySelector("#idLimpaEmailSelecionado")
let idResultadoPara = document.querySelector("#idResultadoPara")
let idResultadoCc = document.querySelector("#idResultadoCc")
let idResultadoBcc = document.querySelector("#idResultadoBcc")
let idResultadoAssunto = document.querySelector("#idResultadoAssunto")
let idApresentaEmail = document.querySelector("#idApresentaEmail")
let idResultadoCorpoDoEmail = document.querySelector("#idResultadoCorpoDoEmail")
let idLimpaResultado = document.querySelector("#idLimpaResultado")
let idCopiaCorpoDoEmail = document.querySelector("#idCopiaCorpoDoEmail")
let idAssinatura = document.querySelector("#idAssinatura")
let idBackgroundColor = document.querySelector("#idBackgroundColor")
let idTextoColor = document.querySelector("#idTextoColor")
let idOptionCores = document.querySelector("#idOptionCores")
let idLimpaExtras = document.querySelector("#idLimpaExtras")
let idGeraEmail = document.querySelector("#idGeraEmail")

/* Variáveis para facilitar a escrita de funções  */

let optionTag = "option"
let inputTag = "input"
let labelTag = "label"
let brTag = "br"
let detailsTag = "details"
let summaryTag = "summary"
let hrefAttribute = "href"
let valueAttribute = "value"
let idAttribute = "id"
let classAttribute = "class"
let typeAttribute = "type"
let checkboxAttribute = "checkbox"
let forAttribute = "for"
let srcAttribute = "src"
let altAttribute = "alt"
let widthAttribute = "width"
let displayNone = "none"
let displayInlineBlock = "inline-block"
let displayBlock = "block"

/* Variáveis para facilitar a troca de textos repetitivos  */

let selectOption = "(SELECIONE UMA OPÇÃO)"
let sim = "sim"
let não = "não"
let classSemPedido = "classSemPedido"
let controlEmail = "hcds.rick@gmail.com"
let br1 = "<br>".repeat(1)
let br2 = "<br>".repeat(2)
let br3 = "<br>".repeat(3)
let mailTo = "mailTo:"
let cc = "?cc="
let bcc = "&bcc="
let subject = "&subject="
let body = "&body="
let OV = "OV: "
let localização = "LOCALIZAÇÃO: "
let arquivo = "ARQUIVO: "
let agradecimento = "Atenciosamente,"
let enter = "%0D"

/* Variáveis para e-mails que servem para vários representantes */

let emailsSãoPaulo = "felipe.santos@eletrofrio.com.br; bruna.nahkur@eletrofrio.com.br; diego.paula@eletrofrio.com.br; edison@eletrofrio.com.br; danielly.fabem@eletrofrio.com.br"
let emailsExterior = "gabriel@eletrofrio.com.br; luiz.alves@eletrofrio.com.br"

/* Arrays com dados a serem inseridos */

let email = [
    {função:selectOption, tipo:selectOption, dadosDoPedido:não},
    //{area:"Comercial", função:"Analista", subGrupo:"Analista", tipo:"Liberação Parcial", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Comercial", função:"Analista", subGrupo:"Analista", tipo:"Liberação Total", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Comercial", função:"Analista", subGrupo:"Analista", tipo:"Linhas Atualizadas", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Comercial", função:"Analista", subGrupo:"Analista", tipo:"Feito", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Comercial", função:"Analista", subGrupo:"Analista", tipo:"Atualizar", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Comercial", função:"Ajuste", subGrupo:"Ajuste", tipo:"Dúvidas", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Comercial", função:"Ajuste", subGrupo:"Ajuste", tipo:"Aguardando Dúvidas", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Comercial", função:"Ajuste", subGrupo:"Ajuste", tipo:"Arquivos de Ajuste", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Comercial", função:"Ajuste", subGrupo:"Ajuste", tipo:"Aguardando Conferência", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Comercial", função:"Ajuste", subGrupo:"Ajuste", tipo:"Alteração", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Executivo", subGrupo:"Executivo", tipo:"Pré Projeto", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Executivo", subGrupo:"Executivo", tipo:"Projeto Executivo", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Planilhamento", subGrupo:"Compra", tipo:"Compra de Porta Walk-In", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Planilhamento", subGrupo:"Compra", tipo:"Compra de Porta Seccional", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Planilhamento", subGrupo:"Compra", tipo:"Compra de Portal de Selamento", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Planilhamento", subGrupo:"Compra", tipo:"Compra de Niveladora de Doca", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Planilhamento", subGrupo:"Compra", tipo:"Compra de Porta Rápida", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Planilhamento", subGrupo:"Compra", tipo:"Compra de Porta Automática", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Planilhamento", subGrupo:"Compra", tipo:"Compra de Porta Beer Cave", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Planilhamento", subGrupo:"Compra", tipo:"Compra de Visor Corrediço", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Planilhamento", subGrupo:"Compra", tipo:"Compra de Porta Vai e Vem Isolada", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Planilhamento", subGrupo:"Compra", tipo:"Compra de Porta Vai e Vem de Tamanho Especial", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Planilhamento", subGrupo:"Compra", tipo:"Compra de Resistência", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Planilhamento", subGrupo:"Compra", tipo:"Compra de Termostato", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Planilhamento", subGrupo:"Cotação", tipo:"Cotação de Porta Walk-In", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Planilhamento", subGrupo:"Cotação", tipo:"Cotação de Porta Seccional", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Planilhamento", subGrupo:"Cotação", tipo:"Cotação de Portal de Selamento", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Planilhamento", subGrupo:"Cotação", tipo:"Cotação de Niveladora de Doca", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Planilhamento", subGrupo:"Cotação", tipo:"Cotação de Porta Rápida", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Planilhamento", subGrupo:"Cotação", tipo:"Cotação de Porta Automática", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Planilhamento", subGrupo:"Cotação", tipo:"Cotação de Porta Beer Cave", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Planilhamento", subGrupo:"Cotação", tipo:"Cotação de Visor Corrediço", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Planilhamento", subGrupo:"Cotação", tipo:"Cotação de Porta Vai e Vem Isolada", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Planilhamento", subGrupo:"Cotação", tipo:"Cotação de Porta Vai e Vem de Tamanho Especial", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Planilhamento", subGrupo:"Cotação", tipo:"Cotação de Resistência", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Planilhamento", subGrupo:"Cotação", tipo:"Cotação de Termostato", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    {area:"Continnum", função:"Planilhamento", subGrupo:"Dúvida", tipo:"Dúvida Geral", dadosDoPedido:sim, emailsPara: [], emailsCc: ["Continuum - Planilhamento", "Cláudia", "Cleber", "Ellen", "Letícia", "Luiz Fernando Gonsalvez", "Alexandre Ribeiro", "João Cláudio", "Luiz Eduardo", "Nilson", "Suelen", "Carla", "Roney"], emailsBcc: []},
    {area:"Continnum", função:"Planilhamento", subGrupo:"Dúvida", tipo:"Dúvida de Porta Seccional Livre de Alvenaria", dadosDoPedido:sim, emailsPara: [], emailsCc: ["Continuum - Planilhamento", "Cláudia", "Cleber", "Ellen", "Letícia", "Luiz Fernando Gonsalvez", "Alexandre Ribeiro", "João Cláudio", "Luiz Eduardo", "Nilson", "Suelen", "Carla", "Roney"], emailsBcc: []},
    {area:"Continnum", função:"Planilhamento", subGrupo:"Dúvida", tipo:"Dúvida de Porta Seccional Encostada em Alvenaria", dadosDoPedido:sim, emailsPara: [], emailsCc: ["Continuum - Planilhamento", "Cláudia", "Cleber", "Ellen", "Letícia", "Luiz Fernando Gonsalvez", "Alexandre Ribeiro", "João Cláudio", "Luiz Eduardo", "Nilson", "Suelen", "Carla", "Roney"], emailsBcc: []},
    {area:"Continnum", função:"Planilhamento", subGrupo:"Dúvida", tipo:"Aguardando Dúvida", dadosDoPedido:sim, emailsPara: [], emailsCc: ["Continuum - Planilhamento", "Cláudia", "Cleber", "Ellen", "Letícia", "Luiz Fernando Gonsalvez", "Alexandre Ribeiro", "João Cláudio", "Luiz Eduardo", "Nilson", "Suelen", "Carla", "Roney"], emailsBcc: []},
    {area:"Continnum", função:"Planilhamento", subGrupo:"Encaminhar", tipo:"Encaminhar", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    {area:"Continnum", função:"Planilhamento", subGrupo:"Planilhamento", tipo:"Planilhamento Total", dadosDoPedido:sim, emailsPara: ["Continuum - Planilhamento para Produção"], emailsCc: [], emailsBcc: []},
    {area:"Continnum", função:"Planilhamento", subGrupo:"Planilhamento", tipo:"Planilhamento Parcial", dadosDoPedido:sim, emailsPara: ["Continuum - Planilhamento para Produção"], emailsCc: [], emailsBcc: []},
    {area:"Continnum", função:"Planilhamento", subGrupo:"Planilhamento", tipo:"Planilhamento Alteração", dadosDoPedido:sim, emailsPara: ["Continuum - Planilhamento para Produção"], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Planilhamento", subGrupo:"Suporte TI", tipo:"Geral", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Planilhamento", subGrupo:"Suporte TI", tipo:"Baan - Geral", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Planilhamento", subGrupo:"Suporte TI", tipo:"Baan - Inclusão de Item", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Planilhamento", subGrupo:"Suporte TI", tipo:"Baan - Exclusão de Item", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Planilhamento", subGrupo:"Suporte TI", tipo:"Baan - Troca de Item", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Planilhamento", subGrupo:"Suporte TI", tipo:"Baan - Exclusão de Alfa", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Planilhamento", subGrupo:"Suporte TI", tipo:"Baan - Remoção de Alfa", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Planilhamento", subGrupo:"Suporte TI", tipo:"Baan - Estorno de Alfa", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Planilhamento", subGrupo:"Suporte TI", tipo:"Baan - Derrubar Usuário", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Planilhamento", subGrupo:"Suporte TI", tipo:"Baan - Liberação de Tela", dadosDoPedido:não, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Planilhamento", subGrupo:"Suporte TI", tipo:"SIP - Geral", dadosDoPedido:não, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Continnum", função:"Planilhamento", subGrupo:"Suporte TI", tipo:"SIP - Liberação para Edição de Painéis Altos", dadosDoPedido:não, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{area:"Externo", função:"Representante", subGrupo:"Representante", tipo:"Representante", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
]

let cadastro = [
    //{função:"_ADM_", número:"_ADM_", nome:"Henrique Carvalho de Souza", emailComercial:"hcds.rick@gmail.com"},
    {função:"Ajuste", número:"nnn", nome:"Cláudia", emailComercial:"claudia.carvalho@eletrofrio.com.br"},
    {função:"Ajuste", número:"nnn", nome:"Cleber", emailComercial:"cleber.medeiros@eletrofrio.com.br"},
    {função:"Ajuste", número:"nnn", nome:"Ellen", emailComercial:"ellen@eletrofrio.com.br"},
    {função:"Ajuste", número:"nnn", nome:"Letícia", emailComercial:"leticia.karoline@eletrofrio.com.br"},
    {função:"Ajuste", número:"nnn", nome:"Luiz Fernando Gonsalvez", emailComercial:"luiz.goncalves@eletrofrio.com.br"},
    {função:"Analista", número:"nnn", nome:"Alexandre Ribeiro", emailComercial:"alexandre.ribeiro@eletrofrio.com.br"},
    {função:"Analista", número:"nnn", nome:"João Cláudio", emailComercial:"jclaudio@eletrofrio.com.br"},
    {função:"Analista", número:"nnn", nome:"Luiz Eduardo", emailComercial:"luiz.eduardo@eletrofrio.com.br"},
    {função:"Analista", número:"nnn", nome:"Nilson", emailComercial:"nilson@eletrofrio.com.br"},
    {função:"Analista", número:"nnn", nome:"Suelen", emailComercial:"suelen.assis@eletrofrio.com.br"},
    {função:"Executivo", número:"nnn", nome:"Bruno", emailComercial:"bruno.garcia@eletrofrio.com.br"},
    {função:"Executivo", número:"nnn", nome:"Carlos", emailComercial:"carlos.margon@eletrofrio.com.br"},
    {função:"Executivo", número:"nnn", nome:"Rubens", emailComercial:"rubens@eletrofrio.com.br"},
    {função:"Executivo", número:"nnn", nome:"Susan", emailComercial:"susan.colsani@eletrofrio.com.br"},
    {função:"Fábrica", número:"nnn", nome:"Christian", emailComercial:"christian@eletrofrio.com.br"},
    {função:"Fábrica", número:"nnn", nome:"Marcio", emailComercial:"tosta@eletrofrio.com.br"},
    {função:"Grupo", número:"nnn", nome:"Continuum - Planilhamento para Produção", emailComercial:"PLANIC.F@uhygb1yu6fxo7a.onmicrosoft.com"},
    {função:"Grupo", número:"nnn", nome:"Continuum - Planilhamento", emailComercial:"planilhamento@continuum.ind.br"},
    {função:"Grupo", número:"nnn", nome:"Continuum - Projeto Executivo", emailComercial:"projetos@continuum.ind.br"},
    {função:"Liderança", número:"nnn", nome:"Carla", emailComercial:"carlaadriana@eletrofrio.com.br"},
    {função:"Liderança", número:"nnn", nome:"Roney", emailComercial:"roney@eletrofrio.com.br"},
    {função:"Liderança", número:"nnn", nome:"Alexandre Cavagnoli", emailComercial:"alexandre.cavagnoli@eletrofrio.com.br"},
    {função:"Liderança", número:"nnn", nome:"Leandro Vianna", emailComercial:"leandro.vianna@eletrofrio.com.br"},
    {função:"Liderança", número:"nnn", nome:"Simone", emailComercial:"simone@eletrofrio.com.br"},
    {função:"Planilhamento", número:"nnn", nome:"Amarildo", emailComercial:"amarildo.cruz@eletrofrio.com.br"},
    {função:"Planilhamento", número:"nnn", nome:"Gabriel", emailComercial:"gabriel.aguiar@eletrofrio.com.br"},
    {função:"Planilhamento", número:"500016", nome:"Henrique", emailComercial:"henrique.souza@eletrofrio.com.br"},
    {função:"Representante", número:"001", nome:"Venda Direta Curitiba", emailComercial:"(VERIFICAR O RESPONSÁVEL)"},
    {função:"Representante", número:"004", nome:"Tecnimet", emailComercial:"angel.gallagher@tecnimet.com; electromecanica@tecnimet.com; rodney.roman@tecnimet.com, marcosm@tecnimet.com; javier.escobar@tecnimet.com; div.comercial@tecnimet.com"},
    {função:"Representante", número:"011", nome:"FG", emailComercial:"larissa@fgrefrigeracao.com.br; projetos@fgrefrigeracao.com.br; projetos01@fgrefrigeracao.com.br; projetos02@fgrefrigeracao.com.br; projetos03@fgrefrigeracao.com.br; projetos04@fgrefrigeracao.com.br; nathan@fgrefrigeracao.com.br"},
    {função:"Representante", número:"016", nome:"Lobo", emailComercial:"loboinstalacoescomerciais@yahoo.com.br; waldircf2@gmail.com"},
    {função:"Representante", número:"018", nome:"Silva Filho", emailComercial:"silva.filho@ymail.com; crystianno.silva@gmail.com"},
    {função:"Representante", número:"024", nome:"Mallet", emailComercial:"silvio@mallet.net.br; helcio@mallet.net.br; adm@mallet.net.br; leonardo@mallet.net.br"},
    {função:"Representante", número:"035", nome:"Clecio", emailComercial:"clecio.salviano@eletrofrio.com.br"},
    {função:"Representante", número:"057", nome:"Refripan", emailComercial:"rafernandomenezes@yahoo.com.br; nidia.roza@hotmail.com"},
    {função:"Representante", número:"062", nome:"M Weidner", emailComercial: `${emailsSãoPaulo}; marceloeletrofrio@gmail.com; marceloweidner@globo.com`},
    {função:"Representante", número:"067", nome:"Tortelli", emailComercial:"projetos1@torteli.com.br; vendas@torteli.com.br; torteli@torteli.com.br"},
    {função:"Representante", número:"070", nome:"Venda Direta São Paulo", emailComercial:"(VERIFICAR O RESPONSÁVEL)"},
    {função:"Representante", número:"077", nome:"Llampe Frio PR", emailComercial:"kaua@llampefrio.com.br; contato@llampefrio.com.br; projetos2@llampefrio.com.br; projetos3@llampefrio.com.br; projetos4@llampefrio.com.br; samantha@llampefrio.com.br; depro@llampefrio.com.br; ernesto@llampefrio.com.br; lfandre@llampefrio.com.br; llampefrio@llampefrio.com.br"},
    {função:"Representante", número:"082", nome:"HB", emailComercial: `${emailsSãoPaulo}; hb-bene@uol.com.br`},
    {função:"Representante", número:"087", nome:"Baldissera", emailComercial:"baldissera@redesul.com.br; gilmar_west@hotmail.com"},
    {função:"Representante", número:"093", nome:"Gurgel", emailComercial:"gurgeldf@gmail.com; gurgelrepresentacoes@hotmail.com; gurgel61@terra.com.br"},
    {função:"Representante", número:"094", nome:"Luiz Nachbar", emailComercial: `${emailsSãoPaulo}; luiz_nachbar@eletrofrio.com.br`},
    {função:"Representante", número:"096", nome:"Kalliel", emailComercial:"kallielprojetos@gmail.com"},
    {função:"Representante", número:"097", nome:"DE", emailComercial:"vendas@deequipamentos.com.br; daniel@deequipamentos.com.br; projetos@deequipamentos.com.br; projetos2@deequipamentos.com.br; projetos3@deequipamentos.com.br"},
    {função:"Representante", número:"101", nome:"Da Roz", emailComercial: `${emailsSãoPaulo}; renatabartel@darozrepresentacoes.com.br; douglas@darozrepresentacoes.com.br; darozrep@terra.com.br; darozrep@gmail.com`},
    {função:"Representante", número:"102", nome:"Superbrasil", emailComercial:"comercial2@superb.com.br; luiz@superb.com.br; comercial@superb.com.br; sac@superb.com.br"},
    {função:"Representante", número:"106", nome:"Vitoria", emailComercial:"jeffersondsrf@uol.com.br; rafael.lnery@gmail.com; jucelito@msn.com"},
    {função:"Representante", número:"112", nome:"Ronald", emailComercial:"ronaldioliveira@ronaldmaquinas.com.br; mariacardoso@ronaldmaquinas.com.br; anaoliveira@ronaldmaquinas.com.br; yasmimoliveira@ronaldmaquinas.com.br; orlandomazoni@ronaldmaquinas.com.br; leo.brandao.arq@gmail.com; ronaldioliveira@ronaldmaquinas.com.br"},
    {função:"Representante", número:"114", nome:"Scallet", emailComercial: `${emailsSãoPaulo}; scallet@eletrofrio.com.br; carla.sp@eletrofrio.com.br`},
    {função:"Representante", número:"115", nome:"Guide", emailComercial:"cirilo@guidisc.com.br; projetos@guidisc.com.br; rinaldo@guidisc.com.br; guidi@guidisc.com.br"},
    {função:"Representante", número:"118", nome:"Fast Sul", emailComercial:"mbariano@fastsul.com; contato@fastsul.com"},
    {função:"Representante", número:"120", nome:"Rio Fast", emailComercial:"riofasteletro@yahoo.com.br; gabriel@amorimequipamentosrj.com; fausto@amorimequipamentosrj.com; riofasteletro@yahoo.com.br"},
    {função:"Representante", número:"121", nome:"Eletrofast", emailComercial:"vinicius@eletrofastrj.com; vilmar@eletrofastrj.com; diego@eletrofastrj.com; pedro@eletrofastrj.com; eletrofast@yahoo.com.br; luizamorimp@yahoo.com.br"},
    {função:"Representante", número:"182", nome:"Afonso Araujo", emailComercial:"afonsovargasaraujo@gmail.com"},
    {função:"Representante", número:"187", nome:"ETCO", emailComercial:"etcorep@terra.com.br"},
    {função:"Representante", número:"189", nome:"Refriged", emailComercial: `${emailsSãoPaulo}; ednilson.santos@uol.com.br; ednilson.eletrofrio@gmail.com`},
    {função:"Representante", número:"190", nome:"A&F", emailComercial:"renan@aefbolsadenegocios.com.br; renato@aefbolsadenegocios.com.br; fernando@aefbolsadenegocios.com.br; victor@aefbolsadenegocios.com.br; wilian@aefbolsadenegocios.com.br; roni@aefbolsadenegocios.com.br; victor@aefbolsadenegocios.com.br"},
    {função:"Representante", número:"191", nome:"Produtiva", emailComercial:"suporte@produtivarepresentacoes.com.br; michel@produtivarepresentacoes.com.br"},
    {função:"Representante", número:"193", nome:"Llampe Frio SC", emailComercial:"kaua@llampefrio.com.br; contato@llampefrio.com.br; projetos2@llampefrio.com.br; projetos3@llampefrio.com.br; projetos4@llampefrio.com.br; samantha@llampefrio.com.br; depro@llampefrio.com.br; ernesto@llampefrio.com.br; lfandre@llampefrio.com.br; llampefrio@llampefrio.com.br"},
    {função:"Representante", número:"195", nome:"DNC Dealer", emailComercial:"projetos@dealerrs.com.br; dinar@dealerrs.com.br"},
    {função:"Representante", número:"196", nome:"Brites", emailComercial:"vendas@brites.srv.br"},
    {função:"Representante", número:"198", nome:"Euro", emailComercial:"equipamentoseuro@gmail.com; jacksonkiatkoski@gmail.com"},
    {função:"Representante", número:"199", nome:"Erco", emailComercial:"mario.erco1@gmail.com"},
    {função:"Representante", número:"202", nome:"Eder Mathias", emailComercial:"eder.mathias@uol.com.br"},
    {função:"Representante", número:"203", nome:"HCM", emailComercial:"anderson@hcm.com.br; hcm@hcm.com.br; hamilton@hcm.com.br"},
    {função:"Representante", número:"207", nome:"Brava", emailComercial:"eac_cunha@yahoo.com.br; joaogabriel_p@hotmail.com; eac_cunha@yahoo.com.br"},
    {função:"Representante", número:"213", nome:"Mercato", emailComercial:"mercato.projeto@gmail.com; denis@mercatorepresentacoes.com.br"},
    {função:"Representante", número:"217", nome:"Cold Import", emailComercial: `${emailsExterior}; jlescano@coldimport.com.pe`},
    {função:"Representante", número:"218", nome:"Cencosud", emailComercial: `${emailsExterior}`},
    {função:"Representante", número:"223", nome:"Hercold", emailComercial: `${emailsSãoPaulo}; fastlest@uol.com.br`},
    {função:"Representante", número:"226", nome:"EC", emailComercial:"record@record-maq.com.br; projetos@record-maq.com.br; leonardomoura@record-maq.com.br; silviogoncales@record-maq.com.br; diegoreis@record-maq.com.br"},
    {função:"Representante", número:"227", nome:"Edeval (MIL)", emailComercial:"edevalvendas@gmail.com"},
    {função:"Representante", número:"228", nome:"JPC", emailComercial:"alexandre@acequipamentos.com.br; jp-candido@hotmail.com; projetos.acequipamentos@gmail.com; alexandre@pontodarefrigeracao.com.br"},
    {função:"Representante", número:"229", nome:"Wesley Dal Pozzo", emailComercial:"engenharia_dlpz@outlook.com; dlpz@onda.com.br; walace_dlpz@hotmail.com "},
    {função:"Representante", número:"230", nome:"Ergosystem", emailComercial: `${emailsSãoPaulo}; ergosystem.comercial@outlook.com; ergosystem.comercial1@outlook.com`},
    {função:"Representante", número:"231", nome:"SM", emailComercial: `${emailsExterior}`},
    {função:"Representante", número:"232", nome:"S&I", emailComercial:"carol@siautomacao.com.br; geraldo@siautomacao.com.br; silvia@siautomacao.com.br; alexandre@siautomacao.com.br"},
    {função:"Representante", número:"233", nome:"Control y Sostenibilidad", emailComercial: `${emailsExterior}`},
    {função:"Representante", número:"234", nome:"Aarci", emailComercial: `${emailsExterior}; "juan.avila@aarci.co; info@aarci.co`},
    {função:"Representante", número:"236", nome:"T&G", emailComercial:"filipe.lisbooa@yahoo.com.br; ed_wanderson@yahoo.com.br"},
    {função:"Representante", número:"237", nome:"Rematec", emailComercial:"roger@rematecvarejo.com.br; alessandra@rematecvarejo.com.br; ariele@rematecvarejo.com.br; orcamentos@rematecvarejo.com.br; projetos@rematecvarejo.com.br; alessandra@remaqbh.com.br"},
    {função:"Representante", número:"238", nome:"FMG", emailComercial:"projetos.fmg@hotmail.com; fmg_representacoes@hotmail.com"},
    {função:"Representante", número:"239", nome:"PSK", emailComercial: `${emailsSãoPaulo}`},
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

let mês = [
    {número:01, nome:"Janeiro"},
    {número:02, nome:"Fevereiro"},
    {número:03, nome:"Março"},
    {número:04, nome:"Abril"},
    {número:05, nome:"Maio"},
    {número:06, nome:"Junho"},
    {número:07, nome:"Julho"},
    {número:08, nome:"Agosto"},
    {número:09, nome:"Setembro"},
    {número:10, nome:"Outubro"},
    {número:11, nome:"Novembro"},
    {número:12, nome:"Dezembro"},
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
    if (el1.função < el2.função) {return -1}
    if (el1.função > el2.função) {return 1}
    if (el1.subGrupo < el2.subGrupo) {return -1}
    if (el1.subGrupo > el2.subGrupo) {return 1}
    if (el1.tipo < el2.tipo) {return -1}
    if (el1.tipo > el2.tipo) {return 1}
    return 0
})

cadastro.sort((el1,el2) => {
    if (el1.função < el2.função) {return -1}
    if (el1.função > el2.função) {return 1}
    if (el1.número < el2.número) {return -1}
    if (el1.número > el2.número) {return 1}
    return 0
})

ano.sort((el1,el2) => {
    if (el1 < el2) {return -1}
    if (el1 > el2) {return 1}
    return 0
})

mês.sort((el1,el2) => {
    if (el1.número < el2.número) {return -1}
    if (el1.número > el2.número) {return 1}
    return 0
})

/* Criação de array para comparar com ele mesmo */

let email2 = email.slice()
email2.unshift(0)
let funçãoEmail = []

for (let index in email) {if (email[index].função != email2[index].função) {funçãoEmail.push(email[index])}}

let cadastro2 = cadastro.slice()
cadastro2.unshift(0)
let funçãoCadastro = []

for (let index in cadastro) {if (cadastro[index].função != cadastro2[index].função) {funçãoCadastro.push(cadastro[index])}}

/* Filtra os Arrays */

let representanteCadastro = cadastro.filter((el)=>el.função == "Representante")

let emailCadastro = cadastro.filter((el)=>el)

/* Organização dos arrays filtrados diferente do array original */

emailCadastro.sort((el1,el2) => {
    if (el1.função < el2.função) {return -1}
    if (el1.função > el2.função) {return 1}
    if (el1.nome < el2.nome) {return -1}
    if (el1.nome > el2.nome) {return 1}
    return 0
})

/* Função que oculta a seleção de tipo e os dados do pedido */

function hideTipo() {
    classTipo[0].style.display = displayNone
    classTipo[1].style.display = displayNone
    idDadosDoPedido.style.display = displayNone
}

/* Tipo de E-mail */

/* - Cria as opções de função */

funçãoEmail.map((el)=>{
    let optionFunção = document.createElement(optionTag)
    let textoFunção = document.createTextNode(el.função)
    optionFunção.appendChild(textoFunção)
    optionFunção.setAttribute(valueAttribute, el.função)
    idFunção.insertAdjacentElement("beforeend",optionFunção)
})

/* - Cria os subgrupos e as opções de tipo */

/* -- Controla a visualização de seleções e limpa seleções anteriores */

function changeFunção() {
    limpaResultado()
    if (idFunção.value == selectOption) {hideTipo()}
    else {
        classTipo[0].style.display = displayInlineBlock
        classTipo[1].style.display = displayInlineBlock
        idDadosDoPedido.style.display = displayNone
    }
    while (idTipo.hasChildNodes()) {idTipo.removeChild(idTipo.firstChild)}

/* -- Filtra as opções de subgrupos de acordo com a função */
    
    let subGrupo = []
    for (let index in email) {if (email[index].função == idFunção.value && email[index].subGrupo != email2[index].subGrupo) {subGrupo.push(email[index])}}
    
/* -- Cria a opção Selection para a seleção de tipos */

    let selectOptionTipoEmail = email.filter((el)=>el.função == selectOption)
    selectOptionTipoEmail.map((el)=>{
        let optionTipo = document.createElement(optionTag)
        let textoTipo = document.createTextNode(el.tipo)
        optionTipo.appendChild(textoTipo)
        if (el.dadosDoPedido == não) {optionTipo.setAttribute(classAttribute, classSemPedido)}
        idTipo.insertAdjacentElement("beforeend",optionTipo)
    })
    
/* -- Cria os subgrupos */

    subGrupo.map((el)=>{
        let capitalizeIdSubGrupo = `iDSubGrupo${(el.subGrupo.replace(/ /g, "")).charAt(0).toLowerCase() + (el.subGrupo.replace(/ /g, "")).slice(1)}`
        let optionSubGrupo = document.createElement("optgroup")
        optionSubGrupo.setAttribute(labelTag, el.subGrupo)
        optionSubGrupo.setAttribute(idAttribute, capitalizeIdSubGrupo)
        idTipo.insertAdjacentElement("beforeend",optionSubGrupo)
    })

/* -- Cria os tipos de acordo com a função */

    let tipoEmail = email.filter((el)=>el.função == idFunção.value && idFunção.value != selectOption)
    tipoEmail.map((el)=>{
        let capitalizeIdSubGrupo = `iDSubGrupo${(el.subGrupo.replace(/ /g, "")).charAt(0).toLowerCase() + (el.subGrupo.replace(/ /g, "")).slice(1)}`
        let idSubGrupo = document.querySelector(`#${capitalizeIdSubGrupo}`)
        let optionTipo = document.createElement(optionTag)
        let textoTipo = document.createTextNode(el.tipo)
        optionTipo.appendChild(textoTipo)
        if (el.dadosDoPedido == não) {optionTipo.setAttribute(classAttribute, classSemPedido)}
        idSubGrupo.insertAdjacentElement("beforeend",optionTipo)
    })
}

/* -- Limpa as informações de tipo de e-mail */

function limpaTipoDeEmail() {
    limpaResultado()
    hideTipo()
    while (idTipo.hasChildNodes()) {idTipo.removeChild(idTipo.firstChild)}
}

/* Dados do Pedido */

function changeTipo() {
    limpaResultado()

/* - Oculta e limpa os dados do pedido caso seja da classe sem pedido */

    if (idTipo.selectedOptions[0].className == classSemPedido) {
        idDadosDoPedido.style.display = displayNone
        idLimpaDadosDePedido.click()
    }
    else {idDadosDoPedido.style.display = displayBlock}

/* - Limpa as checkbox já selecionadas */

    let classParaEmail = document.querySelectorAll(".classParaEmail")
    for (let index in cadastro) {classParaEmail[index].checked = false}

    let classCcEmail = document.querySelectorAll(".classCcEmail")
    for (let index in cadastro) {classCcEmail[index].checked = false}

    let classBccEmail = document.querySelectorAll(".classBccEmail")
    for (let index in cadastro) {classBccEmail[index].checked = false}

/* - Seleciona as checkbox dos e-mails de acordo com o tipo de pedido */

    for (let index in email) {
        if (idTipo.value == email[index].tipo) {
            for (let index2 in email[index].emailsPara) {
                let capitalizeIdPara = `idPara${(email[index].emailsPara[index2].replace(/ /g, "")).charAt(0).toLowerCase() + (email[index].emailsPara[index2].replace(/ /g, "")).slice(1)}`
                let idCheckboxPara = document.querySelector(`#${capitalizeIdPara}`)
                idCheckboxPara.checked = true
            }
            for (let index2 in email[index].emailsCc) {
                let capitalizeIdCc = `idCc${(email[index].emailsCc[index2].replace(/ /g, "")).charAt(0).toLowerCase() + (email[index].emailsCc[index2].replace(/ /g, "")).slice(1)}`
                let idCheckboxCc = document.querySelector(`#${capitalizeIdCc}`)
                idCheckboxCc.checked = true
            }
            for (let index2 in email[index].emailsBcc) {
                let capitalizeIdBcc = `idBcc${(email[index].emailsBcc[index2].replace(/ /g, "")).charAt(0).toLowerCase() + (email[index].emailsBcc[index2].replace(/ /g, "")).slice(1)}`
                let idCheckboxBcc = document.querySelector(`#${capitalizeIdBcc}`)
                idCheckboxBcc.checked = true
            }
        }
    }
}

/* - Cria as opções de números dos representantes */

idNomeRepresentante.setAttribute(valueAttribute,representanteCadastro[0].nome)
for (let index in representanteCadastro) {
    let optionRepresentante = document.createElement('option')
    let textoOptionRepresentante = document.createTextNode(representanteCadastro[index].número)
    optionRepresentante.appendChild(textoOptionRepresentante)
    optionRepresentante.setAttribute(valueAttribute,representanteCadastro[index].número)
    idNúmeroRepresentante.insertAdjacentElement('beforeend',optionRepresentante)
}

/* - Cria as opções de nomes dos representantes */

function changeNúmeroRepresentante() {
    limpaResultado()
    for (let index in representanteCadastro) {if (idNúmeroRepresentante.value == representanteCadastro[index].número) {idNomeRepresentante.setAttribute(valueAttribute,representanteCadastro[index].nome)}}
}

/* - Cria as opções de ano do pedido */

ano.map((el)=>{
    let optionAno = document.createElement(optionTag)
    let textoOptionAno = document.createTextNode(el)
    optionAno.appendChild(textoOptionAno)
    optionAno.setAttribute(valueAttribute, el)
    idAno.insertAdjacentElement("beforeend",optionAno)
})

/* - Define o ano selecionado padrão */

idAno.value = new Date().getFullYear() - 2000

/* - Cria as opções de mês do pedido */

mês.map((el)=>{
    let optionMês = document.createElement(optionTag)
    let textoOptionMês = document.createTextNode(el.nome)
    optionMês.appendChild(textoOptionMês)
    optionMês.setAttribute(valueAttribute, el.nome)
    idMês.insertAdjacentElement("beforeend",optionMês)
})

/* -- Limpa as informações dos dados do pedido */

function limpaDadosDoPedido() {
    limpaResultado()
    idNomeRepresentante.setAttribute(valueAttribute,representanteCadastro[0].nome)
}

function limpaDadosPessoais() {limpaResultado()}

/* E-mails Selecionados */

/* - Cria e-mails para */

for (let index in funçãoCadastro) {

/* -- Cria details para as funções para */

    let capitalizeIdFunçãoCadastro = `${(funçãoCadastro[index].função.replace(/ /g, "")).charAt(0).toLowerCase() + (funçãoCadastro[index].função.replace(/ /g, "")).slice(1)}`
    let detailsParaEmail = document.createElement(detailsTag)
    detailsParaEmail.setAttribute(idAttribute, `idDetailsPara${capitalizeIdFunçãoCadastro}`)
    idEmailsPara.insertAdjacentElement("beforeend",detailsParaEmail)

/* -- Cria summary para as funções para */

    let idDetailsPara = document.querySelector(`#idDetailsPara${capitalizeIdFunçãoCadastro}`)
    let summaryParaEmail = document.createElement(summaryTag)
    let textoSummaryParaEmail = document.createTextNode(funçãoCadastro[index].função)
    summaryParaEmail.appendChild(textoSummaryParaEmail)
    summaryParaEmail.setAttribute(idAttribute, `idSummaryPara${capitalizeIdFunçãoCadastro}`)
    idDetailsPara.insertAdjacentElement("beforeend",summaryParaEmail)

/* -- Cria label para selecionar todas as checkbox das funções para */

    let labelEmail = document.createElement(labelTag)
    let textoLabelEmail = document.createTextNode(`Selecionar todos do grupo ${funçãoCadastro[index].função}`)
    labelEmail.appendChild(textoLabelEmail)
    labelEmail.setAttribute(idAttribute, `idSelecionarTodosPara${capitalizeIdFunçãoCadastro}`)
    labelEmail.setAttribute(forAttribute, `idSelecionarTodosPara${capitalizeIdFunçãoCadastro}`)
    idDetailsPara.insertAdjacentElement("beforeend",labelEmail)

/* -- Cria espaçamento entre o label (função) e a checkbox seguinte das funções para */

    let brEmail = document.createElement(brTag)
    idDetailsPara.insertAdjacentElement("beforeend",brEmail)

/* -- Cria os inputs das checkbox das funções para */

    let inputEmailCadastro = emailCadastro.filter((el)=>el.função == funçãoCadastro[index].função)
    inputEmailCadastro.map((el)=>{
        let capitalizeIdPara = `idPara${(el.nome.replace(/ /g, "")).charAt(0).toLowerCase() + (el.nome.replace(/ /g, "")).slice(1)}`
        let optionInputEmailCadastro = document.createElement(inputTag)
        let textoOptionInputEmailCadastro = document.createTextNode(el.nome)
        optionInputEmailCadastro.appendChild(textoOptionInputEmailCadastro)
        optionInputEmailCadastro.setAttribute(typeAttribute, checkboxAttribute)
        optionInputEmailCadastro.setAttribute(idAttribute, capitalizeIdPara)
        optionInputEmailCadastro.setAttribute(classAttribute, `classParaEmailcadastro${capitalizeIdFunçãoCadastro} classParaEmail`)
        optionInputEmailCadastro.setAttribute(valueAttribute, el.emailComercial)
        idDetailsPara.insertAdjacentElement("beforeend",optionInputEmailCadastro)

/* -- Cria os labels das checkbox das funções para */

        let labelEmailCadastro = document.createElement(labelTag)
        let textoLabelEmailcadastro = document.createTextNode(el.nome)
        labelEmailCadastro.appendChild(textoLabelEmailcadastro)
        labelEmailCadastro.setAttribute(forAttribute, capitalizeIdPara)
        idDetailsPara.insertAdjacentElement("beforeend",labelEmailCadastro)

/* -- Cria espaçamento entre o label (option) e a checkbox seguinte das funções para */

        let brEmail = document.createElement(brTag)
        idDetailsPara.insertAdjacentElement("beforeend",brEmail)
    })

/* -- Controla a visualização de seleção das checkbox das funções para */

    let checkedPara = 0
    let idSelecionarTodosPara = document.querySelector(`#idSelecionarTodosPara${capitalizeIdFunçãoCadastro}`)
    function selecionarTodosPara() {
        limpaResultado()
        if (checkedPara == 0) {
            for (let index in inputEmailCadastro) {
                let classParaEmail = document.querySelectorAll(`.classParaEmailcadastro${capitalizeIdFunçãoCadastro}`)
                classParaEmail[index].checked = true
                checkedPara = 1
            }
        }
        else {
            for (let index in inputEmailCadastro) {
                let classParaEmail = document.querySelectorAll(`.classParaEmailcadastro${capitalizeIdFunçãoCadastro}`)
                classParaEmail[index].checked = false
                checkedPara = 0
            }
        }
    }

/* -- Limpa as checkbox das funções para */

    function limpaEmailsSelecionados() {
        limpaResultado()
        checkedPara = 0
    }

/* Eventos das funções para*/

    idSelecionarTodosPara.addEventListener("click", selecionarTodosPara)
    idLimpaEmailSelecionado.addEventListener("click", limpaEmailsSelecionados)
}

/* - Cria e-mails cc */

for (let index in funçãoCadastro) {

/* -- Cria details para as funções cc */

    let capitalizeIdFunçãoCadastro = `${(funçãoCadastro[index].função.replace(/ /g, "")).charAt(0).toLowerCase() + (funçãoCadastro[index].função.replace(/ /g, "")).slice(1)}`
    let detailsCcEmail = document.createElement(detailsTag)
    detailsCcEmail.setAttribute(idAttribute, `idDetailsCc${capitalizeIdFunçãoCadastro}`)
    idEmailsCc.insertAdjacentElement("beforeend",detailsCcEmail)

/* -- Cria summary para as funções cc */

    let idDetailsCc = document.querySelector(`#idDetailsCc${capitalizeIdFunçãoCadastro}`)
    let summaryCcEmail = document.createElement(summaryTag)
    let summarycctextoemail = document.createTextNode(funçãoCadastro[index].função)
    summaryCcEmail.appendChild(summarycctextoemail)
    summaryCcEmail.setAttribute(idAttribute, `idSummaryCc${capitalizeIdFunçãoCadastro}`)
    idDetailsCc.insertAdjacentElement("beforeend",summaryCcEmail)

/* -- Cria label para selecionar todas as checkbox das funções cc */

    let labelEmail = document.createElement(labelTag)
    let textoLabelEmail = document.createTextNode(`Selecionar todos do grupo ${funçãoCadastro[index].função}`)
    labelEmail.appendChild(textoLabelEmail)
    labelEmail.setAttribute(idAttribute, `idSelecionarTodosCc${capitalizeIdFunçãoCadastro}`)
    labelEmail.setAttribute(forAttribute, `idSelecionarTodosCc${capitalizeIdFunçãoCadastro}`)
    idDetailsCc.insertAdjacentElement("beforeend",labelEmail)

/* -- Cria espaçamento entre o label (função) e a checkbox seguinte das funções cc */

    let brEmail = document.createElement(brTag)
    idDetailsCc.insertAdjacentElement("beforeend",brEmail)

/* -- Cria os inputs das checkbox das funções cc */

    let inputEmailCadastro = emailCadastro.filter((el)=>el.função == funçãoCadastro[index].função)

    inputEmailCadastro.map((el)=>{
        let capitalizeIdCc = `idCc${(el.nome.replace(/ /g, "")).charAt(0).toLowerCase() + (el.nome.replace(/ /g, "")).slice(1)}`
        let optionInputEmailCadastro = document.createElement(inputTag)
        let textoOptionInputEmailCadastro = document.createTextNode(el.nome)
        optionInputEmailCadastro.appendChild(textoOptionInputEmailCadastro)
        optionInputEmailCadastro.setAttribute(typeAttribute, checkboxAttribute)
        optionInputEmailCadastro.setAttribute(idAttribute, capitalizeIdCc)
        optionInputEmailCadastro.setAttribute(classAttribute, `classCcEmailcadastro${capitalizeIdFunçãoCadastro} classCcEmail`)
        optionInputEmailCadastro.setAttribute(valueAttribute, el.emailComercial)
        idDetailsCc.insertAdjacentElement("beforeend",optionInputEmailCadastro)

/* -- Cria os labels das checkbox das funções cc */

        let labelEmailCadastro = document.createElement(labelTag)
        let textoLabelEmailcadastro = document.createTextNode(el.nome)
        labelEmailCadastro.appendChild(textoLabelEmailcadastro)
        labelEmailCadastro.setAttribute(forAttribute, capitalizeIdCc)
        idDetailsCc.insertAdjacentElement("beforeend",labelEmailCadastro)

/* -- Cria espaçamento entre o label (option) e a checkbox seguinte das funções cc */

        let brEmail = document.createElement(brTag)
        idDetailsCc.insertAdjacentElement("beforeend",brEmail)
    })

/* -- Controla a visualização de seleção das checkbox das funções cc */

    let checkedCc = 0
    let idSelecionarTodosCc = document.querySelector(`#idSelecionarTodosCc${capitalizeIdFunçãoCadastro}`)
    function selecionarTodosCc() {
        limpaResultado()
        if (checkedCc == 0) {
            for (let index in inputEmailCadastro) {
                let classCcEmail = document.querySelectorAll(`.classCcEmailcadastro${capitalizeIdFunçãoCadastro}`)
                classCcEmail[index].checked = true
                checkedCc = 1
            }
        }
        else {
            for (let index in inputEmailCadastro) {
                let classCcEmail = document.querySelectorAll(`.classCcEmailcadastro${capitalizeIdFunçãoCadastro}`)
                classCcEmail[index].checked = false
                checkedCc = 0
            }
        }
    }

/* -- Limpa as checkbox das funções cc */

    function limpaEmailsSelecionados() {
        limpaResultado()
        checkedCc = 0
    }

/* Eventos das funções cc*/

    idSelecionarTodosCc.addEventListener("click", selecionarTodosCc)
    idLimpaEmailSelecionado.addEventListener("click", limpaEmailsSelecionados)
}

/* - Cria e-mails bcc */

for (let index in funçãoCadastro) {

/* -- Cria details bcc as funções bcc */
    
        let capitalizeIdFunçãoCadastro = `${(funçãoCadastro[index].função.replace(/ /g, "")).charAt(0).toLowerCase() + (funçãoCadastro[index].função.replace(/ /g, "")).slice(1)}`
        let detailsBccEmail = document.createElement(detailsTag)
        detailsBccEmail.setAttribute(idAttribute, `idDetailsBcc${capitalizeIdFunçãoCadastro}`)
        idEmailsBcc.insertAdjacentElement("beforeend",detailsBccEmail)
    
/* -- Cria summary bcc as funções bcc */
    
        let idDetailsBcc = document.querySelector(`#idDetailsBcc${capitalizeIdFunçãoCadastro}`)
        let summaryBccEmail = document.createElement(summaryTag)
        let textoSummaryBccEmail = document.createTextNode(funçãoCadastro[index].função)
        summaryBccEmail.appendChild(textoSummaryBccEmail)
        summaryBccEmail.setAttribute(idAttribute, `idSummaryBcc${capitalizeIdFunçãoCadastro}`)
        idDetailsBcc.insertAdjacentElement("beforeend",summaryBccEmail)
    
/* -- Cria label bcc selecionar todas as checkbox das funções bcc */
    
        let labelEmail = document.createElement(labelTag)
        let textoLabelEmail = document.createTextNode(`Selecionar todos do grupo ${funçãoCadastro[index].função}`)
        labelEmail.appendChild(textoLabelEmail)
        labelEmail.setAttribute(idAttribute, `idSelecionarTodosBcc${capitalizeIdFunçãoCadastro}`)
        labelEmail.setAttribute(forAttribute, `idSelecionarTodosBcc${capitalizeIdFunçãoCadastro}`)
        idDetailsBcc.insertAdjacentElement("beforeend",labelEmail)
    
/* -- Cria espaçamento entre o label (função) e a checkbox seguinte das funções bcc */
    
        let brEmail = document.createElement(brTag)
        idDetailsBcc.insertAdjacentElement("beforeend",brEmail)
    
/* -- Cria os inputs das checkbox das funções bcc */
    
        let inputEmailCadastro = emailCadastro.filter((el)=>el.função == funçãoCadastro[index].função)
        inputEmailCadastro.map((el)=>{
            let capitalizeIdBcc = `idBcc${(el.nome.replace(/ /g, "")).charAt(0).toLowerCase() + (el.nome.replace(/ /g, "")).slice(1)}`
            let optionInputEmailCadastro = document.createElement(inputTag)
            let textoOptionInputEmailCadastro = document.createTextNode(el.nome)
            optionInputEmailCadastro.appendChild(textoOptionInputEmailCadastro)
            optionInputEmailCadastro.setAttribute(typeAttribute, checkboxAttribute)
            optionInputEmailCadastro.setAttribute(idAttribute, capitalizeIdBcc)
            optionInputEmailCadastro.setAttribute(classAttribute, `classBccEmailcadastro${capitalizeIdFunçãoCadastro} classBccEmail`)
            optionInputEmailCadastro.setAttribute(valueAttribute, el.emailComercial)
            idDetailsBcc.insertAdjacentElement("beforeend",optionInputEmailCadastro)
    
/* -- Cria os labels das checkbox das funções bcc */
    
            let labelEmailCadastro = document.createElement(labelTag)
            let textoLabelEmailcadastro = document.createTextNode(el.nome)
            labelEmailCadastro.appendChild(textoLabelEmailcadastro)
            labelEmailCadastro.setAttribute(forAttribute, capitalizeIdBcc)
            idDetailsBcc.insertAdjacentElement("beforeend",labelEmailCadastro)
    
/* -- Cria espaçamento entre o label (option) e a checkbox seguinte das funções bcc */
    
            let brEmail = document.createElement(brTag)
            idDetailsBcc.insertAdjacentElement("beforeend",brEmail)
        })
    
/* -- Controla a visualização de seleção das checkbox das funções bcc */
    
        let checkedBcc = 0
        let idSelecionarTodosBcc = document.querySelector(`#idSelecionarTodosBcc${capitalizeIdFunçãoCadastro}`)
        function selecionarTodosBcc() {
            limpaResultado()
            if (checkedBcc == 0) {
                for (let index in inputEmailCadastro) {
                    let classBccEmail = document.querySelectorAll(`.classBccEmailcadastro${capitalizeIdFunçãoCadastro}`)
                    classBccEmail[index].checked = true
                    checkedBcc = 1
                }
            }
            else {
                for (let index in inputEmailCadastro) {
                    let classBccEmail = document.querySelectorAll(`.classBccEmailcadastro${capitalizeIdFunçãoCadastro}`)
                    classBccEmail[index].checked = false
                    checkedBcc = 0
                }
            }
        }
    
/* -- Limpa as checkbox das funções bcc */
    
        function limpaEmailsSelecionados() {
            limpaResultado()
            checkedBcc = 0
        }
    
/* Eventos das funções bcc*/
    
        idSelecionarTodosBcc.addEventListener("click", selecionarTodosBcc)
        idLimpaEmailSelecionado.addEventListener("click", limpaEmailsSelecionados)
    }

/* Gera resultados */

function gerar() {
    limpaResultado()

/* - Gera e-mails para */

    let classParaEmail = document.querySelectorAll(".classParaEmail")
    for (let index in cadastro) {if (classParaEmail[index].checked == true) {idResultadoPara.innerHTML += `${classParaEmail[index].value}; `}}

/* - Gera e-mails cc */

    idResultadoCc.innerHTML = ""
    let classCcEmail = document.querySelectorAll(".classCcEmail")
    for (let index in cadastro) {if (classCcEmail[index].checked == true) {idResultadoCc.innerHTML += `${classCcEmail[index].value}; `}}

/* - Gera e-mails bcc */

    idResultadoBcc.innerHTML = ""
    let classBccEmail = document.querySelectorAll(".classBccEmail")
    for (let index in cadastro) {if (classBccEmail[index].checked == true) {idResultadoBcc.innerHTML += `${classBccEmail[index].value}; `}}

/* - Gera assunto */
 
/* - Verifica e gera a assinatura carregada */

let assinatura

if (idAssinatura.files.length == 0) {
    assinatura = document.createElement("span")
    let textoAssinatura = document.createTextNode("Nenhuma assinatura selecionada.")
    assinatura.appendChild(textoAssinatura)
}
else {
    assinatura = document.createElement("img")
    assinatura.setAttribute(srcAttribute, URL.createObjectURL(idAssinatura.files[0]))
    assinatura.setAttribute(widthAttribute, "300px")
}

/* -- Verifica se tem dados não preenchidos e corrige a formatação */
    let verificaNúmeroRepresentante = ""
    let verificaNomeDoCliente = ""
    let verificaNomeFantasia = ""
    let verificaTipo = `${idTipo.value}`

    if (idPedido.value != "") {verificaNúmeroRepresentante = `PED ${idNúmeroRepresentante.value}-${idPedido.value}/${idAno.value}`}
    if (idTipo.value != "" && idPedido.value != "") {verificaTipo = ` - ${idTipo.value}`}
    if (idNomeDoCliente.value != "" && idTipo.value != "" && idPedido.value != "") {verificaNomeDoCliente = ` - ${idNomeDoCliente.value}`}
    if (idNomeFantasia.value != "") {verificaNomeFantasia = ` - ${idNomeFantasia.value}`}

    idResultadoAssunto.innerHTML = `${verificaNúmeroRepresentante}${verificaTipo}${verificaNomeDoCliente}${verificaNomeFantasia}`

/* - Gera corpor do e-mail */

/* -- Verifica período do dia */

    let hora = new Date().getHours()
    let período = ""
    if (hora < 6 || hora >= 18) {período = "Boa noite"}
    if (hora >= 6 && hora < 12) {período = "Bom dia"}
    if (hora >= 12 && hora < 18) {período = "Boa tarde"}

/* -- Variáveis Auxiliares */

    let marcioHiperlink = `<a href=${mailTo}${cadastro[cadastro.map((el) => el.nome).indexOf("Marcio")].emailComercial}>@Marcio Tosta</a>`
    let christianHiperlink = `<a href=${mailTo}${cadastro[cadastro.map((el) => el.nome).indexOf("Christian")].emailComercial}>Christian Aparecido dos Santos Pereira</a>`
    let simoneHiperlink = `<a href=${mailTo}${cadastro[cadastro.map((el) => el.nome).indexOf("Simone")].emailComercial}>@Simone da Luz</a>`
    let amareloBackground = 'style="background-color: rgb(255, 255, 0)"'
    let informação01
    let informação02
    let informação03
    let informação04
    let informação05
    let imagem01 = document.createElement("img")
    imagem01.setAttribute(widthAttribute, "300px")

/* -- Gera modelos de e-mails de acordo com o tipo */

    switch (idTipo.value) {
        case "Dúvida Geral":
            informação01 = `Texto de dúvidas.`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${idTipo.value}${br2}${informação01}${br2}${agradecimento}${br3}`
            break;
        case "Dúvida de Porta Seccional Livre de Alvenaria":
            informação01 = `Gostaria de tirar algumas dúvidas a respeito de porta seccional e portal de selamento:`
            informação02 = `1 - Qual o pé direito livre do início do vão da porta até a primeira obstrução do lado externo da porta (medida A)?`
            informação03 = `2 - Qual a altura do patamar entre a parada dos caminhões e a base das portas seccionais (medida B)?`
            imagem01.setAttribute(srcAttribute,"https://lh3.googleusercontent.com/coTn4u0vKBxt0cW_BtDviHia3cj4qlQA8yVoVRbksCscSSUFOHh9RltjQb1u_YqbnEGl2_H7QMpnZQ0795Nb-oSmVr5j-C9HyygvDbMvSoJ_kM7skWOHWxt2LXnTyc8dGT-EFJgkNRo1iZ5FC4MU4hdjL4X12PESlMACVPsz9j7n9oI1cMZdxvuLAL2PGDp3ylcFA5EgZEp2H8l6WJbjUBZqzC63uKR7OUBdjy3XQOpBO6BAyMqaD9nnkgvbg2aZb5Y5Z_EQ4hh3e5wUfsXhM1atOb3HDZtN7Ts8OWDyjxy0G2DCWC0Goo0x8KjSKdfAU79ostfV_h24-Yc0zXX2wxmXZUtbwKN4YXKXipDVgVVnQa4qS5__N22ff5du-2zQfTOgGHOuVx9XZF3_RcoReOLnmWG9TBsLa0To06QTq3c6SR6pZz7C4KJ0jKwp2YS_Xolqpt1LRd7cZeuaLnaNagzqT0lFgTfHC1SRmBVo1rtdsyBJcksZUtVcT-KcibWcTiqD5TPLeP77od9Lh9cnXqGShketOhfRGhAhuZZGTU1Kmo7NBVU2Q-xuD8qkR4Gj36Xr5jhWbAJgVsWV8ttIYWjM9CNGjJ9USJ0Hn_4XoD09kDr7hF_424DEP2PA-fqateVkGerKL_ukFreLXaqIxeFnSjDXK8OrQ9XeUr9KccY5d5iCzdF9MFRk6pzk0UyW_MAoyFe0oDziq1YKEBmpRIjipAlZcMhrDrAUAi4MDH5KJUPQ45insDHvQrhaYEOOXRUkh03QuvPBnGCtyyKzP7TvXFiiQ5-y3uQPEkm0m65u0ANtaPnUdy5PwyFKcxnIPoUeW3vgsXNA4YCmaOq3K6Gajp2uo66X_l1pngN8n9Tyb9sk80RVvazirE66vmdn60jiyL61PXqU-Wp_RYVCrQc6MOnuz5J1wjx1fg52CBK1=w925-h754-no?authuser=0")
            imagem01.setAttribute(altAttribute,"Porta Seccional Livre de Alvenaria")
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${idTipo.value}${br2}${informação01}${br2}${informação02}${br2}${informação03}${br2}`
            idResultadoCorpoDoEmail.appendChild(imagem01)
            idResultadoCorpoDoEmail.innerHTML += `${br2}${agradecimento}${br3}`
            break;
        case "Dúvida de Porta Seccional Encostada em Alvenaria":
            informação01 = `Gostaria de tirar algumas dúvidas a respeito de porta seccional e portal de selamento:`
            informação02 = `1 - Qual o pé direito livre do início do vão da porta até a primeira obstrução do lado externo da porta (medida A)?`
            informação03 = `2 - Qual a altura do patamar entre a parada dos caminhões e a base das portas seccionais (medida B)?`
            informação04 = `3 - Em frente aos painéis onde estão as portas seccionais existe uma representação de parede de alvenaria, essa alvenaria vai até o teto correto?`
            informação05 = `4 - Por favor me confirme a espessura da alvenaria da pergunta anterior (medida C)?`
            imagem01.setAttribute(srcAttribute,"https://lh3.googleusercontent.com/mq2prDkhs6HK4N_KWeFI-5AP5eW264RDzJDveNPKPhui37DnXjMRpeBdf8aWHQ3KRMzT0hNpglyqasJBgJdSP5IUUAIaF0nAs8E48ldSBMXTdPZ7d5kLabpYtcckig4zjeofZKXrR2780avX-6R3bposSjvgT_0YNRQklUIVaU5eGfSU-XM6ToOIhnZlecWqKdVIwTJENDow0dzG3RdGPGR4Lsm0xui6UuU_FL_e-OBUm_V5KcuTna-ixtWZPdW7W_xIfSYES9JbV_XL7nCek-6Er1EogSQPrF5uUSSm3vzdl6CoZDvJsMxmeY0z68s3X9s3LbZT-bPmv_Yf8UXLPkjjbMBWgfkrZT1LK8b8osqVVZpD_XJJ8VwGK6FR-GyDmADnbsQIz1zC5WK9U5ZOTc59vWW4Li0t4Mp4meLvv7NOSvDZqTb-1MRCPch2e-t44qiwi7slO50lpwPSLJVz4mHNBOrQEH71AD3QGwKkkpDRjXA2kQjXNzk-ReegWus8CoPmTD-zlTP_Xn81TlpzVKJeRl36ORCzb9yf-DuosJYm4ajUbUZMfbKOUJjbBuHl5XMOiEoaT79ODUHypQSuju3K2R8ncHPeTnVtSiRoV68Cq6Mzu5tw9hHqRXl6lFR5NuMisl9V3UE_zpllK3BfC5ydmBmIf4oSERUw0cJxk-ZU_DjyhJHTFG1mOowaQh6iYVBMumxXZwHBVh3ob8QOIuJ0MAV0ZvL3rKfweGEb2CwaB7Xu63Rng0W8haFy6ytCV4rn6SGRc8wFJXmybII8yo3fJLgV1mEBjjktlKj1uMeC3w5JsH4xWN8gOX9wjdUM4sssfCiv4SCzC7GgpvdfBRsc0rMPC8oIvL5X4PPuHlMmbBjCR9Mlydj9kz_etSbD7eZu2YE4MAlMIzGQsBrWpxNyKJ1jJ9INjaWdU1MOTabF=w843-h666-no?authuser=0")
            imagem01.setAttribute(altAttribute,"Porta Seccional Encostada em Alvenaria")
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${idTipo.value}${br2}${informação01}${br2}${informação02}${br2}${informação03}${br2}${informação04}${br2}${informação05}${br2}`
            idResultadoCorpoDoEmail.appendChild(imagem01)
            idResultadoCorpoDoEmail.innerHTML += `${br2}${agradecimento}${br3}`
            break;
        case "Aguardando Dúvida":
            informação01 = `Seguimos arguardando as dúvidas e correções enviadas nos e-mails anteriores, a demora nas respostas afeta diretamente o prazo de entrega dos materiais.`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${idTipo.value}${br2}${informação01}${br2}${agradecimento}${br3}`
            break;
        case "Encaminhar":
            informação01 = `Encaminhando e-mail.`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${idTipo.value}${br2}${informação01}${br2}${agradecimento}${br3}`
            break;
        case "Planilhamento Total":
            informação01 = `<span ${amareloBackground}><mark>Informação especial.</mark></span>`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${idTipo.value}${br2}${verificaNúmeroRepresentante}${verificaNomeDoCliente}${verificaNomeFantasia}${br1}${OV}${idOrdemDeVenda.value}${br1}${localização}${idMês.value} / ${idNomeRepresentante.value}${br1}${arquivo}${idArquivo.value}${idRevisão.value}${br2}${informação01}${br2}${agradecimento}${br3}`
            break;
        case "Planilhamento Parcial":
            informação01 = `<span ${amareloBackground}><mark>Informação especial.</mark></span>`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${idTipo.value}${br2}${verificaNúmeroRepresentante}${verificaNomeDoCliente}${verificaNomeFantasia}${br1}${OV}${idOrdemDeVenda.value}${br1}${localização}${idMês.value} / ${idNomeRepresentante.value}${br1}${arquivo}${idArquivo.value}${idRevisão.value}${br2}${informação01}${br2}${agradecimento}${br3}`
            break;
        case "Planilhamento Alteração":
            informação01 = `<span ${amareloBackground}><mark>Atualizado o alfa de OOOOOOOO.</mark></span>`
            informação02 = `Por favor verificar a necessidade de atualização do projeto executivo.`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${idTipo.value}${br2}${marcioHiperlink} e ${christianHiperlink}${br2}${informação01}${br2}${simoneHiperlink}${br2}${informação02}${br2}${agradecimento}${br3}`
            break;
        default:
            informação01 = `<span ${amareloBackground}><mark>(OPÇÃO DE E-MAIL AINDA NÃO CONFIGURADA)</mark></span>`
            idResultadoCorpoDoEmail.innerHTML = `${informação01}`
            break;
    }
    idResultadoCorpoDoEmail.appendChild(assinatura)

/* -- Gera os dados do e-mail no formato correto para o mailTo */

    hrefMailtoEmail = `${mailTo}${idResultadoPara.innerHTML}${cc}${idResultadoCc.innerHTML}${bcc}${idResultadoBcc.innerHTML}${subject}${idResultadoAssunto.innerHTML}`.replace(/; /g,";")
    let bcc2 = bcc.replace(/&/,"?")
    let subject2 = subject.replace(/&/,"?")
    if (idResultadoCc.innerHTML == "") {hrefMailtoEmail = `${mailTo}${idResultadoPara.innerHTML}${bcc2}${idResultadoBcc.innerHTML}${subject}${idResultadoAssunto.innerHTML}`.replace(/; /g,";")}
    if (idResultadoBcc.innerHTML == "") {hrefMailtoEmail = `${mailTo}${idResultadoPara.innerHTML}${cc}${idResultadoCc.innerHTML}${subject}${idResultadoAssunto.innerHTML}`.replace(/; /g,";")}
    if (idResultadoCc.innerHTML == "" && idResultadoBcc.innerHTML == "") {hrefMailtoEmail = `${mailTo}${idResultadoPara.innerHTML}${subject2}${idResultadoAssunto.innerHTML}`.replace(/; /g,";")}

    if (controlEmail != "") {
        hrefMailtoEmail = `${mailTo}${idResultadoPara.innerHTML}${cc}${idResultadoCc.innerHTML}${bcc}${idResultadoBcc.innerHTML}; ${controlEmail}${subject}${idResultadoAssunto.innerHTML}`.replace(/; /g,";")
        bcc2 = bcc.replace(/&/,"?")
        if (idResultadoCc.innerHTML == "") {hrefMailtoEmail = `${mailTo}${idResultadoPara.innerHTML}${bcc2}${idResultadoBcc.innerHTML}; ${controlEmail}${subject}${idResultadoAssunto.innerHTML}`.replace(/; /g,";")}
        if (idResultadoBcc.innerHTML == "") {hrefMailtoEmail = `${mailTo}${idResultadoPara.innerHTML}${cc}${idResultadoCc.innerHTML}${bcc}${controlEmail}${subject}${idResultadoAssunto.innerHTML}`.replace(/; /g,";")}
        if (idResultadoCc.innerHTML == "" && idResultadoBcc.innerHTML == "") {hrefMailtoEmail = `${mailTo}${idResultadoPara.innerHTML}${bcc2}${controlEmail}${subject}${idResultadoAssunto.innerHTML}`.replace(/; /g,";")}
    } 
    if (hrefMailtoEmail) {idGeraEmail.setAttribute(hrefAttribute, hrefMailtoEmail)}

/* -- Copia o corpo do e-mail */

    function copiaCorpoDoEmail() {navigator.clipboard.write([new ClipboardItem({ "text/plain": new Blob([idResultadoCorpoDoEmail.innerText], { type: "text/plain" }), "text/html": new Blob([idResultadoCorpoDoEmail.innerHTML], { type: "text/html" })})])}
    idCopiaCorpoDoEmail.addEventListener("click", copiaCorpoDoEmail)
}

/* - Limpa os resultados gerados */

function limpaResultado() {
    idResultadoPara.innerHTML = ""
    idResultadoCc.innerHTML = ""
    idResultadoBcc.innerHTML = ""
    idResultadoAssunto.innerHTML = ""
    idResultadoCorpoDoEmail.innerHTML = ""
    idGeraEmail.removeAttribute(hrefAttribute)
}

/* Opções Extras */

/* Cria as Opções de Cores padrão */

cores.map((el)=>{
    let optionCores = document.createElement(optionTag)
    let textoOptionCores = document.createTextNode(el.nome)
    optionCores.appendChild(textoOptionCores)
    optionCores.setAttribute(valueAttribute, el.valor)
    idOptionCores.insertAdjacentElement("beforeend",optionCores)
})

/* - Muda a cor do Background */

function changeCorBackground() {document.body.style.background = idBackgroundColor.value}

/* - Muda a cor do Texto */

function changeCorTexto() {document.body.style.color = idTextoColor.value}

/* - Limpa os extras */

function limpaExtras() {
    document.body.style.background = "#FFFFFF"
    document.body.style.color = "#000000"
}

/* Eventos do HTML*/

idFunção.addEventListener("change", changeFunção)
idLimpaTipoDeEmail.addEventListener("click", limpaTipoDeEmail)
idTipo.addEventListener("change", changeTipo)
idNúmeroRepresentante.addEventListener("change", changeNúmeroRepresentante)
idLimpaDadosDePedido.addEventListener("click", limpaDadosDoPedido)
idLimpaDadosPessoais.addEventListener("click", limpaDadosPessoais)
idApresentaEmail.addEventListener("click", gerar)
idLimpaResultado.addEventListener("click", limpaResultado)
idBackgroundColor.addEventListener("change", changeCorBackground)
idTextoColor.addEventListener("change", changeCorTexto)
idLimpaExtras.addEventListener("click", limpaExtras)

/* TESTE */

/* Mostra o que está na área de transferência */

/* //let teste1 = document.querySelector("#teste1")
let teste2 = document.querySelector("#teste2")
async function mostraÁreaDeTransferência() {
    let clipboardItems = await navigator.clipboard.read()
    for (const clipboardItem of clipboardItems) {
        for (const type of clipboardItem.types) {
            const blob = await clipboardItem.getType(type)
            let reader = new FileReader()
            reader.onload = () => {
                console.log(reader.result)
                //alert(reader.result)
                //teste1.innerHTML = reader.result
            }
            reader.readAsText(blob)
        }
    }
}
teste2.addEventListener("click", mostraÁreaDeTransferência) */

/* TESTE */

/* FIM */




