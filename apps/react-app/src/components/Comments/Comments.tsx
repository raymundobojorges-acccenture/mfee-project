import { Title, Container } from './Comments.styles';
import CommentCard from '../CommentCard';
import { Comment } from '../../types';

interface CommentsProps {
  comments: Comment[];
}

function Comments({ comments }: CommentsProps) {
  return (
    <Container container>
      <Title item sm={8}>
        <h4>Comments</h4>
      </Title>
      {comments.length > 0 &&
        comments.map((comment: Comment) => {
          return <CommentCard key={comment.id} comment={comment} />;
        })}
    </Container>
  );
}

export default Comments;
