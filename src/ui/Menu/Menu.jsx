import { Cross as Hamburger } from 'hamburger-react';

export const Menu = ({isOpen, onClick: handleClick}) => {
  return (
    <>
      <Hamburger
        color='#94A3B8'
        size={18}
        distance='sm'
        rounded
        toggled={isOpen}
        toggle={handleClick}
        direction='right'
        hideOutline={false}
      />
    </>
  );
};
