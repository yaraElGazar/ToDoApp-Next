import React, { useState } from "react";
import { useRouter } from "next/router";

const add = () => {
  const [task, setTask] = useState({
    title: "",
    date: "",
    body: "",
    location: "",
    people: "",
    status: "",
  });
  const onSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({ task }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setTask("");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTask({ ...task, [name]: value });
  };
  const router = useRouter();
  const handleRouting = () => {
    router.push("/tasks");
  };
  return (
    <div>
      <section className="vh-80 m-5" style={{ backgroundColor: "#5f59f7" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-5">
              <div className="card mb-5" style={{ borderRadius: "15px" }}>
                <div className="card-body p-4">
                  <form onSubmit={onSubmit}>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form1Example1">
                        Task Title
                      </label>
                      <input
                        type="text"
                        id="form1Example1"
                        className="form-control"
                        value={task.title}
                        name="title"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form1Example2">
                        Task Time
                      </label>
                      <input
                        type="text"
                        id="form1Example2"
                        className="form-control"
                        value={task.date}
                        name="date"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form4Example3">
                        Notes
                      </label>
                      <textarea
                        className="form-control"
                        id="form4Example3"
                        rows="4"
                        value={task.body}
                        name="body"
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form1Example4">
                        Task Location
                      </label>
                      <input
                        type="text"
                        id="form1Example4"
                        className="form-control"
                        value={task.location}
                        name="location"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form1Example5">
                        Participants
                      </label>
                      <input
                        type="text"
                        id="form1Example5"
                        className="form-control"
                        value={task.people}
                        name="people"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form1Example6">
                        Task Status
                      </label>
                      <input
                        type="text"
                        id="form1Example6"
                        className="form-control"
                        value={task.status}
                        name="status"
                        onChange={handleChange}
                      />
                    </div>
                    <button
                      type="submit"
                      onClick={handleRouting}
                      className="btn btn-primary btn-block"
                      style={{
                        background: "#2A2F4F",
                        border: "1px solid #2A2F4F",
                        color: "#FDE2F3",
                        margin: "auto",
                        width: "100%",
                      }}
                    >
                      Add Note
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default add;
