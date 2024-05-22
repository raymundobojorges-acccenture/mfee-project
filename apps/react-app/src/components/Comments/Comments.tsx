import CommentCard from "../CommentCard";
import { Title, Container, FormContainer } from "./Comments.styles";

// ACT 3 - Receive comments prop

type  CommentType = {
  comments: {
    _id: string,
    author: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    __v: string,
  }[]
}

function Comments({comments}: CommentType) {
  return (
    <Container container>
      <Title item sm={8}>   
        <h4>Comments</h4>
      </Title>
      {/* ACT 1 = Render CommentCard component */}
      {/* ACT 3 - Send one comment (comments[0]) as prop to CommentCard component */} 
      {/* ACT 5 - Iterate comments to render CommentCard component for each comment */}
      { comments.map(comment => <CommentCard comment={comment}></CommentCard> ) }
      <FormContainer item sm={8}>
        Form
      </FormContainer>
    </Container>
  );
}

export default Comments;
