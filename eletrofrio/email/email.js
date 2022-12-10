/* Chamada de dados do HTML */

let idFunção = document.querySelector("#idFunção")
let idTipo = document.querySelector("#idTipo")
let classTipo = document.querySelectorAll(".classTipo")
let idLimpaTipoDeEmail = document.querySelector("#idLimpaTipoDeEmail")
let idFieldsetDadosDoPedido = document.querySelector("#idFieldsetDadosDoPedido")
let idNomeRepresentante = document.querySelector("#idNomeRepresentante")
let idNúmeroRepresentante = document.querySelector("#idNúmeroRepresentante")
let idPedido = document.querySelector("#idPedido")
let idAno = document.querySelector("#idAno")
let idOrdemDeVenda = document.querySelector("#idOrdemDeVenda")
let idNomeDoCliente = document.querySelector("#idNomeDoCliente")
let idNomeFantasia = document.querySelector("#idNomeFantasia")
let idMês = document.querySelector("#idMês")
let idFornecedor = document.querySelector("#idFornecedor")
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
let idResultadoCorpoDoEmail = document.querySelector("#idResultadoCorpoDoEmail")
let idApresentaEmail = document.querySelector("#idApresentaEmail")
let idCopiaCorpoDoEmail = document.querySelector("#idCopiaCorpoDoEmail")
let idGeraEmail = document.querySelector("#idGeraEmail")
let idLimpaResultado = document.querySelector("#idLimpaResultado")
let idAssinatura = document.querySelector("#idAssinatura")
let idDúvidasDesenvolvedor = document.querySelector("#idDúvidasDesenvolvedor")
let idBackgroundColor = document.querySelector("#idBackgroundColor")
let idTextoColor = document.querySelector("#idTextoColor")
let idOptionCores = document.querySelector("#idOptionCores")
let idLimpaExtras = document.querySelector("#idLimpaExtras")

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
let selectAll = "Selecionar todos do grupo"
let sim = "sim"
let não = "não"
let classSemPedido = "classSemPedido"
let controlEmail = ""//"hcds.rick@gmail.com"
let br1 = "<br>".repeat(1)
let br2 = "<br>".repeat(2)
let br3 = "<br>".repeat(3)
let br4 = "<br>".repeat(4)
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
let larguraImagem = "300px"

let ajusteFunção = "Ajuste"
let ajusteSãoPauloFunção = "Ajuste São Paulo"
let analistaFunção = "Analista"
let compraFunção = "Compra"
let coordenadorRegionalFunção = "Coordenador Regional"
let engenheiroFunção = "Engenheiro"
let executivoFunção = "Executivo"
let fábricaFunção = "Fábrica"
let gerenteFunção = "Gerente"
let grupoFunção = "Grupo"
let liderançaComercialFunção = "Liderança Comercial"
let liderançaContinuumFunção = "Liderança Continuum"
let planilhamentoFunção = "Planilhamento"
let representanteFunção = "Representante"
let supervisorDeObraFunção = "Supervisor de Obra"
let tiFunção = "TI"

let ajusteSubGrupo = "Ajuste"
let alteraçãoSubGrupo = "Alteração"
let compraSubGrupo = "Compra"
let cotaçãoSubGrupo = "Cotação"
let dúvidaSubGrupo = "Dúvida"
let encaminharSubGrupo = "Encaminhar"
let liberaçãoSubGrupo = "Liberação"
let planilhamentoSubGrupo = "Planilhamento"
let projetoSubGrupo = "Projeto"
let suporteTiSubGrupo = "Suporte TI"
let verificaçãoSubGrupo = "Verificação"

/* Arrays com dados a serem inseridos */

