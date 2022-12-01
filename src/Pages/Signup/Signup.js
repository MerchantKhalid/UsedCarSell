import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../ContextApi/AuthProvider';
import { FaFacebook, FaGithub, FaGoogle, FaMicrosoft } from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-toastify';
import useToken from '../../Hooks/useToken';



const Signup = () => {
    const [error,setError] = useState('') 

    const {createUser,providerLogin,updateUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    
    const gProvider = new GoogleAuthProvider();
    const fProvider = new FacebookAuthProvider();
    const from = location.state?.from?.pathname || '/' 
    const [createdUserEmail,setCreatedUserEmail]= useState('')
    const [token]= useToken(createdUserEmail)

    if(token){
      navigate('/')
    }

    const handleSignin =(event)=>{
        event.preventDefault()
        setError('')
        const form = event.target
        const name = form.name.value;
        const email = form.email.value
        const password = form.password.value

        createUser(email,password)
        .then(result=>{
            const user = result.user
            console.log(user)
            toast.success('User Created Successfully')
            const userinfo ={
                displayName:name
            }
            updateUser(userinfo)
             .then(()=>{
              saveUser(name,email)
             })
            .catch(err=>{
              setError(error.message)
            })
            form.reset()
            // setError('')
            // navigate('/')
            
        })
        .catch(error=>{
          console.error(error)
          setError(error.message)
        }) 
    }

    //google
    const handleGoogle =(provider)=>{
      providerLogin(gProvider)
      .then(result=>{
        const user = result.user
        console.log(user)
        
        setError('')
        navigate(from,{replace:true})
    })
    .catch(error=>{
      console.error(error)
      setError(error.message)
    })
}

//FB
const handleFacebook =(provider)=>{
  providerLogin(fProvider)
  .then(result=>{
    const user = result.user
    console.log(user)
    
    setError('')
    navigate(from,{replace:true})
})
.catch(error=>{
  console.error(error)
  setError(error.message)
})
}

const saveUser = (name,email)=>{
  const user={name,email} 
  fetch('http://localhost:5000/users',{
    method:'POST',
    headers:{
      'content-type' : 'application/json'
    },
    body:JSON.stringify(user)
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
    setCreatedUserEmail(email)
  })
}

// jwt
// const getUserToken = email=>{
//     fetch(`http://localhost:5000/jwt?email=${email}`)
//     .then(res=>res.json())
//     .then(data=>{
//       if(data.accessToken){
//         localStorage.setItem('accessToken',data.accessToken)
//         navigate('/')
//       }
//     })
// }





    return (
        <div className="hero w-full">
        <div className="hero-content md:grid grid-cols-2 flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
                <img className='w-3/4' src={img} alt=""></img>
          
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center">Sign Up</h1>
            <form onSubmit={handleSignin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Your Name " className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password"  name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <p className='text-red-600'> {error}</p>
                </label>
              </div>
              <div className="form-control mt-6">
              <input  className="btn btn-primary" type='submit' value='Sign Up'></input>
              </div>
              <div className='divider'>OR</div>
              {/* social login */}
              <div className='flex justify-center items-center gap-5 text-lg'>
                 <button onClick={handleGoogle} className='text-3xl'><FcGoogle /></button>
                 <button onClick={handleFacebook} className='bg-blue-600 text-white text-3xl'><FaFacebook /></button>
                 <button className=' text-3xl'><FaGithub /></button>
                 <button className='bg-green-600 text-white text-3xl'><FaMicrosoft /></button>
                 
              </div>
            </form>
            <p className='text-gray-600 font-bold mb-3 text-center'>Have An Account ? <Link className='text-orange-600 font-bold mb-3' to='/login'>Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Signup;