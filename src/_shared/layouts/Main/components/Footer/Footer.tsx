/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-07-25 19:37:25
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-07-28 05:27:11
 */

import { Link, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React from 'react';

interface FooterProps {
	className?: string;
}
const Footer: React.FC<FooterProps> = (props) => {
	const { className, ...rest } = props;

	const classes = useStyles();

	return (
		<div {...rest} className={clsx(classes.root, className)}>
			<Typography variant='body1' align='center'>
				&copy; {new Date().getFullYear()}{' '}
				<Link component='a' href='' target='_blank'>
					National Board of Small Scale Industries,
				</Link>
			</Typography>
			{/* <Typography variant='caption'>Created with love by designers and developers @ ddnazzah.inc!</Typography> */}
		</div>
	);
};

export default Footer;

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		padding: theme.spacing(4),
	},
}));