let cadastro = [
    //{função:"_ADM_", número:"_ADM_", nome:"Henrique Carvalho de Souza", emailComercial:"hcds.rick@gmail.com"},
    {função:ajusteFunção, número:"106286", nome:"Cláudia", emailComercial:"claudia.carvalho@eletrofrio.com.br"},
    {função:ajusteFunção, número:"106078", nome:"Cleber Medeiros", emailComercial:"cleber.medeiros@eletrofrio.com.br"},
    {função:ajusteFunção, número:"32245", nome:"Ellen", emailComercial:"ellen@eletrofrio.com.br"},
    {função:ajusteFunção, número:"106260", nome:"Letícia Karoline", emailComercial:"leticia.karoline@eletrofrio.com.br"},
    {função:ajusteFunção, número:"106263", nome:"Luiz Fernando Gonsalvez", emailComercial:"luiz.goncalves@eletrofrio.com.br"},
    {função:ajusteSãoPauloFunção, número:"105898", nome:"Bruna Nahkur", emailComercial:"bruna.nahkur@eletrofrio.com.br"},
    {função:ajusteSãoPauloFunção, número:"106122", nome:"Diego Paula Paula", emailComercial:"diego.paula@eletrofrio.com.br"},
    {função:ajusteSãoPauloFunção, número:"57750", nome:"Felipe Santos", emailComercial:"felipe.santos@eletrofrio.com.br"},
    {função:analistaFunção, número:"53534", nome:"Alexandre Ribeiro", emailComercial:"alexandre.ribeiro@eletrofrio.com.br"},
    {função:analistaFunção, número:"26797", nome:"João Cláudio", emailComercial:"jclaudio@eletrofrio.com.br"},
    {função:analistaFunção, número:"38308", nome:"Luiz Eduardo", emailComercial:"luiz.eduardo@eletrofrio.com.br"},
    {função:analistaFunção, número:"34566", nome:"Nilson", emailComercial:"nilson@eletrofrio.com.br"},
    {função:analistaFunção, número:"64067", nome:"Suelen", emailComercial:"suelen.assis@eletrofrio.com.br"},
    {função:compraFunção, número:"106321", nome:"Reinaldo", emailComercial:"reinaldo.rossini@eletrofrio.com.br"},
    {função:compraFunção, número:"45320", nome:"Tiago Felipe", emailComercial:"tiago.felipe@eletrofrio.com.br"},
    {função:coordenadorRegionalFunção, número:"43638", nome:"Acacio", emailComercial:"acacio@eletrofrio.com.br"},
    {função:coordenadorRegionalFunção, número:"31788", nome:"Cláudio José", emailComercial:"claudiojose@eletrofrio.com.br"},
    {função:coordenadorRegionalFunção, número:"32300", nome:"Leandro Miela", emailComercial:"leandromiela@eletrofrio.com.br"},
    {função:coordenadorRegionalFunção, número:"52510", nome:"Leandro Vargas", emailComercial:"leandro.vargas@eletrofrio.com.br"},
    {função:coordenadorRegionalFunção, número:"300074", nome:"Marcelo Godoy", emailComercial:"marcelo.godoy@eletrofrio.com.br"},
    {função:coordenadorRegionalFunção, número:"32709", nome:"Wagner Rangel", emailComercial:"wagner@eletrofrio.com.br"},
    {função:engenheiroFunção, número:"41236", nome:"Cassio", emailComercial:"cassio@eletrofrio.com.br"},
    {função:engenheiroFunção, número:"52048", nome:"Danielly Fabem", emailComercial:"danielly.fabem@eletrofrio.com.br"},
    {função:engenheiroFunção, número:"40833", nome:"Juliano", emailComercial:"juliano@eletrofrio.com.br"},
    {função:engenheiroFunção, número:"36445", nome:"Leandro Dornelas", emailComercial:"dornelas@eletrofrio.com.br"},
    {função:engenheiroFunção, número:"570", nome:"Luiz Fernando Alves", emailComercial:"luiz.alves@eletrofrio.com.br"},
    {função:executivoFunção, número:"56690", nome:"Bruno Garcia", emailComercial:"bruno.garcia@eletrofrio.com.br"},
    {função:executivoFunção, número:"41597", nome:"Carlos Margon", emailComercial:"carlos.margon@eletrofrio.com.br"},
    {função:executivoFunção, número:"31745", nome:"Rubens", emailComercial:"rubens@eletrofrio.com.br"},
    {função:executivoFunção, número:"200239", nome:"Susan", emailComercial:"susan.colsani@eletrofrio.com.br"},
    {função:fábricaFunção, número:"41155", nome:"Christian", emailComercial:"christian@eletrofrio.com.br"},
    {função:fábricaFunção, número:"42313", nome:"Georgea", emailComercial:"georgea@eletrofrio.com.br"},
    {função:fábricaFunção, número:"6168", nome:"Marcio", emailComercial:"tosta@eletrofrio.com.br"},
    {função:fábricaFunção, número:"105789", nome:"Robson", emailComercial:"robson.tolentino@eletrofrio.com.br"},
    {função:fábricaFunção, número:"nnn", nome:"Thauany", emailComercial:"thauany.silva@aefacessorios.com.br"},
    {função:gerenteFunção, número:"31141", nome:"Ana Paula", emailComercial:"anapaula@eletrofrio.com.br"},
    {função:gerenteFunção, número:"105882", nome:"André Francisco", emailComercial:"andre.francisco@eletrofrio.com.br"},
    {função:gerenteFunção, número:"32083", nome:"Cristiane", emailComercial:"cristiane@eletrofrio.com.br"},
    {função:gerenteFunção, número:"31796", nome:"Edison", emailComercial:"edison@eletrofrio.com.br"},
    {função:gerenteFunção, número:"37140", nome:"Gabriel Antonio Marques", emailComercial:"gabriel@eletrofrio.com.br"},
    {função:gerenteFunção, número:"23542", nome:"Hugo Pons", emailComercial:"hugo@eletrofrio.com.br"},
    {função:gerenteFunção, número:"51149", nome:"Ivan Vieira", emailComercial:"ivan.vieira@eletrofrio.com.br"},
    {função:gerenteFunção, número:"51734", nome:"Joaquim Rosa", emailComercial:"joaquim.rosa@eletrofrio.com.br"},
    {função:gerenteFunção, número:"nnn", nome:"Mitidieri", emailComercial:"mitidieri@eletrofrio.com.br"},
    {função:gerenteFunção, número:"31443", nome:"Vanderlei", emailComercial:"vanderlei@eletrofrio.com.br"},
    {função:grupoFunção, número:"Group01", nome:"Continuum - Planilhamento para Produção", emailComercial:"PLANIC.F@uhygb1yu6fxo7a.onmicrosoft.com"},
    {função:grupoFunção, número:"Group02", nome:"Continuum - Planilhamento", emailComercial:"planilhamento@continuum.ind.br"},
    {função:grupoFunção, número:"Group03", nome:"Continuum - Projeto Executivo", emailComercial:"projetos@continuum.ind.br"},
    {função:grupoFunção, número:"Group04", nome:"Suporte TI", emailComercial:"suporteti@eletrofrio.com.br"},
    {função:grupoFunção, número:"Group05", nome:"Compras", emailComercial:"compraseletrofrio@uhygb1yu6fxo7a.onmicrosoft.com"},
    {função:grupoFunção, número:"Group06", nome:"Liberação", emailComercial:"liberacao@eletrofrio.com.br"},
    {função:liderançaComercialFunção, número:"31273", nome:"Carla", emailComercial:"carlaadriana@eletrofrio.com.br"},
    {função:liderançaComercialFunção, número:"33071", nome:"Roney", emailComercial:"roney@eletrofrio.com.br"},
    {função:liderançaContinuumFunção, número:"nnn", nome:"Alexandre Cavagnoli", emailComercial:"alexandre.cavagnoli@eletrofrio.com.br"},
    {função:liderançaContinuumFunção, número:"nnn", nome:"Leandro Vianna", emailComercial:"leandro.vianna@eletrofrio.com.br"},
    {função:liderançaContinuumFunção, número:"34540", nome:"Simone", emailComercial:"simone@eletrofrio.com.br"},
    {função:planilhamentoFunção, número:"105962", nome:"Amarildo", emailComercial:"amarildo.cruz@eletrofrio.com.br"},
    {função:planilhamentoFunção, número:"52899", nome:"Gabriel Castilho de Aguiar", emailComercial:"gabriel.aguiar@eletrofrio.com.br"},
    {função:planilhamentoFunção, número:"500016", nome:"Henrique", emailComercial:"henrique.souza@eletrofrio.com.br"},
    {função:representanteFunção, número:"001", nome:"Venda Direta Curitiba", emailComercial:"(VERIFICAR O RESPONSÁVEL)", gerente1:"Cristiane", gerente2:"", engenheiro1:"Cassio", engenheiro2:"", coordenadorRegional1:"Marcelo Godoy", coordenadorRegional2:"Wagner Rangel", supervisorDeObra1:"Paulo Silva", supervisorDeObra2:""},
    {função:representanteFunção, número:"004", nome:"Tecnimet", emailComercial:"angel.gallagher@tecnimet.com; electromecanica@tecnimet.com; rodney.roman@tecnimet.com, marcosm@tecnimet.com; javier.escobar@tecnimet.com; div.comercial@tecnimet.com", gerente1:"Gabriel Antonio Marques", gerente2:"", engenheiro1:"Luiz Fernando Alves", engenheiro2:"", coordenadorRegional1:"Luiz Fernando Alves", coordenadorRegional2:"", supervisorDeObra1:"Luiz Fernando Alves", supervisorDeObra2:""},
    {função:representanteFunção, número:"011", nome:"FG", emailComercial:"larissa@fgrefrigeracao.com.br; projetos@fgrefrigeracao.com.br; projetos01@fgrefrigeracao.com.br; projetos02@fgrefrigeracao.com.br; projetos03@fgrefrigeracao.com.br; projetos04@fgrefrigeracao.com.br; nathan@fgrefrigeracao.com.br", gerente1:"Ana Paula", gerente2:"", engenheiro1:"Luiz Fernando Alves", engenheiro2:"", coordenadorRegional1:"Cláudio José", coordenadorRegional2:"", supervisorDeObra1:"Cláudio José", supervisorDeObra2:""},
    {função:representanteFunção, número:"016", nome:"Lobo", emailComercial:"loboinstalacoescomerciais@yahoo.com.br; waldircf2@gmail.com", gerente1:"André Francisco", gerente2:"", engenheiro1:"Leandro Dornelas", engenheiro2:"", coordenadorRegional1:"Leandro Vargas", coordenadorRegional2:"", supervisorDeObra1:"Damião Conceição", supervisorDeObra2:""},
    {função:representanteFunção, número:"018", nome:"Silva Filho", emailComercial:"silva.filho@ymail.com; crystianno.silva@gmail.com", gerente1:"Vanderlei", gerente2:"", engenheiro1:"Juliano", engenheiro2:"", coordenadorRegional1:"Acacio", coordenadorRegional2:"", supervisorDeObra1:"Araujo", supervisorDeObra2:"Hugo Pons"},
    {função:representanteFunção, número:"024", nome:"Mallet", emailComercial:"silvio@mallet.net.br; helcio@mallet.net.br; adm@mallet.net.br; leonardo@mallet.net.br", gerente1:"Vanderlei", gerente2:"", engenheiro1:"Juliano", engenheiro2:"", coordenadorRegional1:"Acacio", coordenadorRegional2:"", supervisorDeObra1:"Julio Cesar", supervisorDeObra2:""},
    {função:representanteFunção, número:"035", nome:"Clecio", emailComercial:"clecio.salviano@eletrofrio.com.br", gerente1:"Mitidieri", gerente2:"", engenheiro1:"Danielly Fabem", engenheiro2:"", coordenadorRegional1:"Leandro Miela", coordenadorRegional2:"", supervisorDeObra1:"José Antonio", supervisorDeObra2:""},
    {função:representanteFunção, número:"057", nome:"Refripan", emailComercial:"rafernandomenezes@yahoo.com.br; nidia.roza@hotmail.com; projetos@refripan.com", gerente1:"André Francisco", gerente2:"", engenheiro1:"Leandro Dornelas", engenheiro2:"", coordenadorRegional1:"Leandro Vargas", coordenadorRegional2:"", supervisorDeObra1:"Eder Cavalcante", supervisorDeObra2:""},
    {função:representanteFunção, número:"062", nome:"M Weidner", emailComercial:"marceloeletrofrio@gmail.com; marceloweidner@globo.com", gerente1:"Joaquim Rosa", gerente2:"Edison", engenheiro1:"Danielly Fabem", engenheiro2:"", coordenadorRegional1:"Leandro Miela", coordenadorRegional2:"", supervisorDeObra1:"José Antonio", supervisorDeObra2:""},
    {função:representanteFunção, número:"067", nome:"Tortelli", emailComercial:"projetos1@torteli.com.br; vendas@torteli.com.br; torteli@torteli.com.br", gerente1:"Hugo Pons", gerente2:"", engenheiro1:"Cassio", engenheiro2:"", coordenadorRegional1:"Marcelo Godoy", coordenadorRegional2:"Wagner Rangel", supervisorDeObra1:"André Martini", supervisorDeObra2:""},
    {função:representanteFunção, número:"070", nome:"Venda Direta São Paulo", emailComercial:"(VERIFICAR O RESPONSÁVEL)", gerente1:"", gerente2:"", engenheiro1:"", engenheiro2:"", coordenadorRegional1:"", coordenadorRegional2:"", supervisorDeObra1:"", supervisorDeObra2:""},
    {função:representanteFunção, número:"077", nome:"Llampe Frio PR", emailComercial:"kaua@llampefrio.com.br; contato@llampefrio.com.br; projetos2@llampefrio.com.br; projetos3@llampefrio.com.br; projetos4@llampefrio.com.br; samantha@llampefrio.com.br; depro@llampefrio.com.br; ernesto@llampefrio.com.br; lfandre@llampefrio.com.br; llampefrio@llampefrio.com.br; marcos@llampefrio.com.br", gerente1:"Hugo Pons", gerente2:"", engenheiro1:"Cassio", engenheiro2:"", coordenadorRegional1:"Marcelo Godoy", coordenadorRegional2:"Wagner Rangel", supervisorDeObra1:"Vitor Batista", supervisorDeObra2:""},
    {função:representanteFunção, número:"082", nome:"HB", emailComercial:"hb-bene@uol.com.br", gerente1:"Joaquim Rosa", gerente2:"Edison", engenheiro1:"Danielly Fabem", engenheiro2:"", coordenadorRegional1:"Leandro Miela", coordenadorRegional2:"", supervisorDeObra1:"Fabio Ribeiro", supervisorDeObra2:""},
    {função:representanteFunção, número:"087", nome:"Baldissera", emailComercial:"baldissera@redesul.com.br; gilmar_west@hotmail.com", gerente1:"Hugo Pons", gerente2:"", engenheiro1:"Cassio", engenheiro2:"", coordenadorRegional1:"Marcelo Godoy", coordenadorRegional2:"Wagner Rangel", supervisorDeObra1:"Rafael Povoa", supervisorDeObra2:""},
    {função:representanteFunção, número:"093", nome:"Gurgel", emailComercial:"gurgeldf@gmail.com; gurgelrepresentacoes@hotmail.com; gurgel61@terra.com.br", gerente1:"Vanderlei", gerente2:"", engenheiro1:"Juliano", engenheiro2:"", coordenadorRegional1:"Acacio", coordenadorRegional2:"", supervisorDeObra1:"Julio Cesar", supervisorDeObra2:""},
    {função:representanteFunção, número:"094", nome:"Luiz Nachbar", emailComercial:"luiz_nachbar@eletrofrio.com.br", gerente1:"Mitidieri", gerente2:"", engenheiro1:"Danielly Fabem", engenheiro2:"", coordenadorRegional1:"Leandro Miela", coordenadorRegional2:"", supervisorDeObra1:"José Antonio", supervisorDeObra2:""},
    {função:representanteFunção, número:"096", nome:"Kalliel", emailComercial:"kallielprojetos@gmail.com", gerente1:"Ivan Vieira", gerente2:"", engenheiro1:"Luiz Fernando Alves", engenheiro2:"", coordenadorRegional1:"Ivan Vieira", coordenadorRegional2:"", supervisorDeObra1:"Eduardo Gandos", supervisorDeObra2:"Adriano Franco"},
    {função:representanteFunção, número:"097", nome:"DE", emailComercial:"vendas@deequipamentos.com.br; daniel@deequipamentos.com.br; projetos@deequipamentos.com.br; projetos2@deequipamentos.com.br; projetos3@deequipamentos.com.br", gerente1:"André Francisco", gerente2:"", engenheiro1:"Leandro Dornelas", engenheiro2:"", coordenadorRegional1:"Leandro Vargas", coordenadorRegional2:"", supervisorDeObra1:"Eder Cavalcante", supervisorDeObra2:""},
    {função:representanteFunção, número:"101", nome:"Da Roz", emailComercial:"renatabartel@darozrepresentacoes.com.br; douglas@darozrepresentacoes.com.br; darozrep@terra.com.br; darozrep@gmail.com", gerente1:"Joaquim Rosa", gerente2:"Edison", engenheiro1:"Danielly Fabem", engenheiro2:"", coordenadorRegional1:"Leandro Miela", coordenadorRegional2:"", supervisorDeObra1:"José Antonio", supervisorDeObra2:""},
    {função:representanteFunção, número:"102", nome:"Superbrasil", emailComercial:"comercial2@superb.com.br; luiz@superb.com.br; comercial@superb.com.br; sac@superb.com.br", gerente1:"Hugo Pons", gerente2:"", engenheiro1:"Cassio", engenheiro2:"", coordenadorRegional1:"Marcelo Godoy", coordenadorRegional2:"Wagner Rangel", supervisorDeObra1:"Paulo Silva", supervisorDeObra2:""},
    {função:representanteFunção, número:"106", nome:"Vitoria", emailComercial:"jeffersondsrf@uol.com.br; rafael.lnery@gmail.com; jucelito@msn.com", gerente1:"André Francisco", gerente2:"", engenheiro1:"Leandro Dornelas", engenheiro2:"", coordenadorRegional1:"Leandro Miela", coordenadorRegional2:"", supervisorDeObra1:"Vlamir", supervisorDeObra2:""},
    {função:representanteFunção, número:"112", nome:"Ronald", emailComercial:"ronaldioliveira@ronaldmaquinas.com.br; mariacardoso@ronaldmaquinas.com.br; anaoliveira@ronaldmaquinas.com.br; yasmimoliveira@ronaldmaquinas.com.br; orlandomazoni@ronaldmaquinas.com.br; leo.brandao.arq@gmail.com; ronaldioliveira@ronaldmaquinas.com.br", gerente1:"Vanderlei", gerente2:"", engenheiro1:"Juliano", engenheiro2:"", coordenadorRegional1:"Acacio", coordenadorRegional2:"", supervisorDeObra1:"Araujo", supervisorDeObra2:"Hugo Pons"},
    {função:representanteFunção, número:"114", nome:"Scallet", emailComercial:"scallet@eletrofrio.com.br; carla.sp@eletrofrio.com.br", gerente1:"", gerente2:"", engenheiro1:"", engenheiro2:"", coordenadorRegional1:"", coordenadorRegional2:"", supervisorDeObra1:"", supervisorDeObra2:""},
    {função:representanteFunção, número:"115", nome:"Guide", emailComercial:"cirilo@guidisc.com.br; projetos@guidisc.com.br; rinaldo@guidisc.com.br; guidi@guidisc.com.br", gerente1:"Hugo Pons", gerente2:"", engenheiro1:"Cassio", engenheiro2:"", coordenadorRegional1:"Marcelo Godoy", coordenadorRegional2:"Wagner Rangel", supervisorDeObra1:"Luiz Petri", supervisorDeObra2:""},
    {função:representanteFunção, número:"118", nome:"Fast Sul", emailComercial:"mbariano@fastsul.com; contato@fastsul.com; antonio.bariano@fastsul.com", gerente1:"André Francisco", gerente2:"", engenheiro1:"Leandro Dornelas", engenheiro2:"", coordenadorRegional1:"Leandro Miela", coordenadorRegional2:"", supervisorDeObra1:"Vlamir", supervisorDeObra2:""},
    {função:representanteFunção, número:"120", nome:"Rio Fast", emailComercial:"riofasteletro@yahoo.com.br; gabriel@amorimequipamentosrj.com; fausto@amorimequipamentosrj.com; riofasteletro@yahoo.com.br", gerente1:"Ana Paula", gerente2:"", engenheiro1:"Luiz Fernando Alves", engenheiro2:"", coordenadorRegional1:"Cláudio José", coordenadorRegional2:"", supervisorDeObra1:"Cláudio José", supervisorDeObra2:""},
    {função:representanteFunção, número:"121", nome:"Eletrofast", emailComercial:"vinicius@eletrofastrj.com; vilmar@eletrofastrj.com; diego@eletrofastrj.com; pedro@eletrofastrj.com; eletrofast@yahoo.com.br; luizamorimp@yahoo.com.br", gerente1:"Ana Paula", gerente2:"", engenheiro1:"Luiz Fernando Alves", engenheiro2:"", coordenadorRegional1:"Cláudio José", coordenadorRegional2:"", supervisorDeObra1:"Cláudio José", supervisorDeObra2:""},
    {função:representanteFunção, número:"182", nome:"Afonso Araujo", emailComercial:"afonsovargasaraujo@gmail.com", gerente1:"Vanderlei", gerente2:"", engenheiro1:"Juliano", engenheiro2:"", coordenadorRegional1:"Acacio", coordenadorRegional2:"", supervisorDeObra1:"Araujo", supervisorDeObra2:"Hugo Pons"},
    {função:representanteFunção, número:"187", nome:"ETCO", emailComercial:"etcorep@terra.com.br; edseu@terra.com.br", gerente1:"Vanderlei", gerente2:"", engenheiro1:"Juliano", engenheiro2:"", coordenadorRegional1:"Acacio", coordenadorRegional2:"", supervisorDeObra1:"Julio Cesar", supervisorDeObra2:""},
    {função:representanteFunção, número:"189", nome:"Refriged", emailComercial:"ednilson.santos@uol.com.br; ednilson.eletrofrio@gmail.com", gerente1:"Joaquim Rosa", gerente2:"Edison", engenheiro1:"Danielly Fabem", engenheiro2:"", coordenadorRegional1:"Leandro Miela", coordenadorRegional2:"", supervisorDeObra1:"José Antonio", supervisorDeObra2:""},
    {função:representanteFunção, número:"190", nome:"A&F", emailComercial:"renan@aefbolsadenegocios.com.br; renato@aefbolsadenegocios.com.br; fernando@aefbolsadenegocios.com.br; victor@aefbolsadenegocios.com.br; wilian@aefbolsadenegocios.com.br; roni@aefbolsadenegocios.com.br; victor@aefbolsadenegocios.com.br", gerente1:"Vanderlei", gerente2:"", engenheiro1:"Juliano", engenheiro2:"", coordenadorRegional1:"Acacio", coordenadorRegional2:"", supervisorDeObra1:"Julio Cesar", supervisorDeObra2:""},
    {função:representanteFunção, número:"191", nome:"Produtiva", emailComercial:"suporte@produtivarepresentacoes.com.br; michel@produtivarepresentacoes.com.br", gerente1:"Hugo Pons", gerente2:"", engenheiro1:"Cassio", engenheiro2:"", coordenadorRegional1:"Marcelo Godoy", coordenadorRegional2:"Wagner Rangel", supervisorDeObra1:"André Martini", supervisorDeObra2:""},
    {função:representanteFunção, número:"193", nome:"Llampe Frio SC", emailComercial:"kaua@llampefrio.com.br; contato@llampefrio.com.br; projetos2@llampefrio.com.br; projetos3@llampefrio.com.br; projetos4@llampefrio.com.br; samantha@llampefrio.com.br; depro@llampefrio.com.br; ernesto@llampefrio.com.br; lfandre@llampefrio.com.br; llampefrio@llampefrio.com.br; marcos@llampefrio.com.br", gerente1:"Hugo Pons", gerente2:"", engenheiro1:"Cassio", engenheiro2:"", coordenadorRegional1:"Marcelo Godoy", coordenadorRegional2:"Wagner Rangel", supervisorDeObra1:"Luiz Petri", supervisorDeObra2:""},
    {função:representanteFunção, número:"195", nome:"DNC Dealer", emailComercial:"projetos@dealerrs.com.br; dinar@dealerrs.com.br", gerente1:"Hugo Pons", gerente2:"", engenheiro1:"Cassio", engenheiro2:"", coordenadorRegional1:"Marcelo Godoy", coordenadorRegional2:"Wagner Rangel", supervisorDeObra1:"Rafael Povoa", supervisorDeObra2:""},
    {função:representanteFunção, número:"196", nome:"Brites", emailComercial:"vendas@brites.srv.br", gerente1:"André Francisco", gerente2:"", engenheiro1:"Leandro Dornelas", engenheiro2:"", coordenadorRegional1:"Leandro Miela", coordenadorRegional2:"", supervisorDeObra1:"Paulo Silva", supervisorDeObra2:""},
    {função:representanteFunção, número:"198", nome:"Euro", emailComercial:"equipamentoseuro@gmail.com; jacksonkiatkoski@gmail.com", gerente1:"Hugo Pons", gerente2:"", engenheiro1:"Cassio", engenheiro2:"", coordenadorRegional1:"Marcelo Godoy", coordenadorRegional2:"Wagner Rangel", supervisorDeObra1:"Luiz Petri", supervisorDeObra2:""},
    {função:representanteFunção, número:"199", nome:"Erco", emailComercial:"mario.erco1@gmail.com", gerente1:"Ivan Vieira", gerente2:"", engenheiro1:"Luiz Fernando Alves", engenheiro2:"", coordenadorRegional1:"Ivan Vieira", coordenadorRegional2:"", supervisorDeObra1:"Eduardo Gandos", supervisorDeObra2:"Adriano Franco"},
    {função:representanteFunção, número:"202", nome:"Eder Mathias", emailComercial:"eder.mathias@uol.com.br", gerente1:"Joaquim Rosa", gerente2:"Edison", engenheiro1:"Danielly Fabem", engenheiro2:"", coordenadorRegional1:"Leandro Miela", coordenadorRegional2:"", supervisorDeObra1:"Fabio Ribeiro", supervisorDeObra2:""},
    {função:representanteFunção, número:"203", nome:"HCM", emailComercial:"anderson@hcm.com.br; hcm@hcm.com.br; hamilton@hcm.com.br", gerente1:"Vanderlei", gerente2:"", engenheiro1:"Juliano", engenheiro2:"", coordenadorRegional1:"Acacio", coordenadorRegional2:"", supervisorDeObra1:"Julio Cesar", supervisorDeObra2:""},
    {função:representanteFunção, número:"207", nome:"Brava", emailComercial:"eac_cunha@yahoo.com.br; joaogabriel_p@hotmail.com; eac_cunha@yahoo.com.br", gerente1:"Ana Paula", gerente2:"", engenheiro1:"Luiz Fernando Alves", engenheiro2:"", coordenadorRegional1:"Cláudio José", coordenadorRegional2:"", supervisorDeObra1:"Cláudio José", supervisorDeObra2:""},
    {função:representanteFunção, número:"213", nome:"Mercato", emailComercial:"mercato.projeto@gmail.com; denis@mercatorepresentacoes.com.br", gerente1:"Hugo Pons", gerente2:"", engenheiro1:"Cassio", engenheiro2:"", coordenadorRegional1:"Marcelo Godoy", coordenadorRegional2:"Wagner Rangel", supervisorDeObra1:"Rafael Povoa", supervisorDeObra2:""},
    {função:representanteFunção, número:"217", nome:"Cold Import", emailComercial:"jlescano@coldimport.com.pe; hguanillo@coldimport.com.pe; gpucuhuayla@coldimport.com.pe; fvejarano@coldimport.com.pe", gerente1:"Gabriel Antonio Marques", gerente2:"", engenheiro1:"Luiz Fernando Alves", engenheiro2:"", coordenadorRegional1:"Luiz Fernando Alves", coordenadorRegional2:"", supervisorDeObra1:"Luiz Fernando Alves", supervisorDeObra2:""},
    {função:representanteFunção, número:"218", nome:"Cencosud", emailComercial:"", gerente1:"Gabriel Antonio Marques", gerente2:"", engenheiro1:"Luiz Fernando Alves", engenheiro2:"", coordenadorRegional1:"Luiz Fernando Alves", coordenadorRegional2:"", supervisorDeObra1:"Luiz Fernando Alves", supervisorDeObra2:""},
    {função:representanteFunção, número:"223", nome:"Hercold", emailComercial:"fastlest@uol.com.br; fastlest@icloud.com", gerente1:"Joaquim Rosa", gerente2:"Edison", engenheiro1:"Danielly Fabem", engenheiro2:"", coordenadorRegional1:"Leandro Miela", coordenadorRegional2:"", supervisorDeObra1:"José Antonio", supervisorDeObra2:""},
    {função:representanteFunção, número:"226", nome:"EC", emailComercial:"record@record-maq.com.br; projetos@record-maq.com.br; leonardomoura@record-maq.com.br; silviogoncales@record-maq.com.br; diegoreis@record-maq.com.br; evanildo@record-maq.com.br", gerente1:"André Francisco", gerente2:"", engenheiro1:"Leandro Dornelas", engenheiro2:"", coordenadorRegional1:"Leandro Vargas", coordenadorRegional2:"", supervisorDeObra1:"Fabio Ribeiro", supervisorDeObra2:""},
    {função:representanteFunção, número:"227", nome:"Edeval (MIL)", emailComercial:"edevalvendas@gmail.com", gerente1:"Vanderlei", gerente2:"", engenheiro1:"Juliano", engenheiro2:"", coordenadorRegional1:"Acacio", coordenadorRegional2:"", supervisorDeObra1:"Julio Cesar", supervisorDeObra2:""},
    {função:representanteFunção, número:"228", nome:"JPC", emailComercial:"alexandre@acequipamentos.com.br; jp-candido@hotmail.com; projetos.acequipamentos@gmail.com; alexandre@pontodarefrigeracao.com.br", gerente1:"André Francisco", gerente2:"", engenheiro1:"Leandro Dornelas", engenheiro2:"", coordenadorRegional1:"Leandro Vargas", coordenadorRegional2:"", supervisorDeObra1:"Eder Cavalcante", supervisorDeObra2:""},
    {função:representanteFunção, número:"229", nome:"Wesley Dal Pozzo", emailComercial:"engenharia_dlpz@outlook.com; dlpz@onda.com.br; walace_dlpz@hotmail.com ", gerente1:"Hugo Pons", gerente2:"", engenheiro1:"Cassio", engenheiro2:"", coordenadorRegional1:"Marcelo Godoy", coordenadorRegional2:"Wagner Rangel", supervisorDeObra1:"Vitor Batista", supervisorDeObra2:""},
    {função:representanteFunção, número:"230", nome:"Ergosystem", emailComercial: "ergosystem.comercial@outlook.com; ergosystem.comercial1@outlook.com", gerente1:"Joaquim Rosa", gerente2:"Edison", engenheiro1:"Danielly Fabem", engenheiro2:"", coordenadorRegional1:"Leandro Miela", coordenadorRegional2:"", supervisorDeObra1:"Fabio Ribeiro", supervisorDeObra2:""},
    {função:representanteFunção, número:"231", nome:"SM", emailComercial:"representacoesbelz@gmail.com", gerente1:"Vanderlei", gerente2:"", engenheiro1:"Juliano", engenheiro2:"", coordenadorRegional1:"Acacio", coordenadorRegional2:"", supervisorDeObra1:"Araujo", supervisorDeObra2:"Hugo Pons"},
    {função:representanteFunção, número:"232", nome:"S&I", emailComercial:"carol@siautomacao.com.br; geraldo@siautomacao.com.br; silvia@siautomacao.com.br; alexandre@siautomacao.com.br", gerente1:"Ivan Vieira", gerente2:"", engenheiro1:"Luiz Fernando Alves", engenheiro2:"", coordenadorRegional1:"Ivan Vieira", coordenadorRegional2:"", supervisorDeObra1:"Eduardo Gandos", supervisorDeObra2:"Adriano Franco"},
    {função:representanteFunção, número:"233", nome:"Control y Sostenibilidad", emailComercial:"", gerente1:"Gabriel Antonio Marques", gerente2:"", engenheiro1:"Luiz Fernando Alves", engenheiro2:"", coordenadorRegional1:"Luiz Fernando Alves", coordenadorRegional2:"", supervisorDeObra1:"Luiz Fernando Alves", supervisorDeObra2:""},
    {função:representanteFunção, número:"234", nome:"Aarci", emailComercial:"juan.avila@aarci.co; info@aarci.co; elkin.arrieta@aarci.co", gerente1:"Gabriel Antonio Marques", gerente2:"", engenheiro1:"Luiz Fernando Alves", engenheiro2:"", coordenadorRegional1:"Luiz Fernando Alves", coordenadorRegional2:"", supervisorDeObra1:"Luiz Fernando Alves", supervisorDeObra2:""},
    {função:representanteFunção, número:"236", nome:"T&G", emailComercial:"filipe.lisbooa@yahoo.com.br; ed_wanderson@yahoo.com.br", gerente1:"Ana Paula", gerente2:"", engenheiro1:"Luiz Fernando Alves", engenheiro2:"", coordenadorRegional1:"Cláudio José", coordenadorRegional2:"", supervisorDeObra1:"Cláudio José", supervisorDeObra2:""},
    {função:representanteFunção, número:"237", nome:"Rematec", emailComercial:"roger@rematecvarejo.com.br; alessandra@rematecvarejo.com.br; ariele@rematecvarejo.com.br; orcamentos@rematecvarejo.com.br; projetos@rematecvarejo.com.br; alessandra@remaqbh.com.br; admprojetos@remaqbh.com.br", gerente1:"Ivan Vieira", gerente2:"", engenheiro1:"Luiz Fernando Alves", engenheiro2:"", coordenadorRegional1:"Ivan Vieira", coordenadorRegional2:"", supervisorDeObra1:"Eduardo Gandos", supervisorDeObra2:"Adriano Franco"},
    {função:representanteFunção, número:"238", nome:"FMG", emailComercial:"projetos.fmg@hotmail.com; fmg_representacoes@hotmail.com", gerente1:"Hugo Pons", gerente2:"", engenheiro1:"Cassio", engenheiro2:"", coordenadorRegional1:"Marcelo Godoy", coordenadorRegional2:"Wagner Rangel", supervisorDeObra1:"Paulo Silva", supervisorDeObra2:""},
    {função:representanteFunção, número:"239", nome:"PSK", emailComercial:"", gerente1:"", gerente2:"", engenheiro1:"", engenheiro2:"", coordenadorRegional1:"", coordenadorRegional2:"", supervisorDeObra1:"", supervisorDeObra2:""},
    {função:supervisorDeObraFunção, número:"300084", nome:"Adriano Franco", emailComercial:"adriano.franco@eletrofrio.com.br"},
    {função:supervisorDeObraFunção, número:"300088", nome:"André Martini", emailComercial:"andre.martini@eletrofrio.com.br"},
    {função:supervisorDeObraFunção, número:"nnn", nome:"Araujo", emailComercial:"araujo@eletrofrio.com.br"},
    {função:supervisorDeObraFunção, número:"300072", nome:"Damião Conceição", emailComercial:"damião.conceicao@eletrofrio.com.br"},
    {função:supervisorDeObraFunção, número:"300071", nome:"Eder Cavalcante", emailComercial:"eder.cavalcante@eletrofrio.com.br"},
    {função:supervisorDeObraFunção, número:"10618", nome:"Eduardo Gandos", emailComercial:"eduardo.gandos@eletrofrio.com.br"},
    {função:supervisorDeObraFunção, número:"nnn", nome:"Fabio Ribeiro", emailComercial:"fabio.ribeiro@friopan.com.br"},
    {função:supervisorDeObraFunção, número:"43689", nome:"José Antonio", emailComercial:"jose.antonio@eletrofrio.com.br"},
    {função:supervisorDeObraFunção, número:"10626", nome:"Julio Cesar", emailComercial:"julio.cesar@eletrofrio.com.br"},
    {função:supervisorDeObraFunção, número:"43670", nome:"Luiz Petri", emailComercial:"luiz.petri@eletrofrio.com.br"},
    {função:supervisorDeObraFunção, número:"50380", nome:"Paulo Silva", emailComercial:"paulo.silva@eletrofrio.com.br"},
    {função:supervisorDeObraFunção, número:"43824", nome:"Rafael Povoa", emailComercial:"rafael.povoa@eletrofrio.com.br"},
    {função:supervisorDeObraFunção, número:"300081", nome:"Vitor Batista", emailComercial:"vitor.batista@eletrofrio.com.br"},
    {função:supervisorDeObraFunção, número:"45100", nome:"Vlamir", emailComercial:"vlamir@eletrofrio.com.br"},
    {função:tiFunção, número:"45118", nome:"Clauber", emailComercial:"clauber.correia@eletrofrio.com.br"},
    {função:tiFunção, número:"26690", nome:"Deisi", emailComercial:"deisi@eletrofrio.com.br"},
    {função:tiFunção, número:"28960", nome:"Gilson", emailComercial:"gilson@eletrofrio.com.br"},
    {função:tiFunção, número:"50045", nome:"Willian", emailComercial:"willian.laudites@eletrofrio.com.br"},
]

