import React  from "react"
 
class Course extends React.Component {
	showButtonFree() {
		const isFree = this.props.free;
		console.log(this.props.free);
		if (isFree === true) {
		  return <button type="button" className="btn btn-success">View</button>;
		}
		
	  }
	render() {
		return (
			<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
				<div className="panel panel-info">
					<div className="panel-heading">
							<h3 className="panel-title">{this.props.name}</h3>
					</div>
					<div className="panel-body">
							{this.props.children}
							<ul className="list-group">
								<li className="list-group-item">Item 1</li>
								<li className="list-group-item">Item 2</li>
								<li className="list-group-item">Item 3</li>
							</ul>
					</div>
					<div className="panel-footer">
						{this.showButtonFree()}
					  </div>
				</div>
			</div>
		);
	}
}

export default Course;
