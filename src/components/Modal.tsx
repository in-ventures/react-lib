/*
 * File: Modal.tsx
 * Project: @inventures/react-lib
 * File Created: Wednesday, 23rd September 2020 4:10:47 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Wednesday, 23rd September 2020 5:04:21 pm
 * Modified By: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import React, { useState } from 'react';
import { createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

type ModalProps = {
    open: boolean;
    title ?: string;
    content: string;
    setOpen: (open: boolean) => void;
    actions ?: ActionType[];
};

type ActionType = {
    text: string;
    onActionClick: () => void;
};

export function AlertModal(props: ModalProps) {
    const { title, open, content, actions, setOpen } = props;

    return (
        <div>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {content}
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {actions?.map((action: ActionType, index: number) => (
                        <Button onClick={action.onActionClick} color="primary">
                            {action.text}
                        </Button>
                    ))}
                </DialogActions>
            </Dialog>
        </div>
    );
}
