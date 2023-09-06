import { Sidebar, Home, Skill, Portfolio } from './components/layouts'
import { Routes, Route, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { visitorCounter } from './components/functions';
import { TailSpin } from 'react-loader-spinner'
import { useQueries } from 'react-query';
import { fetchAboutMe, fetchPortfolioData, fetchPortfolioSettings, fetchSelectedLang, fetchSkillList } from './components/functions/fetching';

function App() {
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const forceLang = searchParams.get('lang')

  useEffect(() => {
    visitorCounter()
  }, [])

  useEffect(() => {
      document.title = 'Loading'
  }, [])


  const result = useQueries([
    {
      queryKey: ['selectedLang'],
      queryFn: () => fetchSelectedLang(dispatch),
    },
    {
      queryKey: ['portfolioSetting'],
      queryFn: () => fetchPortfolioSettings(dispatch, forceLang),
    },
    {
      queryKey: ['aboutMe'],
      queryFn: () => fetchAboutMe(dispatch),
    },
    {
      queryKey: ['skillList'],
      queryFn: () => fetchSkillList(dispatch),
    },
    {
      queryKey: ['portfolioData'],
      queryFn: () => fetchPortfolioData(dispatch),
    },
  ])

  const isLoading = result.some(query => query.isLoading)
  const errorStatus = result.some(query => query.isError)

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

  // if (error) {
  //   setErrorStatus(true)
  // }

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
