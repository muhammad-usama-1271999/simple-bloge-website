

const Footer = () => {
  return (
    <div className="bg-blue-200">
        <div className="lg:mx-auto mx-3">
          <p className="lg:text-base text-xs text-blue-500 text-center border-b-2 border-cyan-500 py-3 mb-5">we  generate our dream coding academy <br className="lg:hidden"/> <i className="lg:text-xl text-sm text-cyan-500"> CODING WORLD </i> <br className="lg:hidden"/> for any one</p>
          <div className="flex justify-around flex-wrap">
            <div className="py-4">
              <h6 className="lg:text-lg text-sm text-blue-500">First step coding</h6>
              <p className="text-white lg:text-md text-xs">Code Editer</p>
              <p className="text-white lg:text-md text-xs">HTml</p>
              <p className="text-white lg:text-md text-xs">CSS</p>
              <p className="text-white lg:text-md text-xs">JavaScript</p>
              <p className="text-white lg:text-md text-xs">Git&GitHub</p>
            </div>
            <div className="py-4">
              <h6 className="lg:text-lg text-sm text-blue-500">Second step coding</h6>
              <p className="text-white lg:text-md text-xs">TypeScript</p>
              <p className="text-white lg:text-md text-xs">TailwindCSS</p>
              <p className="text-white lg:text-md text-xs">React.js</p>
              <p className="text-white lg:text-md text-xs">MongosDB</p>
              <p className="text-white lg:text-md text-xs">ShadeCN</p>
            </div>
            <div className="py-4">
              <h6 className="lg:text-lg text-sm text-blue-500">Third step coding</h6>
              <p className="text-white lg:text-md text-xs">Next.js</p>
              <p className="text-white lg:text-md text-xs">Node.js</p>
              <p className="text-white lg:text-md text-xs">Express</p>
              <p className="text-white lg:text-md text-xs">BackEnd</p>
              <p className="text-white lg:text-md text-xs">Sanity</p>
            </div>
          </div>
        </div>
        <div className="bg-blue-500 h-16 flex justify-center items-center ">
        <p className="lg:text-md text-xs text-cyan-100">Copyright © 2022 by <i className="lg:text-[22px] text-base text-white font-semibold">USAMA</i>. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer