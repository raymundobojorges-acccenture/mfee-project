import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { BannerContent, BannerTitle, Container } from "./Banner.styles";

const postTitle = "A good place to camp";
const postImage =
  "https://th.bing.com/th/id/R.e0bad63364a867fea652212c254bf869?rik=avtecz5aXVdevA&riu=http%3a%2f%2fwww.viajejet.com%2fwp-content%2fviajes%2fLago-Moraine-Parque-Nacional-Banff-Alberta-Canada.jpg&ehk=6qRhWDqqQAEkSFs%2bHP8p2Bl6XfPbjznSoORh%2bsEJ%2bQE%3d&risl=&pid=ImgRaw&r=0";

  interface Comment {
    id: string;
    author: string;
    content: string;
  }
  
  interface Post {
    id: string;
    title: string;
    image: string;
    description: string;
    category: string;
    comments: Comment[];
  }
  
  interface BannerProps {
    post: Post;
  }

function Banner(post: BannerProps) {
  return (
    <Container
      // DONE Activity 3 - Replace string with postImage prop
      image={post.post.image}
    >
      <BannerContent>
        <Button sx={{ color: "white" }} startIcon={<ArrowBackIosIcon />}>
          View Posts
        </Button>
        <BannerTitle variant="h3">
          {/* DONE Activity 1 - Render post title */}
          { post.post.title }
        </BannerTitle>
      </BannerContent>
    </Container>
  );
}

export default Banner;
