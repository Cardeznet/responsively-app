import { Icon } from '@iconify/react';
import { useState } from 'react';
import Button from 'renderer/components/Button';
import MenuFlyout from './Flyout';

const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="relative flex items-center">
      <Button onClick={() => setIsOpen(!isOpen)} isActive={isOpen}>
        <Icon icon="carbon:overflow-menu-vertical" />
      </Button>
      {isOpen ? <MenuFlyout /> : null}
    </div>
  );
};

export default Menu;
