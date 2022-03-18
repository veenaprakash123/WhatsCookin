import React from 'react'
import {Link , Routes, Route} from 'react-router-dom'
import Welcome from './components/Welcome'
import Login from './components/Login'
import Register from './components/Register'
import Kitchen from './components/Kitchen'
import RecipeBook from './components/RecipeBook'



const App = () => {





  return (
    <div>App
        <main>
            <Routes>
                <Route path='/welcome' element={<Welcome/>} ></Route>
                <Route path='/login' element={<Login/>} ></Route>
                <Route path='/register' element={<Register/>} ></Route>
                <Route path='/kitchen' element={<Kitchen/>} ></Route>
                <Route path='/recipes' element={<RecipeBook/>} ></Route>

            </Routes>
        </main>

    

    </div>
  )
}

export default App