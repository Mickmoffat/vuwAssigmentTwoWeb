/* custom javaScrypt MDDN201 P2 [2015] (300317288)*/

$(document).ready(function () {
/**** NAV CONTENT HIDE SHOW ****/
    var click = 0; // var counter to show or hide #hidden ID 

/*++++ NEWS ++++*/
    
    $(".navNews").click(function () {
        //show nav expand div
        $("#navNExpand").removeClass("hidden");
        click = click + 1;

        //hide nav expand div
        if (click == 2) {
            $("#navNExpand").addClass("hidden");
            click = 0;
        }
        /*  $(".navNews").click(function () {
        //show nav expand div
        $("#navNExpand").removeClass("hidden");
        click = click + 1;

        //hide nav expand div
        if (click == 2) {
            $("#navNExpand").addClass("hidden");
            click = 0;
        }*/
    });

/*+++ HELP OUT +++*/

/*++ PREPARE ++*/

/*+ MORE INFO +*/

    
});
