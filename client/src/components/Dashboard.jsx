import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center my-5">Dashboard</h2>
        <div className="col-lg-4">
          <div className="card">
            <div className="card-title">
              <h5 className='mt-3'>Predictor</h5>
            </div>
            <div className="card-body">
              <Link to={'#'} className="btn btn-success">Predict</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
        <div className="card">
            <div className="card-title">
              <h5 className='mt-3'>Predictor</h5>
            </div>
            <div className="card-body">
              <Link to={'#'} className="btn btn-success">Predict</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
        <div className="card">
            <div className="card-title">
              <h5 className='mt-3'>Predictor</h5>
            </div>
            <div className="card-body">
              <Link to={'#'} className="btn btn-success">Predict</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard