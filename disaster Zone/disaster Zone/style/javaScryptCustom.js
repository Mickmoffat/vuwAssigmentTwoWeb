/* custom javaScrypt MDDN201 P2 [2015] (300317288)*/

$(document).ready(function () {
    /**** NAV CONTENT HIDE SHOW ****/
/* CLICK VAR */
    // var counter to show or hide #hidden ID
    var clickN = 0;  //NEWS
    var clickH = 0; //HELP OUT
    var clickP = 0; //PREPARE
    var clickM = 0; //MORE INFO

/*++++ NEWS ++++*/
    
    $(".navNews").click(function () {
        //show nav expand div
        $("#navNExpand").removeClass("hidden");
        $("#navNExpand").animate({ height: "90%" }); //sets hight and animates
        clickN = clickN + 1; //adds 1 to var

        //hide nav expand div
        if (clickN == 2) {
            $("#navNExpand").addClass("hidden");
            $("#navNExpand").animate({ height: "0%" }); //sets hight to 0%
            clickN = 0;
        }

    });

/*+++ HELP OUT +++*/

/*++ PREPARE ++*/

/*+ MORE INFO +*/

    
});
