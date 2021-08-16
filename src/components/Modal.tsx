/*
 * File: Modal.tsx
 * Project: @inventures/react-lib
 * File Created: Wednesday, 23rd September 2020 4:10:47 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Monday, 16th August 2021 12:52:03 pm
 * Modified By: Luis Aparicio (luis@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

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
  content: string | React.ReactElement;
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
          {content && typeof content == 'string' ? (
            <DialogContentText
              className={clsx(classes.contentText, propClasses?.content)}
            >
              {content}
            </DialogContentText>
          ) : (
            <div className={clsx(classes.contentText, propClasses?.content)}>
              {content}
            </div>
          )}
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
