let taskArr = [];
$(document).ready(function(){
    $("#showTasks").hide()
    $("#btnTask").click(function(){
        let inp = $("#task").val();
        if(inp == ""){
            $("#error").text("Please Insert Some Task");
        }
        setTimeout(()=>{
            $("#error").text("");
        },2000);
        
        if(inp != ""){
            taskArr.push({Task : inp, Status : 0});
            // console.log(taskArr);
        }
        $("#task").val("");

        if(taskArr.length <= 0){
            $("#showTasks").hide()
        }else{
            $("#showTasks").show();
        }
        data();
    });
});

function data(){
    let text = "<table class='table table-bordered'>"
        for(i = 0; i< taskArr.length; i++){
            // console.log(taskArr[i].Status == 0 ? taskArr[i].Task : "hi");
            text += `<tr id='ptask${i}'>`;
            text += `<td>  ${taskArr[i].Status == 0 ? taskArr[i].Task : `<s>${taskArr[i].Task}</s>`}  </td>`;
            text += `<td> ${taskArr[i].Status == 0 
                ?`<input type = "button" id="btnComplete${i}" onclick="btnComplete(${i})" class="btn" value="Complete" style="background-color: #ffc107;">` 
                : `<input type = "button" id="btnComplete${i}" onclick="btnComplete(${i})" class="btn" value="Completed" style="background-color: #5cb85c;">`}</td>`;
            text += `<td> <input type = "button" id="btnDelete" onclick="btnDelete(${i})" class="btn btn-danger" value="Delete"> </td>`;
            text += "</tr>";
        }
        text += "</table>"
        $("#tableBody").html(text);
}

function btnComplete(index){
    taskArr[index].Status = 1
    if(taskArr[index].Status != 0){
        $(`#ptask${index}`).css({"textDecoration":"line-through"});
        $(`#btnComplete${index}`).val("Completed").css({"backgroundColor":"#5cb85c"});
    }
}

function btnDelete(index){
    taskArr.splice(index,1);
    $(`#ptask${index}`).remove();
    data();
}