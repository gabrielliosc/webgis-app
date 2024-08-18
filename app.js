require([
    "esri/Map",
    "esri/layers/GeoJSONLayer",
    "esri/views/MapView",
    "esri/widgets/Legend",
    "esri/widgets/Home"
], 

(Map, GeoJSONLayer, MapView, Legend, Home) => {

    let crasLayerView
/*
--------------------------------------------------------------------------------------
    Configuração do webmap com a camada de CRAS e um mapa básico cinza
--------------------------------------------------------------------------------------
*/
    const layer = new GeoJSONLayer({ //Configuração da camada de CRAS a partir do GEOJSON
        url: "./data/query.geojson",
        title: "CRAS",
        renderer: {
            type: "simple",
            symbol: {
                type: "picture-marker",
                url: "https://static.arcgis.com/images/Symbols/Government/Museum.png",
                width: "15px",
                height: "15px"
            }
        },
        popupTemplate: {
            title: "{cras}",
            content: "<div id='popup'> Município: {municipio} <br> Endereço: {endereco} <br> Telefone: {telefone} <br> Capacidade: {capacidade} <br> {situacao}</div>"
        }
    })

    const map = new Map({
        layers: [layer],
        basemap: "gray-vector"
    })

    const view = new MapView({
        container: "viewDiv",
        center: [
            -43.35,-22.70
        ],
        zoom: 8,
        map
    })

    view.ui.add(
        new Home({
            view: view
        }),
        "top-left"
    )

    view.whenLayerView(layer).then((layerView) => {
        crasLayerView = layerView
    })

    const legend = new Legend({
        view: view,
        container: "legendDiv"
    })

    // Adiciona as funções de filtro e reset de filtro aos respectivos botões
    const buttonFilter = document.getElementById("filterButton")
    buttonFilter.addEventListener("click", filterByMunicipio)

    const buttonReset = document.getElementById("resetButton")
    buttonReset.addEventListener("click", resetFilter)

    function filterByMunicipio() {
        /*
        --------------------------------------------------------------------------------
            Função para filtrar os CRAS por município
        --------------------------------------------------------------------------------
        */
        buttonFilter.classList.add("hidden")
        buttonReset.classList.remove("hidden")
        
        const preposicaoList = ["de", "do", "da", "dos", "das", "e", "a", "o", "as", "os", "em"]
        
        const filterInput = document.getElementById("filterInput")
        const filterInputValue = filterInput.value

        const transformInputValue = 
            filterInputValue.split(" ")
                            .map(word => 
                                preposicaoList.includes(word.toLowerCase())? 
                                word.toLowerCase(): 
                                word[0].toUpperCase() + word.slice(1).toLowerCase()
                            )
    
        const selectedMunicipio = transformInputValue.join(" ")
        
        crasLayerView.filter = {
            where: "municipio = '" + selectedMunicipio + "'"
        }
    }

    function resetFilter() {
        /*
        --------------------------------------------------------------------------------
            Função para resetar o filtro de município
        --------------------------------------------------------------------------------
        */
        buttonFilter.classList.remove("hidden")
        buttonReset.classList.add("hidden")

        crasLayerView.filter = null

        const filterInput = document.getElementById("filterInput")
        filterInput.value = ""
    }
});

