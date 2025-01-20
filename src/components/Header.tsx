import Link from "next/link"


const Header = () => {
  return (
    <div className="bg-blue-500 flex lg:justify-around justify-between items-center lg:px-5 px-2 sticky top-0">
        <div className="text-white lg:text-md text-xs">CODING <span className="text-white lg:text-4xl text-xl font-bold">CW</span>WORLD</div>
        <div className="text-white lg:text-lg text-[8px]">
          <ul className="flex gap-5 lg:gap-10">
            <li className="">
              <Link href="../" >Home</Link>
            </li>
            <li className="">
              <Link href="../#experience" >Experience</Link>
            </li>
            <li className="">
              <Link href="../courses">courses</Link>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Header