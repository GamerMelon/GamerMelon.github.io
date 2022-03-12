let fs = require("fs");

function initButtons(){
    $("#add_log").on("click", function(){
        console.log("log added");
    });
    //put logs and project into same div to
    //avoid the problem
    //see joel about this one \/\/\/\/\/\/
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
        populateLogs();
    });

    function populateLogs(){
        console.log("test");
        fs.readFile("../log_data.php", function (err, data){
            if(!err){
                
            }
            else {
                console.log(err);
            }
        });
    };
    