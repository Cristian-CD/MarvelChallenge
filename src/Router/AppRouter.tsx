import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Views/Home/pages/Home'

export const AppRouter: React.FC = () => {
  return (
    <>
    <Routes>
        <Route path='*' element={<Home/>}></Route>
    </Routes>
    </>
  )
}
