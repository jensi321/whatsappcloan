import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Components/Pages/LandingPage'
import ChatPage from './Components/Pages/ChatPage'
import ChannelsPage from './Components/Pages/ChannelsPage'
import StatusPage from './Components/Pages/StatusPage'
import CommunitiesPage from './Components/Pages/CommunitiesPage'
import SettingsPage from './Components/Pages/SettingsPage'
import ProfilePage from './Components/Pages/ProfilePage'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/chat' element={<ChatPage/>}/>
          <Route path='/status' element={<StatusPage/>}/>
          <Route path='/channels' element={<ChannelsPage/>}/>
          <Route path='/communities' element={<CommunitiesPage/>}/>
          <Route path='/settings' element={<SettingsPage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>

        </Routes> 
      </BrowserRouter>
      
    </>
  )
}

export default App