/* - E-mails de internos que respondem por vários representantes */

grupoSãoPaulo = ["062", "082", "094", "101", "114", "189", "223", "230", "239"]
for (const index1 in cadastro) {
    if (grupoSãoPaulo.includes(cadastro[index1].número)) {
        if (cadastro[index1].emailComercial == "") {
            cadastro[index1].emailComercial += cadastro.filter((index2)=>index2.nome == "Bruna Nahkur").map((index2)=>`${index2.emailComercial}`)
            cadastro[index1].emailComercial += cadastro.filter((index2)=>index2.nome == "Diego Paula").map((index2)=>`; ${index2.emailComercial}`)
            cadastro[index1].emailComercial += cadastro.filter((index2)=>index2.nome == "Felipe Santos").map((index2)=>`; ${index2.emailComercial}`)
            cadastro[index1].emailComercial += cadastro.filter((index2)=>index2.nome == "Danielly Fabem").map((index2)=>`; ${index2.emailComercial}`)
            cadastro[index1].emailComercial += cadastro.filter((index2)=>index2.nome == "Edison").map((index2)=>`; ${index2.emailComercial}`)
        }
        else {
            cadastro[index1].emailComercial += cadastro.filter((index2)=>index2.nome == "Bruna Nahkur").map((index2)=>`; ${index2.emailComercial}`)
            cadastro[index1].emailComercial += cadastro.filter((index2)=>index2.nome == "Diego Paula").map((index2)=>`; ${index2.emailComercial}`) 
            cadastro[index1].emailComercial += cadastro.filter((index2)=>index2.nome == "Felipe Santos").map((index2)=>`; ${index2.emailComercial}`) 
            cadastro[index1].emailComercial += cadastro.filter((index2)=>index2.nome == "Danielly Fabem").map((index2)=>`; ${index2.emailComercial}`) 
            cadastro[index1].emailComercial += cadastro.filter((index2)=>index2.nome == "Edison").map((index2)=>`; ${index2.emailComercial}`) 
        }
    }
}
grupoExterior = ["217", "218", "231", "233", "234"]
for (const index1 in cadastro) {
    if (grupoExterior.includes(cadastro[index1].número)) {
        if (cadastro[index1].emailComercial == "") {
            cadastro[index1].emailComercial += cadastro.filter((index2)=>index2.nome == "Gabriel Antonio Marques").map((index2)=>`${index2.emailComercial}`)
            cadastro[index1].emailComercial += cadastro.filter((index2)=>index2.nome == "Luiz Fernando Alves").map((index2)=>`; ${index2.emailComercial}`)
        }
        else {
            cadastro[index1].emailComercial += cadastro.filter((index2)=>index2.nome == "Gabriel Antonio Marques").map((index2)=>`; ${index2.emailComercial}`)
            cadastro[index1].emailComercial += cadastro.filter((index2)=>index2.nome == "Luiz Fernando Alves").map((index2)=>`; ${index2.emailComercial}`) 
        }
    }
}

