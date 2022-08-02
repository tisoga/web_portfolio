import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSpring, animated } from "react-spring"
import { selectProject, setVisibleModal } from "../../redux/actions/Project";

function useOutsideAlerter(ref) {
    const dispatch = useDispatch()
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                dispatch(setVisibleModal(false))
                dispatch(selectProject(''))
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
        // eslint-disable-next-line
    }, [ref]);
}

const Tag = ({ items }) => {
    return (
        <a href={items.tagUrl} target="_blank" rel="noopener noreferrer"
            className="text-white border border-white px-2 py-1 m-1 cursor-pointer hover:bg-forest-green-web hover:border-black shadow-xl">{items.tagName}</a>
    )
}

const Modal = ({ langID }) => {
    const selectedProject = useSelector(state => state.ProjectReducer.selectedProject)
    const defaultLang = useSelector(state => state.MainReducer.portfolioSettings.defaultLang)
    // console.log(selectedProject)
    const initialModalAnimation = useSpring({
        opacity: 1,
        from: {
            opacity: 0
        }
    })
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return (
        <animated.div
            style={initialModalAnimation}
            className="min-h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-75 p-4">
            <div
                ref={wrapperRef}
                className="w-96 min-h-full bg-indigo-700 rounded p-1">
                <div className="px-2">
                    <p className="text-lg text-gray-300 font-serif">Project Name:</p>
                    {selectedProject.translation[langID]
                        ?
                        <p className="text-2xl text-white">{selectedProject.translation[langID].projectName}</p>
                        :
                        <p className="text-2xl text-white">{selectedProject.translation[defaultLang].projectName}</p>
                    }
                </div>
                <div className="flex px-3 flex-wrap">
                    {selectedProject.projectTags.map((item) =>
                        <Tag items={item} key={item.id} />
                        // <p>1</p>
                    )}
                </div>
                <div className="px-2 text-gray-200 mt-3 mb-1">
                    <p className="font-serif">About Project : </p>
                    <div className="mx-2 bg-indigo-300 px-1 h-40 overflow-y-auto">
                        {selectedProject.translation[langID]
                            ?
                            <p className="text-black text-justify px-1 whitespace-pre-line">{selectedProject.translation[langID].projectDesc}</p>
                            :
                            <p className="text-black text-justify px-1 whitespace-pre-line">{selectedProject.translation[defaultLang].projectDesc}</p>
                        }
                    </div>
                </div>
                <div className="flex flex-wrap px-4 my-2">
                    {/* {buttonLayout} */}
                    {selectedProject.githubUrl ?
                        <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer"
                            className="border border-black mt-1 mr-0.5 px-4 py-1 font-serif bg-white shadow-lg rounded-md cursor-pointer hover:bg-forest-green-web hover:text-white">Github</a>
                        :
                        <div className="border border-black mt-1 mr-0.5 px-4 py-1 font-serif bg-white shadow-lg rounded-md cursor-default opacity-60">Private</div>
                    }
                    {selectedProject.imageUrl &&
                        <a href={selectedProject.imageUrl} target="_blank" rel="noopener noreferrer"
                            className="border border-black mt-1 mr-0.5 px-4 py-1 font-serif bg-white shadow-lg rounded-md cursor-pointer hover:bg-forest-green-web hover:text-white">Screenshot</a>
                    }
                    {selectedProject.demoUrl &&
                        <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer"
                            className="border border-black mt-1 mr-0.5 px-4 py-1 font-serif bg-white shadow-lg rounded-md cursor-pointer hover:bg-forest-green-web hover:text-white">Demo</a>
                    }
                </div>
            </div>
        </animated.div >
    )
}

export default Modal