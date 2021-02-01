/*
 * File: Modal.tsx
 * Project: @inventures/react-lib
 * File Created: Wednesday, 23rd September 2020 4:10:47 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Monday, 1st February 2021 10:51:19 am
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

type ModalProps = {
  open: boolean;
  title: string;
  content: string;
  setOpen: (open: boolean) => void;
  onClose?: () => void;
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
  margin: {
    margin: 16,
  },
});

export function AlertModal(props: ModalProps) {
  const { title, open, content, actions, setOpen, onClose } = props;
  const classes = useStyles();

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => {
          onClose?.();
          setOpen(false);
        }}
        PaperProps={{ className: classes.margin }}
      >
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