/* - Variáveis auxiliares para configurar grupos dos e-mails padrões */

let ajuste = []
cadastro.filter((index)=>index.função == ajusteFunção).map((index)=>ajuste.push(index.nome))
let analista = []
cadastro.filter((index)=>index.função == analistaFunção).map((index)=>analista.push(index.nome))
let liderançaComercial = []
cadastro.filter((index)=>index.função == liderançaComercialFunção).map((index)=>liderançaComercial.push(index.nome))
let liderançaContinuum = []
cadastro.filter((index)=>index.função == liderançaContinuumFunção).map((index)=>liderançaContinuum.push(index.nome))
let planilhamento = []
cadastro.filter((index)=>index.função == planilhamentoFunção).map((index)=>planilhamento.push(index.nome))
let executivo = []
cadastro.filter((index)=>index.função == executivoFunção).map((index)=>executivo.push(index.nome))
let representante = [cadastro.filter((index)=>index.função == representanteFunção)[0].nome]

/* - Atualiza o e-mail do representante de acordo com o representante selecionado */

function mudaEmailRepresentante() {
    for (let index1 in email) {if (email[index1].emailsPara.toString() == representante.toString()) {email[index1].emailsPara.splice(0,1,(cadastro[cadastro.map((index2) => index2.número).indexOf(idNúmeroRepresentante.value)].nome))}}
    for (let index in email) {representante = (cadastro[cadastro.map((index) => index.número).indexOf(idNúmeroRepresentante.value)].nome)}
}

