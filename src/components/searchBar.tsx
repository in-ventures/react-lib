/*
 * File: searchBar.tsx
 * Project: @inventures/react-lib
 * File Created: Tuesday, 1st September 2020 9:46:25 am
 * Author: Luis Aparicio (luis@inventures.cl)
 * -----
 * Last Modified: Friday, 4th September 2020 3:22:41 pm
 * Modified By: Luis Aparicio (luis@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import React, { useState } from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { ReactComponent as NorthWestArrow } from '../assets/north_west-24px.svg';
import Collapse from '@material-ui/core/Collapse';
import Fade from '@material-ui/core/Fade';
import { display } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      padding: '0px',
      backgroundColor: 'white',
      margin: '1px',
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

  const handleInputChange = () => {
    setshowInputField((prev) => !prev);
  };

  const handleIconChange = () => {
    setShowIcon((prev) => !prev);
  };

  return (
    <Box display="flex">
      <Fade in={!showInputField}>
        <IconButton
          size="small"
          onClick={handleInputChange}
          className={showInputField ? classes.searchButtonHide : ''}
        >
          <SearchIcon />
        </IconButton>
      </Fade>
      <Collapse in={showInputField}>
        <TextField
          {...props}
          className={classes.inputField}
          onFocus={() => !showIcon && handleIconChange()}
          InputProps={{
            startAdornment: (!showIcon || !props.value) && (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  size="small"
                  onClick={() => (handleInputChange(), clearSearch(''))}
                >
                  <ClearIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        ></TextField>
      </Collapse>
    </Box>
  );
};

type SearchBoxProps = {
  searchResults: string[];
  onSuggestedClick: (value: string) => void;
};

export const SearchResultList = ({
  searchResults,
  onSuggestedClick,
}: SearchBoxProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.box} display="block">
      <List>
        {searchResults.map((value) => (
          <React.Fragment key={value}>
            <ListItem key={value} href="#simple-list" button component="a">
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
                  onClick={() => onSuggestedClick(value)}
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
