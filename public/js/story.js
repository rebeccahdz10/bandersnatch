$(function () {
    $("#startButton").on("click", function () {
        $.get("/api/questions", function (data) {
            console.log(" = = = = = > > > >", data)
        })
    })
});