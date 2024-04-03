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
       {/* Activity 4 - Render CommentCard only if comments array is greater than zero */}
      {/* Activity 5 - Iterate comments */}
      <CommentCard comment={comments[0]}/>
    </Container>
  );
}

export default Comments;
