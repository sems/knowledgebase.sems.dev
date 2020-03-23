import React from 'react';

export class Post extends React.Component {
	constructor(props) {
		super(props);
		this.state = {	

		};
	}

	render() {
		return(
			<div className="client_markdown">
                <div dangerouslySetInnerHTML={{__html: this.props.content}}>
                </div>
				<hr></hr>
			</div>
            
		)
	}
}
  