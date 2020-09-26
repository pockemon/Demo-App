import axios from 'axios'

const COURSE_API_URL = 'http://localhost:8081'
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/users/home`
// const LOGIN_URL = `${COURSE_API_URL}/users/login`

class CourseDataService {

    async retrieveAllCourses() {
        return axios.get(`${INSTRUCTOR_API_URL}`);
    }

    async loginpage(data){
      // const headers = new Headers();
      // headers.append('Content-type', 'application/json');

      const options = {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(data)
      };

      const request = fetch('http://localhost:8081/users/login', options);
      const response = await fetch(request);
      const status = await response.status;

      if(status === 201)
       this.retrieveAllCourses();
    }

}

export default new CourseDataService()
