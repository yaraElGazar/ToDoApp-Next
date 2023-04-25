import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark "
          style={{ background: "#2A2F4F" }}
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav mr-auto d-flex justify-content-around"
              style={{ width: "100%" }}
            >
              <li className="nav-item active">
                <Link href="/" className="nav-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    style={{
                      width: "20px",
                      fill: "#FDE2F3",
                    }}
                  >
                    <path d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                  </svg>
                  <span style={{ margin: "8px", color: "#FDE2F3" }}>
                    ToDoApp
                  </span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  href="/tasks"
                  className="nav-link"
                  style={{ color: "#FDE2F3" }}
                >
                  Tasks
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  href="/api/auth/signout"
                  className="nav-link"
                  style={{ color: "#FDE2F3" }}
                  onClick={() => signOut()}
                >
                  Signout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark "
        style={{ background: "#2A2F4F" }}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav mr-auto d-flex justify-content-around"
            style={{ width: "100%" }}
          >
            <li className="nav-item active">
              <Link href="/" className="nav-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  style={{
                    width: "20px",
                    fill: "#FDE2F3",
                  }}
                >
                  <path d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                </svg>
                <span style={{ margin: "8px", color: "#FDE2F3" }}>ToDoApp</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                href="/api/auth/signin"
                className="nav-link"
                style={{ color: "#FDE2F3" }}
                onClick={signIn}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
