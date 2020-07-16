/*
 * File: ProductCard.tsx
 * Project: components-lib
 * File Created: Thursday, 16th July 2020 9:27:33 am
 * Author: Mario Merino (mario@inventures.cl)
 * -----
 * Last Modified: Thursday, 16th July 2020 4:47:09 pm
 * Modified By: Mario Merino (mario@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */
import React from 'react';

import {
	createStyles,
	Theme,
	makeStyles,
	createMuiTheme,
	responsiveFontSizes,
	ThemeProvider,
} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';

let theme = createMuiTheme({
	palette: {
		primary: {
			main: '#5185DA',
		},
		secondary: {
			main: '#F2D200',
		},
	},
	typography: {
		fontFamily: [
			'Poppins',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
	},
});
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			//	minWidth: 248,
			//	height: 400,
			// padding: theme.spacing(0.5),
		},
		media: {
			maxHeight: 120,
			width: 'calc(100% - 2rem)',
			objectFit: 'contain',
			padding: '1rem 1rem 0rem 1rem',
		},
		box: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'center',
			marginBottom: theme.spacing(1),
			'& > *': {
				marginBottom: theme.spacing(0.5),
				marginRight: theme.spacing(0.5),
			},
		},
		content: {
			padding: theme.spacing(1),
		},
		actions: {
			justifyContent: 'center',
		},
		button: {
			borderRadius: theme.spacing(4),
		},
	})
);

export default function ProductCardA() {
	const classes = useStyles();

	return (
		<ThemeProvider theme={theme}>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						component='img'
						alt='Clonazepam 05 mg'
						image='https://www.laboratoriochile.cl/wp-content//uploads/2015/11/Clonazepam_05MG_30C_BE_HD.jpg'
						title='Clonazepam 05 mg'
					/>
					<CardContent className={classes.content}>
						<Typography
							align='center'
							color='textPrimary'
							gutterBottom
							variant='h6'
							component='h2'
						>
							Clonazepam · 0,5 mg
						</Typography>
						<Box className={classes.box}>
							<Chip
								size='small'
								avatar={
									<Avatar
										alt='Bioequivalente'
										src='/static/images/avatar/1.jpg'
									/>
								}
								label='Bioequivalente'
							/>
							<Chip
								size='small'
								avatar={
									<Avatar
										alt='Receta retenida'
										src='/static/images/avatar/1.jpg'
									/>
								}
								label='Receta retenida'
							/>
						</Box>

						<Typography
							align='center'
							variant='body2'
							color='textSecondary'
							component='p'
							gutterBottom
						>
							30 comprimidos de Clonazepan de 0,5 mg del laboratorio Chile
						</Typography>
						<Typography
							align='center'
							color='primary'
							variant='h6'
							component='h2'
						>
							$ 5.025
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions className={classes.actions}>
					<Button
						className={classes.button}
						variant='contained'
						color='primary'
					>
						Agregar
					</Button>
				</CardActions>
			</Card>
		</ThemeProvider>
	);
}
