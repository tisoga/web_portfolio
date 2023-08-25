import { Sidebar, Home, Skill, Portfolio } from './components/layouts'
import { Routes, Route, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import db from './components/config/firebase';
import { useDispatch } from 'react-redux';
import { getAboutme, getDataLang, getPortfolioSettings, getSkillList, setPortfolioData } from './components/redux/actions/Main';
import { setLang } from './components/redux/actions/MenuBar';
import { visitorCounter } from './components/functions';
import { TailSpin } from 'react-loader-spinner'
function App() {
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const [isLoading, setLoading] = useState(true)
  const [errorStatus, setErrorStatus] = useState(false)

  useEffect(() => {
    const forceLang = searchParams.get('lang')
    visitorCounter(setErrorStatus)
    db.collection('settings-data').doc('lang-selected').get().then((doc) => {
      // console.log(doc.data())
      dispatch(getDataLang(doc.data()))
    })
      .catch((e) => {
        console.log(setErrorStatus(true))
      })
    db.collection('settings-data').doc('portfolio').get().then((doc) => {
      let langSetting;
      const langVar = forceLang ? forceLang : doc.data().defaultLang
      dispatch(getPortfolioSettings(doc.data()))
      switch (langVar) {
        case 'ID':
          langSetting = 'Indonesia'
          break;
        case 'IT':
          langSetting = 'Italy'
          break
        case 'ES':
          langSetting = 'Spain'
          break
        case 'EN':
        default:
          langSetting = 'English'
          break;
      }
      dispatch(setLang(langSetting))
    })
      .catch((e) => {
        console.log(setErrorStatus(true))
      })
    db.collection('settings-data').doc('portfolio').collection('about-me').get().then((docs) => {
      const allText = {}
      docs.forEach(doc => {
        allText[doc.id] = doc.data().text
      })
      dispatch(getAboutme(allText))
    })
      .catch((e) => {
        console.log(setErrorStatus(true))
      })
    db.collection('skill-list').orderBy('order','asc').get().then((qs) => {
      const allSkill = []
      qs.forEach((doc) => {
        if (!doc.data().isDisabled) {
          allSkill.push({
            id: doc.id,
            ...doc.data()
          })
        }
      })
      dispatch(getSkillList(allSkill))
    })
      .catch((e) => {
        console.log(setErrorStatus(true))
      })
    const portfolioRef = db.collection('portfolio-data')
    portfolioRef.get().then((docs) => {
      docs.forEach(async (doc) => {
        const translations = await portfolioRef.doc(doc.id).collection('translation').get()
        const translationList = {}
        translations.forEach((item) => {
          translationList[item.id] = { ...item.data() }
        })
        const portfolioData = {
          id: doc.id,
          translation: translationList,
          ...doc.data()
        }
        // console.log('portfolioData')
        dispatch(setPortfolioData(portfolioData))
      })
      setLoading(false)
    })
      .catch((e) => {
        console.log(setErrorStatus(true))
      })
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (errorStatus) {
      document.title = 'Error Page'
    }
    else {
      document.title = 'Loading'
    }
  }, [errorStatus])


  if (isLoading) {
    return (
      <div className='flex flex-col h-screen justify-center mx-auto items-center'>
        <TailSpin
          color='red'
        />
        <p className='mt-2 text-white text-2xl'>Loading ...</p>
        <p className='text-white text-sm'>Please wait ...</p>
      </div>
    )
  }

  return (
    <div className='flex flex-col lg:flex-row'>
      {errorStatus ?
        <div className='flex flex-col h-screen justify-center mx-auto items-center'>
          <p className='mt-2 text-white text-2xl'>Something Wrong...</p>
          <p className='text-white text-sm'>Web can't loaded...</p>
          <p className='text-white text-sm'>Please report to Administrator.</p>
        </div>
        :
        <>
          <Sidebar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/skill' element={<Skill />} />
            <Route path='/project' element={<Portfolio />} />
          </Routes>
          <div className='bg-forest-green-web lg:hidden'>
            <p className='text-center text-white'>© 2021 Ryan Afrizal. All Rights Reserved.</p>
          </div>
        </>
      }

    </div>
  );
}

export default App;
