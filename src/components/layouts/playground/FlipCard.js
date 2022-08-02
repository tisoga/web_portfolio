import { useState } from "react"
import { useSpring, animated } from "react-spring"

const FlipCard = () => {
    const [flipped, set] = useState()
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    })
    return (
        <div className="flex flex-col w-screen h-screen justify-center items-center">
            <div className="flex" onClick={() => set(state => !state)}>
                <animated.div
                    className={'border py-10 px-10 bg-white absolute'}
                    style={{ opacity: opacity.to(o => 1 - o), transform }}
                >1</animated.div>
                <animated.div
                    className={'border py-10 px-10 bg-red-900 absolute'}
                    style={{
                        opacity,
                        transform,
                        rotateX: '180deg',
                    }}
                >2</animated.div>
            </div>
        </div>
    )
}

export default FlipCard