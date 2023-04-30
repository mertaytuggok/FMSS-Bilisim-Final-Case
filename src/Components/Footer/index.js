import React from "react";
import styles from "./Footer.module.css";
import GithubSvg from "../../Asset/github.svg";
import LinkedinSvg from "../../Asset/linkedin.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterLogo}>
        <span>
          <Link
            className={styles.github}
            target="_blank"
            to="https://github.com/mertaytuggok"
            rel="noreferrer"
          >
            <img
              className={styles.githubLogo}
              src={GithubSvg}
              alt="Github Logo"
              width={48}
              height={48}
              color="#fffff"
            />
            <span>@mertaytuggok</span>
          </Link>{" "}
        </span>
        <span>
          <Link
            className={styles.github}
            target="_blank"
            to="https://www.linkedin.com/in/mertaytuggok/"
            rel="noreferrer"
          >
            <img
              src={LinkedinSvg}
              alt="Linkedin Logo"
              width={48}
              height={48}
              color="#fffff"
            />
            <span>@mertaytuggok</span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
