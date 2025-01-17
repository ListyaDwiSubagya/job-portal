import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ApplyJob from './pages/ApplyJob'
import Applications from './pages/Applications'
import RecruterLogin from './components/RecruterLogin'
import { AppContext } from './context/AppContext'
import Dashboard from './pages/Dashboard'
import AddJobs from './pages/AddJobs'
import ManageJobs from './pages/ManageJobs'
import ViewApp from './pages/ViewApp'
import 'quill/dist/quill.snow.css'

const App = () => {

  const {showRecruiterLogin} = useContext(AppContext)

  return (
    <div>
      {showRecruiterLogin && <RecruterLogin />}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/apply-job/:id' element={<ApplyJob/>}/>
        <Route path='/applications' element={<Applications/>}/>
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='add-job' element={<AddJobs/>}/>
          <Route path='manage-job' element={<ManageJobs/>}/>
          <Route path='view-app' element={<ViewApp/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App