import {
    Container,
    Group,
    Burger,
    useMantineColorScheme,
    useComputedColorScheme,
    Tooltip,
    ActionIcon, Button,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
    IconBrandGithub,
 IconMoon, IconSun,
} from '@tabler/icons-react';
import classes from './PageHeader.module.css';

export function PageHeader() {
    const [opened, { toggle }] = useDisclosure(false);
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                <div> Logo should be here </div>
                <Group gap={5} visibleFrom="xs">
                    <Tooltip label="Go to GitHub repository">
                        <Button
                          component="a"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/raygamedev/gefiltefire"
                          color="gray"
                          leftSection={<IconBrandGithub size={25} />}>
                            GitHub
                        </Button>
                    </Tooltip>
                    <Tooltip label={computedColorScheme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}>
                        <ActionIcon color="gray" size="lg" onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}>
                            {computedColorScheme === 'light' ? <IconSun /> : <IconMoon />}
                        </ActionIcon>
                    </Tooltip>
                </Group>

                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
            </Container>
        </header>
    );
}
