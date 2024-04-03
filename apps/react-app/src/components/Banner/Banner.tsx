import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { BannerContent, BannerTitle, Container } from './Banner.styles';

interface BannerProps {
  image: string;
  title: string;
}

function Banner({ image, title }: BannerProps) {
  return (
    <Container image={ image }  >
      <BannerContent>
        <Button sx={{ color: 'white' }} startIcon={<ArrowBackIosIcon />}>
          View Posts
        </Button>
        <BannerTitle variant="h3">{title}</BannerTitle>
      </BannerContent>
    </Container>
  );
}

export default Banner;
