import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { BannerContent, BannerTitle, Container } from "./Banner.styles";
import { NavLink } from "react-router-dom";

// ACT 3 - Receive postImage and postTitle props
function Banner({postImage, postTitle}:{postImage : string, postTitle: string }) {
  return (
    <Container image={postImage}>
      {/* ACT 3 - Send postImage as image prop to Container component */}
      <BannerContent>
        <NavLink to={"/"}>
          <Button sx={{ color: "white" }} startIcon={<ArrowBackIosIcon />}
          // ACT 10 - Navigate to Home page 
          >
            View Posts
          </Button>
        </NavLink>
        <BannerTitle variant="h3">{postTitle}</BannerTitle>        
      </BannerContent>
    </Container>
  );
}

export default Banner;