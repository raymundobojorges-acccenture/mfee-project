import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { BannerContent, BannerTitle, Container } from "./Banner.styles";

const postImage = "https://lp-cms-production.imgix.net/2023-08/shutterstock1046018665.jpg?auto=format&w=1920&h=640&fit=crop&crop=faces,edges&q=75";
 const postTitle = "Ciudad de las montañas";

function Banner() {
  return (
    <Container image={postImage}>
      <BannerContent>
        <Button sx={{ color: "white" }} startIcon={<ArrowBackIosIcon />}>
          View Posts
        </Button>
        <BannerTitle variant="h3">
          {postTitle}
        </BannerTitle>
      </BannerContent>
    </Container>
  );
}

export default Banner;
