import { Title, Container } from "./Comments.styles";
import CommentCard from "../CommentCard";

interface Comment {
  id: string;
  author: string;
  content: string;
}

interface CommentsProps {
  comments: Comment[];
}

function Comments(comments: CommentsProps) {
  const commentList = comments.comments;
  return (
    <Container container>
      <Title item sm={8}>
        <h4>Comments</h4>
      </Title>
      {/* DONE Activity 1 - Render CommentCard */}
      {commentList.length > 0 && (
        <>
          {/* DONE Activity 1 - Render CommentCard */}
          {commentList.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </>
      )}
      {/* DONE Activity 4 - Render CommentCard only if comments array is greater than zero */}
      {/* Activity 5 - Iterate comments */}
      {/* DONE Activity 3 - Send comment prop */}
    </Container>
  );
}

export default Comments;
