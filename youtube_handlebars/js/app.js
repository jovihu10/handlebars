console.log("receiving")

 

$(document).ready(function() {
    var itemsTemplate = $("#items-template").html()
    var compiledItemsTemplate = Handlebars.compile(itemsTemplate)
    

    $.ajax("./data/datayoutube.json").done(function(datayoutube){
        console.log(datayoutube)
        $(".items-list-container").html(compiledItemsTemplate(datayoutube))
    });
    
});