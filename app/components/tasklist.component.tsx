import React, { useEffect, useState } from "react";
import Task from "./task.component";
import AddTodoModal from "./addtaskmodal.component";

export default function Tasklist() {
  const [tasks, setTasks] = useState<Task[]>();
  const [showAddTodoModal, setShowAddTodoModal] = useState(false);

  const fetchTasks = async () => {
    const response = await fetch(`/api/tasks`);
    return response.json();
  };

  const finishTask = async (id: number) => {
    const request: any = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    };
    request.body = JSON.stringify({ id: id });
    await fetch('/api/tasks', request);

    fetch("/api/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data));
  };

  useEffect(() => {
    fetchTasks().then((data) => setTasks(data));
  }, []);

  return (
        <main className="container">
          <h1>ToDos ✅</h1>
          <button
            onClick={() => {
              setShowAddTodoModal(true);
            }}
          >
            Add Todo 🧑🏻‍🏭
          </button>
          {tasks &&
            tasks.map((task, index) => {
              return (
                <Task
                  description={task.description}
                  priority={task.priority}
                  id={task.id}
                  finishTask={finishTask}
                  key={index}
                />
              );
            })}
          {showAddTodoModal && <AddTodoModal onClose={setShowAddTodoModal} />}
        </main>
  );
}
