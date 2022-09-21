import React, { useState } from 'react'
import { Layout } from '../../components/Layout'
import { Card } from '../../components/UI/Card'

/**
* @author
* @function RegisterPage
**/

export const RegisterPage = (props) => {

  const[firstName, setFirstName] = useState('');
  const[lastName, setLastName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');


  return(
    <Layout>
       <div className='registerContainer'>
        <Card>
          <form>
            <h3>Sign Up</h3>
          
            <input
                name='firstName'
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
            />

            <input
              name='lastName'
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
             />

            <input
              name='email'
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
             />

            <input
              name='password'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
             />

             <div>
              <button>Sign Up</button>
             </div>
          </form>
        </Card>
       </div>
    </Layout>
 
   )

 }