import { Routes, Route } from 'react-router-dom'

import './style/globals.css'

import SigninForm from './auth/forms/SigninForm'
import SignupForm from './auth/forms/SignupForm'
import AuthContainer from './auth/AuthContainer'

import RootContainer from './root/RootContainer'
import { Home } from './root/pages'

const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* public routes */}
        <Route element={<AuthContainer/>}>
          <Route path='/sign-in' element={<SigninForm/>} />
          <Route path='/sign-up' element={<SignupForm/>} />
        </Route>

        {/* private routes */}
        <Route element={<RootContainer/>}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App