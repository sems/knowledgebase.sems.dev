import React from 'react';

import '../styles/content.sass';
import '../styles/prism.css';
import '../styles/page.sass';

export class Markdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {	

		};
	}

	render() {
		return(
			<div className="__markdown">
				<h1 className="__markdown_title">{this.props.title}</h1>
                <div dangerouslySetInnerHTML={{__html: this.props.content}}></div>
			</div>
            
		)
	}
}
  