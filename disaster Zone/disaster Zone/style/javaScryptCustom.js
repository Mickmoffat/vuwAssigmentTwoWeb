/* custom javaScrypt MDDN201 P2 [2015] (300317288)*/

$(document).ready(function () {
    /***** TINY SCROLL ****
    var $box = $("#box");
    $box.tinyscrollbar();

    var box = $box.data();

    $box.bind("move", function () {

    }); */

    /****^ ALERTS SHOW ^****/
    var clickSMS = 0;
    var clickEMAIL = 0;
    var clickRADIO = 0;

    /**** NAV CONTENT HIDE SHOW ****/
/* CLICK VAR */
    // var counter to show or hide #hidden ID
    //var clickN = 0;  //NEWS [DISABLED]
    var clickH = 0; //HELP OUT
    var clickP = 0; //PREPARE
    var clickM = 0; //MORE INFO
    

    /****^ ALERTS SHOW ^****/
    /*[WORKS BUT A LIL DERPY, NEED TO FIX SWAPPING BETWEEN ALERTS [P3]]*/

    /*^^^ SMS ^^^*/
    $(".smsAlert").click(function () {
        //show nav expand div
        $("#smsAlertShow").removeClass("hidden");
        $("#smsAlertShow").animate({ height: "auto" }); //sets hight and animates
        //adds hidden class to other alerts, to hide when div clicked
        $("#emailAlertShow").addClass("hidden");
        $("#radioAlertShow").addClass("hidden");
        //hide helpout
        $("#navHExpand").addClass("hidden");
        clickSMS = clickSMS + 1; //adds 1 to var

        //hide nav expand div
        if (clickSMS == 2) {
            $("#smsAlertShow").addClass("hidden");
            $("#smsAlertShow").animate({ height: "auto" }); //sets hight to 0%

            clickSMS = 0;
        }

    });

    /*^^ EMAIL ^^*/
    $(".emailAlert").click(function () {
        //show nav expand div
        $("#emailAlertShow").removeClass("hidden");
        $("#emailAlertShow").animate({ height: "auto" }); //sets hight and animates
        //adds hidden class to other alerts, to hide when div clicked
        $("#smsAlertShow").addClass("hidden");
        $("#radioAlertShow").addClass("hidden");
        //hide helpout
        $("#navHExpand").addClass("hidden");

        clickEMAIL = clickEMAIL + 1; //adds 1 to var

        //hide nav expand div
        if (clickEMAIL == 2) {
            $("#emailAlertShow").addClass("hidden");
            $("#emailAlertShow").animate({ height: "auto" }); //sets hight to 0%

            clickEMAIL = 0;
        }

    });


    /*^ RADIO ^*/
    $(".radioAlert").click(function () {
        //show nav expand div
        $("#radioAlertShow").removeClass("hidden");
        $("#radioAlertShow").animate({ height: "auto" }); //sets hight and animates
        //adds hidden class to other alerts, to hide when div clicked
        $("#smsAlertShow").addClass("hidden");
        $("#emailAlertShow").addClass("hidden");
        //hide helpout
        $("#navHExpand").addClass("hidden");

        clickRADIO = clickRADIO + 1; //adds 1 to var

        //hide nav expand div
        if (clickRADIO == 2) {
            $("#radioAlertShow").addClass("hidden");
            $("#radioAlertShow").animate({ height: "auto" }); //sets hight to 0%

            clickRADIO = 0;
        }

    });

    /****^ ALERTS SHOW END ^****/



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

/*++ PREPARE ++*/

    $(".navPrep").click(function () {
        //show nav expand div
        $("#navPExpand").removeClass("hidden");
        $("#navPExpand").animate({ height: "auto" }); //sets hight and animates
        clickP = clickP + 1; //adds 1 to var

        //hide nav expand div
        if (clickP == 2) {
            $("#navPExpand").addClass("hidden");
            $("#navPExpand").animate({ height: "auto" }); //sets hight to 0%
            clickP = 0;
        }

    });

/*+ COMMUNICATION +*/

    $(".navCommunication").click(function () {
        //show nav expand div
        $("#navComExpand").removeClass("hidden");
        $("#navComExpand").animate({ height: "auto" }); //sets hight and animates
        clickM = clickM + 1; //adds 1 to var

        //hide nav expand div
        if (clickM == 2) {
            $("#navComExpand").addClass("hidden");
            $("#navComExpand").animate({ height: "auto" }); //sets hight to 0%
            clickM = 0;
        }

    });


/*+++ HELP OUT +++*/

    $(".navHelpOut").click(function () {
        //show nav expand div
        $("#navHExpand").removeClass("hidden");
        $("#navHExpand").animate({ height: "auto" }); //sets hight and animates
        clickH = clickH + 1; //adds 1 to var

        //hide nav expand div
        if (clickH == 2) {
            $("#navHExpand").addClass("hidden");
            $("#navHExpand").animate({ height: "auto" }); //sets hight to 0%
            clickH = 0;
        }

    });

    /*^& CLEAR ALL DROP DOWNS ON CLICK MAIN CONTAINER &^*/
    //slight bug after clearing, by clicking on container div requres double click to get drop down to work again

    $("#mainContainerApi").click(function () {
      
        //hide main drop down containers
        if ('*[class=""]') {
            $("#navHExpand").addClass("hidden");
        }
        
        $("#navComExpand").addClass("hidden");
        $("#navPExpand").addClass("hidden");

//hide alert drop down containers
        $("#smsAlertShow").addClass("hidden");
        $("#emailAlertShow").addClass("hidden");
        $("#radioAlertShow").addClass("hidden");
       

    });


    
});
