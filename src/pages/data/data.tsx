import React, { FC, useEffect, useState } from "react";
import { AppData } from "../../model/app.model";
import Card from "@material-ui/core/Card";

import css from "./data.module.css";
import { Button } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";

export const Data: FC = () => {
  const [appData, setAppData] = useState<AppData>([]);

  const loadData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const data = await response.json();
    setAppData(data);
  };

  useEffect(() => {
    const performanceData = performance.getEntries();
    const perfDuration = performanceData
      .filter(
        (item) => item.name === "https://jsonplaceholder.typicode.com/comments"
      )
      .map((item) => item.duration);

    const lastDuration = perfDuration
      ? perfDuration[perfDuration.length - 1]
      : "";

    localStorage.setItem(
      "performance",
      lastDuration !== undefined ? lastDuration.toString() : ""
    );
  });
  return (
    <div className={css.data}>
      <Button
        variant={"contained"}
        color={"primary"}
        onClick={() => loadData()}
        style={{ marginBottom: 20 }}
      >
        Get Comments!
      </Button>
      {appData.map((comment) => {
        return (
          <Card className={css.dataItem} key={comment.id}>
            <CardContent>
              <div className={css.dataItemContentItem}>id: {comment.id}</div>
              <div className={css.dataItemContentItem}>
                name: {comment.name}
              </div>
              <div className={css.dataItemContentItem}>
                comment: {comment.body}
              </div>
              <div className={css.dataItemContentItem}>
                email: {comment.email}
              </div>
              <div className={css.dataItemContentItem}>
                postID: {comment.postId}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
