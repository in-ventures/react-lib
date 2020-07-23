/*
 * File: ProductCard.tsx
 * Project: components-lib
 * File Created: Thursday, 16th July 2020 9:27:33 am
 * Author: Mario Merino (mario@inventures.cl)
 * -----
 * Last Modified: Tuesday, 21st July 2020 11:34:27 am
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
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';

// todo move theme to story
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
			// todo impor poppin in index
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
			height: 360,
			padding: '0px',
			backgroundColor: 'white',
			margin: '1px',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
		},
		media: {
			maxHeight: 120,
			minHeight: 56,
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
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
			flexGrow: 2,
		},
		actions: {
			justifyContent: 'center',
		},
		button: {
			// todo make a boolean prop to override standard radius
			borderRadius: theme.spacing(4),
		},
		actionArea: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
			flexGrow: 2,
		},
	})
);

export default function ProductCardA() {
	const classes = useStyles();

	return (
		<ThemeProvider theme={theme}>
			<Box className={classes.root}>
				<CardActionArea className={classes.actionArea}>
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
							Clonazepam · 2 mg
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
								label='BioE'
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
							Clonazepam · 2 mg · 30 comprimidos
						</Typography>
						<Box>
							<Typography
								align='center'
								color='primary'
								variant='h6'
								component='h2'
							>
								$ 5.025
							</Typography>
							{/*todo calculate this based on prop price, number of unit and unit format*/}
							<Typography
								align='center'
								color='primary'
								variant='subtitle2'
								component='h3'
							>
								$ 168 / comprimido
							</Typography>
						</Box>
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
			</Box>
		</ThemeProvider>
	);
}
