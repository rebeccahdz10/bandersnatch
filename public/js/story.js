$(function () {
    // === AUTO LOAD === //
    $.get("/api/mainDialogue", function (datamain) {

        loadMainDialogue(datamain[0])

        $(".option").on("click", function () {
            loadMainDialogue(datamain[1])
            $(".option").on("click", function () {
                if (this.value === "1") {
                    startAdventureOne()
                } else {
                    startAdventureTwo()
                }
            })
        })

    })


    // === BEGIN ADVENTURE ONE === //
    function startAdventureOne() {
        $.get("/api/adventureOne", function (dataOne) {
            console.log(dataOne)
            // === How you livin === //
            loadAdventureOne(dataOne[0])
            $(".option").on("click", function () {
                $("#questionBox").empty()
                $("#answerBox").html("<input class='inputLines' placeholder='type here'>")
                $("#okBox").html("<button class='btn waves-effect waves-light' id='k'>Enter</button>")
                if (this.value === "1") {
                    // === Whats new === //
                    $("#storyBox").html(dataOne[1].story)
                } else {
                    // === Why === //
                    $("#storyBox").html(dataOne[2].story)
                }
                $("#k").on("click", function () {
                    // === Go to bar, beer or shot === //
                    loadAdventureOne(dataOne[3])
                    $(".option").on("click", function () {
                        $("#storyBox").empty()
                        $("#okBox").empty()
                        // === if beer === //
                        if (this.value === "1") {
                            // === What type of beer === //
                            $("#questionBox").html(dataOne[4].question)
                            $("#answerBox").html("<button class='option btn waves-effect waves-light' value='1'>" + dataOne[4].option1 + "</button>" + "<hr width='30%'>" + "<button class='option btn waves-effect waves-light' value='2'>" + dataOne[4].option2 + "</button>")
                            $(".option").on("click", function () {
                                // === if pbr === //
                                if (this.value === "1") {
                                    // === meet bathroom wizard === //
                                    loadAdventureOne(dataOne[5])
                                    $(".option").on("click", function () {
                                        // === if take beans === //
                                        if (this.value === "1") {
                                            //loadAdventureOne(dataOne[5])
                                            // === if not === //
                                        } else {

                                        }
                                    })
                                    // === if ipa === //
                                } else {
                                    $("#questionBox").empty()
                                    $("#answerBox").empty()
                                    $("#storyBox").html(dataOne[17].story)
                                    // ===================================================================================== //
                                    $("#okBox").html("<button class='btn waves-effect waves-light' id='goodDayOk'>Ok</button>")
                                }
                            })
                            // === if shot === //
                        } else {
                            loadAdventureOne(dataOne[8])
                            $(".option").on("click", function () {
                                // === if vodka === //
                                if (this.value === "1") {
                                    //loadAdventureOne(dataOne[5])
                                    // === if tequila === //
                                } else {

                                }
                            })
                        }
                    })
                })
            })
        })
    }


    // === BEGIN ADVENTURE TWO - STARTS WITH INPUTS=== //
    function startAdventureTwo() {
        $.get("/api/adventureTwo", function (dataTwo) {
            $("#storyBox").empty()
            $("#questionBox").html(dataTwo[0].question)
            $("#answerBox").html("<input class='inputLines' placeholder='type here'>")
            $("#okBox").html("<button class='btn waves-effect waves-light' id='k'>Enter</button>")

            // === OKAY BUTTON === //
            $("#k").on("click", function () {
                loadAdventureTwo(dataTwo[0])
            })
        })
    }


    // === RENDERS MAIN DIOLOGUE - LINKED TO AUTO LOAD=== //
    function loadMainDialogue(datamain) {
        $("#okBox").empty()
        $("#questionBox").html(datamain.question)
        $("#answerBox").html("<button class='option btn waves-effect waves-light' value='1'>" + datamain.option1 + "</button>" + "<hr width='30%'>" + "<button class='option btn waves-effect waves-light' value='2'>" + datamain.option2 + "</button>")
    }

    // === RENDER ADVENTURE ONE QUESTIONS === //
    function loadAdventureOne(dataOne) {
        $("#okBox").empty()
        $("#storyBox").html(dataOne.story)
        $("#questionBox").html(dataOne.question)
        $("#answerBox").html("<button class='option btn waves-effect waves-light' value='1'>" + dataOne.option1 + "</button>" + "<hr width='30%'>" + "<button class='option btn waves-effect waves-light' value='2'>" + dataOne.option2 + "</button>")
    }

    // === RENDER ADVENTURE TWO QUESTIONS === //
    function loadAdventureTwo(dataTwo) {
        $("#okBox").empty()
        $("#storyBox").html(dataTwo.story)
        $("#questionBox").html(dataTwo.question)
        $("#answerBox").html("<button class='option btn waves-effect waves-light' value='1'>" + dataTwo.option1 + "</button>" + "<hr width='30%'>" + "<button class='option btn waves-effect waves-light' value='2'>" + dataTwo.option2 + "</button>")
    }
})