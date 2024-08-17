import { Cross as Hamburger } from 'hamburger-react';
import { useState } from 'react';

export const Menu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
      <Hamburger
        color='#94A3B8'
        size={18}
        distance='sm'
        rounded
        toggled={isOpen}
        toggle={setOpen}
        direction='right'
        hideOutline={false}
      />
  );
};
