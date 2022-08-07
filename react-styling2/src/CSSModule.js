import React from "react";
import classNames from "classnames";
import styles from "./CSSModule.module.css";

const cx = classNames.bind(styles);

const CSSModule = () => {
  return (
    <div className={cx("wrapper", "inverted")}>
      하이 <sapn className="something">css module.</sapn>
    </div>
  );
};

export default CSSModule;
