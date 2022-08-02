import { NavLink } from "react-router-dom"

const DesktopBtn = (props) => {
    // console.log(props)
    return (
        <NavLink to={props.to} className={(navData) => (navData.isActive ? 'bg-blue-500 border-blue-500 ' : 'bg-rich-black border-black ') + ['flex h-10 border-2 my-1 mx-3 rounded-lg hover:bg-blue-500 hover:border-blue-500 cursor-pointer justify-center py-1 selection:bg-blue-500 selection:text-baby-powder']}>
            <p className='text-white'>{props.name}</p>
        </NavLink>
    )
}

export default DesktopBtn