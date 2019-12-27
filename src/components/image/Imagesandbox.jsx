import React, { Fragment } from 'react';
import Image from './Image';

const Imagesandbox = () => (

		<Fragment>

		<h2><span>1. Default image placeholder: </span></h2>
		<Image/>

		<h2><span>2. Image with src and alt: </span></h2>
		<Image src='https://image.shutterstock.com/image-photo/kiev-ukraine-april-27-2015-260nw-278925056.jpg'
				alt='facebook'/>

		<h2><span>3. Images with different sizes: </span></h2>
		<Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png'
				width={50} height={50}
				alt='Apple_logo_black'/>
		<Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png'
				width={100} height={100}
				alt='Apple_logo_black'/>
		<Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png'
				width={150} height={150}
				alt='Apple_logo_black'/>

		<h2><span>4. Image with rounded border and size 150x150 pixels: </span></h2>
		<Image src="https://pp.userapi.com/a9QrnDt7kgIb8VkcrCWpCoqd7JRwq5wX_YDr7Q/pOMxeuWzvxg.jpg?ava=1"
				width={150} height={150}
				alt="react" circle
		/>
	
		</Fragment>
	);

export default Imagesandbox;