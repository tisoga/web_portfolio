import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import textEng from '../texts/English/Home'
import textInd from '../texts/Indonesia/Home'
import textIta from '../texts/Italy/Home'
import textSpa from '../texts/Spain/Home'
import { FaGithub } from 'react-icons/fa';

const Home = () => {
    const langSelected = useSelector(state => state.MenuBarReducer.langSelected)
    const portfolioSettings = useSelector(state => state.MainReducer.portfolioSettings)
    const defaultLang = useSelector(state => state.MainReducer.portfolioSettings.defaultLang)
    const aboutMe = useSelector(state => state.MainReducer.aboutMe)
    const [langID, setLangID] = useState(defaultLang)
    const [text, setText] = useState('')
    // console.log(portfolioSettings)

    useEffect(() => {
        document.title = 'Home';
        if (langSelected === 'English') {
            setText(textEng)
            setLangID('EN')
        }
        else if (langSelected === 'Italy') {
            setText(textIta)
            setLangID('IT')
        }
        else if (langSelected === 'Spain') {
            setText(textSpa)
            setLangID('ES')
        }
        else {
            setText(textInd)
            setLangID('ID')
        }
    }, [langSelected])

    return (
        <div className='flex flex-col flex-1 lg:justify-center min-h-screen lg:mx-32 text-center lg:text-left'>
            <p className='text-3xl text-baby-powder mt-5'>{text.headline}</p>
            <p className='text-4xl text-baby-powder mx-1 lg:mx-0' dangerouslySetInnerHTML={{ __html: `${text.myName} <span class="text-red-500">${portfolioSettings.devName}</span>` }}></p>
            <p className='text-base text-baby-powder mt-4 text-justify px-5 lg:px-0'>{aboutMe?.[langID] ?? <span className='font-bold text-4xl'>{`You Haven't set About Me Text for ${langSelected} languange, go to Portfolio Admin Introducion page to set it.`}</span>}</p>
            <a href={`https://${portfolioSettings.githubUrl}`} target="_blank" rel="noopener noreferrer" className='self-center mt-2 cursor-pointer text-white hover:text-rich-black'>
                <FaGithub size={60} className='mx-5 mb-1 mt-10' />
                <p className='text-white underline hover:text-rich-black'>Github Profile</p>
            </a>
        </div>
    )
}

export default Home