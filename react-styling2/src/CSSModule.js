import React from "react";
import classNames from "classnames/bind";
import styles from "./CSSModule.module.scss";

const cx = classNames.bind(styles);

const CSSModule = () => {
  return (
    <div className={cx("wrapper", "inverted")}>
      하이 <span className="something">css module.</span>
    </div>
  );
};

export default CSSModule;
