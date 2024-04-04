import { ButtonGroup } from "@mui/material";

import { Container, StyledButton } from "./CategoryButtonGroup.styles";

const categoryOptions = [
  {
    key: "all",
    name: "All",
  },
  {
    key: "healt",
    name: "Health",
  },
  {
    key: "travel",
    name: "Travel",
  },
  {
    key: "sports",
    name: "Sports",
  },
];

function CategoryButtonGroup() {
  return (
    <Container item>
      <ButtonGroup aria-label="category button group" color="inherit">
        { categoryOptions.map((category) => (
          <StyledButton type="button" selected={false}>
              {/* DONE Activity 1 - Render category name */}
              <label key={category.key}> {category.name} </label>
          </StyledButton>
        )) }
      </ButtonGroup>
    </Container>
  );
}

export default CategoryButtonGroup;
