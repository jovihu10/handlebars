$(function (){

var theTemplateScript = $("#example-template").html();

var theTemplate = Handlebars.compile(theTemplateScript);
var context = "youtube.json";
console.log(url)

var theCompiledHtml = theTemplate(context);

$(document.body).append(theCompiledHtml)

})



