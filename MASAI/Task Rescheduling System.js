let tasks = ["Task A", "Task B", "Task C", "Task D", "Task E"];

tasks = tasks.slice(1);

tasks = ["High-Priority Task 1", "High-Priority Task 2", ...tasks];

tasks[tasks.length - 1] = "New Task";


console.log(tasks);