let email = [
    {função:selectOption, ordemSubgrupo:1, subGrupo:selectOption, ordemTipo:1, tipo:selectOption, dadosDoPedido:não, emailsPara: [], emailsCc: [], emailsBcc: []},
    {função:analistaFunção, ordemSubgrupo:1, subGrupo:liberaçãoSubGrupo, ordemTipo:1, tipo:"Liberação", dadosDoPedido:sim, emailsPara: ["Liberação"], emailsCc: [], emailsBcc: []},
    {função:analistaFunção, ordemSubgrupo:1, subGrupo:liberaçãoSubGrupo, ordemTipo:2, tipo:"Liberação Total", dadosDoPedido:sim, emailsPara: ["Liberação"], emailsCc: [], emailsBcc: []},
    {função:analistaFunção, ordemSubgrupo:1, subGrupo:liberaçãoSubGrupo, ordemTipo:3, tipo:"Liberação Parcial", dadosDoPedido:sim, emailsPara: ["Liberação"], emailsCc: [], emailsBcc: []},
    {função:analistaFunção, ordemSubgrupo:1, subGrupo:verificaçãoSubGrupo, ordemTipo:4, tipo:"Linhas Atualizadas", dadosDoPedido:sim, emailsPara: ["Continuum - Planilhamento para Produção"], emailsCc: [], emailsBcc: []},
    {função:analistaFunção, ordemSubgrupo:1, subGrupo:verificaçãoSubGrupo, ordemTipo:5, tipo:"Feito", dadosDoPedido:sim, emailsPara: ["Continuum - Planilhamento para Produção"], emailsCc: [], emailsBcc: []},
    {função:analistaFunção, ordemSubgrupo:1, subGrupo:alteraçãoSubGrupo, ordemTipo:5, tipo:"Alterações", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    {função:ajusteFunção, ordemSubgrupo:1, subGrupo:dúvidaSubGrupo, ordemTipo:1, tipo:"Dúvidas Gerais", dadosDoPedido:sim, emailsPara: [].concat(representante), emailsCc: ["Simone", "Bruno Garcia"].concat(ajuste).concat(analista).concat(liderançaComercial).concat(planilhamento), emailsBcc: []},
    {função:ajusteFunção, ordemSubgrupo:1, subGrupo:dúvidaSubGrupo, ordemTipo:2, tipo:"Aguardando Dúvidas", dadosDoPedido:sim, emailsPara: [].concat(representante), emailsCc: ["Simone", "Bruno Garcia"].concat(ajuste).concat(analista).concat(liderançaComercial).concat(planilhamento), emailsBcc: []},
    {função:ajusteFunção, ordemSubgrupo:1, subGrupo:ajusteSubGrupo, ordemTipo:3, tipo:"Arquivos para Produção", dadosDoPedido:sim, emailsPara: [].concat(representante), emailsCc: ["Simone", "Bruno Garcia"].concat(ajuste).concat(analista).concat(liderançaComercial).concat(planilhamento), emailsBcc: []},
    {função:ajusteFunção, ordemSubgrupo:1, subGrupo:ajusteSubGrupo, ordemTipo:4, tipo:"Aguardando Conferência", dadosDoPedido:sim, emailsPara: [].concat(representante), emailsCc: ["Simone", "Bruno Garcia"].concat(ajuste).concat(analista).concat(liderançaComercial).concat(planilhamento), emailsBcc: []},
    {função:ajusteFunção, ordemSubgrupo:1, subGrupo:alteraçãoSubGrupo, ordemTipo:5, tipo:"Arquivos de Alteração", dadosDoPedido:sim, emailsPara: [].concat(representante), emailsCc: ["Simone", "Bruno Garcia"].concat(ajuste).concat(analista).concat(liderançaComercial).concat(planilhamento), emailsBcc: []},
    {função:ajusteFunção, ordemSubgrupo:1, subGrupo:alteraçãoSubGrupo, ordemTipo:6, tipo:"Verificar Possibilidade de Alteração", dadosDoPedido:sim, emailsPara: ["Roney"], emailsCc: ["Simone", "Bruno Garcia", "Carla"].concat(representante).concat(ajuste).concat(analista).concat(planilhamento), emailsBcc: []},
    {função:executivoFunção, ordemSubgrupo:1, subGrupo:projetoSubGrupo, ordemTipo:1, tipo:"Projetos Antecipados", dadosDoPedido:sim, emailsPara: [].concat(representante), emailsCc: [].concat(liderançaContinuum).concat(executivo).concat(planilhamento), emailsBcc: []},
    {função:executivoFunção, ordemSubgrupo:1, subGrupo:projetoSubGrupo, ordemTipo:2, tipo:"Projetos Executivos", dadosDoPedido:sim, emailsPara: [].concat(representante), emailsCc: [].concat(liderançaContinuum).concat(executivo).concat(planilhamento), emailsBcc: []},
    {função:planilhamentoFunção, ordemSubgrupo:4, subGrupo:compraSubGrupo, ordemTipo:1, tipo:"Compra de Porta Walk-In", dadosDoPedido:sim, emailsPara: ["Compras", "Reinaldo"], emailsCc: ["Robson", "Roney", "Bruno Garcia"].concat(liderançaContinuum).concat(planilhamento), emailsBcc: []},
    {função:planilhamentoFunção, ordemSubgrupo:4, subGrupo:compraSubGrupo, ordemTipo:2, tipo:"Compra de Porta Seccional", dadosDoPedido:sim, emailsPara: ["Compras", "Reinaldo"], emailsCc: ["Robson", "Roney", "Bruno Garcia"].concat(liderançaContinuum).concat(planilhamento), emailsBcc: []},
    {função:planilhamentoFunção, ordemSubgrupo:4, subGrupo:compraSubGrupo, ordemTipo:3, tipo:"Compra de Portal de Selamento", dadosDoPedido:sim, emailsPara: ["Compras", "Reinaldo"], emailsCc: ["Robson", "Roney", "Bruno Garcia"].concat(liderançaContinuum).concat(planilhamento), emailsBcc: []},
    //{função:planilhamentoFunção, ordemSubgrupo:4, subGrupo:compraSubGrupo, ordemTipo:4, tipo:"Compra de Niveladora de Doca", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{função:planilhamentoFunção, ordemSubgrupo:4, subGrupo:compraSubGrupo, ordemTipo:5, tipo:"Compra de Porta Rápida", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{função:planilhamentoFunção, ordemSubgrupo:4, subGrupo:compraSubGrupo, ordemTipo:6, tipo:"Compra de Porta Automática", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    {função:planilhamentoFunção, ordemSubgrupo:4, subGrupo:compraSubGrupo, ordemTipo:7, tipo:"Compra de Porta Beer Cave", dadosDoPedido:sim, emailsPara: ["Compras", "Reinaldo"], emailsCc: ["Robson", "Roney", "Bruno Garcia"].concat(liderançaContinuum).concat(planilhamento), emailsBcc: []},
    {função:planilhamentoFunção, ordemSubgrupo:4, subGrupo:compraSubGrupo, ordemTipo:8, tipo:"Compra de Visor Móvel", dadosDoPedido:sim, emailsPara: ["Compras", "Reinaldo"], emailsCc: ["Robson", "Roney", "Bruno Garcia"].concat(liderançaContinuum).concat(planilhamento), emailsBcc: []},
    {função:planilhamentoFunção, ordemSubgrupo:4, subGrupo:compraSubGrupo, ordemTipo:9, tipo:"Compra de Estrado de Borracha", dadosDoPedido:sim, emailsPara: ["Compras", "Reinaldo"], emailsCc: ["Robson", "Roney", "Bruno Garcia"].concat(liderançaContinuum).concat(planilhamento), emailsBcc: []},
    //{função:planilhamentoFunção, ordemSubgrupo:4, subGrupo:compraSubGrupo, ordemTipo:10, tipo:"Compra de Porta Vai e Vem Isolada", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{função:planilhamentoFunção, ordemSubgrupo:4, subGrupo:compraSubGrupo, ordemTipo:11, tipo:"Compra de Porta Vai e Vem de Tamanho Especial", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    {função:planilhamentoFunção, ordemSubgrupo:4, subGrupo:compraSubGrupo, ordemTipo:12, tipo:"Compra de Resistência", dadosDoPedido:sim, emailsPara: ["Compras", "Reinaldo"], emailsCc: ["Robson", "Roney", "Bruno Garcia"].concat(liderançaContinuum).concat(planilhamento), emailsBcc: []},
    {função:planilhamentoFunção, ordemSubgrupo:4, subGrupo:compraSubGrupo, ordemTipo:13, tipo:"Compra de Termostato", dadosDoPedido:sim, emailsPara: ["Compras", "Reinaldo"], emailsCc: ["Robson", "Roney", "Bruno Garcia"].concat(liderançaContinuum).concat(planilhamento), emailsBcc: []},
    //{função:planilhamentoFunção, ordemSubgrupo:3, subGrupo:cotaçãoSubGrupo, ordemTipo:1, tipo:"Cotação de Porta Walk-In", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{função:planilhamentoFunção, ordemSubgrupo:3, subGrupo:cotaçãoSubGrupo, ordemTipo:2, tipo:"Cotação de Porta Seccional", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{função:planilhamentoFunção, ordemSubgrupo:3, subGrupo:cotaçãoSubGrupo, ordemTipo:3, tipo:"Cotação de Portal de Selamento", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{função:planilhamentoFunção, ordemSubgrupo:3, subGrupo:cotaçãoSubGrupo, ordemTipo:4, tipo:"Cotação de Niveladora de Doca", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{função:planilhamentoFunção, ordemSubgrupo:3, subGrupo:cotaçãoSubGrupo, ordemTipo:5, tipo:"Cotação de Porta Rápida", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{função:planilhamentoFunção, ordemSubgrupo:3, subGrupo:cotaçãoSubGrupo, ordemTipo:6, tipo:"Cotação de Porta Automática", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{função:planilhamentoFunção, ordemSubgrupo:3, subGrupo:cotaçãoSubGrupo, ordemTipo:7, tipo:"Cotação de Porta Beer Cave", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{função:planilhamentoFunção, ordemSubgrupo:3, subGrupo:cotaçãoSubGrupo, ordemTipo:8, tipo:"Cotação de Visor Corrediço", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{função:planilhamentoFunção, ordemSubgrupo:4, subGrupo:cotaçãoSubGrupo, ordemTipo:9, tipo:"Cotação de Estrado de Borracha", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{função:planilhamentoFunção, ordemSubgrupo:3, subGrupo:cotaçãoSubGrupo, ordemTipo:10, tipo:"Cotação de Porta Vai e Vem Isolada", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{função:planilhamentoFunção, ordemSubgrupo:3, subGrupo:cotaçãoSubGrupo, ordemTipo:11, tipo:"Cotação de Porta Vai e Vem de Tamanho Especial", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{função:planilhamentoFunção, ordemSubgrupo:3, subGrupo:cotaçãoSubGrupo, ordemTipo:12, tipo:"Cotação de Resistência", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{função:planilhamentoFunção, ordemSubgrupo:3, subGrupo:cotaçãoSubGrupo, ordemTipo:13, tipo:"Cotação de Termostato", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    {função:planilhamentoFunção, ordemSubgrupo:2, subGrupo:dúvidaSubGrupo, ordemTipo:1, tipo:"Dúvidas Gerais", dadosDoPedido:sim, emailsPara: [].concat(representante), emailsCc: ["Simone", "Bruno Garcia"].concat(ajuste).concat(analista).concat(liderançaComercial).concat(planilhamento), emailsBcc: []},
    {função:planilhamentoFunção, ordemSubgrupo:2, subGrupo:dúvidaSubGrupo, ordemTipo:2, tipo:"Dúvida de Porta Seccional Livre de Alvenaria", dadosDoPedido:sim, emailsPara: [].concat(representante), emailsCc: ["Simone", "Bruno Garcia"].concat(ajuste).concat(analista).concat(liderançaComercial).concat(planilhamento), emailsBcc: []},
    {função:planilhamentoFunção, ordemSubgrupo:2, subGrupo:dúvidaSubGrupo, ordemTipo:3, tipo:"Dúvida de Porta Seccional Encostada em Alvenaria", dadosDoPedido:sim, emailsPara: [].concat(representante), emailsCc: ["Simone", "Bruno Garcia"].concat(ajuste).concat(analista).concat(liderançaComercial).concat(planilhamento), emailsBcc: []},
    {função:planilhamentoFunção, ordemSubgrupo:2, subGrupo:dúvidaSubGrupo, ordemTipo:3, tipo:"123aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa456aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa789", dadosDoPedido:sim, emailsPara: [].concat(representante), emailsCc: ["Simone", "Bruno Garcia"].concat(ajuste).concat(analista).concat(liderançaComercial).concat(planilhamento), emailsBcc: []},
    {função:planilhamentoFunção, ordemSubgrupo:2, subGrupo:dúvidaSubGrupo, ordemTipo:4, tipo:"Aguardando Dúvidas", dadosDoPedido:sim, emailsPara: [].concat(representante), emailsCc: ["Simone", "Bruno Garcia"].concat(ajuste).concat(analista).concat(liderançaComercial).concat(planilhamento), emailsBcc: []},
    {função:planilhamentoFunção, ordemSubgrupo:5, subGrupo:encaminharSubGrupo, ordemTipo:1, tipo:"Encaminhar", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    {função:planilhamentoFunção, ordemSubgrupo:1, subGrupo:planilhamentoSubGrupo, ordemTipo:1, tipo:"Planilhamento Total", dadosDoPedido:sim, emailsPara: ["Continuum - Planilhamento para Produção"], emailsCc: [], emailsBcc: []},
    {função:planilhamentoFunção, ordemSubgrupo:1, subGrupo:planilhamentoSubGrupo, ordemTipo:2, tipo:"Planilhamento Parcial", dadosDoPedido:sim, emailsPara: ["Continuum - Planilhamento para Produção"], emailsCc: [], emailsBcc: []},
    {função:planilhamentoFunção, ordemSubgrupo:1, subGrupo:planilhamentoSubGrupo, ordemTipo:3, tipo:"Planilhamento Alteração", dadosDoPedido:sim, emailsPara: ["Continuum - Planilhamento para Produção"], emailsCc: [], emailsBcc: []},
    {função:planilhamentoFunção, ordemSubgrupo:1, subGrupo:suporteTiSubGrupo, ordemTipo:1, tipo:"Suporte TI - Geral", dadosDoPedido:não, emailsPara: ["Suporte TI"], emailsCc: [], emailsBcc: []},
    {função:planilhamentoFunção, ordemSubgrupo:1, subGrupo:suporteTiSubGrupo, ordemTipo:2, tipo:"Suporte TI - Baan - Geral", dadosDoPedido:não, emailsPara: ["Suporte TI"], emailsCc: [], emailsBcc: []},
    //{função:planilhamentoFunção, ordemSubgrupo:1, subGrupo:suporteTiSubGrupo, ordemTipo:3, tipo:"Suporte TI - Baan - Inclusão de Item", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{função:planilhamentoFunção, ordemSubgrupo:1, subGrupo:suporteTiSubGrupo, ordemTipo:4, tipo:"Suporte TI - Baan - Exclusão de Item", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{função:planilhamentoFunção, ordemSubgrupo:1, subGrupo:suporteTiSubGrupo, ordemTipo:5, tipo:"Suporte TI - Baan - Troca de Item", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{função:planilhamentoFunção, ordemSubgrupo:1, subGrupo:suporteTiSubGrupo, ordemTipo:6, tipo:"Suporte TI - Baan - Exclusão de Alfa", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{função:planilhamentoFunção, ordemSubgrupo:1, subGrupo:suporteTiSubGrupo, ordemTipo:7, tipo:"Suporte TI - Baan - Remoção de Alfa", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    //{função:planilhamentoFunção, ordemSubgrupo:1, subGrupo:suporteTiSubGrupo, ordemTipo:8, tipo:"Suporte TI - Baan - Estorno de Alfa", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    {função:planilhamentoFunção, ordemSubgrupo:1, subGrupo:suporteTiSubGrupo, ordemTipo:9, tipo:"Suporte TI - Baan - Derrubar Usuário", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
    {função:planilhamentoFunção, ordemSubgrupo:1, subGrupo:suporteTiSubGrupo, ordemTipo:10, tipo:"Suporte TI - Baan - Liberação de Tela", dadosDoPedido:não, emailsPara: ["Suporte TI"], emailsCc: [], emailsBcc: []},
    {função:planilhamentoFunção, ordemSubgrupo:1, subGrupo:suporteTiSubGrupo, ordemTipo:11, tipo:"Suporte TI - SIP - Geral", dadosDoPedido:não, emailsPara: ["Suporte TI"], emailsCc: ["Gilson", "Willian"], emailsBcc: []},
    {função:planilhamentoFunção, ordemSubgrupo:1, subGrupo:suporteTiSubGrupo, ordemTipo:12, tipo:"Suporte TI - SIP - Liberação para Edição de Painéis Altos", dadosDoPedido:não, emailsPara: ["Suporte TI"], emailsCc: ["Gilson", "Willian"], emailsBcc: []},
    //{função:representanteFunção, ordemSubgrupo:1, subGrupo:"Representante", ordemTipo:1, tipo:"Representante", dadosDoPedido:sim, emailsPara: [], emailsCc: [], emailsBcc: []},
]

let ano = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
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
    "22",
    //"23",
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

let fornecedor = [
    "3R Plásticos",
    "AEF",
    "BR-Inova",
    "Danfoss",
    "Inovadoor",
    "MBPIsoblock",
    "Metalbras",
    "Rohden",
    "Thermoson",
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

email.sort((index1,index2) => {
    if (index1.função < index2.função) {return -1}
    if (index1.função > index2.função) {return 1}
    if (index1.ordemSubgrupo < index2.ordemSubgrupo) {return -1}
    if (index1.ordemSubgrupo > index2.ordemSubgrupo) {return 1}
    if (index1.subGrupo < index2.subGrupo) {return -1}
    if (index1.subGrupo > index2.subGrupo) {return 1}
    if (index1.ordemTipo < index2.ordemTipo) {return -1}
    if (index1.ordemTipo > index2.ordemTipo) {return 1}
    if (index1.tipo < index2.tipo) {return -1}
    if (index1.tipo > index2.tipo) {return 1}
    return 0
})

cadastro.sort((index1,index2) => {
    if (index1.função < index2.função) {return -1}
    if (index1.função > index2.função) {return 1}
    if (index1.número < index2.número) {return -1}
    if (index1.número > index2.número) {return 1}
    return 0
})

ano.sort((index1,index2) => {
    if (index1 > index2) {return -1}
    if (index1 < index2) {return 1}
    return 0
})

mês.sort((index1,index2) => {
    if (index1.número < index2.número) {return -1}
    if (index1.número > index2.número) {return 1}
    return 0
})

mês.sort((index1,index2) => {
    if (index1.número < index2.número) {return -1}
    if (index1.número > index2.número) {return 1}
    return 0
})

/* Criação de array para comparar com ele mesmo */

let email2 = Array.from(email)
email2.unshift(0)
let funçãoEmail = []

for (let index in email) {if (email[index].função != email2[index].função) {funçãoEmail.push(email[index])}}

let cadastro2 = Array.from(cadastro)
cadastro2.unshift(0)
let funçãoCadastro = []

for (let index in cadastro) {if (cadastro[index].função != cadastro2[index].função) {funçãoCadastro.push(cadastro[index])}}

/* Filtra os Arrays */

let representanteCadastro = cadastro.filter((index)=>index.função == representanteFunção)

let emailCadastro = cadastro.filter((index)=>index)

/* Organização dos arrays filtrados diferente do array original */

emailCadastro.sort((index1,index2) => {
    if (index1.função < index2.função) {return -1}
    if (index1.função > index2.função) {return 1}
    if (index1.nome < index2.nome) {return -1}
    if (index1.nome > index2.nome) {return 1}
    return 0
})

/* Função que oculta a seleção de tipo e os dados do pedido */

function hideTipo() {
    classTipo[0].style.display = displayNone
    classTipo[1].style.display = displayNone
    idFieldsetDadosDoPedido.style.display = displayNone
}

/* Verifica período do dia */

let hora = new Date().getHours()
let período = ""
if (hora < 6 || hora >= 18) {período = "Boa noite"}
if (hora >= 6 && hora < 12) {período = "Bom dia"}
if (hora >= 12 && hora < 18) {período = "Boa tarde"}

/* Tipo de E-mail */

/* - Cria as opções de função */

funçãoEmail.map((index)=>{
    let optionFunção = document.createElement(optionTag)
    let textoFunção = document.createTextNode(index.função)
    optionFunção.appendChild(textoFunção)
    optionFunção.setAttribute(valueAttribute, index.função)
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
        idFieldsetDadosDoPedido.style.display = displayNone
    }
    while (idTipo.hasChildNodes()) {idTipo.removeChild(idTipo.firstChild)}

/* -- Filtra as opções de subgrupos de acordo com a função */
    
    let subGrupo = []
    for (let index in email) {if (email[index].função == idFunção.value && email[index].subGrupo != email2[index].subGrupo) {subGrupo.push(email[index])}}
    
/* -- Cria a opção Selection para a seleção de tipos */

    let selectOptionTipoEmail = email.filter((index)=>index.função == selectOption)
    selectOptionTipoEmail.map((index)=>{
        let optionTipo = document.createElement(optionTag)
        let textoTipo = document.createTextNode(index.tipo)
        optionTipo.appendChild(textoTipo)
        if (index.dadosDoPedido == não) {optionTipo.setAttribute(classAttribute, classSemPedido)}
        idTipo.insertAdjacentElement("beforeend",optionTipo)
    })
    
/* -- Cria os subgrupos */

    subGrupo.map((index)=>{
        let capitalizeIdSubGrupo = `iDSubGrupo${(index.subGrupo.replace(/ /g, "")).charAt(0).toLowerCase() + (index.subGrupo.replace(/ /g, "")).slice(1)}`
        let optionSubGrupo = document.createElement("optgroup")
        optionSubGrupo.setAttribute(labelTag, index.subGrupo)
        optionSubGrupo.setAttribute(idAttribute, capitalizeIdSubGrupo)
        idTipo.insertAdjacentElement("beforeend",optionSubGrupo)
    })

/* -- Cria os tipos de acordo com a função */

    let tipoEmail = email.filter((index)=>index.função == idFunção.value && idFunção.value != selectOption)
    tipoEmail.map((index)=>{
        let capitalizeIdSubGrupo = `iDSubGrupo${(index.subGrupo.replace(/ /g, "")).charAt(0).toLowerCase() + (index.subGrupo.replace(/ /g, "")).slice(1)}`
        let idSubGrupo = document.querySelector(`#${capitalizeIdSubGrupo}`)
        let optionTipo = document.createElement(optionTag)
        let textoTipo = document.createTextNode(index.tipo)
        optionTipo.appendChild(textoTipo)
        if (index.dadosDoPedido == não) {optionTipo.setAttribute(classAttribute, classSemPedido)}
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

/* - Oculta e limpa os dados do pedido caso seja da classe sem pedido ou exibe caso não seja */

    if (idTipo.selectedOptions[0].className == classSemPedido) {
        idFieldsetDadosDoPedido.style.display = displayNone
        idLimpaDadosDePedido.click()
    }
    else {idFieldsetDadosDoPedido.style.display = displayBlock}

/* - Oculta os dados de compra caso seja não seja do tipo compra e exibe caso seja */

    if (email.filter((index)=>index.tipo == idTipo.selectedOptions[0].value).map((index)=>index.subGrupo) != compraSubGrupo) {idFieldsetDadosDeCompra.style.display = displayNone}
    else {idFieldsetDadosDeCompra.style.display = displayBlock}

/* - Limpa as checkbox já selecionadas */

    let classParaEmail = document.querySelectorAll(".classParaEmail")
    for (let index in cadastro) {classParaEmail[index].checked = false}

    let classCcEmail = document.querySelectorAll(".classCcEmail")
    for (let index in cadastro) {classCcEmail[index].checked = false}

    let classBccEmail = document.querySelectorAll(".classBccEmail")
    for (let index in cadastro) {classBccEmail[index].checked = false}

/* - Seleciona as checkbox dos e-mails de acordo com o tipo de pedido */

    for (let index1 in email) {
        if (idTipo.value == email[index1].tipo) {
            for (let index2 in email[index1].emailsPara) {
                let capitalizeIdPara = `idPara${(email[index1].emailsPara[index2].replace(/ /g, "")).charAt(0).toLowerCase() + (email[index1].emailsPara[index2].replace(/ /g, "")).slice(1)}`
                let idCheckboxPara = document.querySelector(`#${capitalizeIdPara}`)
                idCheckboxPara.checked = true
            }
            for (let index2 in email[index1].emailsCc) {
                let capitalizeIdCc = `idCc${(email[index1].emailsCc[index2].replace(/ /g, "")).charAt(0).toLowerCase() + (email[index1].emailsCc[index2].replace(/ /g, "")).slice(1)}`
                let idCheckboxCc = document.querySelector(`#${capitalizeIdCc}`)
                idCheckboxCc.checked = true
            }
            for (let index2 in email[index1].emailsBcc) {
                let capitalizeIdBcc = `idBcc${(email[index1].emailsBcc[index2].replace(/ /g, "")).charAt(0).toLowerCase() + (email[index1].emailsBcc[index2].replace(/ /g, "")).slice(1)}`
                let idCheckboxBcc = document.querySelector(`#${capitalizeIdBcc}`)
                idCheckboxBcc.checked = true
            }
        }
    }

/* - Seleciona as checkbox dos e-mails do tipo executivo de acordo com os responsáveis */

    if (email.filter((index1)=>index1.tipo == idTipo.value).map((index1)=>`${index1.função}`) == executivoFunção) {
        for (let index2 in email) {
            if (idTipo.value == email[index2].tipo) {
                for (let index = 4; index < Object.keys(representanteCadastro[0]).length; index++) {
                    if (cadastro.filter((index3)=>index3.número == idNúmeroRepresentante.value).map((index3)=>Object.values(index3)[index]) != "") {
                        let capitalizeIdParaGerente1 = `idPara${(cadastro.filter((index3)=>index3.número == idNúmeroRepresentante.value).map((index3)=>Object.values(index3)[index]).toString().replace(/ /g, "")).charAt(0).toLowerCase() + (cadastro.filter((index3)=>index3.número == idNúmeroRepresentante.value).map((index3)=>Object.values(index3)[index]).toString().replace(/ /g, "")).slice(1)}`
                        let idCheckboxParaGerente1 = document.querySelector(`#${capitalizeIdParaGerente1}`)
                        idCheckboxParaGerente1.checked = true
                    }
                }
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
    mudaEmailRepresentante()
    changeTipo()
    
}

/* - Cria as opções de ano do pedido */

ano.map((index)=>{
    let optionAno = document.createElement(optionTag)
    let textoOptionAno = document.createTextNode(index)
    optionAno.appendChild(textoOptionAno)
    optionAno.setAttribute(valueAttribute, index)
    idAno.insertAdjacentElement("beforeend",optionAno)
})

/* - Define o ano selecionado padrão */

idAno.value = new Date().getFullYear() - 2000

/* - Cria as opções de mês do pedido */

mês.map((index)=>{
    let optionMês = document.createElement(optionTag)
    let textoOptionMês = document.createTextNode(index.nome)
    optionMês.appendChild(textoOptionMês)
    optionMês.setAttribute(valueAttribute, index.nome)
    idMês.insertAdjacentElement("beforeend",optionMês)
})

/* -- Limpa as informações dos dados do pedido */

function limpaDadosDoPedido() {
    limpaResultado()
    idNúmeroRepresentante.value = representanteCadastro[0].número
    changeNúmeroRepresentante()
}

function limpaDadosPessoais() {limpaResultado()}

/* Dados de Compra */

/* - Cria as opções de fornecedores */

fornecedor.map((index)=>{
    let optionForncedor = document.createElement(optionTag)
    let textooptionForncedor = document.createTextNode(index)
    optionForncedor.appendChild(textooptionForncedor)
    optionForncedor.setAttribute(valueAttribute, index)
    idFornecedor.insertAdjacentElement("beforeend",optionForncedor)
})

/* - Limpa os resultados ao mudar o fornecedor */

function changeFornecedor() {limpaResultado()}

/* E-mails Selecionados */

/* - Cria e-mails para */

for (let index1 in funçãoCadastro) {

/* -- Cria details para as funções para */

    let capitalizeIdFunçãoCadastro = `${(funçãoCadastro[index1].função.replace(/ /g, "")).charAt(0).toLowerCase() + (funçãoCadastro[index1].função.replace(/ /g, "")).slice(1)}`
    let detailsParaEmail = document.createElement(detailsTag)
    detailsParaEmail.setAttribute(idAttribute, `idDetailsPara${capitalizeIdFunçãoCadastro}`)
    idEmailsPara.insertAdjacentElement("beforeend",detailsParaEmail)

/* -- Cria summary para as funções para */

    let idDetailsPara = document.querySelector(`#idDetailsPara${capitalizeIdFunçãoCadastro}`)
    let summaryParaEmail = document.createElement(summaryTag)
    let textoSummaryParaEmail = document.createTextNode(funçãoCadastro[index1].função)
    summaryParaEmail.appendChild(textoSummaryParaEmail)
    summaryParaEmail.setAttribute(idAttribute, `idSummaryPara${capitalizeIdFunçãoCadastro}`)
    idDetailsPara.insertAdjacentElement("beforeend",summaryParaEmail)

/* -- Cria label para selecionar todas as checkbox das funções para */

    let labelEmail = document.createElement(labelTag)
    let textoLabelEmail = document.createTextNode(`${selectAll} ${funçãoCadastro[index1].função}`)
    labelEmail.appendChild(textoLabelEmail)
    labelEmail.setAttribute(idAttribute, `idSelecionarTodosPara${capitalizeIdFunçãoCadastro}`)
    labelEmail.setAttribute(forAttribute, `idSelecionarTodosPara${capitalizeIdFunçãoCadastro}`)
    idDetailsPara.insertAdjacentElement("beforeend",labelEmail)

/* -- Cria espaçamento entre o label (função) e a checkbox seguinte das funções para */

    let brEmail = document.createElement(brTag)
    idDetailsPara.insertAdjacentElement("beforeend",brEmail)

/* -- Cria os inputs das checkbox das funções para */

    let inputEmailCadastro = emailCadastro.filter((index2)=>index2.função == funçãoCadastro[index1].função)
    inputEmailCadastro.map((index2)=>{
        let capitalizeIdPara = `idPara${(index2.nome.replace(/ /g, "")).charAt(0).toLowerCase() + (index2.nome.replace(/ /g, "")).slice(1)}`
        let optionInputEmailCadastro = document.createElement(inputTag)
        let textoOptionInputEmailCadastro = document.createTextNode(index2.nome)
        optionInputEmailCadastro.appendChild(textoOptionInputEmailCadastro)
        optionInputEmailCadastro.setAttribute(typeAttribute, checkboxAttribute)
        optionInputEmailCadastro.setAttribute(idAttribute, capitalizeIdPara)
        optionInputEmailCadastro.setAttribute(classAttribute, `classParaEmailcadastro${capitalizeIdFunçãoCadastro} classParaEmail`)
        optionInputEmailCadastro.setAttribute(valueAttribute, index2.emailComercial)
        idDetailsPara.insertAdjacentElement("beforeend",optionInputEmailCadastro)

/* -- Cria os labels das checkbox das funções para */

        let labelEmailCadastro = document.createElement(labelTag)
        let textoLabelEmailcadastro = document.createTextNode(index2.nome)
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
            for (let index2 in inputEmailCadastro) {
                let classParaEmail = document.querySelectorAll(`.classParaEmailcadastro${capitalizeIdFunçãoCadastro}`)
                classParaEmail[index2].checked = true
                checkedPara = 1
            }
        }
        else {
            for (let index2 in inputEmailCadastro) {
                let classParaEmail = document.querySelectorAll(`.classParaEmailcadastro${capitalizeIdFunçãoCadastro}`)
                classParaEmail[index2].checked = false
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

for (let index1 in funçãoCadastro) {

/* -- Cria details para as funções cc */

    let capitalizeIdFunçãoCadastro = `${(funçãoCadastro[index1].função.replace(/ /g, "")).charAt(0).toLowerCase() + (funçãoCadastro[index1].função.replace(/ /g, "")).slice(1)}`
    let detailsCcEmail = document.createElement(detailsTag)
    detailsCcEmail.setAttribute(idAttribute, `idDetailsCc${capitalizeIdFunçãoCadastro}`)
    idEmailsCc.insertAdjacentElement("beforeend",detailsCcEmail)

/* -- Cria summary para as funções cc */

    let idDetailsCc = document.querySelector(`#idDetailsCc${capitalizeIdFunçãoCadastro}`)
    let summaryCcEmail = document.createElement(summaryTag)
    let summarycctextoemail = document.createTextNode(funçãoCadastro[index1].função)
    summaryCcEmail.appendChild(summarycctextoemail)
    summaryCcEmail.setAttribute(idAttribute, `idSummaryCc${capitalizeIdFunçãoCadastro}`)
    idDetailsCc.insertAdjacentElement("beforeend",summaryCcEmail)

/* -- Cria label para selecionar todas as checkbox das funções cc */

    let labelEmail = document.createElement(labelTag)
    let textoLabelEmail = document.createTextNode(`${selectAll} ${funçãoCadastro[index1].função}`)
    labelEmail.appendChild(textoLabelEmail)
    labelEmail.setAttribute(idAttribute, `idSelecionarTodosCc${capitalizeIdFunçãoCadastro}`)
    labelEmail.setAttribute(forAttribute, `idSelecionarTodosCc${capitalizeIdFunçãoCadastro}`)
    idDetailsCc.insertAdjacentElement("beforeend",labelEmail)

/* -- Cria espaçamento entre o label (função) e a checkbox seguinte das funções cc */

    let brEmail = document.createElement(brTag)
    idDetailsCc.insertAdjacentElement("beforeend",brEmail)

/* -- Cria os inputs das checkbox das funções cc */

    let inputEmailCadastro = emailCadastro.filter((index2)=>index2.função == funçãoCadastro[index1].função)

    inputEmailCadastro.map((index2)=>{
        let capitalizeIdCc = `idCc${(index2.nome.replace(/ /g, "")).charAt(0).toLowerCase() + (index2.nome.replace(/ /g, "")).slice(1)}`
        let optionInputEmailCadastro = document.createElement(inputTag)
        let textoOptionInputEmailCadastro = document.createTextNode(index2.nome)
        optionInputEmailCadastro.appendChild(textoOptionInputEmailCadastro)
        optionInputEmailCadastro.setAttribute(typeAttribute, checkboxAttribute)
        optionInputEmailCadastro.setAttribute(idAttribute, capitalizeIdCc)
        optionInputEmailCadastro.setAttribute(classAttribute, `classCcEmailcadastro${capitalizeIdFunçãoCadastro} classCcEmail`)
        optionInputEmailCadastro.setAttribute(valueAttribute, index2.emailComercial)
        idDetailsCc.insertAdjacentElement("beforeend",optionInputEmailCadastro)

/* -- Cria os labels das checkbox das funções cc */

        let labelEmailCadastro = document.createElement(labelTag)
        let textoLabelEmailcadastro = document.createTextNode(index2.nome)
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
            for (let index2 in inputEmailCadastro) {
                let classCcEmail = document.querySelectorAll(`.classCcEmailcadastro${capitalizeIdFunçãoCadastro}`)
                classCcEmail[index2].checked = true
                checkedCc = 1
            }
        }
        else {
            for (let index2 in inputEmailCadastro) {
                let classCcEmail = document.querySelectorAll(`.classCcEmailcadastro${capitalizeIdFunçãoCadastro}`)
                classCcEmail[index2].checked = false
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

for (let index1 in funçãoCadastro) {

/* -- Cria details bcc as funções bcc */
    
        let capitalizeIdFunçãoCadastro = `${(funçãoCadastro[index1].função.replace(/ /g, "")).charAt(0).toLowerCase() + (funçãoCadastro[index1].função.replace(/ /g, "")).slice(1)}`
        let detailsBccEmail = document.createElement(detailsTag)
        detailsBccEmail.setAttribute(idAttribute, `idDetailsBcc${capitalizeIdFunçãoCadastro}`)
        idEmailsBcc.insertAdjacentElement("beforeend",detailsBccEmail)
    
/* -- Cria summary bcc as funções bcc */
    
        let idDetailsBcc = document.querySelector(`#idDetailsBcc${capitalizeIdFunçãoCadastro}`)
        let summaryBccEmail = document.createElement(summaryTag)
        let textoSummaryBccEmail = document.createTextNode(funçãoCadastro[index1].função)
        summaryBccEmail.appendChild(textoSummaryBccEmail)
        summaryBccEmail.setAttribute(idAttribute, `idSummaryBcc${capitalizeIdFunçãoCadastro}`)
        idDetailsBcc.insertAdjacentElement("beforeend",summaryBccEmail)
    
/* -- Cria label bcc selecionar todas as checkbox das funções bcc */
    
        let labelEmail = document.createElement(labelTag)
        let textoLabelEmail = document.createTextNode(`${selectAll} ${funçãoCadastro[index1].função}`)
        labelEmail.appendChild(textoLabelEmail)
        labelEmail.setAttribute(idAttribute, `idSelecionarTodosBcc${capitalizeIdFunçãoCadastro}`)
        labelEmail.setAttribute(forAttribute, `idSelecionarTodosBcc${capitalizeIdFunçãoCadastro}`)
        idDetailsBcc.insertAdjacentElement("beforeend",labelEmail)
    
/* -- Cria espaçamento entre o label (função) e a checkbox seguinte das funções bcc */
    
        let brEmail = document.createElement(brTag)
        idDetailsBcc.insertAdjacentElement("beforeend",brEmail)
    
/* -- Cria os inputs das checkbox das funções bcc */
    
        let inputEmailCadastro = emailCadastro.filter((index2)=>index2.função == funçãoCadastro[index1].função)
        inputEmailCadastro.map((index2)=>{
            let capitalizeIdBcc = `idBcc${(index2.nome.replace(/ /g, "")).charAt(0).toLowerCase() + (index2.nome.replace(/ /g, "")).slice(1)}`
            let optionInputEmailCadastro = document.createElement(inputTag)
            let textoOptionInputEmailCadastro = document.createTextNode(index2.nome)
            optionInputEmailCadastro.appendChild(textoOptionInputEmailCadastro)
            optionInputEmailCadastro.setAttribute(typeAttribute, checkboxAttribute)
            optionInputEmailCadastro.setAttribute(idAttribute, capitalizeIdBcc)
            optionInputEmailCadastro.setAttribute(classAttribute, `classBccEmailcadastro${capitalizeIdFunçãoCadastro} classBccEmail`)
            optionInputEmailCadastro.setAttribute(valueAttribute, index2.emailComercial)
            idDetailsBcc.insertAdjacentElement("beforeend",optionInputEmailCadastro)
    
/* -- Cria os labels das checkbox das funções bcc */
    
            let labelEmailCadastro = document.createElement(labelTag)
            let textoLabelEmailcadastro = document.createTextNode(index2.nome)
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
                for (let index2 in inputEmailCadastro) {
                    let classBccEmail = document.querySelectorAll(`.classBccEmailcadastro${capitalizeIdFunçãoCadastro}`)
                    classBccEmail[index2].checked = true
                    checkedBcc = 1
                }
            }
            else {
                for (let index2 in inputEmailCadastro) {
                    let classBccEmail = document.querySelectorAll(`.classBccEmailcadastro${capitalizeIdFunçãoCadastro}`)
                    classBccEmail[index2].checked = false
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
    assinatura.setAttribute(widthAttribute, larguraImagem)
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

    idResultadoAssunto.innerHTML = `${verificaNúmeroRepresentante}${verificaTipo}${verificaNomeDoCliente}${verificaNomeFantasia}`.toUpperCase()

/* - Gera corpor do e-mail */

/* -- Variáveis Auxiliares */

    let christianHiperlink = `<a href=${mailTo}${cadastro[cadastro.map((index) => index.nome).indexOf("Christian")].emailComercial}>@Christian Aparecido dos Santos Pereira</a>`
    let marcioHiperlink = `<a href=${mailTo}${cadastro[cadastro.map((index) => index.nome).indexOf("Marcio")].emailComercial}>@Marcio Tosta</a>`
    let roneyHiperlink = `<a href=${mailTo}${cadastro[cadastro.map((index) => index.nome).indexOf("Roney")].emailComercial}>@Roney Florencio da Silva</a>`
    let simoneHiperlink = `<a href=${mailTo}${cadastro[cadastro.map((index) => index.nome).indexOf("Simone")].emailComercial}>@Simone da Luz</a>`
    let comprasHiperlink = `<a href=${mailTo}${cadastro[cadastro.map((index) => index.nome).indexOf("Compras")].emailComercial}>@Compras Eletrofrio</a>`
    let amareloBackground = 'style="background-color: rgb(255, 255, 0)"'
    let informação01
    let informação02
    let informação03
    let informação04
    let informação05
    let informação06
    let informação07
    let informação08
    let informação09
    let informação10
    let imagem01 = document.createElement("img")
    imagem01.setAttribute(widthAttribute, larguraImagem)

/* -- Gera modelos de e-mails de acordo com o tipo */

    switch (`${idFunção.value}${idTipo.value}`) {
        case `${analistaFunção}Liberação`:
            informação01 = `Segue liberação.`
            informação02 = `Observações:`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${informação01}${br2}${informação02}${br4}${agradecimento}${br3}`
            break
        case `${analistaFunção}Liberação Total`:
            informação01 = `Segue liberação total.`
            informação02 = `Observações:`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${informação01}${br2}${informação02}${br4}${agradecimento}${br3}`
            break
        case `${analistaFunção}Liberação Parcial`:
            informação01 = `Segue liberação parcial.`
            informação02 = `Observações:`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${informação01}${br2}${informação02}${br4}${agradecimento}${br3}`
            break
        case `${analistaFunção}Linhas Atualizadas`:
            informação01 = `Linhas atualizadas.`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${informação01}${br4}${agradecimento}${br3}`
            break
        case `${analistaFunção}Feito`:
            informação01 = `Feito.`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${informação01}${br2}${agradecimento}${br3}`
            break
        case `${analistaFunção}Alterações`:
            informação01 = `Novos arquivos salvos na rede.`
            informação02 = `Alterações:`
            informação03 = `01 - Informação do que foi alterado.`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${informação01}${br2}${informação02}${br1}${informação03}${br2}${agradecimento}${br3}`
            break
        case `${ajusteFunção}Dúvidas Gerais`:
            informação01 = `Texto de dúvidas.`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${informação01}${br2}${agradecimento}${br3}`
            break
        case `${ajusteFunção}Aguardando Dúvidas`:
            informação01 = `Seguimos arguardando as dúvidas e correções enviadas nos e-mails anteriores, a demora nas respostas afeta diretamente o prazo de entrega dos materiais.`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${informação01}${br2}${agradecimento}${br3}`
            break
        case `${ajusteFunção}Arquivos para Produção`:
            informação01 = `Analista, o pedido citado no título do e-mail foi ajustado e registrado para produção conforme os arquivos enviados pelo representante.`
            informação02 = `Projetista/Representante`
            informação03 = `- Por gentileza conferir os arquivos de ajuste.`
            informação04 = `- O pedido só será liberado para produção após sua autorização/ok.`
            informação05 = `- Toda e qualquer alteração futura que seja necessária (desde que devidamente autorizada) deve ser feita utilizando este arquivo de layout em anexo.`
            informação06 = `<span ${amareloBackground}><mark>- Informação especial.</mark></span>`
            informação07 = `Lista de Orçamento: 211`
            informação08 = `Lista de Ajuste: 211`
            informação09 = `Os expositores serão cadastrados de acordo com a planilha abaixo:`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${informação01}${br2}${informação02}${br2}${informação03}${br1}${informação04}${br1}${informação05}${br2}${informação06}${br2}${informação07}${br1}${informação08}${br2}${informação09}${br4}${agradecimento}${br3}`
            break
        case `${ajusteFunção}Aguardando Conferência`:
            informação01 = `Seguimos arguardando o OK informando que os arquivos foram conferidos e podem seguir para a produção, a demora nas respostas afeta diretamente o prazo de entrega dos materiais.`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${informação01}${br2}${agradecimento}${br3}`
            break
        case `${ajusteFunção}Arquivos de Alteração`:
            informação01 = `Analista, segue ajuste atualizado de acordo com os novos arquivos enviados pelo representante.`
            informação02 = `Alterações:`
            informação03 = `01 - Informação do que foi alterado.`
            informação04 = `Demais itens permanecem inalterados.`
            informação05 = `Projetista/Representante`
            informação06 = `- Por gentileza conferir os arquivos de ajuste.`
            informação07 = `- O pedido só será liberado para produção após sua autorização/ok.`
            informação08 = `- Toda e qualquer alteração futura que seja necessária (desde que devidamente autorizada) deve ser feita utilizando este arquivo de layout em anexo.`
            informação09 = `<span ${amareloBackground}><mark>- Informação especial.</mark></span>`
            informação10 = `Os expositores serão cadastrados de acordo com a planilha abaixo:`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${informação01}${br2}${informação02}${br1}${informação03}${br2}${informação04}${br2}${informação05}${br1}${informação06}${br1}${informação07}${br1}${informação08}${br2}${informação09}${br2}${informação10}${br4}${agradecimento}${br3}`
            break
        case `${ajusteFunção}Verificar Possibilidade de Alteração`:
            informação01 = `Ainda é possível fazer alterações?`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${roneyHiperlink}${br2}${informação01}${br2}${agradecimento}${br3}`
            break
        case `${executivoFunção}Projetos Antecipados`:
            informação01 = `Segue antecipação de projeto executivo de OOOOOOOOOOOO.`
            informação02 = `Pedimos a gentileza de verificação e aprovação dos projetos em resposta a este e-mail.`
            informação03 = `Os arquivos encontram-se salvos na pasta informada abaixo:`
            informação04 = `engenharia (\\srv23) (Z:)\Instalacao\Clientes 2022`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${informação01}${br2}${informação02}${br4}${informação03}${br2}${informação04}${br2}${agradecimento}${br3}`
            break
        case `${executivoFunção}Projetos Executivos`:
            informação01 = `Segue projeto executivo de OOOOOOOOOOOO.`
            informação02 = `Pedimos a gentileza de verificação e aprovação dos projetos em resposta a este e-mail.`
            informação03 = `Os arquivos encontram-se salvos na pasta informada abaixo:`
            informação04 = `engenharia (\\srv23) (Z:)\Instalacao\Clientes 2022`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${informação01}${br2}${informação02}${br4}${informação03}${br2}${informação04}${br2}${agradecimento}${br3}`
            break
        case `${planilhamentoFunção}Compra de Porta Walk-In`:
            informação01 = `Por gentileza efetuar a compra conforme abaixo.`
            informação02 = `Material já cadastrado na ordem de venda.`
            informação03 = `<span ${amareloBackground}><mark>Puxador acoplado junto a porta;${br1}Acabamento alumínio anodizado sem pintura;${br1}Iluminação em LED;${br1}Incluir logomarca Eletrofrio em todas as portas;${br1}Identificar a Ordem de Compra (OC) nos volumes.</mark></span>`
            informação04 = `Fornecedor - ${idFornecedor.value}.`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${verificaNúmeroRepresentante}${verificaNomeDoCliente}${verificaNomeFantasia}${br1}${OV}${idOrdemDeVenda.value}${br2}${comprasHiperlink}${br2}${informação01}${br1}${informação02}${br4}${informação03}${br2}${informação04}${br2}${agradecimento}${br3}`
            break
        case `${planilhamentoFunção}Compra de Porta Seccional`:
            informação01 = `Por gentileza efetuar a compra conforme abaixo.`
            informação02 = `Material já cadastrado na ordem de venda.`
            informação03 = `<span ${amareloBackground}><mark>N UN - PORTA SECCIONAL LL;${br1}Vão de abertura: N,NN m de largura x N,NN m de altura;${br1}Porta seccional para ser fixada em painel de NN mm e alvenaria de NNN mm (total NNN mm);${br1}Pé direito livre: N,NN m;${br1}Com talha.</mark></span>`
            informação04 = `Fornecedor - ${idFornecedor.value}.`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${verificaNúmeroRepresentante}${verificaNomeDoCliente}${verificaNomeFantasia}${br1}${OV}${idOrdemDeVenda.value}${br2}${comprasHiperlink}${br2}${informação01}${br1}${informação02}${br4}${informação03}${br2}${informação04}${br2}${agradecimento}${br3}`
            break
        case `${planilhamentoFunção}Compra de Portal de Selamento`:
            informação01 = `Por gentileza efetuar a compra conforme abaixo.`
            informação02 = `Material já cadastrado na ordem de venda.`
            informação03 = `<span ${amareloBackground}><mark>N UN - PORTAL DE SELAMENTO;${br1}Vão de abertura: N,NN m de largura x N,NN m de altura;${br1}Porta de selamento para ser fixada em painel de NN mm e alvenaria de NNN mm (total NNN mm);${br1}Pé direito livre: N,NN m.</mark></span>`
            informação04 = `Fornecedor - ${idFornecedor.value}.`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${verificaNúmeroRepresentante}${verificaNomeDoCliente}${verificaNomeFantasia}${br1}${OV}${idOrdemDeVenda.value}${br2}${comprasHiperlink}${br2}${informação01}${br1}${informação02}${br4}${informação03}${br2}${informação04}${br2}${agradecimento}${br3}`
            break  
        case `${planilhamentoFunção}Compra de Porta Beer Cave`:
            informação01 = `Por gentileza efetuar a compra conforme abaixo.`
            informação02 = `Material já cadastrado na ordem de venda.`
            informação03 = `Fornecedor - ${idFornecedor.value}.`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${verificaNúmeroRepresentante}${verificaNomeDoCliente}${verificaNomeFantasia}${br1}${OV}${idOrdemDeVenda.value}${br2}${comprasHiperlink}${br2}${informação01}${br1}${informação02}${br4}${informação03}${br2}${agradecimento}${br3}`
            break
        case `${planilhamentoFunção}Compra de Visor Móvel`:
            informação01 = `Por gentileza efetuar a compra conforme abaixo.`
            informação02 = `Material já cadastrado na ordem de venda.`
            informação03 = `<span ${amareloBackground}><mark>Para montagem em painel de 70 mm;${br1}Materiais: Estrutura em alumínio natural e vidro incolor temperado;${br1}Tipo: Flangeado - móvel.</mark></span>`
            informação04 = `Fornecedor - ${idFornecedor.value}.`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${verificaNúmeroRepresentante}${verificaNomeDoCliente}${verificaNomeFantasia}${br1}${OV}${idOrdemDeVenda.value}${br2}${comprasHiperlink}${br2}${informação01}${br1}${informação02}${br4}${informação03}${br2}${informação04}${br2}${agradecimento}${br3}`
            break
        case `${planilhamentoFunção}Compra de Estrado de Borracha`:
            informação01 = `Por gentileza efetuar a compra conforme abaixo.`
            informação02 = `Material já cadastrado na ordem de venda.`
            informação03 = `Fornecedor - ${idFornecedor.value}.`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${verificaNúmeroRepresentante}${verificaNomeDoCliente}${verificaNomeFantasia}${br1}${OV}${idOrdemDeVenda.value}${br2}${comprasHiperlink}${br2}${informação01}${br1}${informação02}${br4}${informação03}${br2}${agradecimento}${br3}`
            break
        case `${planilhamentoFunção}Compra de Resistência`:
            informação01 = `Por gentileza efetuar a compra conforme abaixo.`
            informação02 = `Material já cadastrado na ordem de venda.`
            informação03 = `Fornecedor - ${idFornecedor.value}.`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${verificaNúmeroRepresentante}${verificaNomeDoCliente}${verificaNomeFantasia}${br1}${OV}${idOrdemDeVenda.value}${br2}${comprasHiperlink}${br2}${informação01}${br1}${informação02}${br4}${informação03}${br2}${agradecimento}${br3}`
            break
        case `${planilhamentoFunção}Compra de Termostato`:
            informação01 = `Por gentileza efetuar a compra conforme abaixo.`
            informação02 = `Material já cadastrado na ordem de venda.`
            informação03 = `Fornecedor - ${idFornecedor.value}.`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${verificaNúmeroRepresentante}${verificaNomeDoCliente}${verificaNomeFantasia}${br1}${OV}${idOrdemDeVenda.value}${br2}${comprasHiperlink}${br2}${informação01}${br1}${informação02}${br4}${informação03}${br2}${agradecimento}${br3}`
            break
        case `${planilhamentoFunção}Dúvidas Gerais`:
            informação01 = `Texto de dúvidas.`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${informação01}${br2}${agradecimento}${br3}`
            break
        case `${planilhamentoFunção}Dúvida de Porta Seccional Livre de Alvenaria`:
            informação01 = `Gostaria de tirar algumas dúvidas a respeito de porta seccional e portal de selamento:`
            informação02 = `1 - Qual o pé direito livre do início do vão da porta até a primeira obstrução do lado externo da porta (medida A)?`
            informação03 = `2 - Qual a altura do patamar entre a parada dos caminhões e a base das portas seccionais (medida B)?`
            imagem01.setAttribute(srcAttribute,"https://lh3.googleusercontent.com/coTn4u0vKBxt0cW_BtDviHia3cj4qlQA8yVoVRbksCscSSUFOHh9RltjQb1u_YqbnEGl2_H7QMpnZQ0795Nb-oSmVr5j-C9HyygvDbMvSoJ_kM7skWOHWxt2LXnTyc8dGT-EFJgkNRo1iZ5FC4MU4hdjL4X12PESlMACVPsz9j7n9oI1cMZdxvuLAL2PGDp3ylcFA5EgZEp2H8l6WJbjUBZqzC63uKR7OUBdjy3XQOpBO6BAyMqaD9nnkgvbg2aZb5Y5Z_EQ4hh3e5wUfsXhM1atOb3HDZtN7Ts8OWDyjxy0G2DCWC0Goo0x8KjSKdfAU79ostfV_h24-Yc0zXX2wxmXZUtbwKN4YXKXipDVgVVnQa4qS5__N22ff5du-2zQfTOgGHOuVx9XZF3_RcoReOLnmWG9TBsLa0To06QTq3c6SR6pZz7C4KJ0jKwp2YS_Xolqpt1LRd7cZeuaLnaNagzqT0lFgTfHC1SRmBVo1rtdsyBJcksZUtVcT-KcibWcTiqD5TPLeP77od9Lh9cnXqGShketOhfRGhAhuZZGTU1Kmo7NBVU2Q-xuD8qkR4Gj36Xr5jhWbAJgVsWV8ttIYWjM9CNGjJ9USJ0Hn_4XoD09kDr7hF_424DEP2PA-fqateVkGerKL_ukFreLXaqIxeFnSjDXK8OrQ9XeUr9KccY5d5iCzdF9MFRk6pzk0UyW_MAoyFe0oDziq1YKEBmpRIjipAlZcMhrDrAUAi4MDH5KJUPQ45insDHvQrhaYEOOXRUkh03QuvPBnGCtyyKzP7TvXFiiQ5-y3uQPEkm0m65u0ANtaPnUdy5PwyFKcxnIPoUeW3vgsXNA4YCmaOq3K6Gajp2uo66X_l1pngN8n9Tyb9sk80RVvazirE66vmdn60jiyL61PXqU-Wp_RYVCrQc6MOnuz5J1wjx1fg52CBK1=w925-h754-no?authuser=0")
            imagem01.setAttribute(altAttribute,"Porta Seccional Livre de Alvenaria")
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${informação01}${br2}${informação02}${br2}${informação03}${br2}`
            idResultadoCorpoDoEmail.appendChild(imagem01)
            idResultadoCorpoDoEmail.innerHTML += `${br2}${agradecimento}${br3}`
            break
        case `${planilhamentoFunção}Dúvida de Porta Seccional Encostada em Alvenaria`:
            informação01 = `Gostaria de tirar algumas dúvidas a respeito de porta seccional e portal de selamento:`
            informação02 = `1 - Qual o pé direito livre do início do vão da porta até a primeira obstrução do lado externo da porta (medida A)?`
            informação03 = `2 - Qual a altura do patamar entre a parada dos caminhões e a base das portas seccionais (medida B)?`
            informação04 = `3 - Em frente aos painéis onde estão as portas seccionais existe uma representação de parede de alvenaria, essa alvenaria vai até o teto correto?`
            informação05 = `4 - Por favor me confirme a espessura da alvenaria da pergunta anterior (medida C)?`
            imagem01.setAttribute(srcAttribute,"https://lh3.googleusercontent.com/mq2prDkhs6HK4N_KWeFI-5AP5eW264RDzJDveNPKPhui37DnXjMRpeBdf8aWHQ3KRMzT0hNpglyqasJBgJdSP5IUUAIaF0nAs8E48ldSBMXTdPZ7d5kLabpYtcckig4zjeofZKXrR2780avX-6R3bposSjvgT_0YNRQklUIVaU5eGfSU-XM6ToOIhnZlecWqKdVIwTJENDow0dzG3RdGPGR4Lsm0xui6UuU_FL_e-OBUm_V5KcuTna-ixtWZPdW7W_xIfSYES9JbV_XL7nCek-6Er1EogSQPrF5uUSSm3vzdl6CoZDvJsMxmeY0z68s3X9s3LbZT-bPmv_Yf8UXLPkjjbMBWgfkrZT1LK8b8osqVVZpD_XJJ8VwGK6FR-GyDmADnbsQIz1zC5WK9U5ZOTc59vWW4Li0t4Mp4meLvv7NOSvDZqTb-1MRCPch2e-t44qiwi7slO50lpwPSLJVz4mHNBOrQEH71AD3QGwKkkpDRjXA2kQjXNzk-ReegWus8CoPmTD-zlTP_Xn81TlpzVKJeRl36ORCzb9yf-DuosJYm4ajUbUZMfbKOUJjbBuHl5XMOiEoaT79ODUHypQSuju3K2R8ncHPeTnVtSiRoV68Cq6Mzu5tw9hHqRXl6lFR5NuMisl9V3UE_zpllK3BfC5ydmBmIf4oSERUw0cJxk-ZU_DjyhJHTFG1mOowaQh6iYVBMumxXZwHBVh3ob8QOIuJ0MAV0ZvL3rKfweGEb2CwaB7Xu63Rng0W8haFy6ytCV4rn6SGRc8wFJXmybII8yo3fJLgV1mEBjjktlKj1uMeC3w5JsH4xWN8gOX9wjdUM4sssfCiv4SCzC7GgpvdfBRsc0rMPC8oIvL5X4PPuHlMmbBjCR9Mlydj9kz_etSbD7eZu2YE4MAlMIzGQsBrWpxNyKJ1jJ9INjaWdU1MOTabF=w843-h666-no?authuser=0")
            imagem01.setAttribute(altAttribute,"Porta Seccional Encostada em Alvenaria")
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${informação01}${br2}${informação02}${br2}${informação03}${br2}${informação04}${br2}${informação05}${br2}`
            idResultadoCorpoDoEmail.appendChild(imagem01)
            idResultadoCorpoDoEmail.innerHTML += `${br2}${agradecimento}${br3}`
            break
        case `${planilhamentoFunção}Aguardando Dúvidas`:
            informação01 = `Seguimos arguardando as dúvidas e correções enviadas nos e-mails anteriores, a demora nas respostas afeta diretamente o prazo de entrega dos materiais.`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${informação01}${br2}${agradecimento}${br3}`
            break
        case `${planilhamentoFunção}Encaminhar`:
            informação01 = `Encaminhando e-mail.`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${informação01}${br2}${agradecimento}${br3}`
            break
        case `${planilhamentoFunção}Planilhamento Total`:
            informação01 = `<span ${amareloBackground}><mark>Informação especial.</mark></span>`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${verificaNúmeroRepresentante}${verificaNomeDoCliente}${verificaNomeFantasia}${br1}${OV}${idOrdemDeVenda.value}${br1}${localização}${idMês.value} / ${idNomeRepresentante.value}${br1}${arquivo}${idArquivo.value}${br2}${informação01}${br2}${agradecimento}${br3}`
            break
        case `${planilhamentoFunção}Planilhamento Parcial`:
            informação01 = `<span ${amareloBackground}><mark>Informação especial.</mark></span>`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${verificaNúmeroRepresentante}${verificaNomeDoCliente}${verificaNomeFantasia}${br1}${OV}${idOrdemDeVenda.value}${br1}${localização}${idMês.value} / ${idNomeRepresentante.value}${br1}${arquivo}${idArquivo.value}${br2}${informação01}${br2}${agradecimento}${br3}`
            break
        case `${planilhamentoFunção}Planilhamento Alteração`:
            informação01 = `<span ${amareloBackground}><mark>Atualizado o alfa de OOOOOOOO.</mark></span>`
            informação02 = `Por favor verificar a necessidade de atualização do projeto executivo.`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${marcioHiperlink} e ${christianHiperlink}${br2}${informação01}${br2}${simoneHiperlink}${br2}${informação02}${br2}${agradecimento}${br3}`
            break
        case `${planilhamentoFunção}Suporte TI - Geral`:
            informação01 = `Texto de dúvidas.`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${informação01}${br2}${agradecimento}${br3}`
            break
        case `${planilhamentoFunção}Suporte TI - Baan - Derrubar Usuário`:
            informação01 = `Por favor derrubar o usuário conectado à ${OV}${idOrdemDeVenda.value}.`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${informação01}${br4}${agradecimento}${br3}`
            break
        case `${planilhamentoFunção}Suporte TI - Baan - Liberação de Tela`:
            informação01 = `Gostaria de solicitar a liberação da seguinte tela: OOOOOOOO.`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${informação01}${br4}${agradecimento}${br3}`
            break
        case `${planilhamentoFunção}Suporte TI - Baan - Geral`:
            informação01 = `Texto de dúvidas.`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${informação01}${br2}${agradecimento}${br3}`
            break
        case `${planilhamentoFunção}Suporte TI - SIP - Geral`:
            informação01 = `Usuário - LLLLLLLL.LLLLLLLL.`
            informação02 = `Texto de dúvidas.`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${informação01}${br2}${informação02}${br2}${agradecimento}${br3}`
            break
        case `${planilhamentoFunção}Suporte TI - SIP - Liberação para Edição de Painéis Altos`:
            informação01 = `Usuário - LLLLLLLL.LLLLLLLL.`
            informação02 = `Gostaria de solicitar a liberação do meu SIP para editar câmaras frigoríficas com alturas maiores que o limite de padrão.`
            idResultadoCorpoDoEmail.innerHTML = `${período},${br2}${informação01}${br2}${informação02}${br2}${agradecimento}${br3}`
            break
        case selectOption:
        informação01 = `<span ${amareloBackground}><mark>(OPÇÃO DE TIPO DE E-MAIL NÃO SELECIONADO)</mark></span>`
        idResultadoCorpoDoEmail.innerHTML = `${informação01}${br3}`
        break
        default:
            informação01 = `<span ${amareloBackground}><mark>(OPÇÃO DE E-MAIL AINDA NÃO CONFIGURADA)</mark></span>`
            idResultadoCorpoDoEmail.innerHTML = `${informação01}${br3}`
            break
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
        hrefMailtoEmail = `${mailTo}${idResultadoPara.innerHTML}${cc}${idResultadoCc.innerHTML}${bcc}${idResultadoBcc.innerHTML}${controlEmail};${subject}${idResultadoAssunto.innerHTML}`.replace(/; /g,";")
        bcc2 = bcc.replace(/&/,"?")
        if (idResultadoCc.innerHTML == "") {hrefMailtoEmail = `${mailTo}${idResultadoPara.innerHTML}${bcc2}${idResultadoBcc.innerHTML}${controlEmail};${subject}${idResultadoAssunto.innerHTML}`.replace(/; /g,";")}
        if (idResultadoBcc.innerHTML == "") {hrefMailtoEmail = `${mailTo}${idResultadoPara.innerHTML}${cc}${idResultadoCc.innerHTML}${bcc}${controlEmail};${subject}${idResultadoAssunto.innerHTML}`.replace(/; /g,";")}
        if (idResultadoCc.innerHTML == "" && idResultadoBcc.innerHTML == "") {hrefMailtoEmail = `${mailTo}${idResultadoPara.innerHTML}${bcc2}${controlEmail};${subject}${idResultadoAssunto.innerHTML}`.replace(/; /g,";")}
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

/* - Muda a cor do Background */

function changeCorBackground() {document.body.style.background = idBackgroundColor.value}

/* - Muda a cor do Texto */

function changeCorTexto() {document.body.style.color = idTextoColor.value}

/* Cria as Opções de Cores padrão */

cores.map((index)=>{
    let optionCores = document.createElement(optionTag)
    let textoOptionCores = document.createTextNode(index.nome)
    optionCores.appendChild(textoOptionCores)
    optionCores.setAttribute(valueAttribute, index.valor)
    idOptionCores.insertAdjacentElement("beforeend",optionCores)
})

/* - Limpa os extras */

function limpaExtras() {
    document.body.style.background = "#FFFFFF"
    document.body.style.color = "#000000"
}

/* - Gera link de dúvidas para o representante */

let hrefDúvidasDesenvolvedor = `mailTo:hcds.rick@gmail.com?subject=Dúvidas do Gerador de E-mails Padrão&body=${período},%0D%0D`
idDúvidasDesenvolvedor.setAttribute(hrefAttribute, hrefDúvidasDesenvolvedor)

/* Eventos do HTML*/

idFunção.addEventListener("change", changeFunção)
idLimpaTipoDeEmail.addEventListener("click", limpaTipoDeEmail)
idTipo.addEventListener("change", changeTipo)
idNúmeroRepresentante.addEventListener("change", changeNúmeroRepresentante)
idPedido.addEventListener("change", limpaResultado)
idAno.addEventListener("change", limpaResultado)
idOrdemDeVenda.addEventListener("change", limpaResultado)
idNomeDoCliente.addEventListener("change", limpaResultado)
idNomeFantasia.addEventListener("change", limpaResultado)
idMês.addEventListener("change", limpaResultado)
idArquivo.addEventListener("change", limpaResultado)
idRevisão.addEventListener("change", limpaResultado)
idLimpaDadosDePedido.addEventListener("click", limpaDadosDoPedido)
idFornecedor.addEventListener("change", changeFornecedor)
idLimpaDadosPessoais.addEventListener("click", limpaDadosPessoais)
idApresentaEmail.addEventListener("click", gerar)
idLimpaResultado.addEventListener("click", limpaResultado)
idBackgroundColor.addEventListener("change", changeCorBackground)
idTextoColor.addEventListener("change", changeCorTexto)
idLimpaExtras.addEventListener("click", limpaExtras)

/* Mostra o que está na área de transferência */

let idExibeÁreaDeTransferência = document.querySelector("#idExibeÁreaDeTransferência")
async function mostraÁreaDeTransferência() {
    let clipboardItems = await navigator.clipboard.read()
    for (const clipboardItem of clipboardItems) {
        for (const type of clipboardItem.types) {
            const blob = await clipboardItem.getType(type)
            let reader = new FileReader()
            reader.onload = () => {console.log(reader.result)}
            reader.readAsText(blob)
        }
    }
}
idExibeÁreaDeTransferência.addEventListener("click", mostraÁreaDeTransferência)

/* FIM */




