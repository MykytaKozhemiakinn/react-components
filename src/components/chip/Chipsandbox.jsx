import React, { Fragment } from 'react';
import Chip from './Chip';
import Example from './Example';


const Chipsandbox = () => (

	<Fragment>

	<h2><span>1. Chip with text: </span></h2>
	<Chip text='User text'/>

	<h2><span>2. Chip with a lot of text: </span></h2>
	<Chip text='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'/>


	<h2><span>3. Chips with icon or close button:</span></h2>
	<Chip text='Chip' withIcon/>
	<Chip text='Chip' withClose/>

	<h2><span>4. Chip with icon and close: </span></h2>
	<Chip text='Chip' withIcon withClose/>

	<h2><span>5. Chip with image: </span></h2>
	<Chip text='Chip' withImage imageSrc='https://pp.userapi.com/a9QrnDt7kgIb8VkcrCWpCoqd7JRwq5wX_YDr7Q/pOMxeuWzvxg.jpg?ava=1' imageAlt='image'/>

	<h2><span>6. Chips with actions on body and close icon: </span></h2>
	<Chip text='React'
	withImage
	imageSrc='https://pp.userapi.com/a9QrnDt7kgIb8VkcrCWpCoqd7JRwq5wX_YDr7Q/pOMxeuWzvxg.jpg?ava=1'
	imageAlt='react'
	onChipClick={()=>{console.log('You have clicked on body'); }}/>

	<Chip text='Angular'
	withImage
	imageSrc='https://wishtackblog.files.wordpress.com/2017/03/angular.png?w=748'
	imageAlt='angular'
	onCloseClick={()=>{console.log('You have clicked on close icon'); }}
	withClose
	/>

	<Chip text='Vue'
	withImage
	imageSrc='https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg'
	imageAlt='vue'
	onCloseClick={()=>{console.log('You have clicked on close icon'); }}
	onChipClick={()=>{console.log('You have clicked on body'); }}
	withClose
	/>

	<h2><span>7. Real life examples with users: </span></h2>
	<Example/>
	
	</Fragment>
	  

	)

export default Chipsandbox;