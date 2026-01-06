import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf';
import { useToast, VARIANT_OPTIONS} from '../ToastProvider';

import styles from './ToastPlayground.module.css';

function ToastPlayground() {
  const {
    messageText,
    setMessageText,
    variantOption,
    setVariantOption,
    handlePopToast
  } = useToast();
  
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form className={styles.controlsWrapper} onSubmit={handlePopToast}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea 
              id="message" 
              className={styles.messageInput}
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              aria-describedby="message-help"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                  handlePopToast(e);
                }
              }}
            />
            <div id="message-help" className={styles.hint}>
              Press Enter + Cmd/Ctrl to pop toast
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            role="radiogroup"
            aria-labelledby="variant-label"
          >
            {VARIANT_OPTIONS.map((option) => (
              <label htmlFor={`variant-${option}`} key={option}>
              <input
                id={`variant-${option}`}
                type="radio"
                name="variant"
                value={option}
                checked={variantOption === option}
                onChange={() => setVariantOption(option)}
              />
              {option}
            </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button type="submit">
              Pop Toast!
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
