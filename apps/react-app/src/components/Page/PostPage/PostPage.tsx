import Banner from "../../Banner";
import Comments from "../../Comments";
import {
  Container,
  BannerContainer,
  CommentsContainer,
  DescriptionContainer,
} from "./PostPage.styles";

const post = {
  image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/30/90/8a/caption.jpg?w=1200&h=-1&s=1",
  title: "Chipinque",
  postID: "001",
  comments: [
    {
      _id: "01",
      author: "santiago",
      content: "this is an comment example.",
      createdAt: "2024",
      updatedAt: "2024",
      __v: "000",
    },
   ],
   description: "Parque impresionante en un entorno boscoso, famoso por sus senderos naturales y un observatorio en la montaña.",
 };

function PostPage() {
  return (
    <Container container>
      <BannerContainer item>
        <Banner></Banner>
      </BannerContainer>
      <DescriptionContainer item>
        <p>{post.description}</p>
      </DescriptionContainer>
      <CommentsContainer item>
        <Comments></Comments>
      </CommentsContainer>
    </Container>
  );
}

export default PostPage;
