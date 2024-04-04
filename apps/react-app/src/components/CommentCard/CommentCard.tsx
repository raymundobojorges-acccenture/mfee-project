import { Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { Container, Content, Author } from "./CommentCard.styles";

const comment = {
  id: "2.1",
  author: "Anymus",
  content:
    "LoremAqui ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
};

function CommentCard() {
  return (
    <Container item sm={8}>
      <AccountCircleIcon />
      <Content>
        <Author>
          {/* DONE Activity 1 - Render author */}
          { comment.author }
        </Author>
        <Typography>
          {/* DONE Activity 1 - Render comment content */}
          { comment.content }
        </Typography>
      </Content>
    </Container>
  );
}

export default CommentCard;
