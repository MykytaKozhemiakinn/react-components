import React, { Fragment } from 'react';
import TabBar from './TabBar';
import TabBarItem from './TabBarItem';

import Image from '../image/Image';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Button from '../button/Button';

const TabBarsandbox = () => (

	<Fragment>
		<h2><span>1. Horizontal tabbar: </span></h2>
		<TabBar>
			<TabBarItem label='Text'>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
			</TabBarItem>
			<TabBarItem label='Image'>.
				<Image src='https://pp.userapi.com/a9QrnDt7kgIb8VkcrCWpCoqd7JRwq5wX_YDr7Q/pOMxeuWzvxg.jpg?ava=1'
			
				/>
				
			</TabBarItem>
			<TabBarItem label='Component'>
					<ButtonGroup>
						<Button>First</Button>
						<Button>Second</Button>
						<Button>Third</Button>
					</ButtonGroup>
			</TabBarItem>
				<TabBarItem label='Empty one'/>
		</TabBar>

		<h2><span>1. Vertical tabbar: </span></h2>
		<TabBar vertical>
			<TabBarItem label='Text'>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
			</TabBarItem>
			<TabBarItem label='Image'>.
				<Image src='https://pp.userapi.com/a9QrnDt7kgIb8VkcrCWpCoqd7JRwq5wX_YDr7Q/pOMxeuWzvxg.jpg?ava=1'
					height={150}
				width={150}
				/>
			</TabBarItem>
			<TabBarItem label='Component'>
					<ButtonGroup>
						<Button>First</Button>
						<Button>Second</Button>
						<Button>Third</Button>
					</ButtonGroup>
			</TabBarItem>
				<TabBarItem label='Empty one'/>
		</TabBar>


	</Fragment>
	);
export default TabBarsandbox;