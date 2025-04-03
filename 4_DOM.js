<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f4;
        }
        .container {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            width: 300px;
            text-align: center;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        li {
            display: flex;
            justify-content: space-between;
            padding: 8px;
            background: #e0e0e0;
            margin: 5px 0;
            border-radius: 5px;
        }
        button {
            background: red;
            color: white;
            border: none;
            padding: 5px;
            cursor: pointer;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>To-Do List</h2>
        <input type="text" id="taskInput" placeholder="Add a new task">
        <button onclick="addTask()">Add</button>
        <ul id="taskList"></ul>
    </div>
    <script>
        function addTask() {
            let taskInput = document.getElementById("taskInput");
            let taskText = taskInput.value.trim();
            if (taskText === "") return;
            
            let li = document.createElement("li");
            li.innerHTML = `${taskText} <button onclick="removeTask(this)">X</button>`;
            
            document.getElementById("taskList").appendChild(li);
            taskInput.value = "";
        }

        function removeTask(button) {
            button.parentElement.remove();
        }
    </script>
</body>
</html>
