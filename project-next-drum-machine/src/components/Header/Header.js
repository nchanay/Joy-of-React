'use client';
import React from 'react';
import { Volume2, VolumeX } from 'react-feather';
import { useSoundEnabledContext } from '../SoundEnabledProvider';
import VisuallyHidden from '../VisuallyHidden';
import MaxWidthWrapper from '../MaxWidthWrapper';
import styles from './Header.module.css';

export function Header() {
  const { soundEnabled, setSoundEnabled } = useSoundEnabledContext();

  return (
    <header className={styles.wrapper}>
      <MaxWidthWrapper className={styles.innerWrapper}>
        <a href="/">Kool Website</a>
        <button onClick={() => setSoundEnabled(!soundEnabled)}>
          {soundEnabled ? <Volume2 /> : <VolumeX />}
          <VisuallyHidden>
            {soundEnabled ? 'Disable sound effects' : 'Enable sound effects'}
          </VisuallyHidden>
        </button>
      </MaxWidthWrapper>
    </header>
  );
}
