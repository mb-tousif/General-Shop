import React, { useState } from 'react';
import { Box, Button, Menu, MenuItem, styled } from '@mui/material';
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
const Profile = ({ account, setAccount }) => {
  const CustomButton = styled(Button)`
    background: orange;
    color: green;
    margin-left: 10px;
    margintop: 2px;
  `;

  const [open, setOpen] = useState(false);
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const logoutUser = () => {
    setAccount("");
  };

  return (
    <>
      <Box onClick={handleClick}>
        <CustomButton
          onClick={() => {
            handleClose();
            logoutUser();
          }}
        >
          {account}
        </CustomButton>
        <Menu anchorEl={open} open={Boolean(open)} onClose={handleClose}>
          <MenuItem onClick={handleClose}>
            <PowerSettingsNewIcon />
            Logout
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
};

export default Profile;