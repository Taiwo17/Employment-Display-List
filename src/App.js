import { GlobalProvider } from './context/GlobalState'
import { Routes, Route } from 'react-router-dom'
import AddEmployee from './components/AddEmployee'
import { Home } from './components/Home'

function App() {
  return (
    <GlobalProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddEmployee />} />
        <Route path='/edit/:id' element={<AddEmployee />} />
      </Routes>
    </GlobalProvider>
  )
}

export default App
