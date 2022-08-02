const Modal = () => {
    return (
        <div className="min-h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-75 p-4">
            <div className="w-96 min-h-full bg-indigo-700 rounded p-1">
                <div className="px-2">
                    <p className="text-lg text-gray-300 font-serif">Project Name:</p>
                    <p className="text-2xl text-white">This Is The Longest Project Name</p>
                </div>
                <div className="flex px-3 flex-wrap">
                    <div className="text-white border border-white px-2 py-1 m-1 cursor-default hover:bg-forest-green-web hover:border-black shadow-xl">Test Dragon</div>
                    <div className="text-white border border-white px-2 py-1 m-1 cursor-default hover:bg-forest-green-web hover:border-black shadow-xl">Test</div>
                    <div className="text-white border border-white px-2 py-1 m-1 cursor-default hover:bg-forest-green-web hover:border-black shadow-xl">Test 2</div>
                    <div className="text-white border border-white px-2 py-1 m-1 cursor-default hover:bg-forest-green-web hover:border-black shadow-xl">Test 2</div>
                    <div className="text-white border border-white px-2 py-1 m-1 cursor-default hover:bg-forest-green-web hover:border-black shadow-xl">Test 2</div>
                    <div className="text-white border border-white px-2 py-1 m-1 cursor-default hover:bg-forest-green-web hover:border-black shadow-xl">Test 2</div>
                </div>
                <div className="px-2 text-gray-200 mt-3 mb-1">
                    <p className="font-serif">About Project : </p>
                    <div className="mx-2 bg-indigo-300 px-1 h-40 overflow-y-auto">
                        <p className="text-black text-justify whitespace-pre-line">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <div className="flex flex-wrap px-4 my-2">
                    <div className="border border-black mt-1 mr-0.5 px-4 py-1 font-serif bg-white shadow-lg rounded-md cursor-pointer">Private</div>
                    <div className="border border-black mt-1 mr-0.5 px-4 py-1 font-serif bg-white shadow-lg rounded-md cursor-pointer">Demo</div>
                    <div className="border border-black mt-1 mr-0.5 px-4 py-1 font-serif bg-white shadow-lg rounded-md cursor-pointer">ScreenShot</div>
                    <div className="border border-black mt-1 mr-0.5 px-4 py-1 font-serif bg-white shadow-lg rounded-md cursor-pointer">Demo</div>
                    <div className="border border-black mt-1 mr-0.5 px-4 py-1 font-serif bg-white shadow-lg rounded-md cursor-pointer">Demo</div>
                </div>
            </div>
        </div>
    )
}

export default Modal