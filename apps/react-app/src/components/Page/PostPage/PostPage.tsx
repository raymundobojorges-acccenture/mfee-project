import Banner from "../../Banner";
import Comments from "../../Comments";
import {
  Container,
  BannerContainer,
  CommentsContainer,
  DescriptionContainer,
} from "./PostPage.styles";

import Loading from "../../Loading/Index";
import { useState, useEffect, useCallback } from "react";
import { Post, PostResponse, CommentResponse } from "../../../types";
import { getPost } from "../../../api";


/*const post = {
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
    {
      _id: "02",
      author: "Jhon",
      content: "this is other comment example.",
      createdAt: "2024",
      updatedAt: "2024",
      __v: "000",
    },
   ],
   description: "Parque impresionante en un entorno boscoso, famoso por sus senderos naturales y un observatorio en la montaña.",
 };*/



  const postID = "6661055a82f08e5ed86ae7f5"

function PostPage() {
  // ACT 9 - Use postID variable to fetch the post data
  // ACT 10 - Get postID from route params
  const [post, setPost] = useState<Post>();

    /*get post*/
    const getPostData = useCallback(
      async ({
        postID
      }: {
        postID: string;
      }) => {
      const onSuccess = (data: PostResponse) => {
  
        const post : Post = {
          id: data._id,
          title: data.title,
          image: data.image,
          description: data.description,
          category: data.category,
          comments: ["", ""]     
        }
       
        setPost(post);
        console.log(data)
      };
  
      await getPost({postID, onSuccess})
    }, []);
    /*+get post+*/

    useEffect(() => {
      getPostData({postID})
     }, [getPostData]);

  if (!post) return <Loading />;

  return (
    <Container container>
      <BannerContainer item>
        {/* ACT 1 - Render Banner component */}
        {/* ACT 3 - Send postImage and postTitle as props to Banner component */}
        <Banner postImage={post.image} postTitle={post.title} ></Banner>
      </BannerContainer>

      <DescriptionContainer item>
        <p>{/* ACT 1 - Render post description */}</p>
        <p>{post.description}</p>
      </DescriptionContainer>
      <CommentsContainer item>
        {/* ACT 1 - Render Comments component */}
        {/* ACT 3 - Send comments as prop to Comments component */}
        <Comments comments={post.comments}></Comments>
      </CommentsContainer>
    </Container>
  );
}

export default PostPage;
