import React from 'react'
import Table from '../Table/table'
import './body.scss'
import { useSelector } from 'react-redux'
import NavBar from '../Nav/navBar'

function Body() {
  const themeMode = useSelector((state) => state.Theme.themeMode)
  return (
    <div className={themeMode === 'dark' ? 'body-dark' : 'body-light'}>
      <NavBar />
      <Table />
    </div>
  )
}

export default Body