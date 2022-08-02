import CardFlip from './CardFlip';
import textEng from '../../texts/English/Skill'
import textInd from '../../texts/Indonesia/Skill'
import textIta from '../../texts/Italy/Skill'
import textSpa from '../../texts/Spain/Skill'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Skill = () => {
    const langSelected = useSelector(state => state.MenuBarReducer.langSelected)
    const skillList = useSelector(state => state.MainReducer.skillList)
    const [text, setText] = useState('')
    const [title, setTitle] = useState('')

    useEffect(() => {
        // console.log(portfolioData)
        document.title = 'My Skill'
        if (langSelected === 'English') {
            setText(textEng)
            setTitle(`${textEng.normal} <span class="text-red-500">${textEng.strong}</span>`)
        }
        else if (langSelected === 'Italy') {
            setText(textIta)
            setTitle(`${textIta.normal} <span class="text-red-500">${textIta.strong}</span>`)
        }
        else if (langSelected === 'Spain') {
            setText(textSpa)
            setTitle(`${textSpa.normal} <span class="text-red-500">${textSpa.strong}</span>`)
        }
        else {
            setText(textInd)
            setTitle(`<span class="text-red-500">${textInd.strong}</span> ${textInd.normal} `)
        }
    }, [langSelected])

    if (!text) {
        return (
            <p>Loading</p>
        )
    }

    return (
        <div className='flex flex-col flex-1 mx-20 min-h-screen'>
            <p className='text-5xl text-center text-baby-powder my-3' dangerouslySetInnerHTML={{ __html: title }} />
            <hr className='my-3' />
            <p className='text-center text-2xl text-white'>{text.desc}</p>
            <div className='flex flex-row flex-wrap justify-center'>
                {/* {text.content.map((data, index) =>
                    <CardFlip title={data.name} items={data.items} key={index} />
                )} */}
                {skillList.map((data) =>
                    <CardFlip title={data.skillName} items={data.skillList} key={data.id} />
                )}
            </div>
        </div>
    )
}

export default Skill