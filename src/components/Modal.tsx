/*
 * File: Modal.tsx
 * Project: @inventures/react-lib
 * File Created: Wednesday, 23rd September 2020 4:10:47 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Friday, 9th October 2020 10:41:16 am
 * Modified By: Gabriel Ulloa (gabriel@inventures.cl)
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

type ModalProps = {
  open: boolean;
  title: string;
  content: string;
  setOpen: (open: boolean) => void;
  actions?: ActionType[];
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
});

export function AlertModal(props: ModalProps) {
  const { title, open, content, actions, setOpen } = props;
  const classes = useStyles();
  console.log({ content });
  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.contentText}>
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {actions?.map((action: ActionType, index: number) => (
            <Button
              key={index}
              onClick={action.onActionClick}
              color="primary"
              variant={action.variant}
            >
              {action.text}
            </Button>
          ))}
        </DialogActions>
      </Dialog>
    </div>
  );
}
