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
    </Container>
  );
}

export default Comments;
