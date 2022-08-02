import { NavLink } from "react-router-dom"

const MobileBtn = (props) => {
    return (
        <NavLink to={props.to} className={(navData) => (navData.isActive ? 'text-red-400 underline ' : '') + ['py-2 px-5 hover:text-red-400 hover:underline cursor-pointer']}>{props.name}</NavLink>
    )
}

export default MobileBtn