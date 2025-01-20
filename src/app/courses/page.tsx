import Link from "next/link"
import Image from "next/image"
import image1 from "@/images/html.png"
import image2 from "@/images/cssl-ogo.jpeg"
import image3 from "@/images/javacsrpit-logo.png"
import image4 from "@/images/typescript-logo.jpeg"
import image5  from "@/images/react-logo.png"
import image6 from "@/images/next.js-logo.png"
import image7 from "@/images/telwind-logo.png"
import image8 from "@/images/shadcn-logo.png"
import image9 from "@/images/node.js-logo.jpeg"
import image10 from "@/images/git-logo.webp"
import image11 from "@/images/figma-logo.png"
import image12 from "@/images/sanity-logo.png"


const page = () => {
  return (
    <div className="bg-gray-100 py-24">
      <h1 className="lg:text-3xl text-xl font-bold text-blue-500 text-center">CODING <span className="lg:text-6xl text-3xl font-extrabold"> CW </span>WORLD</h1>
      <h3 className="text-blue-300 lg:text-2xl text-base font-semibold text-center lg:mt-5 mt-0">online coding academy</h3>
      
    <div id="courses" className="mx-4 py-5 lg:py-24">
    <h2 className="lg:text-4xl text-xl font-extrabold text-blue-500 text-center">OUR COURSES</h2>
      <div className="flex justify-center flex-wrap gap-10 mt-10">
        <div className="lg:w-[400px] w-[200px] bg-white pb-4 rounded-md">
          <Image src={image1} alt="html logo image" className=""/>
          <h3 className="lg:text-xl text-base font-semibold text-center text-blue-500 mt-3">Html course</h3>
          <p className="lg:text-base text-xs text-blue-400 m-2">HTML is a markup language used to create and structure web pages, defining elements like text, links, and images...</p>
          <Link href={"/posts/html"} className="text-blue-400 lg:text-base text-xs font-semibold border-b border-blue-400 mx-2">read more</Link>
        </div>
        <div className="lg:w-[400px] w-[200px] bg-white pb-4 rounded-md">
          <Image src={image2} alt="css logo image" className="lg:w-[400px] lg:h-[400px]  "/>
          <h3 className="lg:text-xl tex-base font-semibold text-center text-blue-500 mt-3">CSS course</h3>
          <p className="lg:text-base text-xs text-blue-400 m-2">CSS is a stylesheet language used to design web pages, controlling layout, colors, and fonts for better visuals...</p>
          <Link href={"/posts/css"} className="text-blue-400 lg:text-base text-xs font-semibold border-b border-blue-400 mx-2">read more</Link>
        </div>
        <div className="lg:w-[400px] w-[200px] bg-white pb-4 rounded-md">
          <Image src={image3} alt="javascript logo image" className="lg:w-[400px] lg:h-[400px]"/>
          <h3 className="lg:text-xl text-base font-semibold text-center text-blue-500 mt-3">JavaScript course</h3>
          <p className=" lg;text-base text-xs text-blue-400 m-2">JavaScript is a dynamic programming language for creating interactive web content, enhancing functionality and design...</p>
          <Link href={"/posts/javascript"} className="text-blue-400 lg:text-base text-xs font-semibold border-b border-blue-400 mx-2">read more</Link>
        </div>
      </div>
      <div className="flex justify-center flex-wrap gap-10 mt-10">
        <div className="lg:w-[400px] w-[200px] bg-white pb-4 rounded-md">
          <Image src={image4} alt="react.js logo image" className="lg:w-[400px] lg:h-[400px]"/>
          <h3 className="lg:text-xl text-base font-semibold text-center text-blue-500 mt-3">React.js course</h3>
          <p className="lg:text-base text-xs text-blue-400 m-2">React.js is a JavaScript library for building user interfaces, enabling efficient rendering and component-based design...</p>
          <Link href={"/posts/typescript"} className="text-blue-400 lg:text-base text-xs font-semibold border-b border-blue-400 mx-2">read more</Link>
        </div>
        <div className="lg:w-[400px] w-[200px] bg-white pb-4 rounded-md">
          <Image src={image5} alt="node.js logo image" className="lg:w-[400px] lg:h-[400px] "/>
          <h3 className="lg:text-xl text-base font-semibold text-center text-blue-500 mt-3">Node.js course</h3>
          <p className="lg:text-base text-xs text-blue-400 m-2">Node.js is a JavaScript runtime for building scalable, server-side applications, enabling fast and efficient coding...</p>
          <Link href={"/posts/react.js"} className="text-blue-400 lg:text-base text-xs font-semibold border-b border-blue-400 mx-2">read more</Link>
        </div>
        <div className="lg:w-[400px] w-[200px] bg-white pb-4 rounded-md">
          <Image src={image6} alt="next.js logo image" className="lg:w-[400px] lg:h-[400px]"/>
          <h3 className="lg:text-xl text-base font-semibold text-center text-blue-500 mt-3">Next.js course</h3>
          <p className="lg:text-base text-xs text-blue-400 m-2">Next.js is a React framework for building fast web applications with features like SSR, API routes, and routing...</p>
          <Link href={"/posts/next.js"} className="text-blue-400 lg:text-base text-xs font-semibold border-b border-blue-400 mx-2">read more</Link>
        </div>
      </div>
      <div className="flex justify-center flex-wrap gap-10 mt-10">
        <div className="lg:w-[400px] w-[200px] bg-white pb-4 rounded-md">
          <Image src={image7} alt="html logo image" className="lg:w-[400px] w-[200px] lg:h-[400px] h-[200px]"/>
          <h3 className="lg:text-xl text-base font-semibold text-center text-blue-500 mt-3">Html course</h3>
          <p className="lg:text-base text-xs text-blue-400 m-2">HTML is a markup language used to create and structure web pages, defining elements like text, links, and images...</p>
          <Link href={"/posts/tailwind"} className="text-blue-400 lg:text-base text-xs font-semibold border-b border-blue-400 mx-2">read more</Link>
        </div>
        <div className="lg:w-[400px] w-[200px] bg-white pb-4 rounded-md">
          <Image src={image8} alt="css logo image" className="lg:w-[400px] lg:h-[400px]  "/>
          <h3 className="lg:text-xl tex-base font-semibold text-center text-blue-500 mt-3">CSS course</h3>
          <p className="lg:text-base text-xs text-blue-400 m-2">CSS is a stylesheet language used to design web pages, controlling layout, colors, and fonts for better visuals...</p>
          <Link href={"/posts/shadcn"} className="text-blue-400 lg:text-base text-xs font-semibold border-b border-blue-400 mx-2">read more</Link>
        </div>
        <div className="lg:w-[400px] w-[200px] bg-white pb-4 rounded-md">
          <Image src={image9} alt="javascript logo image" className="lg:w-[400px] lg:h-[400px]"/>
          <h3 className="lg:text-xl text-base font-semibold text-center text-blue-500 mt-3">JavaScript course</h3>
          <p className=" lg;text-base text-xs text-blue-400 m-2">JavaScript is a dynamic programming language for creating interactive web content, enhancing functionality and design...</p>
          <Link href={"/posts/node.js"} className="text-blue-400 lg:text-base text-xs font-semibold border-b border-blue-400 mx-2">read more</Link>
        </div>
      </div>
      <div className="flex justify-center flex-wrap gap-10 mt-10">
        <div className="lg:w-[400px] w-[200px] bg-white pb-4 rounded-md">
          <Image src={image10} alt="react.js logo image" className="lg:w-[400px] lg:h-[400px]"/>
          <h3 className="lg:text-xl text-base font-semibold text-center text-blue-500 mt-3">React.js course</h3>
          <p className="lg:text-base text-xs text-blue-400 m-2">React.js is a JavaScript library for building user interfaces, enabling efficient rendering and component-based design...</p>
          <Link href={"/posts/git"} className="text-blue-400 lg:text-base text-xs font-semibold border-b border-blue-400 mx-2">read more</Link>
        </div>
        <div className="lg:w-[400px] w-[200px] bg-white pb-4 rounded-md">
          <Image src={image11} alt="node.js logo image" className="lg:w-[400px] lg:h-[400px] "/>
          <h3 className="lg:text-xl text-base font-semibold text-center text-blue-500 mt-3">Node.js course</h3>
          <p className="lg:text-base text-xs text-blue-400 m-2">Node.js is a JavaScript runtime for building scalable, server-side applications, enabling fast and efficient coding...</p>
          <Link href={"/posts/figma"} className="text-blue-400 lg:text-base text-xs font-semibold border-b border-blue-400 mx-2">read more</Link>
        </div>
        <div className="lg:w-[400px] w-[200px] bg-white pb-4 rounded-md">
          <Image src={image12} alt="next.js logo image" className="lg:w-[400px] lg:h-[400px]"/>
          <h3 className="lg:text-xl text-base font-semibold text-center text-blue-500 mt-3">Next.js course</h3>
          <p className="lg:text-base text-xs text-blue-400 m-2">Next.js is a React framework for building fast web applications with features like SSR, API routes, and routing...</p>
          <Link href={"/posts/sanity"} className="text-blue-400 lg:text-base text-xs font-semibold border-b border-blue-400 mx-2">read more</Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page