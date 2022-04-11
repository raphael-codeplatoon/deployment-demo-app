import axios from 'axios';


const Signup = function (props) {

    const handleChange = function(event){
        props.setAppState((currentState)=>{
            return {
                ...currentState,
                signupForm: {
                    ...currentState.signupForm,
                    [event.target.name]: event.target.value,
                }
            }
        })
    }

    const submitSignupForm = function(event){
        event.preventDefault();
        axios.post('/signup', props.appState.signupForm).then((response)=>{
            console.log('response from server: ', response)
        })
    }

    console.log('props in register? ', props)
    return (
    <div className="signup">
        <h1 class="light-header">Create an account!</h1>
        <form onSubmit={submitSignupForm}>
            <label for="email">Email</label>
            <input id="email" name="email" onChange={handleChange}/>
            <hr/>
            <label for="password">Password</label>
            <input id="password" type="password" name="password" onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>
    </div>
    );
  }
  
  export default Signup;
  