import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React from 'react';
import { Footer, Topbar } from './components';

interface MainProps {
	children: React.ReactNode;
}

const Main: React.FC<MainProps> = (props) => {
	const { children } = props;

	const classes = useStyles();

	return (
		<div className={clsx(classes.root)}>
			<Topbar />

			<main className={classes.content}>
				{children}
				<Footer />
			</main>
		</div>
	);
};

export default Main;

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		paddingTop: 56,
		height: '100%',
		[theme.breakpoints.up('sm')]: {
			paddingTop: 64,
		},
	},
	shiftContent: {
		paddingLeft: 240,
	},
	content: {
		height: '100%',
	},
}));
