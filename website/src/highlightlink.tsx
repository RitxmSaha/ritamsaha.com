import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';

type Props = {
  text: string;
  link: string;
};

const HighlightLink: React.FC<Props> = ({ text, link }) => {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    window.open(link, '_blank');
  }

  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      sx={{
        cursor: 'pointer',
        backgroundColor: '#856AB8',
        display: 'inline-flex',
        alignItems: 'center',
        borderRadius: '5px',
        padding: '1px',
        marginTop: '1px',
        paddingLeft: '2px',
        marginBottom: '1px',
        paddingRight: '3px',
        transition: 'padding 0.3s ease, box-shadow 0.3s ease, opacity 0.5s ease', // Added opacity to transition
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        boxShadow: hovered ? '0px 0px 5px rgba(100, 100, 100, 1)' : 'none',  // Box shadow added on hover
        opacity: hovered ? '1' : '0.8', // Adjust opacity from 0.5 (initial) to 1 on hover
      }}
    >
      <span>{text}</span>
    </Box>
  );
};

export default HighlightLink;
