import { AppBar, Theme, Toolbar } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

interface TopbarProps {
	className?: string;
}
const Topbar: React.FC<TopbarProps> = (props) => {
	const { className, ...rest } = props;

	const classes = useStyles();

	const loading = useSelector((state: { loading: any }) => state.loading);

	return (
		<AppBar {...rest} className={clsx(classes.root, className)} elevation={1}>
			<Toolbar>
				<RouterLink to='/'>
					<img
						alt='Logo'
						src='http://test.nbssiyoungafricaworks.com/assets/images/nbssi-mastercard_2.png'
						width='auto'
						height='100'
					/>
				</RouterLink>
				<Typography variant='h5' className={classes.title}></Typography>
			</Toolbar>

			<Backdrop className={classes.backdrop} open={loading}>
				<CircularProgress color='inherit' />
			</Backdrop>
		</AppBar>
	);
};

export default Topbar;

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		background: 'white',
		paddingLeft: theme.spacing(10),
		paddingRight: theme.spacing(10),
	},
	title: {
		flexGrow: 1,
		color: 'white',
		marginLeft: 5,
	},
	signOutButton: {
		marginLeft: theme.spacing(1),
	},
	backdrop: {},
}));
