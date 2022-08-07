import React from "react";
import styles from "./CSSModule.module.css";

const CSSModule = () => {
  return (
    <div className={styles.wrapper}>
      하이 <sapn className="something">css module.</sapn>
    </div>
  );
};

export default CSSModule;
