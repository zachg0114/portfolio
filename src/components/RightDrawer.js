// components/RightDrawer.js
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';

export default function RightDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setIsOpen(open);
  };

  // Define the menu items with correct page links
  const menuItems = [
    { text: 'Home', link: '/' },
    { text: 'About', link: '/about' },
    { text: 'My Resume', link: 'https://drive.google.com/file/d/1fxjLNMYXmz_nkYEnqLHqEGXVwtJiV2Mz/view?usp=sharing' },
  ];

  return (
    <>
      {/* Animated Menu Button */}
      <div
        style={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          zIndex: 1300,
          cursor: 'pointer',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Top Line */}
        <motion.div
          style={{
            position: 'absolute',
            width: '30px',
            height: '3px',
            backgroundColor: '#fff',
            borderRadius: '2px',
          }}
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 0 : -8,
          }}
          transition={{ duration: 0.3 }}
        />
        {/* Middle Line */}
        <motion.div
          style={{
            position: 'absolute',
            width: '30px',
            height: '3px',
            backgroundColor: '#fff',
            borderRadius: '2px',
          }}
          animate={{
            opacity: isOpen ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
        {/* Bottom Line */}
        <motion.div
          style={{
            position: 'absolute',
            width: '30px',
            height: '3px',
            backgroundColor: '#fff',
            borderRadius: '2px',
          }}
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? 0 : 8,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Drawer Component */}
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: {
            width: '250px',
            backgroundColor: '#0a0c1a',
            color: '#fff',
          },
        }}
      >
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              button
              component="a"
              href={item.link}
              key={index}
              onClick={() => setIsOpen(false)} // Close the drawer when an item is clicked
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
