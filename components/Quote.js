import React from "react";

const Quote = () => {
  return (
    <div>
      <section class="vh-90">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-lg-9 col-xl-7">
              <div
                class="card"
                style={{
                  borderRadius: "25px",
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  border: "none",
                }}
              >
                <div class="card-body p-5">
                  <div class="text-center mb-4 pb-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-quotes/bulb.webp"
                      alt="Bulb"
                      width="100"
                    />
                  </div>

                  <figure class="text-center mb-0">
                    <blockquote class="blockquote">
                      <p class="pb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          style={{ width: "15px" }}
                          fill="#2A2F4F"
                        >
                          <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                        </svg>
                        <span class="lead font-italic">
                          Many of life's failures are people who did not realize
                          how close they were to success when they gave up.
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          style={{ width: "15px" }}
                          fill="#2A2F4F"
                        >
                          <path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z" />
                        </svg>{" "}
                      </p>
                    </blockquote>
                    <figcaption class="blockquote-footer mb-0">
                      Thomas Edison
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;
