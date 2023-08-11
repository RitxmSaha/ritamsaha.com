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
        padding: '2px',
        paddingRight: hovered ? '25px' : '2px',  // Adjusts the padding on hover
        transition: 'padding 0.3s ease',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      }}
    >
      <span>{text}</span>
      <Box 
        component="span" 
        marginLeft="-19px"
        sx={{
          opacity: hovered ? 1 : 0,
          color: 'white',
          visibility: hovered ? 'visible' : 'hidden', 
          transform: 'translateX(21px)',  // <-- Added this line to move it 25px to the right
          transition: `opacity 0.3s ease ${hovered ? '0.3s' : '0s'}`, // Delays the opacity transition on hover
          display: 'flex', // Ensures that the icon is centered
        }}
      >
        <SearchIcon color="inherit" fontSize="small" style={{color: 'white'}} />
      </Box>
    </Box>
  );
};

export default HighlightLink;
