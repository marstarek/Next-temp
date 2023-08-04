'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n } from '../../i18n-config'
import Switcher from '../util/Switcher'


const Navbar = ({ navbar, lang }: {
    navbar: { header: string },lang:any
}) => {
    
    console.log(lang);


    const pathName = usePathname();
    function backToHome():void {
        const HomePath = pathName.split('/');
        console.log(HomePath);
        
    }
    const pathname2 = usePathname().split('/').slice(2).join('/')
    console.log(pathname2);
    const redirectedPathName = (locale: string) => {
        if (!pathName) return '/'
        const segments = pathName.split('/')
        segments[1] = locale;
        console.log(segments, segments.join('/') , locale);
        // location.assign(`/${locale}`)
        return segments.join('/')
    }
  return (
      <div className="navbar bg-blue-500">
          <div className="navbar-start">
              <label htmlFor="my-drawer" className="cursor-pointer ">        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
</label>

              <details className="dropdown ">
                  <summary className=" btn btn-ghost btn-circle">               
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                      </svg></summary>
                  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                      {i18n.locales.map((locale) => {
                          return (
                              <li key={locale}>
                                  {/* <Link href={redirectedPathName(locale)}>{locale}</Link> */}
                                  <p onClick={() => location.assign(`/${locale}/${pathname2}`)}
>{locale}</p>
                              </li>
                          )
                      })}
                  </ul>
              </details>
              <Switcher />


          </div>
          <div className="navbar-center">
              <Link className="btn btn-ghost normal-case text-xl " href={`/${lang}`}>{navbar.header}</Link>

          </div>
          <div className="navbar-end">
              

              
          </div>
      </div>
  )
}

export default Navbar