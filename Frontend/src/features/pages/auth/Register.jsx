import React from 'react'

const Register = () => {
  return (
    <>
      <main className='register-page'>
         <div>
            <form>
                <input type="text" placeholder='Enter Username'  />
                <input type="text" placeholder='Enter Email' />
                <input type="text" placeholder='Enter Password' />
            </form>
         </div>
      </main>
    </>
  )
}

export default Register
