import React, { FC } from "react";
import css from "./home.module.css";

export const Home: FC = () => {
  return (
    <div className={css.homeTitle}>
      <div className={css.homeImg}>
        <img
          src="https://www.cielhr.com/wp-content/uploads/2019/10/PerformancewSpace-1080x675.png"
          alt="performance"
        />
      </div>
    </div>
  );
};
