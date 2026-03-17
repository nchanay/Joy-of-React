import React from 'react';
import Link from 'next/link';

function ScreenSaverIndex() {
  return (
    <main>
      <p>Choose your color</p>
      <ol>
        <li><Link href="/exercises/01-screensaver/red">Red</Link></li>
        <li><Link href="/exercises/01-screensaver/green">Green</Link></li>
        <li><Link href="/exercises/01-screensaver/blue">Blue</Link></li>
      </ol>
    </main>
  );
}

export default ScreenSaverIndex;
