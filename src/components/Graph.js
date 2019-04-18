import React from 'react';
import Chart from "react-google-charts";
import Card from './Card.js';
import '../custom.css';
import { Header } from 'semantic-ui-react';
import { connect } from "react-redux";
import { getSchoolData } from '../store/actions/dataActions.js';

class Graph extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}

  componentDidMount(){
  	this.props.getSchoolData()
  }


	render() {
		const {form_data, date, location} = this.props

		return (
			<div>
				<div className="container">
					<Header as='h2'>{location}</Header>
					<p>{date}</p>
				</div>
				<Chart
          chartType="ColumnChart"
          width="100%"
          height="400px"
          data={form_data}
        />
        <div className="container">
        	{form_data.map(d => {
        		return <Card />
        	})}
        </div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		form_data: state.school_data.form_data,
		date: state.school_data.date,
		location: state.school_data.location
	}
}

export default connect(mapStateToProps, {getSchoolData})(Graph);