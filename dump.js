window.onload = function () {
    $(".put").on("click", start);
    buttons()
    return
};

var gifSelect = ["adventure time", "guinea pigs", "area 51", "tesla"]

$(document).on("click", ".pull", function () {
    var getin = $(this).attr("data-title");
    var QURL = "https://api.giphy.com/v1/gifs/search?q=" +
        getin + "&api_key=2seXEbjGc8qFULT62HakfQYCv9rlLO2Y&limit=10";

    $.ajax({
        url: QURL,
        method: "GET"
    })
        .then(function (response) {
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div class = ''>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var exact = $("<img>");
                exact.attr("src", results[i].images.fixed_height.url);
                gifDiv.prepend(p);
                gifDiv.prepend(exact);
                $(".ben").after(gifDiv);
            }
        });
});

function buttons() {
    $("#buttons").empty();
    for (q = 0; q < gifSelect.length; q++) {
        var w = $("<a href='#'>");
        w.addClass("submit pull");
        w.attr("data-title", gifSelect[q]);
        w.text(gifSelect[q]);
        $("#buttons").append(w);
    }
}

function start() {
    var gif = $("#search").val().trim();
    gifSelect.push(gif)
    buttons();
};
