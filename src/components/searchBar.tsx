/*
 * File: searchBar.tsx
 * Project: @inventures/react-lib
 * File Created: Tuesday, 1st September 2020 9:46:25 am
 * Author: Luis Aparicio (luis@inventures.cl)
 * -----
 * Last Modified: Tuesday, 8th September 2020 11:37:13 am
 * Modified By: Luis Aparicio (luis@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import React, { useState, useCallback } from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { ReactComponent as NorthWestArrow } from '../assets/north_west-24px.svg';
import Collapse from '@material-ui/core/Collapse';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      backgroundColor: 'white',
    },
    textField: {
      fontFamily: theme.typography.fontFamily,
      overflow: 'hidden',
      'white-space': 'nowrap',
      fontweight: 'normal',
      fontstretch: 'normal',
      fontstyle: 'normal',
      lineheight: 'normal',
      letterspacing: 0.15,
      textOverflow: 'ellipsis',
    },
    northWestArrow: {
      fill: '#757575',
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
      minWidth: 35,
    },
    dividerMargin: {
      marginLeft: 50,
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
  itemBehaviorOnClick?: () => void;
};

export const SearchResultList = ({
  searchResults,
  onSuggestedClick,
  itemBehaviorOnClick,
}: SearchBoxProps) => {
  const classes = useStyles();

  const handleSuggestedOnClick = useCallback(
    (value) => () => {
      onSuggestedClick(String(value));
    },
    [onSuggestedClick],
  );

  return (
    <Box className={classes.box} display="block">
      <List>
        {searchResults.map((value) => (
          <React.Fragment key={value}>
            <ListItem key={value} onClick={itemBehaviorOnClick} button>
              <ListItemIcon className={classes.listIcon}>
                <SearchIcon fontSize="small" />
              </ListItemIcon>
              <Typography
                className={classes.textField}
                color="textSecondary"
                component="p"
              >
                {value}
              </Typography>
              <ListItemSecondaryAction>
                <IconButton
                  size="small"
                  onClick={handleSuggestedOnClick(value)}
                >
                  <NorthWestArrow
                    className={classes.northWestArrow}
                    fontSize="small"
                  />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider className={classes.dividerMargin} component="li" />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};
