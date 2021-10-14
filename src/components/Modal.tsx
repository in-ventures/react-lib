/*
 * File: Modal.tsx
 * Project: @inventures/react-lib
 * File Created: Wednesday, 23rd September 2020 4:10:47 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Thursday, 14th October 2021 3:36:59 pm
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import 'regenerator-runtime/runtime.js';
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import {
  DialogActions,
  makeStyles,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import clsx from 'clsx';

type ModalProps = {
  open: boolean;
  title: string;
  content?: string;
  children?: React.ReactElement;
  setOpen: (open: boolean) => void;
  onClose?: () => void;
  actions?: ActionType[];
  disableBackdropClick?: boolean;
  disableEscapeKeyDown?: boolean;
  onBackdropClick?: () => void;
  classes?: {
    dialogPaper?: string;
    title?: string;
    content?: string;
    actionsContainer?: string;
    actionButton?: string;
  };
};

type ActionType = {
  text: string;
  onActionClick: () => void;
  variant?: 'text' | 'outlined' | 'contained' | undefined;
};

const useStyles = makeStyles({
  contentText: {
    textAlign: 'center',
    whiteSpace: 'pre-line',
  },
  margin: {
    margin: 16,
  },
});

export function AlertModal(props: ModalProps) {
  const {
    title,
    open,
    content,
    children,
    actions,
    setOpen,
    onClose,
    disableBackdropClick,
    disableEscapeKeyDown,
    onBackdropClick,
    classes: propClasses,
    ...otherProps
  } = props;
  const classes = useStyles();

  return (
    <div>
      <Dialog
        {...otherProps}
        open={open}
        onClose={() => {
          onClose?.();
          setOpen(false);
        }}
        PaperProps={{
          className: clsx(classes.margin, propClasses?.dialogPaper),
        }}
        disableBackdropClick={disableBackdropClick}
        disableEscapeKeyDown={disableEscapeKeyDown}
        onBackdropClick={onBackdropClick}
      >
        <DialogTitle className={clsx(propClasses?.title)}>{title}</DialogTitle>
        <DialogContent>
          {content && (
            <DialogContentText
              className={clsx(classes.contentText, propClasses?.content)}
            >
              {content}
            </DialogContentText>
          )}
          {children}
        </DialogContent>
        <DialogActions className={clsx(propClasses?.actionsContainer)}>
          {actions?.map((action: ActionType, index: number) => (
            <Button
              key={index}
              onClick={action.onActionClick}
              color="primary"
              variant={action.variant}
              className={clsx(propClasses?.actionButton)}
            >
              {action.text}
            </Button>
          ))}
        </DialogActions>
      </Dialog>
    </div>
  );
}
