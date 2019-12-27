import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './TabBarNav.css'

const TabBarNav = ({onChangeActiveTab, navLabel, className}) => {

const classes = classNames(
	className,
	'nav-item'
	);
return(
	<button 
		type='button'
		className={classes}
		onClick={()=>{onChangeActiveTab(navLabel);}}>
		{navLabel}
	</button>
	);
};
TabBarNav.propTypes = {
	onChangeActiveTab:PropTypes.func,
	navLabel:PropTypes.string,
	className:PropTypes.string,
};

TabBarNav.defaultProps = {
	onChangeActiveTab:()=>{},
	navLabel:'Tab',
	className:'',
};

export default TabBarNav;