import { useState } from "react"
import { useSpring, animated } from "react-spring"

const CardFlip = (props) => {
    const [flipped, set] = useState()
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    })
    return (
        <div className="flex cursor-pointer" onClick={() => set(state => !state)}>
            <animated.div
                className='flex h-40 border border-red-500 bg-green-pantone w-[440px] m-2 justify-center items-center'
                style={{ opacity: opacity.to(o => 1 - o), transform }}>
                <p className='text-baby-powder text-5xl text-center'>{props.title}</p>
            </animated.div>
            <animated.div
                className='flex flex-col h-40 border border-red-500 bg-green-pantone w-[440px] m-2 absolute overflow-auto px-4 lg:px-0'
                style={{
                    opacity,
                    transform,
                    rotateX: '180deg',
                }}>
                <p className='text-baby-powder text-2xl underline text-center'>{props.title}</p>
                <div className='text-baby-powder text-xl'>
                    <ol className='list-decimal mx-9'>
                        {props.items.map((item, index) =>
                            <li key={index}>{item}</li>
                        )}
                    </ol>
                </div>
            </animated.div>
        </div>
    )
}

export default CardFlip