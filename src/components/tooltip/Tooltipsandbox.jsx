import React, { Fragment } from 'react';
import Tooltip from './Tooltip'
import Button from '../button/Button';


const Tooltipsandbox = () => (	
	<Fragment>
	 <h2><span>1. Right tooltip with a lot of text:</span></h2>
	<Tooltip
	position='right'
	content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	>
	Text
	</Tooltip>

	<h2><span>2. Left tooltip with outer styles:</span></h2>
	<Tooltip
	position='left'
	content="Hello there!"
	style={{width:'120px'}}
	>
	Text
	</Tooltip>

	<h2><span>3. Bottom tooltip on custom component:</span></h2>
	<Tooltip
	position='bottom'
	content="I'm a tooltip"
	style={{width:'100px'}}
	>
	<Button>Button</Button>
	</Tooltip>

    <h2><span>4. Top tooltip of text element:</span></h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    <Tooltip
      position="top"
      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a"
    >
      <span style={{ textDecoration: 'underline', padding: '0 4px' }}>Lorem</span>
    </Tooltip>
    Ipsum has been the industry's standard dummy text ever since the 1500s</p>
  </Fragment>
);

export default Tooltipsandbox;