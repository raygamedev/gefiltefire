import { useEffect, useState } from 'react';
import { useMantineColorScheme } from '@mantine/core';
import { Game } from '@/components/Game/Game';
import { PageHeader } from '@/components/PageHeader/PageHeader';

export function HomePage() {
    const [isGameLoaded, setIsGameLoaded] = useState(false);
    const { setColorScheme } = useMantineColorScheme();
    console.log(isGameLoaded);
    useEffect(() => {
        setColorScheme('dark');
    }, []);
  return (
    <>
        <PageHeader />
        <Game
          setIsGameLoaded={setIsGameLoaded}
        />
    </>
  );
}
