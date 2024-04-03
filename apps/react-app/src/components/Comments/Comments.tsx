import { Title, Container } from './Comments.styles';
import CommentCard from '../CommentCard';
import { Comment } from '../../types';

interface CommentsProps{
  comments: Comment[];
} 

function Comments( { comments }: CommentsProps ) {
  console.log(comments, 'comments');
  return (
    <Container container>
      <Title item sm={8}>
        <h4>Comments</h4>
      </Title>
      {/* Activity 5 - Iterate comments */}
      { comments.length > 0 && < CommentCard comment={ comments[0] } /> }
    </Container>
  );
}

export default Comments;
