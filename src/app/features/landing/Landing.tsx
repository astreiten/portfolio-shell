import React, { useContext } from "react";
import { Button } from "@mui/material";
import "./Landing.css";
import { headerData } from "../../data/headerData";
import { socialsData } from "../../data/socialsData";

import { FaLinkedin, FaGithub } from "react-icons/fa";

function Landing() {
  return (
    <div>
      <div className="landing">
        <div className="landing--container">
          <div
            className="landing--container-left"
            style={{ backgroundColor: "#1676CB" }}
          >
            <div className="lcl--content">
              {socialsData.linkedIn && (
                <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
                  <FaLinkedin
                    className="landing--social"
                    style={{ color: "black" }}
                    aria-label="LinkedIn"
                  />
                </a>
              )}
              {socialsData.github && (
                <a href={socialsData.github} target="_blank" rel="noreferrer">
                  <FaGithub
                    className="landing--social"
                    style={{ color: "black" }}
                    aria-label="GitHub"
                  />
                </a>
              )}
            </div>
          </div>
          <img
            src={headerData.image}
            alt=""
            className="landing--img"
            style={{
              borderColor: "black",
            }}
          />
          <div
            className="landing--container-right"
            style={{ backgroundColor: "rgb(234, 234, 234)" }}
          >
            <div className="lcr--content" style={{ color: "black" }}>
              <h6>{headerData.title}</h6>
              <h1>{headerData.name}</h1>
              <p>{headerData.desciption}</p>

              <div className="lcr-buttonContainer">
                {headerData.resumePdf && (
                  <a
                    href={headerData.resumePdf}
                    download="resume"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button>Download CV</Button>
                  </a>
                )}
                <Button>Contact</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
