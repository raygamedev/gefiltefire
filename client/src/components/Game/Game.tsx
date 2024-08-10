import { useEffect } from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import classes from './Game.module.css';
import { styled } from 'styled-components';
import {Button, Container} from '@mantine/core';

const GameContainer = styled.div`
  position: relative;
  width: 80%;
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 50vh; /* Full viewport height */
`;

interface Props {
    setIsGameLoaded: (value: boolean) => void;
}

export const Game = ({ setIsGameLoaded }: Props) => {
    const { unityProvider, isLoaded } = useUnityContext({
        loaderUrl: 'build/test.loader.js',
        dataUrl: 'build/test.data',
        frameworkUrl: 'build/test.framework.js',
        codeUrl: 'build/test.wasm',
    });

    useEffect(() => {
        setIsGameLoaded(isLoaded);
    }, [setIsGameLoaded, isLoaded]);
    const openFullscreen = () => {
        const elem = document.getElementById('unity-container');

        if (elem) {
            if (elem.requestFullscreen) {
                void elem.requestFullscreen();
            } else {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                if (elem.webkitRequestFullscreen) { /* Safari */
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    elem.webkitRequestFullscreen();
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                } else if (elem.msRequestFullscreen) { /* IE11 */
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    elem.msRequestFullscreen();
                }
                else {
                    // For iOS Safari, fallback to making the container fill the screen.
                    elem.style.position = 'fixed';
                    elem.style.top = '0';
                    elem.style.left = '0';
                    elem.style.width = '100vw';
                    elem.style.height = '100vh';
                    elem.style.zIndex = '9999';
                }
            }
        }
    };

    return (
        <CenteredContainer>
            <GameContainer>
                <Unity
                    id={'unity-container'}
                    style={{
                        borderRadius: '15px',
                        width: '100%',
                        height: '100%',
                    }}
                    unityProvider={unityProvider}
                />
                <Button onClick={openFullscreen}/>
            </GameContainer>
        </CenteredContainer>
    );
};