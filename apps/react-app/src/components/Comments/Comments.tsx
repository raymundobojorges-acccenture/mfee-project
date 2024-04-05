import { Title, Container } from "./Comments.styles";
import CommentCard from "../CommentCard";

function Comments() {
  return (
    <Container container>
      <Title item sm={8}>
        <h4>Commens</h4>
      </Title>
      {/* DONE Activity 1 - Render CommentCard */}
      <CommentCard/>
      {/* Activity 4 - Render CommentCard only if comments array is greater than zero */}
      {/* Activity 5 - Iterate comments */}
      {/* Activity 3 - Send comment prop */}
    </Container>
  );
}

export default Comments;
