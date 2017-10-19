console.log("receiving")

var cast = {
    "characters": [{
            "name": "Jon Snow",
            "shortCode": "jon-snow",
            "actor": "Kit Harrington",
            "house": "Stark",
            "location": "The Wall"
        },
        {
        	"name": "Tyrion Lannister",
            "shortCode": "tyrion",
            "actor": "Peter Dinklage",
            "house": "Lannister",
            "location": "The Wall"

        },
        {
        	"name": "Brienne of Tarth",
            "shortCode": "brienne",
            "actor": "Gwendoline Christie",
            "house": "Clegane",
            "location": "unknown"

        },
        {
        	"name": "Eddard Stark",
            "shortCode": "ned-stark",
            "actor": "Sean Bean",
            "house": "Stark",
            "location": "Winterfell"
        },
        {
        	"name": "Sandor Clegane",
            "shortCode": "the-hound",
            "actor": "Rory McCann",
            "house": "Cleganne",
            "location": "unknown"
        }

    ]
}

 

$(document).ready(function() {
    var characterTemplate = $("#character-template").html()
    var compiledCharacterTemplate = Handlebars.compile(characterTemplate)
    /*console.log(compiledCharacterTemplate({
            "name": "Jon Snow",
            "shortCode": "jon-snow",
            "actor": "Kit Harrington",
            "house": "Stark",
            "location": "The Wall"
        }));
        */
    $(".character-list-container").html(compiledCharacterTemplate({shortCode: "brienne"}))
    //Esto ultimo es lo mismo que hacer:
    //$(".character-list-container").html(compiledCharacterTemplate(cast.characters[2]))
});