function loadpage(recipe){
	$("#title").text(recipe.title);
	$("#image").attr("src", recipe.image);
	for (var i = 0; i < recipe.ingredients.length; i++) {
		$("#ingredients_list").append("<li>" + recipe.ingredients[i] + "</li>");
	}
	for (var i = 0; i < recipe.directions.length; i++) {
		$("#directions_list").append("<li>" + recipe.directions[i] + "</li>");
	}
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}



