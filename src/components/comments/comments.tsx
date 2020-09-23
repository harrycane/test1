import React, { FC } from "react";
import { Card, CardContent } from "@material-ui/core";
import { AppData } from "../../model/app.model";
import css from "./comments.module.css";

interface CommentsProps {
  data: AppData;
}

export const Comments: FC<CommentsProps> = (props) => {
  const { data } = props;
  const comments = data.map((comment) => {
    return (
      <Card className={css.comment} key={comment.id}>
        <CardContent>
          <div className={css.commentItem}>id: {comment.id}</div>
          <div className={css.commentItem}>name: {comment.name}</div>
          <div className={css.commentItem}>comment: {comment.body}</div>
          <div className={css.commentItem}>email: {comment.email}</div>
          <div className={css.commentItem}>postID: {comment.postId}</div>
        </CardContent>
      </Card>
    );
  });
  return <div className={css.section}>{comments}</div>;
};
