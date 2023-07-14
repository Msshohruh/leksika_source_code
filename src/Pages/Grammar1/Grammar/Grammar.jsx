import React from "react";
import "./Grammar.css";
import Accordion from "../Accordion/Accordion";
const Grammar = () => {
  return (
    <div className="grammar-container">
      <h1>Table of Contents</h1>
      <ul className="grammar-list">
        <li className="grammar-item">
          <Accordion
            title="Introduction"
            index={1}
            question="wassap"
            answer={["Title here 1", "Title here 2"]}
          />
        </li>
      </ul>
    </div>
    // <div className={"container123"}>
    //   <h1 style={styles.title}>Table of Contents</h1>
    //   <ul style={styles.list}>
    //     <li style={styles.item}>
    //       {/* <a style={styles.link} href="/grammar/1">
    //         <span style={styles.number}>01</span> Introduction
    //       </a>
    //       <FAQ question="wassap" answer={["First", "Second"]} /> */}
    //       <Accordion title="Introduction" index={1} />
    //     </li>
    //   </ul>
    // </div>
  );
};

export default Grammar;
