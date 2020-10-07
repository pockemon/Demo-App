import axios from 'axios'

const COURSE_API_URL = 'http://localhost:8081'
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/users/home`
// const LOGIN_URL = `${COURSE_API_URL}/users/login`

class CourseDataService {

    async retrieveAllCourses() {
        return axios.get(`${INSTRUCTOR_API_URL}`);
    }

}

export default new CourseDataService()
