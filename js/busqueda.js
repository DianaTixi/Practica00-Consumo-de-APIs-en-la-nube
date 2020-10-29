//Variables para la paginacion
var state = {
    'querySet': null,
    'page': 1,
    'rows': 3,
    'window': 3,
}
var node = "";

function obtnerdatos() {
    document.getElementById('tabla').style.display = 'block';

    var nombre = document.getElementById("nombre").value;
    var url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + nombre;

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        var apii = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    apii = new XMLHttpRequest();
    apii.onreadystatechange = function() {
        if (this.status == 200 && this.readyState == 4) {
            let datos = JSON.parse(this.responseText);
            state.querySet = datos.drinks;
            buildTable();
        }
    };
    apii.open('GET', url, true);
    apii.send();
    return false;
}


function pagination(querySet, page, rows) {

    var trimStart = (page - 1) * rows
    var trimEnd = trimStart + rows
        //console.log(querySet.length);
    var trimmedData = querySet.slice(trimStart, trimEnd)

    var pages = Math.round(querySet.length / rows);

    return {
        'querySet': trimmedData,
        'pages': pages,
    }
}

function pageButtons(pages) {
    var wrapper = document.getElementById('pagination-wrapper')

    wrapper.innerHTML = ``
        //console.log('Pages:', pages)

    var maxLeft = (state.page - Math.floor(state.window / 2))
    var maxRight = (state.page + Math.floor(state.window / 2))

    if (maxLeft < 1) {
        maxLeft = 1
        maxRight = state.window
    }

    if (maxRight > pages) {
        maxLeft = pages - (state.window - 1)

        if (maxLeft < 1) {
            maxLeft = 1
        }
        maxRight = pages
    }
    for (var page = maxLeft; page <= maxRight; page++) {
        wrapper.innerHTML += `<button value=${page} class="page btn btn-sm btn-info">${page}</button>`
    }

    if (state.page != 1) {
        wrapper.innerHTML = `<button value=${1} class="page btn btn-sm btn-info">&#171; First</button>` + wrapper.innerHTML
    }

    if (state.page != pages) {
        wrapper.innerHTML += `<button value=${pages} class="page btn btn-sm btn-info">Last &#187;</button>`
    }

    $('.page').on('click', function() {
        $('#resul').empty()

        state.page = Number($(this).val())

        buildTable()
    })

}

function buildTable() {
    var table = $("#resul")
    var dataa = pagination(state.querySet, state.page, state.rows)
    var myList = dataa.querySet
    for (var i = 0 in myList) {
        console.log(myList)
        var row = `<tr>
                  <td>${myList[i].idDrink}</td>
                  <td>${myList[i].strAlcoholic}</td>
                  <td>${myList[i].strCategory}</td>
                  <td>${myList[i].strDrink}</td>
                  <td>${myList[i].strIngredient1}</td>
                  <td>${myList[i].strIngredient2}</td>
                  <td>${myList[i].strIngredient3}</td>
                  <td><img src='${myList[i].strDrinkThumb}' style= width:150px; height:150px;></td>`
        table.append(row)
    }

    pageButtons(dataa.pages)
}
/*function obtnerdatos() {
    var nombre = document.getElementById("nombre").value;
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + nombre;
    const apii = new XMLHttpRequest();
    apii.open('GET', url, true);
    apii.send();

    apii.onreadystatechange = function() {

        if (this.status == 200 && this.readyState == 4) {

            let datos = JSON.parse(this.responseText);
            console.log(datos.drinks);
            let resultado = document.querySelector('#resultado');
            resultado.innerHTML = '';
            resultado.innerHTML += "<th style='color:#5D6D7E'>Codigo</th>" +
                "<th style='color:#5D6D7E'>Bebida </th>" +
                "<th style='color:#5D6D7E'>Categoria</th>" +
                "<th style='color:#5D6D7E'>Nombre</th>" +
                "<th style='color:#5D6D7E'>Ingrediente1</th>" +
                "<th style='color:#5D6D7E'>Ingrediente2</th>" +
                "<th style='color:#5D6D7E'>Ingrediente3</th>" +
                "<th style='color:#5D6D7E'>Imagen </th>";
            for (var i of datos.drinks) {
                console.log(i.idDrink);

                resultado.innerHTML +=
                    "<th>" + i.idDrink + "</th>" + "<th>" + i.strAlcoholic + "</th>" +
                    "<th>" + i.strCategory + "</th>" + "<th>" + i.strDrink + "</th>" +
                    "<th>" + i.strIngredient1 + "</th>" + "<th>" + i.strIngredient2 + "</th>" +
                    "<th>" + i.strIngredient3 + "</th>" + "<th>" + "<img src='" + i.strDrinkThumb + "'" + "style= width:160px; height:150px;" + "/>" + "</th>";

            }
        }
    }
}*/