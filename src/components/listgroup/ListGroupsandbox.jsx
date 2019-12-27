import React, { Fragment } from 'react';
import ListGroup from './ListGroup';
import ListGroupItem from './ListGroupItem';
import Badge from '../badge/Badge';
import Button from '../button/Button';

const ListGroupItemsandbox = () => (

	<Fragment>

	<h2><span>1. Default group list:</span></h2>
	<ListGroup>
		<ListGroupItem>Item 1</ListGroupItem>
		<ListGroupItem>Item 2</ListGroupItem>
		<ListGroupItem>Item 3</ListGroupItem>
		<ListGroupItem>Item 4</ListGroupItem>
	</ListGroup>

	<h2><span>2. Group list with active and disabled elements:</span></h2>
	<ListGroup>
		<ListGroupItem active>Item 1</ListGroupItem>
		<ListGroupItem disabled>Item 2</ListGroupItem>
		<ListGroupItem disabled>Item 3</ListGroupItem>
		<ListGroupItem active>Item 4</ListGroupItem>
	</ListGroup>


	<h2><span>3. Group list with custom components:</span></h2>
	<ListGroup>
		<ListGroupItem >Item 1
		<Badge value={3} inline/>
		</ListGroupItem>
		<ListGroupItem>Item 2
		<Badge value='new' inline/>
		</ListGroupItem>
		<ListGroupItem>Item 3
		<Badge value={10} alert inline/>
		</ListGroupItem>
		<ListGroupItem>Item 4
		<Button>Download</Button>
		</ListGroupItem>
	</ListGroup>


	<h2><span>4. Group list with links:</span></h2>
	<ListGroup>
		<ListGroupItem href="/" active>Item 1</ListGroupItem>
		<ListGroupItem href="/">Item 2</ListGroupItem>
		<ListGroupItem href="/">Item 3</ListGroupItem>
		<ListGroupItem href="/">Item 4</ListGroupItem>
	</ListGroup>

	</Fragment>


	)



export default ListGroupItemsandbox;