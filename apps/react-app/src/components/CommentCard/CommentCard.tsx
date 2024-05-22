import { Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { Container, Content, Author } from "./CommentCard.styles";

const comment = {
  _id: "01",
  author: "amador",
  content: "this is awesome!",
  createdAt: "2024-05-17",
  updatedAt: "2024-05-17",
  __v: "01",
};

// ACT 3 - Receive comment prop

function CommentCard() {
  return (
    <Container item sm={8}>
      <AccountCircleIcon />
      <Content>
        <Author>{comment.author}</Author>
        <Typography>{comment.content}</Typography>
      </Content>
    </Container>
  );
}

export default CommentCard;
