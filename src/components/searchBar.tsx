/*
 * File: searchBar.tsx
 * Project: @inventures/react-lib
 * File Created: Tuesday, 1st September 2020 9:46:25 am
 * Author: Luis Aparicio (luis@inventures.cl)
 * -----
 * Last Modified: Thursday, 10th September 2020 4:47:55 pm
 * Modified By: Mario Merino (mario@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import React, { useState, useCallback } from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { NorthWestIcon } from '../icons/NorthWest';
import Collapse from '@material-ui/core/Collapse';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() =>
  createStyles({
    box: {
      backgroundColor: 'white',
    },
    textField: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    inputField: {
      border: 'none',
      borderRadius: 4,
      width: '100%',
    },
    inputFieldCollapse: {
      width: '100%',
    },
    searchButtonHide: {
      display: 'none',
    },
    listIcon: {
      minWidth: 32,
    },

    searchInputBox: {
      justifyContent: 'flex-end',
    },
  }),
);

type SearchBarProps = {
  clearSearch: (value: string) => void;
};

export const SearchBar = ({
  clearSearch,
  ...props
}: SearchBarProps & TextFieldProps) => {
  const classes = useStyles();
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [showInputField, setshowInputField] = useState<boolean>(false);

  const handleInputChange = useCallback(() => {
    setshowInputField((prev) => !prev);
  }, [setshowInputField]);

  const handleIconChange = useCallback(() => {
    setShowIcon((prev) => !prev);
  }, [setShowIcon]);

  const handleTextFieldOnFocus = useCallback(() => {
    !showIcon && handleIconChange();
  }, [handleIconChange, showIcon]);

  const handleClearOnClick = useCallback(() => {
    handleInputChange();
    clearSearch('');
  }, [clearSearch, handleInputChange]);

  return (
    <Box display="flex" className={classes.searchInputBox}>
      {!showInputField && (
        <Fade in={!showInputField}>
          <IconButton size="small" onClick={handleInputChange}>
            <SearchIcon />
          </IconButton>
        </Fade>
      )}
      {showInputField && (
        <Collapse in={showInputField} className={classes.inputFieldCollapse}>
          <TextField
            {...props}
            autoFocus
            className={classes.inputField}
            onFocus={handleTextFieldOnFocus}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton size="small" onClick={handleClearOnClick}>
                    <ClearIcon fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          ></TextField>
        </Collapse>
      )}
    </Box>
  );
};

type SearchBoxProps = {
  searchResults: string[];
  onSuggestedClick: (value: string) => void;
  onClick?: () => void;
};

type SearchElementItemProps = {
  value: string;
  onSuggestedClick?: (value: string) => void;
  onClick: () => void;
};
export const SearchElementItem = ({
  value,
  onSuggestedClick,
  onClick,
}: SearchElementItemProps) => {
  const classes = useStyles();
  const handleSuggestedOnClick = useCallback(() => {
    if (!onSuggestedClick) return;
    onSuggestedClick(String(value));
  }, [onSuggestedClick, value]);
  return (
    <>
      <ListItem onClick={onClick} button ContainerComponent="div">
        <ListItemIcon className={classes.listIcon}>
          <SearchIcon />
        </ListItemIcon>
        <Typography
          className={classes.textField}
          color="textSecondary"
          component="p"
        >
          {value}
        </Typography>
        {!!onSuggestedClick && (
          <ListItemSecondaryAction>
            <IconButton
              size="small"
              onClick={handleSuggestedOnClick}
              edge="end"
              aria-label="buscar sugerencia"
            >
              <NorthWestIcon />
            </IconButton>
          </ListItemSecondaryAction>
        )}
      </ListItem>
      <Divider component="div" />
    </>
  );
};
