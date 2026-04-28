type TaskStatus = "pendiente" | "en_progreso" | "finalizada";
type Task = {
id: number;
description: string;
isComplete: boolean;
status: TaskStatus
}
function getTaskProgressOrPending(tasks: Task[]) {
return tasks.filter((task: Task) => task.status !== "finalizada")
}
