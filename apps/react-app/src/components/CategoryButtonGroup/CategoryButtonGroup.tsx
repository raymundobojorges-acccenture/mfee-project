import { ButtonGroup } from '@mui/material';

import { Container, StyledButton } from './CategoryButtonGroup.styles';
import { Post } from '../../types';

interface CategoryButtonGroupProps {
  categorySelected: string;
  handleCategorySelect: (category: string) => void;
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

const categorySelected = 'All';

function CategoryButtonGroup({ categorySelected, handleCategorySelect }: CategoryButtonGroupProps) {
  return (
    <Container item>
      <ButtonGroup aria-label="category button group" color="inherit">
        {/* Activity 5 - Iterate categoryOptions */}
        <StyledButton
          type="button"
          // Activity 5 - Replaces the hardcoded value "categoryOptions[0].name" with the variable obtained from the iteration and uses the variable "categorySelected" obtained from the props
          selected={ categoryOptions[0].name === categorySelected }
          onClick={() => {
            //  Activity 5 - After you have iterated the "categoryOptions" array, send the "name" property as a parameter to the "handleSelectCategory" function
          }}
        >
          {/* Activity 5 - Render category name */}
        </StyledButton>
      </ButtonGroup>
    </Container>
  );
}

export default CategoryButtonGroup;
