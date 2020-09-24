/*
 * File: 5-Modal.stories.tsx
 * Project: @inventures/react-lib
 * File Created: Wednesday, 23rd September 2020 4:11:55 pm
 * Author: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Last Modified: Thursday, 24th September 2020 2:16:31 pm
 * Modified By: Esperanza Horn (esperanza@inventures.cl)
 * -----
 * Copyright 2020 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import React, { useState } from 'react';
import { AlertModal } from '../components';
import Button from '@material-ui/core/Button';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'Modal',
};

export const CustomModal = () => {
  const [open, setOpen] = useState(false);
  const titleText = text('titleText', 'Validación receta');
  const contentText = text(
    'contentText',
    '¡Gracias! Nuestros químicos farmacéuticos van a verificar que todo esté en orden 👨🏻‍⚕️👩🏻‍⚕️ Te avisaremos si hay algún problema',
  );

  return (
    <>
      <Button variant="outlined" color="primary" onClick={() => setOpen(true)}>
        Open alert dialog
      </Button>
      <AlertModal
        title={titleText}
        content={contentText}
        open={open}
        setOpen={setOpen}
        actions={[
          {
            text: 'OK',
            onActionClick: () => setOpen(false),
            variant: 'contained',
          },
          {
            text: 'Aceptar',
            onActionClick: () => setOpen(false),
            variant: 'outlined',
          },
          {
            text: 'Cerrar',
            onActionClick: () => setOpen(false),
          },
        ]}
      />
    </>
  );
};
