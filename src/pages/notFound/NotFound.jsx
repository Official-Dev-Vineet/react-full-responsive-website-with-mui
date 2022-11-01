import React from 'react'
import './notFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section>
      <div className="container notFound__container"><h2>
        404 not Found </h2>
        <Link to="/home" className='btn'>Go Back To Home </Link>
        </div>
    </section>
  )
}

export default NotFound
