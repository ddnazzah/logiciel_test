import { Grid, Theme, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import React from 'react';
import image from '../_shared/assets/images/undraw_page_not_found_su7k.svg';

const NotFound = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container justify='center' spacing={4}>
				<Grid item lg={6} xs={12}>
					<div className={classes.content}>
						<Typography variant='h1'>404: The page you are looking for isn’t here</Typography>
						<Typography variant='subtitle2'>
							You either tried some shady route or you came here by mistake. Whichever it is, try using the
							navigation
						</Typography>
						<img alt='Under development' className={classes.image} src={image} />
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default NotFound;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			padding: theme.spacing(4),
		},
		content: {
			paddingTop: 50,
			textAlign: 'center',
		},
		image: {
			marginTop: 50,
			display: 'inline-block',
			maxWidth: '100%',
			width: 560,
		},
	}),
);
