import React from 'react';

import { useToast } from '../ToastProvider';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toastList } = useToast();

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toastList.map(({ id, variant, message }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast id={id} variant={variant}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
