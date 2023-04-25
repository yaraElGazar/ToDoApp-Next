import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const taskId = ({ task }) => {
  const router = useRouter();
  const { taskId } = router.query;
  const [taskInfo, setTaskInfo] = useState({
    title: "",
    date: "",
    body: "",
    location: "",
    people: "",
    status: "",
  });

  useEffect(() => {
    setTaskInfo(task);
  }, []);
  const onSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch(`/api/tasks/${task.id}`, {
      method: "PUT",
      body: JSON.stringify({ taskInfo }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setTaskInfo("");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTaskInfo({ ...taskInfo, [name]: value });
  };
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
                        value={taskInfo.title}
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
                        value={taskInfo.date}
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
                        value={taskInfo.body}
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
                        value={taskInfo.location}
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
                        value={taskInfo.people}
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
                        value={taskInfo.status}
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
                      Update Note
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

export default taskId;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { taskId: "1" } },
      { params: { taskId: "2" } },
      { params: { taskId: "3" } },
    ],
    fallback: "blocking",
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`http://localhost:3000/api/tasks/${params.taskId}`);
  const data = await res.json();
  return {
    props: {
      task: data,
    },
  };
}
