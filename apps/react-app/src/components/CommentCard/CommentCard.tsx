import { Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { Container, Content, Author } from "./CommentCard.styles";
import { Comment } from "../../types";

function CommentCard( props: { comment: Comment }) {
  return (
    <Container item sm={8}>
      <AccountCircleIcon />
      <Content>
        <Author>
          <p>{props.comment.author}</p>
          </Author>
        <Typography>
          <p>{props.comment.content}</p>
        </Typography>
      </Content>
    </Container>
  );
}

export default CommentCard;