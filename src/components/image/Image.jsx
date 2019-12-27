import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Image.css';


const Image = ({src,alt,width,height,circle,className,...attrs}) => {

	const classes = classNames(
		className,
		{circle})
	if(!src){
		src=`https://via.placeholder.com/${width}x${height}`;
	}

	return(
		
		<img src={src}
			 alt={alt}
			 className={classes}
			 width={width}
			 height={height}
			 {...attrs}
		/>
		);
}


Image.propTypes = {

	className:PropTypes.string,
	width:PropTypes.number,
	height:PropTypes.number,
	src:PropTypes.string,
	alt:PropTypes.string,
	circle:PropTypes.bool,
}

Image.defaultProps = {

	className:"",
	width:100,
	height:100,
	src:'',
	alt:'image',
	circle:false,

};

export default Image;