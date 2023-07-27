"use client";

interface AddTodoModalProps {
  onClose: any;
}

interface newTask {
  description: string,
  priority: string,
}

export default function AddTodoModal(props: AddTodoModalProps) {

  const submitTask = async () => {
    const desc = (document.getElementById('description') as HTMLInputElement).value;
    const prio = (document.getElementById('priority') as HTMLInputElement).value;

    const newTask: newTask = {
      description: desc,
      priority: prio,
    };

    const request: any = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
    }

    request.body = JSON.stringify(newTask);
    const response = await fetch('/api/tasks', request);
    console.log(response);
    props.onClose(false)
  }
  
  return (
    <dialog open>
      <article>
        <h3>ToDo hinzufügen</h3>
        <form>
          <input
            type="text"
            id="description"
            placeholder="Was ist zu tun?"
            required
          />
          <select defaultValue="" id="priority" required>
            <option value="" disabled>
              Priorität
            </option>
            <option value="high">Hoch</option>
            <option value="middle">Mittel</option>
            <option value="low">Niedrig</option>
          </select>
          <button className="modalButton" onClick={() => submitTask()}>
            Hinzufügen
          </button>
          <button
            className="modalButton delete"
            onClick={() => props.onClose(false)}
          >
            Zurück
          </button>
        </form>
        <div>
        </div>
      </article>
    </dialog>
  );
}
