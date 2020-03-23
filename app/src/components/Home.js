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
					<p>Opgezet voor mensen die vastlopen bij tasker opdrachten. Om zo toch verder te kunnen!</p>
					<p>Voorwaarden</p>
					<ul>
						<li>Er worden geen rechten ontleend aan de content van deze website.</li>
						<li>Content afkomstig van <a href="https://studychain.nl/">studychain.nl</a></li>
						<li>Rechten van de content naar <a href="https://studychain.nl/">studychain.nl</a></li>
						<li><strong>Let op!</strong> De content kan niet up-to-date te zijn!</li>
					</ul>
                </div>
            </Container>
		)
	}
}
  