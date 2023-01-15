import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'
function AboutPage(){
    return (
        <Card>
        <div className="about">
            <h1>React Application for FeedBack Application</h1>
            <p>Version 1.0.0</p>
            <p>
              <Link to='/'>Back To Home</Link> //used to go back to home
            </p>
        </div>
        </Card>
    )
}
export default AboutPage