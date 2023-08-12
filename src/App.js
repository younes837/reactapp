
import { useState } from 'react';
import './App.css';

function App(props) {
  const [userInput,setUserInput]=useState();
  const [pwInput,setPwInput]=useState();
  const [errorUser,setErrorUser]=useState();
  const [errorPw,setErrorPw]=useState();
  
  const [logedIn,setLogedIn]=useState(false);
  const account=[{user:"younes",pw:"yns"},{user:"ourais",pw:"ors"}]
  const login=(e)=>{
    e.preventDefault()

    if(!account.find(elem=>elem.user===userInput )){
      setErrorUser("Votre identifiant est incorrect.")
      setErrorPw("")
    }else if(!account.find(elem=>elem.pw===pwInput )){
      setErrorPw("Votre mot de passe est incorrect.")
      setErrorUser("")
    }else if (account.find(elem=>elem.pw===pwInput && elem.user===userInput)) {   
      setLogedIn(true)
      // props.fun(true)
    }else{
      setErrorPw("Votre mot de passe est incorrect.")
    }
   
  }

  return (
    <div>
      {
        logedIn===false?
        <div id="login-form-wrap">
  
  <form id="login-form">
    <h2>Login</h2>
    <p>
    <input type="text" id="username" name="username" placeholder="Username" onChange={(e)=>setUserInput(e.target.value)} required/>
    <p className='error'>{errorUser}</p>
      
   
    </p>
    <p>
    <input type="password" id="email" name="email" placeholder="Password" onChange={(e)=>setPwInput(e.target.value)} required/>
    <p className='error'>{errorPw}</p>
    
    </p>
    <p>
    <input type="submit" id="login" value="Login" onClick={login} />
    </p>
  </form>
  </div>
        :<div>
          <h1>Acceuil</h1>
          <h2>Bonjour {userInput}</h2>
        </div>
      }

</div>

  );
}

export default App;
