function initButtons(){
    $("#add_log").on("click", function(){
        console.log("log added");
    });
    $("#hide_this").on("click", function(){
        $('#project').hide();
        document.getElementById("#logs").style.gridColumn =  "4/6";
    });
    $("#affiliationButton").on("click", function(){
        $('table').hide();
        showProjectTable();
    });
}