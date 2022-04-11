import axios from 'axios';


const Login = function (props) {
    const handleChange = function(event){
        props.setAppState((currentState)=>{
            return {
                ...currentState,
                loginForm: {
                    ...currentState.loginForm,
                    [event.target.name]: event.target.value,
                }
            }
        })
    }

    const submitLoginForm = function(event){
        event.preventDefault();
        axios.post('/login', props.appState.loginForm).then((response)=>{
            window.location.href= '/#/'
            // we're logged in, but we need to refresh to get the CSRF token on the front-end
            window.location.reload()
        })
    }

    return (
      <div className="login">
          <h1 class="light-header">Log in!</h1>
          <form onSubmit={submitLoginForm}>
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
  
  export default Login;
  