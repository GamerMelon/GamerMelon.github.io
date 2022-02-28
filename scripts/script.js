function initButtons(){
    $("#add_log").on("click", function(){
        console.log("log added");
    });
    $("#hide_this").on("click", function(){
        $('#project').hide();
        document.getElementById("#logs").style.gridColumn =  "4/6";
    });
    $("#add_job").on("click", function(){
        console.log("adding log!")
    });
    $("#minus_job").on("click", function(){
        console.log("taking a job out!")        
    });
}
    $(document).ready(function(){
        initButtons();
    });