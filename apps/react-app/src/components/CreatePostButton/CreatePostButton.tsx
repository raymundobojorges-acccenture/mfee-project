import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";

import { Container } from "./CreatePostButton.styles";
import { Post } from "../../types";

interface CreatePostButtonInterface{
  handleOpenForm: (defaultValues?: Post) => void;
}

const CreatePostButton = ({ handleOpenForm }: CreatePostButtonInterface) => {
  return (
    <Container item>
      <IconButton color="primary" onClick={ () =>{ handleOpenForm() }}>
        <EditIcon />
      </IconButton>
    </Container>
  );
};

export default CreatePostButton;
