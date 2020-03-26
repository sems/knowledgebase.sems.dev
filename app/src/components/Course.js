import React from 'react';
import Prism from "prismjs";
import marked from "marked";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import {Markdown} from './Markdown';
import {Container} from './Container'

export class Course extends React.Component {
	constructor(props) {
		super(props);
		this.state = {	
            posts: [],
            context: this.props.context
        };
        
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
    
    async componentDidMount() {

        const importAll = (r) => {
            r.keys().map(r)
        };

        // TODO: 
        // Rewrite to function like the one above.
        const markdownFiles = this.state.context.keys().map(this.state.context)
        .sort(function(a, b) {
            var aa = a.substring(19).split('.');
            var bb = b.substring(19).split('.');
            if (parseInt(aa[0]) === parseInt(bb[0])) {
                return parseInt(aa[1].split(' - ')[0]) < parseInt(bb[1].split(' - ')[0]) ? -1 : 1;
            }
            return parseInt(aa[0]) < parseInt(bb[0]) ? -1 : 1;
        });

		const posts = await Promise.all(
			markdownFiles.map((file) => fetch(file)
			    .then((res) => res.text())
			    .then(text => {
					let x = file.split("Task ")[1];
					return {
						content: text,
						title: x.substring(0, x.length - 12)
					};
                })
            )
        )
		.catch((err) => console.error(err));

        this.setState((state) => ({ ...state, posts }));
    }

    componentWillUnmount(){
        this.setState({
            context: [],
            posts: []
        });
    }

	render() {
		return(
			<Router>
				<nav className="nav mainMenu_subList">
					<div className="container">
					{
						this.state.posts.map((post, id) => (
							<Link key={id} className="nav-link" to={"/" + this.props.type + "/" + id}>{post.title}</Link>
						))
					}
					</div>
				</nav>
				<Switch>
					<Route exact path={"/"+ this.props.type} >	
						<Container>
							<div className="col-md-12">
								<div className={this.props.type +"_content"}>
									{
										this.state.posts.map((post, id) => (	
											<Markdown key={id} title={post.title} content={marked(post.content)}></Markdown>
										))
									}
									
								</div>
							</div>
						</Container>
					</Route>
					{
						this.state.posts.map((post, id) => (	
							<Route key={id} exact path={"/" + this.props.type + "/" + id}>	
								<Container>
									<div className="col-md-12">
										<div className={this.props.type +"_content"}>
											<Markdown key={id} title={post.title} content={marked(post.content)}></Markdown>
										</div>
									</div>
								</Container>
							</Route>
						))
					}
				</Switch>
			</Router>
		)
	}
}
  