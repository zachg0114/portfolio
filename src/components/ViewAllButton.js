'use client'; // This is a client-side component since it has interactivity

import { Button } from '@nextui-org/react';

const ViewAllButton = () => {
  return (
    <Button
      color="gradient" // Applying a gradient color theme
      size="lg" // Large button for emphasis
      variant="bordered" // Bordered style to match the site's clean look
      css={{
        borderColor: '#a855f7', // Custom border color to match the purple theme
        background: 'linear-gradient(90deg, #a855f7, #9333ea)', // Custom gradient for purple look
        color: 'white', // Ensure text is white for contrast
        '&:hover': {
          background: 'linear-gradient(90deg, #9333ea, #7e22ce)', // Darker gradient on hover for effect
        },
      }}
      onPress={() => window.open('https://github.com/zachg0114', '_blank')}
    >
      View All Projects
    </Button>
  );
};

export default ViewAllButton;
