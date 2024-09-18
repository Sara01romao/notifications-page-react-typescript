import { useState } from 'react'
import { notifications } from './data/notifications'
import { NotificationComp } from './components/msgNotification'


function App() {
  
  
  
  
  return (
    <>
      <NotificationComp notifications={notifications} />
      
    </>
  )
}

export default App
