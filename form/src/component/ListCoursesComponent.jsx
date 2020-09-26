import React, { Component } from 'react';
import '../App.css'
import CourseDataService from '../service/CourseDataService'

class ListCoursesComponent extends Component {

   constructor(props) {
     super(props)
     this.state = {
         courses: [],
         message: null
     }
     this.refreshCourses = this.refreshCourses.bind(this)
  }

    componentDidMount() {
        this.refreshCourses();
    }

    refreshCourses() {
        CourseDataService.retrieveAllCourses()//HARDCODED
            .then(
                response => {
                    console.log(response);
                    this.setState({ courses: response.data })
                }
          )
    }

    render() {
        return (
            <div className="container">
                <h3>Top 4 US-Banks</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Bank name</th>
                                <th>Headquaters Location</th>
                                <th>Total assets</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.courses.map(
                                    course =>
                                        <tr key={course.rank}>
                                            <td>{course.rank}</td>
                                            <td>{course.bankname}</td>
                                            <td>{course.headq}</td>
                                            <td>{course.assets}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListCoursesComponent
