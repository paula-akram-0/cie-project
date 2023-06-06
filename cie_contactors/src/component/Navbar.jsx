import React from 'react'
import logo from "../assets/images/logo.png"
import { useTranslation } from 'react-i18next';
export default function Navbar() {
    const {t,i18n} = useTranslation()
    if(i18n.language === 'ar'){
        document.body.style.direction = "rtl"
    }else if (i18n.language === 'en'){
        document.body.style.direction = "ltr"
    }

  return (
    <div>
        <nav className="navbar navbar-expand-lg  bg-body-tertiary fixed-top">
  <div className="container">
  <img className='logo' src={logo} alt="" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className={i18n.language === 'ar'?"navbar-nav navbar-nav-rtl me-auto mb-2 mb-lg-0":"navbar-nav ms-auto mb-2 mb-lg-0"}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">{t('home')}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">{t('about')}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">{t('projects')}</a>
        </li>
        <li className="nav-item ">
          <button className='nav-btn'>{t('contact')}</button>
        </li>
        <select className={i18n.language === 'ar'?'form-select me-3 h-25 w-25':'form-select ms-3 h-25 w-25'} onChange={(e)=>  {i18n.changeLanguage(e.target.value)}} name="" id="">
            <option value="en">English</option>
            <option value="ar">Arabic</option>
        </select>
       
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}
