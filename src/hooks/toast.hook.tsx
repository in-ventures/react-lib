import 'regenerator-runtime/runtime.js';

import React, {
  useCallback,
  useRef,
  createContext,
  useContext,
  useReducer,
} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

type ToastTypes = 'warning' | 'error' | 'info' | 'success';
type ToastContextValue = {
  showToast: (data: {
    message: string;
    type?: ToastTypes;
    duration?: number;
  }) => void;
};
type ToastProps = {
  message: string;
  type?: ToastTypes;
  exit?: boolean;
};
type ShowToastParams = ToastProps & {
  key: number;
  duration?: number;
};
type ToastReducerState = {
  toasts: (ToastProps & ShowToastParams)[];
};
type ToastAction = {
  type: string;
  payload: number | ShowToastParams;
};
type ToastProviderProps = {
  children: React.ReactNode;
};

const ToastContext = createContext<ToastContextValue>({
  showToast: () => {},
});
export const useToast = () => {
  const { showToast } = useContext(ToastContext);
  return { showToast };
};
function reducer(
  state: ToastReducerState = { toasts: [] },
  action: ToastAction,
): ToastReducerState {
  switch (action.type) {
    case 'add_toast':
      return { toasts: [...state.toasts, action.payload as ShowToastParams] };
    case 'exit_toast': {
      const index = state.toasts.findIndex(
        (toast) => toast.key === (action.payload as number),
      );
      return {
        toasts: [
          ...state.toasts.slice(0, index),
          { ...state.toasts[index], exit: true },
          ...state.toasts.slice(index + 1),
        ],
      };
    }
    case 'remove_toast': {
      const index = state.toasts.findIndex(
        (toast) => toast.key === (action.payload as number),
      );
      return {
        toasts: [
          ...state.toasts.slice(0, index),
          ...state.toasts.slice(index + 1),
        ],
      };
    }
    default:
      return state;
  }
}
export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [{ toasts }, dispatch] = useReducer(reducer, { toasts: [] });
  const i = useRef(1);
  const addToast = useCallback(
    (data: { message: string; type?: ToastTypes; key: number }) => {
      dispatch({ type: 'add_toast', payload: data });
    },
    [dispatch],
  );
  const hideToast = useCallback(
    (key: number) => {
      dispatch({ type: 'exit_toast', payload: key });
      setTimeout(() => dispatch({ type: 'remove_toast', payload: key }), 1000);
    },
    [dispatch],
  );
  const showToast = useCallback(
    (data: { message: string; type?: ToastTypes; duration?: number }) => {
      const key = i.current;
      const { duration, message, type } = data;
      addToast({ message, type, key });
      i.current += 1;
      setTimeout(() => {
        hideToast(key);
      }, duration || 5000);
    },
    [addToast, hideToast],
  );
  const toastHandler = { showToast };
  return (
    <ToastContext.Provider value={toastHandler}>
      {children}
      {toasts.map(({ key, ...toast }) => {
        return (
          <Snackbar autoHideDuration={toast.duration} open={true} key={key}>
            <Alert severity={toast.type}>{toast.message}</Alert>
          </Snackbar>
        );
      })}
    </ToastContext.Provider>
  );
};
