/*
 * File: searchBar.tsx
 * Project: @inventures/react-lib
 * File Created: Tuesday, 1st September 2020 9:46:25 am
 * Author: Luis Aparicio (luis@inventures.cl)
 * -----
 * Last Modified: Friday, 4th September 2020 10:00:14 am
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      padding: '0px',
      backgroundColor: 'white',
      margin: '1px',
    },
    textBox: {
      fontFamily: theme.typography.fontFamily,
      overflow: 'hidden',
      'white-space': 'nowrap',
      fontweight: 'normal',
      fontstretch: 'normal',
      fontstyle: 'normal',
      lineheight: 'normal',
      letterspacing: 0.15,
    },
    northWestArrow: {
      fill: '#757575',
    },
    inputField: {
      border: 'none',
      borderRadius: 4,
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

  return (
    <TextField
      {...props}
      className={classes.inputField}
      onFocus={() => {
        setShowIcon(true);
      }}
      onBlur={() => setShowIcon(false)}
      InputProps={{
        startAdornment: (!showIcon || !props.value) && (
          <InputAdornment position="start">
            <SearchIcon fontSize="small" />
          </InputAdornment>
        ),
        endAdornment: (showIcon || props.value) && (
          <InputAdornment position="end">
            <IconButton onClick={() => clearSearch('')}>
              <ClearIcon fontSize="small" />
            </IconButton>
          </InputAdornment>
        ),
      }}
    ></TextField>
  );
};

type SearchBoxProps = {
  searchResults: string[];
  onSuggestedClick: (value: string) => void;
};

export const SearchBox = ({
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
              <ListItemIcon>
                <SearchIcon fontSize="small" />
              </ListItemIcon>
              <Box
                className={classes.textBox}
                component="div"
                textOverflow="ellipsis"
                overflow="hidden"
              >
                <ListItemText secondary={value} />
              </Box>
              <ListItemSecondaryAction>
                <IconButton
                  size="small"
                  onClick={() => onSuggestedClick(value)}
                >
                  <NorthWestArrow className={classes.northWestArrow} />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};
