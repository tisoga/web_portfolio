import { FaBars } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { English, Indonesia, Italy, Spain } from '../../../assets/icon';
import { setLang, toggleLang, toggleMenu } from '../../redux/actions/MenuBar';
import { useEffect, useState } from 'react';
import DesktopBtn from './DesktopBtn';
import MobileBtn from './MobileBtn';
import contentEng from '../../texts/English/Sidebar';
import contentInd from '../../texts/Indonesia/Sidebar';
import contentIta from '../../texts/Italy/Sidebar';
import contentSpa from '../../texts/Spain/Sidebar';

const Sidebar = () => {
  const menuState = useSelector(state => state.MenuBarReducer)
  const portfolioSettings = useSelector(state => state.MainReducer.portfolioSettings)
  const languageData = useSelector(state => state.MainReducer.languageList)
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    // console.log(portfolioSettings)
    if (menuState.langSelected === 'English') {
      setContent(contentEng)
    }
    else if (menuState.langSelected === 'Italy') {
      setContent(contentIta)
    }
    else if (menuState.langSelected === 'Spain') {
      setContent(contentSpa)
    }
    else {
      setContent(contentInd)
    }
  }, [menuState.langSelected])

  const btnToggleMenu = () => {
    dispatch(toggleMenu())
  }

  const btnToggleLang = () => {
    dispatch(toggleLang())
  }

  const changeLang = (val, desktopMode) => {
    dispatch(setLang(val))
    if (!desktopMode) {
      dispatch(toggleLang())
    }
  }

  if (!content) {
    return (
      <p>TEst</p>
    )
  }

  return (
    <>
      {/* {Mobile} */}
      <div className='flex flex-col lg:hidden bg-forest-green-web min-h-10'>
        <button className={'flex border w-9 h-7 mx-2 my-2 hover:bg-baby-powder rounded justify-center items-center ' + [menuState.menuBarIsOpen ? 'bg-white' : 'bg-forest-green-web']} onClick={btnToggleMenu}>
          <FaBars />
        </button>
        {menuState.menuBarIsOpen &&
          <div className='text-baby-powder flex flex-col'>
            {content.button.map((item, index) =>
              <MobileBtn to={item.to} name={item.name} key={index} />
            )}
            <div className='py-2 px-5 hover:text-red-400 hover:underline cursor-pointer' onClick={btnToggleLang}>{menuState.langSelected}</div>
            {menuState.langMenuIsOpen &&
              <div className='flex flex-col bg-black mx-1'>
                {languageData.en &&
                  <div className='px-5 py-2 hover:bg-baby-powder hover:text-rich-black text-sm cursor-pointer' onClick={() => changeLang('English')}>English</div>
                }
                {languageData.id &&
                  <div className='px-5 py-2 hover:bg-baby-powder hover:text-rich-black text-sm cursor-pointer' onClick={() => changeLang('Indonesia')}>Indonesia</div>
                }
                {languageData.it &&
                  <div className='px-5 py-2 hover:bg-baby-powder hover:text-rich-black text-sm cursor-pointer' onClick={() => changeLang('Italy')}>Italy</div>
                }
                {languageData.es &&
                  <div className='px-5 py-2 hover:bg-baby-powder hover:text-rich-black text-sm cursor-pointer' onClick={() => changeLang('Spain')}>Spain</div>
                }
              </div>
            }
          </div>
        }
      </div>
      {/* Desktop */}
      <div className='hidden lg:flex flex-col bg-forest-green-web w-1/5 pt-40'>
        <h2 className='text-red-400 text-4xl text-center -rotate-12 cursor-default'>{portfolioSettings.portfolioTitle}</h2>
        <p className='text-3xl text-white text-center mt-14'>{portfolioSettings.devName}</p>
        <p className='text-base text-white text-center'>{portfolioSettings.devTitle}</p>
        <div className='flex flex-col mt-5'>
          {content.button.map((item, index) =>
            <DesktopBtn to={item.to} name={item.name} key={index} />
          )}
          <div className='flex flex-row justify-center'>
            {languageData.en &&
              <English className={'w-14 m-2 cursor-pointer ' + [menuState.langSelected === 'English' ? 'opacity-100' : 'opacity-30']} onClick={() => changeLang('English', true)} />
            }
            {languageData.id &&
              <Indonesia className={'w-14 m-2 cursor-pointer ' + [menuState.langSelected === 'Indonesia' ? 'opacity-100' : 'opacity-30']} onClick={() => changeLang('Indonesia', true)} />
            }
            {languageData.it &&
              <Italy className={'w-14 m-2 cursor-pointer ' + [menuState.langSelected === 'Italy' ? 'opacity-100' : 'opacity-30']} onClick={() => changeLang('Italy', true)} />
            }
            {languageData.es &&
              <Spain className={'w-14 m-2 cursor-pointer ' + [menuState.langSelected === 'Spain' ? 'opacity-100' : 'opacity-30']} onClick={() => changeLang('Spain', true)} />
            }
          </div>
        </div>
        <div className='flex flex-1 flex-row'>
          <p className='text-center my-5 mx-auto text-white self-end'>© 2021 Ryan Afrizal. All Rights Reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Sidebar