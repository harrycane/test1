import React, { FC, Profiler, useEffect, useState } from "react";
import { AppData } from "../../../model/app.model";

import css from "./data.module.css";
import { Button } from "@material-ui/core";
import { Comments } from "../../comments/comments";

export const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

export const Data: FC = () => {
  const [appData, setAppData] = useState<AppData>([]);

  const loadData = async () => {
    const response = await fetch(COMMENTS_URL);
    const data = await response.json();
    setAppData(data);
  };

  useEffect(() => {
    const performanceData = performance.getEntries();
    const perfDuration = performanceData
      .filter((item) => item.name === COMMENTS_URL)
      .map((item) => item.duration);

    const lastDuration = perfDuration
      ? perfDuration[perfDuration.length - 1]
      : "";

    localStorage.setItem(
      "performance",
      lastDuration !== undefined ? lastDuration.toString() : ""
    );
  });
  const onRender = (
    id: string,
    phase: "mount" | "update",
    actualDuration: number
  ) => {
    localStorage.setItem(id, actualDuration.toString());
  };
  return (
    <Profiler id={"dataPage"} onRender={onRender}>
      <div className={css.data}>
        <Button
          variant={"contained"}
          color={"primary"}
          onClick={() => loadData()}
          style={{ marginBottom: 10, marginRight: "auto", marginLeft: "auto" }}
        >
          Get Comments!
        </Button>
        <Profiler id={"comments"} onRender={onRender}>
          {appData.length ? (
            <Comments data={appData} />
          ) : (
            <img
              src="https://pplware.sapo.pt/wp-content/uploads/2007/07/bigstock-No-Comments-Male-Celebrity-Pol-99110441_jpg-650x349.png"
              alt="no comments"
            />
          )}
        </Profiler>
      </div>
    </Profiler>
  );
};
