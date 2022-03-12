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
        $.ajax({
            url:'log_data.php',
            dataType:'jsonp',
            success:(data) => {
                console.log("test2");
                //let str=[varStr];//so first option will be the default value, will be signal for no filter later
                let str = "<ul>";
                //let button = `<option value=${varStr}>${name}</option>`;//making the first option, not sure if varStr works here
                for (let obj of data){
                    let time = obj["Time"];
                    console.log(time);
                    let log = obj["Log"];
                    console.log(log);
                    let concat = `<li>At: ${time}<br>${log}</li>`
                    str.push(concat);
                    //curr = curr.toUpperCase();//uppercase for no duplicates
                    //if (!str.includes(curr) && curr != '') {//if the current value is not in the list, add it to the list
                    //    str.push(curr);
                    //}

                }
                //str.sort();//sorting for peace of mind
                //for (let i = 0; i < str.length; i++){//make the other options
                //    button += `<option value=${str[i]}>${str[i]}</option>`;
                //}
                str.push("</ul>");
                console.log(str);
                $(`#log_dump`).html(str);
                //$(`#${place}`).html(button);//add the options to the specified select box
            }
        });
    };
    