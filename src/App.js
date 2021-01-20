import './App.css';
import React, {Component} from "react";
import Course from "./components/Course"
import Lifecycle from "./components/Lifecycle"
class App extends Component {
	render () {
		const items = [
			{
				name: "React JS",
				time: "30h",
				free: false,
				desc: "React JS very simple"
			},
			{
				name: "Vue JS",
				time: "55h",
				free: false,
			},
			{
				name: "Node JS",
				time: "37h",
				free: true,
			},
			{
				name: "Next JS",
				time: "35h",
				free: true,
			},
			
		];
		let elmCourse = items.map((item, index) => 
			<Course key={index} name={item.name} time={item.time} free={item.free}>{item.desc}</Course>		)
			elmCourse = null;
		return (
			<div className="row">
				{elmCourse}
				<Lifecycle />
			</div>
		);
	}
	


}

export default App;
