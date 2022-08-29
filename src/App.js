import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes,NavLink} from 'react-router-dom'
//Browser Router - Html file history API to keep our UI with url
import Header from './components/Header'
import FeedbackStats from "./components/FeedbackStats";
import FeedbackData from './data/FeedbackData'
import FeedbackList from "./components/FeedbackList"
import FeedbackForm from "./components/FeedbackForm"
import { v4 as uuidv4} from 'uuid'
import AboutPage from "./pages/AboutPage";
import AboutIconLink from './components/AboutIconLink'
import Card from './components/shared/Card'
import Post from "./components/Post";

function App() {
  const [feedback,setFeedback] = useState(FeedbackData)
  const addFeedBack = (newFeedBack) => {
      newFeedBack.id = uuidv4()
    setFeedback([newFeedBack,...feedback])

  }
  const deleteFeedback = (id) =>{
    if(window.confirm('Are you sure you want to delete?')){
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  return (
      <Router>
      <Header />
          <Routes>
              <Route exact path='/' element = {
                  <div className='container'>
                      <FeedbackForm handleAdd={addFeedBack}/>
                      <FeedbackStats feedback={feedback}/>
                      <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
                      <AboutIconLink/>
                  </div>
              }>
              </Route>
              <Route path='/post/:id/:name' element={<Post/>}> Post</Route>
             <Route path='/about' element={<AboutPage/>}> This is about</Route>
          </Routes>
      </Router>

  );
}

export default App;
