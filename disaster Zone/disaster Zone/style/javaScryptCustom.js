/* custom javaScrypt MDDN201 P2 [2015] (300317288)*/

$(document).ready(function () {
    /***** TINY SCROLL ****
    var $box = $("#box");
    $box.tinyscrollbar();

    var box = $box.data();

    $box.bind("move", function () {

    }); */

    /**** NAV CONTENT HIDE SHOW ****/
/* CLICK VAR */
    // var counter to show or hide #hidden ID
    //var clickN = 0;  //NEWS [DISABLED]
    var clickH = 0; //HELP OUT
    var clickP = 0; //PREPARE
    var clickM = 0; //MORE INFO
    

/*++++ NEWS ++++ [DISABLED]
    
    $(".navNews").click(function () {
        //show nav expand div
        $("#navNExpand").removeClass("hidden");
        $("#navNExpand").animate({ height: "100vh" }); //sets hight and animates
        clickN = clickN + 1; //adds 1 to var

        //hide nav expand div
        if (clickN == 2) {
            $("#navNExpand").addClass("hidden");
            $("#navNExpand").animate({ height: "0vh" }); //sets hight to 0%
            clickN = 0;
        }

    }); */

 /*+++ HELP OUT +++*/

    $(".navHelpOut").click(function () {
        //show nav expand div
        $("#navHExpand").removeClass("hidden");
        $("#navHExpand").animate({ height: "84vh" }); //sets hight and animates
        clickH = clickH + 1; //adds 1 to var

        //hide nav expand div
        if (clickH == 2) {
            $("#navHExpand").addClass("hidden");
            $("#navHExpand").animate({ height: "0%" }); //sets hight to 0%
            clickH = 0;
        }

    });

/*++ PREPARE ++*/

    $(".navPrep").click(function () {
        //show nav expand div
        $("#navPExpand").removeClass("hidden");
        $("#navPExpand").animate({ height: "84vh" }); //sets hight and animates
        clickP = clickP + 1; //adds 1 to var

        //hide nav expand div
        if (clickP == 2) {
            $("#navPExpand").addClass("hidden");
            $("#navPExpand").animate({ height: "0%" }); //sets hight to 0%
            clickP = 0;
        }

    });

/*+ MORE INFO +*/

    $(".navMoreInfo").click(function () {
        //show nav expand div
        $("#navMIExpand").removeClass("hidden");
        $("#navMIExpand").animate({ height: "84vh" }); //sets hight and animates
        clickM = clickM + 1; //adds 1 to var

        //hide nav expand div
        if (clickM == 2) {
            $("#navMIExpand").addClass("hidden");
            $("#navMIExpand").animate({ height: "0%" }); //sets hight to 0%
            clickM = 0;
        }

    });

    
});
