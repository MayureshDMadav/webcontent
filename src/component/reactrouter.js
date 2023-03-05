import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Mainpage from '../pages/mainpage'
import Routertest from '../pages/routertest'


const Reactrouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Mainpage />} />


            <Route path="route" element={<Routertest />} />



        </Routes>

    )

}

export default Reactrouter