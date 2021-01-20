import React  from "react"
import $  from "jquery";
 
class Lifecycle extends React.Component {
	constructor(props){
		super(props);
		this.state = 
			{
				title: "Lifecycle"
			}
		;
			this.handleChangeTitle = this.handleChangeTitle.bind(this);
			console.log("constructor");
		
	}
	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log("constructor");
        return true;
    }

	componentDidMount() {
		console.log("componentDidMount");
		$("h3.panel-title").css('color','white');
	}

	
	shouldComponentUpdate(prevProps, prevState) {
		console.log("shouldComponentUpdate");
		return false;
	}

	componentDidUpdate() {
		console.log("componentDidUpdate");

	}
	handleChangeTitle() {
		this.setState(
			{
				title: "Licycle Components - handleChangeTitle"
			}
		);
	}
	render() {
		console.log("render");
		return (
				<div className="panel panel-danger">
					<div className="panel-heading">
							<h3 className="panel-title">{this.state.title}</h3>
					</div>
					<div className="panel-body">
							{this.props.children}
							<p><button onClick ={this.handleChangeTitle}type="button" className="btn btn-success">Change Title</button></p>							
					</div>
				</div>
		
		);
	}
}

export default Lifecycle;

