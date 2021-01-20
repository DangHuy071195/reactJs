import React  from "react"
 
class Course extends React.Component {
	constructor(props){
		super(props);
		this.state = 
			{
				isShowOutLine: false,
				totalStudent: 69
			}
		;
			this.handleClick3 = this.handleClick3.bind(this);
			this.registerCourse = this.registerCourse.bind(this);
			this.handleToogleOutline = this.handleToogleOutline.bind(this);
		
	}
	handleClick1() {
		alert("button View 1");
	}
	handleClick2(content) {
		alert(content);
	}
	handleClick3() {
		alert(this.props.name);
	}
	registerCourse () {
		console.log(this.refs.username.value)
	}
	handleToogleOutline () {
		this.setState(
			{
				isShowOutLine: !this.state.isShowOutLine
			}
		);
	}
	showButtonFree() {
		const isFree = this.props.free;
		console.log(this.props.free);
		if (isFree === true) {
		  return <div className = "panel-footer">
			<div className = "btn-group">
				<button onClick = {this.handleClick1} type="button" className="btn btn-success">View 1</button>
				<button onClick = {() =>this.handleClick2("view 2")} type="button" className="btn btn-danger">View 2</button>
				<button  onClick = {this.handleClick3} type="button" className="btn btn-info">View 3</button>
			</div>
		  </div>
			
		}else{
			return (
				<div className = "panel-footer">
					<div className="input-group">
						<span className="input-group-btn">
							<button onClick = {this.registerCourse} className="btn btn-info" type="button">Register</button>
						</span>
						<input type="text" className="form-control" placeholder="user name" ref="username" />
					</div>
				</div>
			)
		}
			
		
	  }
	render() {
		console.log(this.state);
		let elmOutline = null;
		if(this.state.isShowOutLine){
			elmOutline = <ul className="list-group">
			<li className="list-group-item">Item 1</li>
			<li className="list-group-item">Item 2</li>
			<li className="list-group-item">Item 3</li>
		</ul>
		}
		return (
			<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
				<div className="panel panel-info">
					<div className="panel-heading">
							<h3 className="panel-title">{this.props.name}</h3>
					</div>
					<div className="panel-body">
							{this.props.children}
							<p><button onClick ={this.handleToogleOutline}type="button" className="btn btn-success">Toogle Outline</button></p>
							{elmOutline}
							
					</div>
					{this.showButtonFree()}
				</div>
			</div>
		);
	}
}

export default Course;

