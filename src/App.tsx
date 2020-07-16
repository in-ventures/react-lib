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
		},
		ProductCardA: {
			padding: theme.spacing(0.5),
			textAlign: 'center',
			color: theme.palette.text.secondary,
		},
	})
);
function App() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={1}>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<ProductCardA />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<ProductCardA />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<ProductCardA />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<ProductCardA />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<ProductCardA />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<ProductCardA />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<ProductCardA />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<ProductCardA />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<ProductCardA />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<ProductCardA />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<ProductCardA />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<ProductCardA />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<ProductCardA />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<ProductCardA />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<ProductCardA />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<ProductCardA />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<ProductCardA />
				</Grid>
				<Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
					<ProductCardA />
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
