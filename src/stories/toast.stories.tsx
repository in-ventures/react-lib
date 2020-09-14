import React from 'react';
import { text, number, select } from '@storybook/addon-knobs';
import { ToastProvider, useToast } from '../hooks/toast.hook';

export default {
  title: 'Toast',
};

type ToastTypes = 'warning' | 'error' | 'info' | 'success';
const OpenToast = () => {
  const { showToast } = useToast();
  const message = text('Message', 'Lo que sea exitoso');
  const duration = number('Duration(ms)', 10);
  const type: ToastTypes = select(
    'Type',
    {
      success: 'success',
      warning: 'warning',
      error: 'error',
      info: 'info',
    },
    'success',
  );

  const props = {
    message: message,
    type: type,
    duration: duration,
  };
  return (
    <button
      onClick={() => {
        showToast(props);
      }}
    >
      Show toast
    </button>
  );
};

export const EditableToast = () => {
  return (
    <ToastProvider>
      <OpenToast></OpenToast>
    </ToastProvider>
  );
};
