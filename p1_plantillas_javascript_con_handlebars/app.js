$(function() {
        var stemplate = $("#template").html();
        var tmpl = Handlebars.compile(stemplate);
        var xhr = $.ajax({
            url: '/api/Beers'
        });

        xhr.done(function(data) {
            var ctx = {};
            ctx.Beers = data;
            var html = tmpl(ctx);
            $("#content").append(html);
            $("#content").show();
        });
    });