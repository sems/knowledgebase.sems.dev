import React from 'react';
import Prism from "prismjs";
import marked from "marked";

import {Markdown} from './Markdown';
import {Container} from './Container'

const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context('../assets/tasker/server', false, /\.md$/))
	.sort(function(a, b) {
		var aa = a.substring(19).split('.');
		var bb = b.substring(19).split('.');
		if (parseInt(aa[0]) === parseInt(bb[0])) {
			return parseInt(aa[1].split('_')[0]) < parseInt(bb[1].split('_')[0]) ? -1 : 1;
		}
		return parseInt(aa[0]) < parseInt(bb[0]) ? -1 : 1;
	});

export class ServerContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
		};
	}

	async componentDidMount() {
		const posts = await Promise.all(
			markdownFiles.map((file) => fetch(file).then((res) => res.text()))
		).catch((err) => console.error(err));
  
		  this.setState((state) => ({ ...state, posts }));
		  this.setState({
			postTitles: markdownFiles
		  });  
	}
	
	componentWillMount() {
		marked.setOptions({
			breaks: true,
			highlight: function (code, lang) {
				try {
					return Prism.highlight(code, Prism.languages[lang], lang);
				} catch {
					return code;
				}
			}
		});
	}

	render() {
		const { posts } = this.state;
		
		return ( 
			<Container>
				<div className="col-md-12">
					<div className="server_content">
						{
							posts.map((post, id) => (
								<Markdown key={id} content={marked(post)}></Markdown>
							))
						}
					</div>
				</div>
			</Container>
		)
	}
}
