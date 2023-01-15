// this is an exmaple of context API
import {createContext, useState} from "react";
import {v4 as uuidv4} from "uuid";

const FeedbackContext = createContext();
export const FeedbackProvider = ({children}) =>{ //need to wrap everything in a provider
    const [feedback,setFeedback] = useState([
        {
            id : 1,
            text: 'This is Feedback Item 1',
            rating: 10,
        },
        {
            id : 2,
            text: 'This is Feedback Item 2',
            rating: 7,
        },
        {
            id : 3,
            text: 'This is Feedback Item 3',
            rating: 8,
        },
        {
            id : 4,
            text: 'This is Feedback Item 4',
            rating: 2,
        },
    ])
    //Edit Feedback state
    const [feedbackEdit,setFeedbackEdit] = useState({
        item: {},//default values
        edit: false
        }
    );
    //Edit Feedback function
    const editFeedback = (item) =>{
        setFeedbackEdit({
            item,
            edit:true,
        })
    }
    //Delete Feedback
    const deleteFeedback = (id) =>{
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    //update Feedback
    const updateFeedback = (id,updItem) =>{
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item))
    }
    const addFeedBack = (newFeedBack) => {
        newFeedBack.id = uuidv4()
        setFeedback([newFeedBack,...feedback])

    }

    return (
        <FeedbackContext.Provider value={{ //Any state or function we use will be passed here as value
            feedback,
            deleteFeedback,
            addFeedBack,
            editFeedback,
            updateFeedback,
            feedbackEdit
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}
export default FeedbackContext