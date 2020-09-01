
import React, {
  useState,useEffect
}  from "react";


import { createStyles, Theme, makeStyles/*, useTheme*/ } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';


import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import Link from '@material-ui/core/Link';

import { TextFieldProps } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 13,
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  actions:{
    flexDirection: 'row-reverse'

  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 88,
    height: 88,
    backgroundSize: "contain",
    margin: 16
  },
  secondary: {
    light: '#ff7961',
    main: '#f44336',
    dark: '#ba000d',
    contrastText: '#000',
  },
  ibuttons:{
    marginRight: 72
  }
 /* controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },*/
}));



//Type
type CartProductProps = {
    urlImage?: string;
    title1?: string;
    title2?: string;
    title3?: string;
    title4?: string;
    quantity?: number
    unitPrice?: number;
    event1?: () => void;
    addQuantity?: (quantity: number) => number;
    subQuantity?: (quantity: number) => number;
    sendToTrash?: () => void;
    checkDetails?: () => void;
  } & TextFieldProps;

//Component
export default function CartProduct({
    urlImage,
    title1,
    title2,
    title3,
    title4,
    quantity=1,
    unitPrice=1,
    event1 = () => {},
    addQuantity = () => {return quantity},
    subQuantity = () => {return quantity},
    sendToTrash = () => {},
    checkDetails = () => {},
}: CartProductProps) {

  const [qntity, setQntity] = useState(quantity);
  const [totalPrce, setTotalPrce] = useState(quantity*unitPrice);

  useEffect(() => {
    setTotalPrce(qntity*unitPrice);
  });
  
  const classes = useStyles();
    
    return (
      <Card >
        <CardActionArea onClick={ ()=>{checkDetails()} }>
          <div className={classes.root}>
          
            <CardMedia
              className={classes.cover}
              image={urlImage}
              title=""
            />

            <div className={classes.details}>
              <CardContent className={classes.content}>

              
                <Typography component="div" variant="subtitle2" gutterBottom>
                  <Box color="text.primary" alignItems="flex-start">{title1}</Box>
                </Typography>

                
                  <Typography component="div" variant="body2" gutterBottom>
                    <Box color="text.secondary" alignItems="flex-start">{title2}</Box>
                    <Box color="text.secondary" alignItems="flex-start">{title3}</Box>            
                    <Link  onClick={ ()=>{checkDetails()} } color="secondary">
                    {title4}
                    </Link>
                  </Typography>
        
                  <Typography component="div" variant="body2">
                    <Box color="text.primary" alignItems="flex-start">Valor unitario: $ {unitPrice}</Box>
                  </Typography>

                  <Typography component="div" variant="body1" gutterBottom>
                    <Box color="info.main" alignItems="flex-start">Total: $ {totalPrce}</Box>
                  </Typography>
                
              

              </CardContent>
            </div>
          
          </div>
        </CardActionArea>

        <CardActions className={classes.actions}>

          <IconButton aria-label="delete" onClick={ ()=>{sendToTrash()}} size="small" >
            <DeleteIcon color="secondary" fontSize="small"/>
          </IconButton>
   
          <IconButton aria-label="add" onClick={ ()=>{setQntity(addQuantity(qntity));}}>
            <AddIcon />
          </IconButton>

          <Typography component="div" variant="subtitle1" >
            <Box color="text.primary" >{qntity}</Box>
          </Typography>
        
          <IconButton aria-label="sub" onClick={()=>{setQntity(subQuantity(qntity))}}>
            <RemoveIcon />
          </IconButton>
          
        </CardActions>
        
      </Card>
    );
}