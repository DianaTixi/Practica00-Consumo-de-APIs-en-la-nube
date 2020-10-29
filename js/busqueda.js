function obtnerdatos() {
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
}