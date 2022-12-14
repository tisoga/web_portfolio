import { useEffect, useState } from 'react';
import { FaPython, FaMobileAlt, FaGlobe } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useTransition, animated } from 'react-spring';
import { selectProject, setVisibleModal } from '../../redux/actions/Project';
import textEng from '../../texts/English/Project';
import textInd from '../../texts/Indonesia/Project';
import textIta from '../../texts/Italy/Project';
import textSpa from '../../texts/Spain/Project';
import Modal from './Modal';
import clickedModalCounter from '../../functions/clickedModalCounter';

const Portfolio = () => {
    const [items, setItems] = useState([])
    const [text, setText] = useState(textEng)
    const [langID, setLangID] = useState('ID')
    const [title, setTitle] = useState('')
    const [selectedMenu, setMenu] = useState('Web')
    const [selectedIcon, setIcon] = useState('Web')
    const isModalVisible = useSelector(state => state.ProjectReducer.isVisibleModal)
    const defaultLang = useSelector(state => state.MainReducer.portfolioSettings.defaultLang)
    const langSelected = useSelector(state => state.MenuBarReducer.langSelected)
    const projectList = useSelector(state => state.MainReducer.portfolioData)
    const dispatch = useDispatch()

    const transition = useTransition(items, {
        from: { x: -150, y: 200, opacity: 0 },
        enter: item => async (next) => {
            await next({ x: 0, y: 0, opacity: 1, delay: item.delay })
        },
        leave: item => async (next) => {
            await next({ x: 0, y: 0, opacity: 0 })
        },
    })

    useEffect(() => {
        // console.log('Change')
        document.title = 'My Project'
        if (langSelected === 'English') {
            setText(textEng)
            setLangID('EN')
            setTitle(`${textEng.normalText} <span class="text-red-500">${textEng.strongText}</span>`)
        }
        else if (langSelected === 'Italy') {
            setText(textIta)
            setLangID('IT')
            setTitle(`${textIta.normalText} <span class="text-red-500">${textIta.strongText}</span>`)
        }
        else if (langSelected === 'Spain') {
            setText(textSpa)
            setLangID('EN')
            setTitle(`${textSpa.normalText} <span class="text-red-500">${textSpa.strongText}</span>`)
        }
        else {
            setText(textInd)
            setLangID('ID')
            setTitle(`<span class="text-red-500">${textInd.strongText}</span> ${textInd.normalText} `)
        }
    }, [langSelected])

    useEffect(() => {
        const contentFilter = (lang) => {
            const dataList = []
            // let data;
            let delayCount = 0
            // if (lang === 'English') {
            //     data = textEng
            // }
            // else {
            //     data = textInd
            // }
            // console.log(projectList)
            projectList.forEach((item) => {
                if (item.category === selectedMenu.toLowerCase()) {
                    delayCount += 200
                    dataList.push({ ...item, delay: delayCount })
                }
            })
            return dataList
        }
        const filteredContent = contentFilter(langSelected)
        // console.log(projectList)
        setTimeout(() => {
            setIcon(selectedMenu)
            setItems(filteredContent)
        }, 1000)
        // eslint-disable-next-line
    }, [selectedMenu ,projectList])


    const changeCategoryBtn = (val) => {
        setItems([])
        setMenu(val)
    }

    const setModalVisible = (project) => {
        dispatch(setVisibleModal(true))
        dispatch(selectProject(project))
        clickedModalCounter(project.id)
    }

    const Icon = ({ className }) => {
        if (selectedIcon === 'Web') {
            return <FaGlobe className={className} />
        }
        else if (selectedIcon === 'Mobile') {
            return <FaMobileAlt className={className} />
        }
        else {
            return <FaPython className={className} />
        }
    }

    if (!text) {
        return (
            <p>Loading</p>
        )
    }

    return (
        <>
            <div className='flex flex-col flex-1 min-h-screen mx-20'>
                <p className='text-5xl text-center text-baby-powder' dangerouslySetInnerHTML={{ __html: title }} />
                {/* <p className='text-5xl text-center text-baby-powder'>My <span class="text-red-500">Project</span></p> */}
                <hr className='my-3' />
                <div className='grid grid-rows-2 lg:flex lg:flex-row justify-around'>
                    <button className={'border px-10 py-2 rounded-lg bg-green-pantone text-white hover:bg-blue-800 shadow-xl my-1 lg:my-0 ' + [selectedMenu === 'Web' && 'bg-blue-800']}
                        onClick={() => {
                            changeCategoryBtn('Web')
                        }}
                    >Web</button>
                    <button className={'border px-10 py-2 bg-green-pantone rounded-lg text-white hover:bg-blue-800 shadow-xl my-1 lg:my-0 ' + [selectedMenu === 'Mobile' && 'bg-blue-800']}
                        onClick={() => {
                            changeCategoryBtn('Mobile')
                        }}
                    >Mobile</button>
                    <button className={'border px-10 py-2 bg-green-pantone rounded-lg text-white hover:bg-blue-800 shadow-xl my-1 lg:my-0 ' + [selectedMenu === 'Python' && 'bg-blue-800']}
                        onClick={() => changeCategoryBtn('Python')}
                    >Python</button>
                </div>
                <hr className='my-3' />
                <div className='flex flex-row flex-wrap mt-4 justify-around'>
                    {transition((style, item) =>
                        item.translation[defaultLang]
                            ?
                            <animated.div style={style} className='flex justify-center items-center border h-48 w-72 mb-4 bg-forest-green-web border-red-700 rounded-md hover:bg-green-pantone hover:text-black transition delay-100 duration-700 relative cursor-pointer text-white'
                                onClick={() => setModalVisible(item)}>
                                <Icon className={'absolute left-0 top-0 w-full h-full text-white fill-current opacity-30'} />
                                <p className='text-2xl text-center absolute'>{item.translation[langID]?.projectName ?? item.translation[defaultLang].projectName}</p>
                            </animated.div>
                            : ''
                    )}
                </div>
            </div>
            {isModalVisible &&
                <Modal langID={langID} />
            }
        </>

    )
}

export default Portfolio