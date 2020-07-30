/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-07-26 16:53:56
 * @Last Modified by:   Dieu-Donne Nazzah
 * @Last Modified time: 2020-07-26 16:53:56
 */

import React from 'react';
import { Route } from 'react-router-dom';

interface RouteWithLayoutProps {
	component: any;
	layout: any;
	exact: boolean;
	path: string;
}

const RouteWithLayout: React.FC<RouteWithLayoutProps> = (props) => {
	const { layout: Layout, component: Component, ...rest } = props;

	return (
		<Route
			{...rest}
			render={(matchProps) => (
				<Layout>
					<Component {...matchProps} />
				</Layout>
			)}
		/>
	);
};

export default RouteWithLayout;
