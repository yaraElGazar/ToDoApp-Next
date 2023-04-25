import { tasks } from "@/data/tasks";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(tasks);
  } else if (req.method === "POST") {
    const { title, body, date, location, people, status } = req.body.task;
    const newTask = {
      id: Date.now(),
      title,
      body,
      date,
      location,
      people,
      status,
    };
    tasks.push(newTask);
    res.status(200).json(newTask);
  }
}
