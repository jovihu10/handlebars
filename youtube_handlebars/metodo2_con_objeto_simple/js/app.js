console.log("receiving")

var cast = {
    "characters": [
            "Jon Snow",
            "Tyrion Lannister",
            "Brienne of Tarth",
            "Eddard Stark",
            "Sandor Clegane"
            

    ]
}

 

$(document).ready(function() {
    var characterTemplate = $("#character-template").html()
    var compiledCharacterTemplate = Handlebars.compile(characterTemplate)
    
    $(".character-list-container").html(compiledCharacterTemplate(cast))
});