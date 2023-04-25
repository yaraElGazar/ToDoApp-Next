import React, { useEffect, useState } from "react";
import Card from "@/components/Card";
import { useRouter } from "next/router";
import { getSession, signIn } from "next-auth/react";

const index = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    };
    securePage();
  }, []);

  const [tasks, setTasks] = useState([]);
  const fetchData = async () => {
    const res = await fetch("/api/tasks");
    const data = await res.json();
    setTasks(data);
  };
  const router = useRouter();
  const handleRouting = () => {
    router.push("/tasks/add");
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) return "Loading ...";
  return (
    <div>
      <h1 style={{ color: "#917FB3" }}>Tasks</h1>
      <div className="container d-flex flex-wrap justify-content-center">
        {tasks.map((task) => {
          return <Card task={task} key={task.id} fetchData={fetchData} />;
        })}

        <svg
          style={{
            width: "70px",
            fill: "#917FB3",
            margin: "20px",
            cursor: "pointer",
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          onClick={handleRouting}
        >
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
        </svg>
      </div>
    </div>
  );
};

export default index;
