//import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
//Browser Router - Html file history API to keep our UI with url
import Header from './components/Header'
import FeedbackStats from "./components/FeedbackStats";
import FeedbackData from './data/FeedbackData'
import FeedbackList from "./components/FeedbackList"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./pages/AboutPage";
import {FeedbackProvider} from "./context/FeedbackContext";
import AboutIconLink from './components/AboutIconLink'
import Post from "./components/Post";

function App() {
  //const [feedback,setFeedback] = useState(FeedbackData) //App level state
  return (
      <FeedbackProvider>
          <Router>
              <Header />
              <Routes>
                  <Route exact path='/' element = { //exact - has to match exactly
                      <div className='container'>
                          <FeedbackForm/>
                          <FeedbackStats/>
                          <FeedbackList/>
                          <AboutIconLink/>
                      </div>
                  }>
                  </Route>
                  <Route path='/post/:id/:name' element={<Post/>}> Post</Route>
                  <Route path='/about' element={<AboutPage/>}> This is about</Route>
              </Routes>
          </Router>
      </FeedbackProvider>

  );
}

export default App;
