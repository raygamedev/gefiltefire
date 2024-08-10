import { useState } from 'react';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { Game } from '@/components/Game/Game';
import { PageHeader } from '@/components/PageHeader/PageHeader';

export function HomePage() {
    const [isGameLoaded, setIsGameLoaded] = useState(false);
    console.log(isGameLoaded);
  return (
    <>
        <PageHeader />
        <Game
          setIsGameLoaded={setIsGameLoaded}
        />
    </>
  );
}
