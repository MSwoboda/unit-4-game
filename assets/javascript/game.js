        $(document).ready(function () {
            var crystalArray = ["Emerald", "Jade", "Diamond", "Agate", "Malachite", "Obsidian", "Ruby", "Sapphire", "Tanzanite", "Iolite"];

            //create img array 
            var imgArray = [""];
            for (let index = 0; index < 9; index++) {
                imgArray[index] = "crystal" + (index + 1) + ".jpg";

            }


            var game = {
                randomNumber: 0,
                score: 0,
                wins: 0,
                loses: 0
            }
            var gems = {
                type: ["", "", "", ""],
                price: [0, 0, 0, 0],
                img: ["", "", "", ""]
            };



            var selected;

            function newGame(params) {
                game.score = 0;
                game.randomNumber = Math.floor(Math.random() * (+120 - +19) + +19);

                gems.type = crystalArray.sort(() => 0.5 - Math.random()).slice(0, 4);

                for (let index = 0; index < 4; index++) {
                    gems.price[index] = Math.floor(Math.random() * (+12 - +1) + +1);
                }

                console.log(gems)
                $("#loses").text("Loses: " + game.loses)
                $("#wins").text("Wins: " + game.wins)

                $("#number").text(game.randomNumber);
                gems.img = imgArray.sort(() => 0.5 - Math.random()).slice(0, 4);

                $("#img1").attr("src", "assets/images/" + gems.img[0])
                $("#img2").attr("src", "assets/images/" + gems.img[1])
                $("#img3").attr("src", "assets/images/" + gems.img[2])
                $("#img4").attr("src", "assets/images/" + gems.img[3])


                $("#crystal1").text(gems.type[0])
                $("#crystal2").text(gems.type[1])
                $("#crystal3").text(gems.type[2])
                $("#crystal4").text(gems.type[3])

                $("#tooltip").text("")
            }

            function addScore(selector) {
                game.score += gems.price[selector]
                $("#score").text(game.score)
                console.log(game.score);
                if (game.score > game.randomNumber) {
                    game.loses++
                    newGame();
                } else if (game.score === game.randomNumber) {
                    game.wins++
                    newGame();
                }
            }

            $("#start").on("click", function (params) {

                newGame();


            })

            //Sort and load new headers and imgs
            $("#b1").on("click", function (event) {
                addScore(0);
            })


            $("#b2").on("click", function (event) {
                addScore(1);
            })


            $("#b3").on("click", function (event) {
                addScore(2);
            })


            $("#b4").on("click", function (event) {
                addScore(3);
            })

        });

  