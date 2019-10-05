$(function () {
    var recents = []
    $.get("/api/recentEnding", function (datarecents) {
        for (var i = 0; i < datarecents.length; i++) {
            $(".recentList").append("<li class='recentListItem'>Outcome: " + JSON.stringify(datarecents[i].ending) + " ----- Player: " + JSON.stringify(datarecents[i].name) + "  <a class='btn-floating btn-small waves-effect waves-light red'><i class='material-icons'>delete</i></a>" + "</li>")
        }
    })
})