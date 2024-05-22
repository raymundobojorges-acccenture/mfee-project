import { Title, Container, FormContainer } from './Comments.styles';
import CommentCard from '../CommentCard';
import { Comment } from '../../types';
import AddCommentForm from '../AddCommentForm';

interface CommentsProps {
  comments?: Comment[];
}

function Comments({ comments }: CommentsProps) {
  return (
    <Container container>
      <Title item sm={8}>
        <h4>Comments</h4>
      </Title>
      {comments && comments.length > 0 &&
        comments?.map((comment: Comment) => {
          return <CommentCard key={comment.id} comment={comment} />;
        })}
         <FormContainer item sm={8}>
        {/* <AddCommentForm /> */}
      </FormContainer>
    </Container>
  );
}

export default Comments;
