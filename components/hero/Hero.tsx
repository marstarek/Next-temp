'use client'
import React from 'react'
import { motion } from "framer-motion"

const Hero = ({ hero }: {
    hero: {
        backgroundImage: string,
        header: string,
        text: string,
        Email: string,
        Password:string,
        Forgotpassword: string,
        Login: string,

    }
}) => {
  return (
      <div className="hero min-h-[40rem] py-10 bg-base-200" style={{ backgroundImage: `url(${hero.backgroundImage})` }}>
          <div className="hero-content flex-col lg:flex-row-reverse">
              <motion.div 
                  initial={{ opacity: 0, x: -100,y:-100 }}
                  animate={{ opacity: 1, x: [-100, 10, 0], y: [-100, 10, 0] }}
                  transition={{ duration: 0.5 }}
                 
              
              className="text-center ">
                  <h1 className="text-5xl font-bold">{hero.header}</h1>
                  <p className="py-6">{hero.text}</p>
              </motion.div>
              <motion.div
                  initial={{ opacity: 0, x: 100, y: 100 }}
                  animate={{ opacity: 1, x: [100, 10, 0], y: [100, 10, 0] }}
                  transition={{ duration: 0.5 }} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                      <div className="card-body">
                          <div className="form-control">
                              <label className="label">
                                  <span className="label-text">{hero.Email}</span>
                              </label>
                              <input type="text" placeholder={hero.Email} className="input input-bordered" />
                          </div>
                          <div className="form-control">
                              <label className="label">
                                  <span className="label-text">{hero.Password} </span>
                              </label>
                              <input type="text" placeholder={hero.Password} className="input input-bordered" />
                              <label className="label">
                                  <a href="#" className="label-text-alt link link-hover">{hero.Forgotpassword} </a>
                              </label>
                          </div>
                          <div className="form-control mt-6">
                              <button className="btn btn-primary">{hero.Login}</button>
                          </div>
                      </div>
              
              </motion.div>
             
          </div>
      </div>
  )
}

export default Hero
