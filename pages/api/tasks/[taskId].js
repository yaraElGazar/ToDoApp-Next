import { tasks } from "@/data/tasks";
export default function handler(req, res) {
  const { taskId } = req.query;
  if (req.method === "GET") {
    const taskFound = tasks.find((task) => task.id === +taskId);
    res.status(200).json(taskFound);
  } else if (req.method === "DELETE") {
    const deletedTask = tasks.find((task) => task.id === +taskId);
    const index = tasks.findIndex((task) => task.id === +taskId);
    tasks.splice(index, 1);
    res.status(200).json(deletedTask);
  } else if (req.method === "PUT") {
    const body = req.body.taskInfo;
    let updatedTask = tasks.find((task) => task.id === +taskId);
    const index = tasks.findIndex((task) => task.id === +taskId);
    updatedTask = { ...updatedTask, ...body };
    tasks.splice(index, 1, updatedTask);
    res.status(200).json(updatedTask);
  }
}
