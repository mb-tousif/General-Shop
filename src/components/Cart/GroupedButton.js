import { Button, ButtonGroup, styled} from '@mui/material';
import React from 'react';

const Component = styled(ButtonGroup)`
  margin-top: 30px;
`;

const CustomBtn = styled(Button)`
  border-radius: 50%;
`

const GroupedButton= () => {
    return (
      <Component>
        <CustomBtn>-</CustomBtn>
        <Button disabled>1</Button>
        <CustomBtn>+</CustomBtn>
      </Component>
    );
};

export default GroupedButton;