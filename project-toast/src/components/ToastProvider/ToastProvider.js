import React from 'react';

import useEscapeKey from '../../hooks/useEscapeKey';

export const ToastContext = React.createContext();

export function toastContext() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

function ToastProvider({ children}) {
  const [toastList, setToastList] = React.useState([]);

  const handleEscape = React.useCallback(() => {
    setToastList([]);
  }, []);

  useEscapeKey(handleEscape);

  function createToast(message, variant) {
    const newToast = { variant, message, id: crypto.randomUUID() };
    setToastList([...toastList, newToast]);
  }

  function handleDismiss(id) {
    setToastList(toastList.filter((toast) => toast.id !== id));
  }

  return (
    <ToastContext.Provider 
      value={{
        toastList, 
        createToast, 
        handleDismiss
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
