import React from "react";
import { useRouter } from "next/router";

const error = () => {
  const router = useRouter();
  const handleRouting = () => {
    router.push("/");
  };
  return (
    <div>
      <div>
        <div className="d-flex align-items-center justify-content-center vh-100">
          <div className="text-center">
            <h1 className="display-1 fw-bold">404</h1>
            <p className="fs-3">
              {" "}
              <span className="text-danger">Opps!</span> Page not found.
            </p>
            <p className="lead">The page you’re looking for doesn’t exist.</p>

            <button
              onClick={handleRouting}
              className="btn btn-primary"
              style={{
                background: "#2A2F4F",
                border: "1px solid #2A2F4F",
                collor: "#FDE2F3",
              }}
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default error;
error.getLayout = function pageLayout(page) {
  return <>{page}</>;
};
