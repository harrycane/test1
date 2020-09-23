import React, { FC, Fragment } from "react";
import { milisecondsToSeconds } from "../../../utils/time.utils";
import css from "./performance.module.css";

const NOT_MEASURED_YET = "not measured yet";

export const Performance: FC = () => {
  const commentsLoadingTime = localStorage.getItem("performance");
  const dataPageRenderingTime = localStorage.getItem("dataPage");
  const commentsRenderingTime = localStorage.getItem("comments");

  return (
    <Fragment>
      <div className={css.section}>
        Comments loading time is:{" "}
        <b>
          {commentsLoadingTime
            ? milisecondsToSeconds(parseFloat(commentsLoadingTime)) + " seconds"
            : NOT_MEASURED_YET}
        </b>
      </div>
      <div className={css.section}>
        Data page rendering time is:{" "}
        <b>
          {dataPageRenderingTime && commentsRenderingTime
            ? milisecondsToSeconds(
                parseFloat(dataPageRenderingTime) +
                  parseFloat(commentsRenderingTime)
              ) + " seconds"
            : NOT_MEASURED_YET}
        </b>
      </div>
      <div className={css.section}>
        Comments rendering time is:{" "}
        <b>
          {commentsRenderingTime
            ? milisecondsToSeconds(parseFloat(commentsRenderingTime)) + " seconds"
            : NOT_MEASURED_YET}
        </b>
      </div>
    </Fragment>
  );
};
