import React from 'react';

import useEscapeKey from '../../hooks/useEscapeKey';

export const ToastContext = React.createContext();
export const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

function ToastProvider({ children}) {
  const [messageText, setMessageText] = React.useState('');
  const [variantOption, setVariantOption] = React.useState(VARIANT_OPTIONS[0]);
  const [toastList, setToastList] = React.useState([]);

  const handleEscape = React.useCallback(() => {
    setToastList([]);
  }, []);

  useEscapeKey(handleEscape);

  function handlePopToast(e) {
    e.preventDefault();
    const newToast = { variant: variantOption, message: messageText, id: crypto.randomUUID() };
    setToastList([...toastList, newToast]);
    setMessageText('');
    setVariantOption(VARIANT_OPTIONS[0]);
  }

  function handleDismiss(id) {
    setToastList(toastList.filter((toast) => toast.id !== id));
  }

  return (
    <ToastContext.Provider 
      value={{
        messageText,
        setMessageText,
        variantOption,
        setVariantOption,
        toastList, 
        handlePopToast, 
        handleDismiss
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
