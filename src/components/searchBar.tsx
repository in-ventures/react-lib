/*
 * File: searchBar.tsx
 * Project: @inventures/react-lib
 * File Created: Tuesday, 1st September 2020 9:46:25 am
 * Author: Luis Aparicio (luis@inventures.cl)
 * -----
 * Last Modified: Thursday, 3rd September 2020 3:52:17 pm
 * Modified By: Luis Aparicio (luis@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import React from 'react';
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
import CallMadeIcon from '@material-ui/icons/CallMade';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      maxWidth: 348,
      height: 360,
      padding: '0px',
      backgroundColor: 'white',
      margin: '1px',
    },
    textBox: {
      fontFamily: theme.typography.fontFamily,
      overflow: 'hidden',
      'white-space': 'nowrap',
      fontsize: 15,
      fontweight: 'normal',
      fontstretch: 'normal',
      fontstyle: 'normal',
      lineheight: 'normal',
      letterspacing: 0.15,
    },

    inputField: {
      width: 272,
      height: 40,
      border: 'none',
      borderRadius: 4,
      boxShadow: '0px 0px 2px #888888',
      // '& label': {
      //   'padding-top': '8px',
      // },
      '& label.Mui-focused': {
        display: 'none',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          border: 'none',
        },
        '&.Mui-focused fieldset': {
          border: 'none',
          'box-shadow': '0px 0px 2px #888888',
        },
        '&:hover fieldset': {
          border: 'none',
        },
      },
      // 'label + &': {
      //   display: 'none',
      // },
    },
  }),
);

export const SearchBar = (props: TextFieldProps) => {
  const classes = useStyles();
  return (
    <TextField
      {...props}
      className={classes.inputField}
      /*       label={
        <InputAdornment position="start">
          <SearchIcon fontSize="small" />
        </InputAdornment>
      } */
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon fontSize="small" />
          </InputAdornment>
        ),
      }}
    />
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
                  edge="end"
                  aria-label="call-made"
                  onClick={() => onSuggestedClick(value)}
                >
                  <CallMadeIcon fontSize="small" />
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
