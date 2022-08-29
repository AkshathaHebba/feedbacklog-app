import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from "./RatingSelect";
import { useState } from 'react'

function FeedbackForm({handleAdd}){
    const [text,setText] = useState('');
    const [rating,setRating] = useState(10);
    const [btnDisabled,setbtnDisabled] = useState(true);
    const [message,setMessage] = useState('');

    const handleTextChange = (e) => {
        if(text === ''){
            setbtnDisabled(true)
            setMessage(null)
        }else if(text !== '' && text.trim().length <= 10){
            setMessage('Text must be atleast 10 characters')
            setbtnDisabled(true)
        }else{
            setMessage(null)
            setbtnDisabled(false)
        }
        setText(e.target.value);
    }
    //Called when submit is clicked
    const handleSubmit = (e) =>{
        e.preventDefault();//prevent the default behaviour -> submitting into actual file
        if(text.trim().length > 10){
            //creating a object
            const newFeedBack = {
                text: text,
                rating: rating
            }
            handleAdd(newFeedBack);
            setText('');
        }
    }
return(
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How do you want the service to look like</h2>
            <RatingSelect select={(rating)=> setRating(rating)}></RatingSelect>
            <div className='input-group'>
                <input onChange={handleTextChange} type='text' value={text} placeholder='write a review'/>
                <Button type='Submit' version='secondary' isDisabled={btnDisabled} > Send </Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
)
}
export default FeedbackForm;