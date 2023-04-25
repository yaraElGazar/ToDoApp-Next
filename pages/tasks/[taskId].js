import React from "react";

const taskId = ({ task }) => {
  return (
    <div>
      <div>{taskId}</div>
      <section className="vh-80 m-5" style={{ backgroundColor: "#5f59f7" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card mb-5" style={{ borderRadius: "15px" }}>
                <div className="card-body p-4">
                  <div
                    className={
                      task.status === "High level"
                        ? "badge bg-danger m-2"
                        : task.status === "Medium level"
                        ? "badge bg-warning text-dark m-2"
                        : "badge bg-success m-2"
                    }
                    style={{ float: "right", fontSize: "1rem" }}
                  >
                    {task.status}
                  </div>
                  <h3 className="mb-3">{task.title}</h3>
                  <p className="small mb-0">
                    <i className="far fa-star fa-lg"></i>{" "}
                    <span className="mx-2">{task.date}</span>
                  </p>
                  <hr className="my-4" />
                  <div className="d-flex justify-content-start align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      style={{
                        width: "20px",
                        margin: "5px 20px",
                        fill: "#917FB3",
                      }}
                    >
                      <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
                    </svg>

                    <p className="card-text">{task.body}</p>
                  </div>
                  <div className="d-flex justify-content-start align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      style={{
                        width: "20px",
                        margin: "5px 20px",
                        fill: "#917FB3",
                      }}
                    >
                      <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                    </svg>

                    <p className="card-text">{task.location}</p>
                  </div>
                  <div className="d-flex justify-content-start align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      style={{
                        width: "30px",
                        margin: "5px 15px",
                        fill: "#917FB3",
                      }}
                    >
                      <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
                    </svg>
                    <p className="card-text">{task.people}</p>
                  </div>
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
