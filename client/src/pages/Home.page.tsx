import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { Game } from '@/components/Game/Game';
import { useState } from 'react';
import {PageHeader} from "@/components/PageHeader/PageHeader";

export function HomePage() {
    const [isGameLoaded, setIsGameLoaded] = useState(false);
  return (
    <>
        <PageHeader />
        <Game
            setIsGameLoaded={setIsGameLoaded}
        />
      <ColorSchemeToggle />
    </>
  );
}
