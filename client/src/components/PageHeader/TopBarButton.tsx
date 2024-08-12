import { Button, Tooltip } from '@mantine/core';
import { ReactNode } from 'react';

interface TopBarButtonProps {
  text: string;
  icon: ReactNode;
  color: string;
  link?: string;
  isMobile: boolean;
  onClick?: (event: { preventDefault: () => void }) => void ;
}
const TopBarButton = ({
  text,
  icon,
  color,
  link,
  isMobile,
  onClick,
}: TopBarButtonProps) => isMobile ? (

    <Button
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      href={link}
      color={color}>
      {icon}
    </Button>
  ) : (
    <Button
      onClick={onClick}
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      color={color}
      leftSection={icon}

      >
      {text}
    </Button>
  );

export default TopBarButton;
