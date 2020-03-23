import React from 'react';
import Prism from "prismjs";
import marked from "marked";

import {Markdown} from './Markdown';
import {Container} from './Container'

const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context('../assets/tasker/security', false, /\.md$/))
	.sort(function(a, b) {
		var aa = a.substring(19).split('.');
		var bb = b.substring(19).split('.');
		if (parseInt(aa[0]) === parseInt(bb[0])) {
			return parseInt(aa[1].split(' - ')[0]) < parseInt(bb[1].split(' - ')[0]) ? -1 : 1;
		}
		return parseInt(aa[0]) < parseInt(bb[0]) ? -1 : 1;
	});

export class SecurityContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
		};
	}

	async componentDidMount() {
		const posts = await Promise.all(
			markdownFiles.map((file) => fetch(file)
			.then((res) => res.text())
			.then(text => {
					let x = file.split(" - ")[1];
					return {
						content: text,
						title: x.substring(0, x.length - 12)
					};
				}))
			)
		.catch((err) => console.error(err));

		this.setState((state) => ({ ...state, posts }));
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
					<div className="security_content">
						{
							posts.map((post, id) => (
								<Markdown key={id} title={post.title} content={marked(post.content)}></Markdown>
							))
						}
					</div>
				</div>
			</Container>
		)
	}
}
