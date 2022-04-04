import React, { useState, useEffect } from 'react';
import './home.scss';
import { useDispatch, useSelector } from 'react-redux';
import home_dark from '../../../../assets/img/home_dark.png';
import home_light from '../../../../assets/img/home_light.png';
import Footer from '../../../priceBoard/Footer/footer';
import Header from '../../../priceBoard/Header/header';
import { useTranslation } from 'react-i18next'
import Body from '../../Body/container/body';
import '../../../changeLanguage/i18n'

function Home() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    document.title = t('title.document_title_home')
  }, [])

  const themeMode = useSelector((state) => state.Theme.themeMode)

  return (
    <div className='main' >
      <div className={themeMode === 'light' ? 'container-light fixed' : 'container-dark fixed'}>
        <div className=''>
          {/* Header */}
          <Header />
          <div className='home-img' >
            <img src={themeMode === 'dark' ? home_dark : home_light} alt='Bieu do' className='chart-img' />
          </div>
        </div>
      </div>
      {/* Body */}
      <div className='body-css'>
        <Body />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}
export default Home
