import {Navigate,useNavigate} from 'react-router-dom'
function Post(){
    const status = 200;
    const navigate = useNavigate();
    const onClick = () =>{
        console.log('hello');
        navigate('/about');
    }
    if(status === 400){
        return <Navigate to='/notfound'></Navigate>
    }
    return(
        <div>
            <h1> POST</h1>
            <button onClick={onClick}>Click Me</button>
        </div>
    )
}
export default Post