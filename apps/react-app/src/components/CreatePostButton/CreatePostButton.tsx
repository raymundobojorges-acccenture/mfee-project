import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";

import { Post } from "../../types";
import { Container } from "./CreatePostButton.styles";

interface CreatePostButtonProps {
  handleOpenForm: (defaultValues?: Post) => void; // Definir el tipo de la función handleOpenForm
}
const CreatePostButton = ({handleOpenForm}: CreatePostButtonProps) => {
  return (
    <Container item>
      <IconButton color="primary" onClick={() =>{
        // DONE Activity 3 - Uncomment next line
        handleOpenForm()
      }}>
        <EditIcon />
      </IconButton>
    </Container>
  );
};

export default CreatePostButton;
