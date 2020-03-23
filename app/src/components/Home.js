import React from 'react';

import {Container} from './Container'

export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {	

		};
	}

	render() {
		return(
            <Container>
                <div className="col-md-12 page_home">
                    <h1>Welkom om de tasker</h1>
                    <h2>Maar dan niet op tasker</h2>
                </div>
            </Container>
		)
	}
}
  