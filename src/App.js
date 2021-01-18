import './App.css';
import Course from "./components/Course"
class App extends React.Component {
	render () {
		return (
			<div className="row">
				<Course name="React JS" time="30h" free={true}>React JS very simple</Course>
				<Course name="Angular 4x" time="55h" free={false}></Course>
				<Course name="Node JS" time="30h" free={true}></Course>
				<Course name="VueJS" time="20h" free="true"></Course>
			</div>
		);
	}

}

export default App;
