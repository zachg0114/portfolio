'use client'; // This is a client-side component since it has interactivity

import { Button } from '@nextui-org/react';

const ViewAllButton = () => {
  return (
    <Button
      auto
      bordered
      color="gradient"
      onClick={() => window.open('https://github.com/zachg0114', '_blank')}
    >
      View All Projects
    </Button>
  );
};

export default ViewAllButton;
