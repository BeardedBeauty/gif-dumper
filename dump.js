window.onload = function () {
    $(".put").on("click", start);
    buttons()
    return
};

var gifSelect = ["adventure time", "guinea pigs", "area 51", "cheese"]

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
                var gifDiv = $("<div class = 'gembox'>");
                var p = $("<p class = 'gems'>").text("Rating: " + results[i].rating);
                var exact = $("<img class = 'gems' data-state='still'>");
                exact.attr("src", results[i].images.fixed_height_still.url);
                exact.attr({ 'data-animate': results[i].images.fixed_height.url });
                exact.attr({ 'data-state': "still" });
                exact.attr({ 'data-still': results[i].images.fixed_height_still.url });
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

$(document).on("click", ".gems", function() {
    console.log("if it dont play it's just loading i promise")
    var state = $(this).attr("data-state");
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
});