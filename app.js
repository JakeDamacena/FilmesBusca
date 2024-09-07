function pesquisar(){
    //obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //se campo pesquisa dor uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o título de um filme.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    //inicializa uma string vazia para armazenar os resultados 
    let resultados = "";
    let titulo = "";
    let sinopse = "";
    let tags = "";
    
    //itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        sinopse = dado.sinopse.toLowerCase ()
        tags = dado.tags.toLowerCase ()
        //se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || sinopse.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            //cria um novo elemento
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.sinopse}</p>
                    <p class="descricao-meta">${dado.ano} ${dado.estudio}</p>
                    <a href=${dado.trailer} target="_blank">Veja o Trailer aqui</a>
                </div> 
            `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

        //atribui os resultados gerados à seção HTML
        section.innerHTML = resultados;
        
}
