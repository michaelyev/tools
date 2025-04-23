import React from "react";
import styles from "./ServerContainer.module.css";

type Props = {
  children: React.ReactNode;
};

const ServerContainer = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default ServerContainer;

