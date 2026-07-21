function addTask(){

    let task = document.getElementById("taskInput").value;

    if(task === ""){
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = task;

    li.onclick = function(){

        if(li.style.textDecoration === "line-through"){
            li.style.textDecoration = "none";
        }
        else{
            li.style.textDecoration = "line-through";
        }

    };

    document.getElementById("taskList").appendChild(li);

    document.getElementById("taskInput").value = "";

}