$(document).ready(function() {
    let completedCount = 0;

    // Add a new task
    function addTask() {
        const taskInput = $("#taskInput");
        const taskText = taskInput.val().trim();
        if (taskText !== "") {
            const taskItem = $("<li></li>").text(taskText);
            taskItem.append("<button class='deleteTask'>Delete</button>");
            taskItem.data("completed", false);
            $("#taskList").append(taskItem);
            taskInput.val("");
        }
    }

    // Delete a task
    function deleteTask() {
        $(this).parent().remove();
    }

    // Update the completed counter
    function updateCompletedCounter() {
        $("#completedCount").text(completedCount);
    }

    // Mark a task as completed or not completed
    function toggleCompleted() {
        const taskItem = $(this).parent();
        const isCompleted = taskItem.data("completed");
        taskItem.data("completed", !isCompleted);
        taskItem.toggleClass("completed");
        completedCount += isCompleted ? -1 : 1;
        updateCompletedCounter();
    }

    // Event listeners
    $("#addTask").click(addTask);
    $("#taskInput").keypress(function(event) {
        if (event.which === 13) {
            addTask();
        }
    });

    $(document).on("click", ".deleteTask", deleteTask);
    $(document).on("click", "li", toggleCompleted);
});
