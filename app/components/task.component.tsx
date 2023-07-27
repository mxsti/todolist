"use client";
import React, { useState } from "react";

interface TaskProps {
  id: number;
  description: string;
  priority: string;
  finishTask: any;
}

export default function Task(props: TaskProps) {
  const [done, setDone] = useState(false);

  let prioSymbol;

  // build description div
  switch (props.priority) {
    case "high": {
      prioSymbol = "🔴";
      break;
    }
    case "middle": {
      prioSymbol = "🟡";
      break;
    }
    case "low": {
      prioSymbol = "🟢";
      break;
    }
    default: {
      prioSymbol = "";
      break;
    }
  }

  return (
    <>
      <article className="task">
        <p>{prioSymbol}</p>
        <div>{props.description}</div>
        <footer>
          <input
            type="checkbox"
            id="done"
            onChange={(event) => setDone(event.target.checked)}
          ></input>
          <label htmlFor="done">Aufgabe erledigt</label>
          <button className="taskbutton" disabled={!done} onClick={() => props.finishTask(props.id)}>
            Speichern
          </button>
        </footer>
      </article>
    </>
  );
}
