import React, { useState } from "react";
import { Popover, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const StyledButton = styled(IconButton)({
  position: "fixed",
  bottom: "10px",
  right: "150px",
  zIndex:9999
});

const ChatBox = ({ options }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <StyledButton onClick={handleClick}>
        <WhatsAppIcon color="success" />
      </StyledButton>

      <Popover
        id="chat-popover"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <div>
          {Object.keys(options).map((option) => (
            <div key={option} onClick={handleClose}>
              {option}: {options[option]}
            </div>
          ))}
        </div>
      </Popover>
    </div>
  );
};

export default ChatBox;
