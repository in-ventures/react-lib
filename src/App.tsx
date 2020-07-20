import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ProductCardA from './lib/components/ProductCardA';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			margin: '16px',
			backgroundColor: 'rgb(0 0 0 / 0.10)',
			padding: '1px',
			gridGap: '1px',
		},
		ProductCardA: {
			textAlign: 'center',
			color: theme.palette.text.secondary,
		},
	})
);
function App() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container>
				<Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
					<ProductCardA />
				</Grid>
				<Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
					<ProductCardA />
				</Grid>
				<Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
					<ProductCardA />
				</Grid>
				<Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
					<ProductCardA />
				</Grid>
				<Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
					<ProductCardA />
				</Grid>
				<Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
					<ProductCardA />
				</Grid>
				<Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
					<ProductCardA />
				</Grid>
				<Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
					<ProductCardA />
				</Grid>
				<Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
					<ProductCardA />
				</Grid>
				<Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
					<ProductCardA />
				</Grid>
				<Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
					<ProductCardA />
				</Grid>
				<Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
					<ProductCardA />
				</Grid>
				<Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
					<ProductCardA />
				</Grid>
				<Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
					<ProductCardA />
				</Grid>
				<Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
					<ProductCardA />
				</Grid>
				<Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
					<ProductCardA />
				</Grid>
				<Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
					<ProductCardA />
				</Grid>
				<Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
					<ProductCardA />
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
