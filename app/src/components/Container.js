import React from 'react';

export class Container extends React.Component {
	constructor(props) {
		super(props);
		this.state = {	

		};
	}

	render() {
		return(
			<div className="container">
                <div className="row">
                    {this.props.children}
                </div>
            </div>
		)
	}
}
  