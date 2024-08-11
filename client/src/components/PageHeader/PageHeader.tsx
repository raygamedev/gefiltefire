import { Container, Group, Burger, rem, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconFileDescription, IconMoon,
} from '@tabler/icons-react';
import classes from './PageHeader.module.css';
import { ActionToggle } from '@/components/PageHeader/ColorSchemeToggle/ColorSchemeToggle';
import TopBarButton from '@/components/PageHeader/TopBarButton';

const links = [
    { link: '/about', label: 'Features' },
    { link: '/pricing', label: 'Pricing' },
    { link: '/learn', label: 'Learn' },
    { link: 'https://github.com/raygamedev/gefiltefire', label: 'GitHub' },
];

export function PageHeader() {
    const [opened, { toggle }] = useDisclosure(false);
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                <div> Logo should be here </div>
                <Group gap={5} visibleFrom="xs">
                    <TopBarButton text="GitHub" icon={<IconBrandGithub size={25} />} color="gray" isMobile={false} />
                    <TopBarButton
                      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
                      text=""
                      icon={<IconMoon />}
                      color="gray"
                      isMobile={false} />
                    <ActionToggle />
                </Group>

                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
            </Container>
        </header>
    );
}
