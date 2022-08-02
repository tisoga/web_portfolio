import { useState } from 'react';
import { useTransition, animated } from 'react-spring';

const Playground = () => {
    const [items, setItems] = useState([])
    const transition = useTransition(items, {
        from: { x: -100, y: 200, opacity: 0 },
        enter: item => async(next) => {
            await next({ x: 0, y: 0, opacity: 1, delay: item.delay })
        },
        leave: { x: 100, y: 200, opacity: 0 }
    })
    return (
        <div className='flex flex-col w-screen h-screen justify-center items-center'>
            <button className='border w-16 h-16 bg-white'
                onClick={() => setItems(v => v.length ? [] : [
                    {delay: 100},
                    {delay: 200}
                ])}>okay</button>
            <div className="flex flex-1 flex-col justify-center items-center">
            {/* <animated.div className="bg-white border w-16 h-16 rounded shadow-xl" /> */}
                {transition((style, item) => 
                    item ? <animated.div style={style} className="bg-white border w-16 h-16 rounded shadow-xl my-2" > </animated.div>: ''
                )}
            </div>
        </div>
    )
}

export default Playground