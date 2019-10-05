$(function () {
    // === AUTO LOAD === //
    start()
    function start() {
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
    }
    var endings = []
    getEndings()
    function getEndings() {
        $.get("/api/endings", function (dataend) {
            endings = dataend
            console.log(endings)
        })
    }


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
                                            // === Eat? === //
                                            loadAdventureOne(dataOne[6])
                                            $(".option").on("click", function () {
                                                // === If eat === //
                                                if (this.value === "1") {
                                                    // === Go back to friend === //
                                                    loadAdventureOne(dataOne[19])
                                                    $(".option").on("click", function () {
                                                        // === Buy round === //
                                                        loadAdventureOne(dataOne[20])
                                                        // === Head home? === //
                                                        $(".option").on("click", function () {
                                                            $("#storyBox").empty()
                                                            $("#okBox").empty()
                                                            $("#questionBox").html(dataOne[13].question)
                                                            $("#answerBox").html("<button class='option btn waves-effect waves-light' value='1'>" + dataOne[13].option1 + "</button>" + "<hr width='30%'>" + "<button class='option btn waves-effect waves-light' value='2'>" + dataOne[13].option2 + "</button>")
                                                            $(".option").on("click", function () {
                                                                // === if head home === //
                                                                if (this.value === "1") {
                                                                    // === car accident === //
                                                                    loadAdventureOne(dataOne[14])
                                                                    // =============================================FINAL============================================//
                                                                    $(".option").on("click", function () {
                                                                        // === run === //
                                                                        if (this.value === "1") {
                                                                            $("#questionBox").empty()
                                                                            $("#answerBox").empty()
                                                                            $("#storyBox").html(dataOne[26].story)
                                                                            // ===================================================================================== //
                                                                            $("#okBox").html("<a href='/death'><button class='btn waves-effect waves-light' id='deathOk'>Ok</button></a>")
                                                                            // === wait === //
                                                                        } else {
                                                                            $("#questionBox").empty()
                                                                            $("#answerBox").empty()
                                                                            $("#storyBox").html(dataOne[25].story)
                                                                            // ===================================================================================== //
                                                                            $("#okBox").html("<a href='/prison'><button class='btn waves-effect waves-light' id='prisonOk'>Ok</button></a>")
                                                                        }
                                                                    })
                                                                    // === if not === //
                                                                } else {
                                                                    // === uber or drive === //
                                                                    loadAdventureOne(dataOne[22])
                                                                    $(".option").on("click", function () {
                                                                        // === uber === //
                                                                        if (this.value === "1") {
                                                                            $("#questionBox").empty()
                                                                            $("#answerBox").empty()
                                                                            $("#storyBox").html(dataOne[23].story)
                                                                            // ===================================================================================== //
                                                                            $("#okBox").html("<a href='/goodDay'><button class='btn waves-effect waves-light' id='goodDayOk'>Ok</button></a>")
                                                                            // === drive === //
                                                                        } else {
                                                                            $("#questionBox").empty()
                                                                            $("#answerBox").empty()
                                                                            $("#storyBox").html(dataOne[24].story)
                                                                            // ===================================================================================== //
                                                                            $("#okBox").html("<a href='/goodDay'><button class='btn waves-effect waves-light' id='goodDayOk'>Ok</button></a>")
                                                                        }
                                                                    })
                                                                }
                                                            })
                                                        })
                                                    })
                                                    // === if dont eat === //
                                                } else {
                                                    // === go back to friend === //
                                                    loadAdventureOne(dataOne[21])
                                                    $(".option").on("click", function () {
                                                        // === buy round? === //
                                                        loadAdventureOne(dataOne[20])
                                                        $(".option").on("click", function () {
                                                            // === go home? === //
                                                            $("#storyBox").empty()
                                                            $("#okBox").empty()
                                                            $("#questionBox").html(dataOne[13].question)
                                                            $("#answerBox").html("<button class='option btn waves-effect waves-light' value='1'>" + dataOne[13].option1 + "</button>" + "<hr width='30%'>" + "<button class='option btn waves-effect waves-light' value='2'>" + dataOne[13].option2 + "</button>")
                                                            $(".option").on("click", function () {
                                                                // === if head home === //
                                                                if (this.value === "1") {
                                                                    // === car accident === //
                                                                    loadAdventureOne(dataOne[14])
                                                                    // =============================================FINAL============================================//
                                                                    $(".option").on("click", function () {
                                                                        // === run === //
                                                                        if (this.value === "1") {
                                                                            $("#questionBox").empty()
                                                                            $("#answerBox").empty()
                                                                            $("#storyBox").html(dataOne[26].story)
                                                                            // ===================================================================================== //
                                                                            $("#okBox").html("<a href='/death'><button class='btn waves-effect waves-light' id='deathOk'>Ok</button></a>")
                                                                            // === wait === //
                                                                        } else {
                                                                            $("#questionBox").empty()
                                                                            $("#answerBox").empty()
                                                                            $("#storyBox").html(dataOne[25].story)
                                                                            // ===================================================================================== //
                                                                            $("#okBox").html("<a href='/prison'><button class='btn waves-effect waves-light' id='prisonOk'>Ok</button></a>")
                                                                        }
                                                                    })
                                                                    // === if not === //
                                                                } else {
                                                                    // === uber or drive === //
                                                                    loadAdventureOne(dataOne[22])
                                                                    $(".option").on("click", function () {
                                                                        // === uber === //
                                                                        if (this.value === "1") {
                                                                            $("#questionBox").empty()
                                                                            $("#answerBox").empty()
                                                                            $("#storyBox").html(dataOne[23].story)
                                                                            // ===================================================================================== //
                                                                            $("#okBox").html("<a href='/goodDay'><button class='btn waves-effect waves-light' id='goodDayOk'>Ok</button></a>")
                                                                            // === drive === //
                                                                        } else {
                                                                            $("#questionBox").empty()
                                                                            $("#answerBox").empty()
                                                                            $("#storyBox").html(dataOne[24].story)
                                                                            // ===================================================================================== //
                                                                            $("#okBox").html("<a href='/goodDay'><button class='btn waves-effect waves-light' id='goodDayOk'>Ok</button></a>")
                                                                        }
                                                                    })
                                                                }
                                                            })
                                                        })
                                                    })
                                                }
                                            })
                                            // === if not === //
                                        } else {
                                            // === wizard send you to prison === //
                                            $("#questionBox").empty()
                                            $("#answerBox").empty()
                                            $("#storyBox").html(dataOne[18].story)
                                            // ===================================================================================== //
                                            $("#okBox").html("<a href='/prison'><button class='btn waves-effect waves-light' id='prisonOk'>Ok</button></a>")
                                        }
                                    })
                                    // === if ipa === //
                                } else {
                                    $("#questionBox").empty()
                                    $("#answerBox").empty()
                                    $("#storyBox").html(dataOne[17].story)
                                    // ===================================================================================== //
                                    $("#okBox").html("<a href='/goodDay'><button class='btn waves-effect waves-light' id='goodDayOk'>Ok</button></a>")
                                }
                            })
                            // === if shot === //
                        } else {
                            // === what kind === //
                            loadAdventureOne(dataOne[8])
                            $(".option").on("click", function () {
                                // === if vodka === //
                                if (this.value === "1") {
                                    // === Guy bumps you === //
                                    loadAdventureOne(dataOne[9])
                                    $(".option").on("click", function () {
                                        // === If fight === //
                                        if (this.value === "1") {
                                            $("#questionBox").empty()
                                            $("#answerBox").empty()
                                            $("#storyBox").html(dataOne[28].story)
                                            // ===================================================================================== //
                                            $("#okBox").html("<button class='btn waves-effect waves-light' id='deathOk'>Ok</button>")
                                            // ====================== EPIC FIGHT SCENE===================== //

                                            // var intervalId;
                                            // var clockRunning = false;
                                            // var hits = 0
                                            // var timer = 0
                                            // function start() {

                                            //     // DONE: Use setInterval to start the count here and set the clock to running.
                                            //     if (!clockRunning) {
                                            //       intervalId = setInterval(count, 1000);
                                            //       clockRunning = true;
                                            //     }
                                            //   }
                                            // function count(){
                                            //     timer++
                                            //     if (timer === 6) {

                                            //     }
                                            // }


                                            // $("#storyBox").html("HIT THE BUTTON REPEATEDLY TO FIGHT")
                                            // $("#questionBox").empty()
                                            // $("#answerBox").html("Hits: " + hits)
                                            // $("#okBox").html("<button class='btn-warning waves-effect waves-light' id='fightButton'>PUNCH</button>")

                                            // === if no fight === //
                                        } else {

                                            $("#questionBox").empty()
                                            $("#answerBox").empty()
                                            $("#storyBox").html(dataOne[27].story)
                                            // ===================================================================================== //
                                            $("#okBox").html("<a href='/death'><button class='btn waves-effect waves-light' id='deathOk'>Ok</button></a>")
                                        }
                                    })
                                    // === if tequila === //
                                } else {
                                    // === dance? === //
                                    loadAdventureOne(dataOne[12])
                                    $(".option").on("click", function () {
                                        if (this.value === "1") {
                                            // === shot === ///
                                            loadAdventureOne(dataOne[15])
                                            $(".option").on("click", function () {
                                                if (this.value === "1") {
                                                    // === another shot? === //
                                                    loadAdventureOne(dataOne[16])
                                                    $(".option").on("click", function () {
                                                        if (this.value === "1") {
                                                            // === go home? ===///
                                                            loadAdventureOne(dataOne[7])
                                                            // ========================================================================================================================//
                                                            $(".option").on("click", function () {
                                                                if (this.value === "1") {
                                                                    loadEndings(endings[12])
                                                                    $("#answerBox").html("<a href='/simulation'><button class='btn waves-effect waves-light' id='simulationOk'>Ok</button></a>")
                                                                } else {
                                                                    loadEndings(endings[2])
                                                                    $("#answerBox").html("<a href='/blackout'><button class='btn waves-effect waves-light' id='blackoutOk'>Ok</button></a>")
                                                                }
                                                            })
                                                            // === no second shot === //
                                                        } else {
                                                            loadEndings(endings[20])
                                                            $("#answerBox").html("<a href='/goodDay'><button class='btn waves-effect waves-light' id='goodDayOk'>Ok</button></a>")
                                                        }
                                                    })
                                                    // === no shot === //
                                                } else {
                                                    loadEndings(endings[21])
                                                    $("#answerBox").html("<a href='/goodDay'><button class='btn waves-effect waves-light' id='goodDayOk'>Ok</button></a>")
                                                }
                                            })
                                            // === dont dance === //
                                        } else {
                                            loadEndings(endings[14])
                                            $("#answerBox").html("<a href='/goodDay'><button class='btn waves-effect waves-light' id='goodDayOk'>Ok</button></a>")
                                        }
                                    })
                                }
                            })
                        }
                    })
                })
            })
        })
    }


    // loadAdventureOne(dataOne[12])
    // $(".option").on("click", function () {
    //     if (this.value === "1") {

    //     } else {

    //     }
    // })
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
    // === RENDER ENDING QUESTIONS(?) === //
    function loadEndings(endings) {
        $("#okBox").empty()
        $("#storyBox").html(endings.story)
        $("#questionBox").empty()
    }
})