import { ButtonGroup } from '@mui/material';

import { Container, StyledButton } from './CategoryButtonGroup.styles';
import { Post } from '../../types';

interface CategoryButtonGroupProps {
  categorySelected: string;
  handleCategorySelect: (category: string) => void;
}

interface Category {
  key: string;
  name: string;
}

const categoryOptions = [
  {
    key: 'all',
    name: 'All'
  },
  {
    key: 'healt',
    name: 'Health'
  },
  {
    key: 'travel',
    name: 'Travel'
  },
  {
    key: 'sports',
    name: 'Sports'
  }
];

// const categorySelected = 'All';

function CategoryButtonGroup({ categorySelected, handleCategorySelect }: CategoryButtonGroupProps) {
  return (
    <Container item>
      <ButtonGroup aria-label="category button group" color="inherit">
        {categoryOptions.map((category: Category) => {
          return (
            <StyledButton
              type="button"
              key={category.key}
              selected={category.name === categorySelected}
              onClick={() => {
                handleCategorySelect(category.name);
              }}
            >
              {category.name}
            </StyledButton>
          );
        })}
        ;
      </ButtonGroup>
    </Container>
  );
}

export default CategoryButtonGroup;
