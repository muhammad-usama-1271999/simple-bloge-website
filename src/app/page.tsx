
import Image from "next/image";
import codingImage from "@/images/coding.jpg";
import Link from "next/link";
import image1 from "@/images/html.png"
import image2 from "@/images/cssl-ogo.jpeg"
import image3 from "@/images/javacsrpit-logo.png"
import image4 from "@/images/typescript-logo.jpeg"
import image5  from "@/images/react-logo.png"
import image6 from "@/images/next.js-logo.png"


export default function Home() {
  return (
  <div className="bg-gray-100">
    <div className="lg:flex justify-center flex-row-reverse mx-5 lg:mx-20 gap-10 py-10 lg:py-40">
      <div className="mx-auto lg:mx-0 mt-5">
        <Image src={codingImage} alt="animated coding boy image" className="rounded-xl lg:w-[1800px]" />
      </div>
      <div className="mt-10 lg:mt-24">
        <h1 className="lg:text-3xl text-xl font-bold text-blue-500 text-center">CODING <span className="lg:text-6xl text-3xl font-extrabold"> CW </span>WORLD</h1>
        <h3 className="text-blue-300 lg:text-2xl text-base font-semibold text-center mt-5">online coding academy</h3>
        <p className="lg:text-lg text-sm text-blue-500 text-center px-3 mt-16">A <span className="font-semibold ">CODING WORLD </span>
          offers specialized training in programming, software development, and technology skills. It equips students with
          practical knowledge through hands-on projects, preparing them for careers in tech. These academies often provide intensive courses,
          mentorship, and job placement support.</p>
        <h4 className="lg:text-xl text-base text-blue-400 text-center mt-20">Founder of Coding World: <br/> <span className="lg:text-2xl text-xl font-semibold">Mr RAJPUT</span></h4>
      </div>
    </div>
    <div id="experience" className="mx-3 lg:mx-48 mt-24 bg-blue-100 p-4 lg:p-16">
      <h2 className="lg:text-4xl text-xl font-extrabold text-blue-500 text-center">OUR EXPERIENCE</h2>
      <p className="lg:text-xl text-sm text-blue-500 text-center mt-10">
        introduced to hands-on projects that teach practical applications of coding concepts.
        The environment is dynamic and collaborative, with mentors and peers offering guidance{","} support{","} and inspiration.
        Coding academies often focus on real-world skills{","} teaching languages like JavaScript{","} Python and frameworks like React{","} ensuring you{"'"}re industry-ready.</p>
      <p className="lg:text-xl text-sm text-blue-500 text-center mt-10">
        The experience includes solving challenging problems{","} debugging{","} and building complete applications{","}
        boosting confidence with every success. You{"'"}ll work on capstone projects{","} participate in hackathons{","} and build a portfolio that showcases your expertise.
        The fast-paced{","} intensive learning keeps you motivated{","} while regular feedback ensures steady progress.</p>
      <p className="lg:text-xl text-sm text-blue-500 text-center mt-10">
        Beyond technical skills{","} coding academies emphasize teamwork{","} time management{","} and adaptability.
        Networking opportunities, guest lectures{","} and job placement services connect you with industry professionals.
        By the end{","} you{"'"}re not just a coder—you{"'"}re ready to innovate{","} create{","} and excel in the tech world.</p>
    </div>
    <div id="courses" className="mx-4 py-5 lg:py-24">
    <h2 className="lg:text-4xl text-xl font-extrabold text-blue-500 text-center">OUR COURSES</h2>
      <div className="flex justify-center flex-wrap gap-10 mt-10">
        <div className="lg:w-[400px] w-[200px] bg-white pb-4 rounded-md">
          <Image src={image1} alt="html logo image" className=""/>
          <h3 className="lg:text-xl text-base font-semibold text-center text-blue-500 mt-3">Html course</h3>
          <p className="lg:text-base text-xs text-blue-400 m-2">HTML is a markup language used to create and structure web pages, defining elements like text{","} links{","} and images...</p>
          <Link href={"/posts/html"} className="text-blue-400 lg:text-base text-xs font-semibold border-b border-blue-400 mx-2">read more</Link>
        </div>
        <div className="lg:w-[400px] w-[200px] bg-white pb-4 rounded-md">
          <Image src={image2} alt="css logo image" className="lg:w-[400px] lg:h-[400px]  "/>
          <h3 className="lg:text-xl tex-base font-semibold text-center text-blue-500 mt-3">CSS course</h3>
          <p className="lg:text-base text-xs text-blue-400 m-2">CSS is a stylesheet language used to design web pages{","} controlling layout{","} colors{","} and fonts for better visuals...</p>
          <Link href={"/posts/css"} className="text-blue-400 lg:text-base text-xs font-semibold border-b border-blue-400 mx-2">read more</Link>
        </div>
        <div className="lg:w-[400px] w-[200px] bg-white pb-4 rounded-md">
          <Image src={image3} alt="javascript logo image" className="lg:w-[400px] lg:h-[400px]"/>
          <h3 className="lg:text-xl text-base font-semibold text-center text-blue-500 mt-3">JavaScript course</h3>
          <p className=" lg;text-base text-xs text-blue-400 m-2">JavaScript is a dynamic programming language for creating interactive web content{","} enhancing functionality and design...</p>
          <Link href={"/posts/javascript"} className="text-blue-400 lg:text-base text-xs font-semibold border-b border-blue-400 mx-2">read more</Link>
        </div>
      </div>
      <div className="flex justify-center flex-wrap gap-10 mt-10">
        <div className="lg:w-[400px] w-[200px] bg-white pb-4 rounded-md">
          <Image src={image4} alt="react.js logo image" className="lg:w-[400px] lg:h-[400px]"/>
          <h3 className="lg:text-xl text-base font-semibold text-center text-blue-500 mt-3">React.js course</h3>
          <p className="lg:text-base text-xs text-blue-400 m-2">React.js is a JavaScript library for building user interfaces{","} enabling efficient rendering and component-based design...</p>
          <Link href={"/posts/typescript"} className="text-blue-400 lg:text-base text-xs font-semibold border-b border-blue-400 mx-2">read more</Link>
        </div>
        <div className="lg:w-[400px] w-[200px] bg-white pb-4 rounded-md">
          <Image src={image5} alt="node.js logo image" className="lg:w-[400px] lg:h-[400px] "/>
          <h3 className="lg:text-xl text-base font-semibold text-center text-blue-500 mt-3">Node.js course</h3>
          <p className="lg:text-base text-xs text-blue-400 m-2">Node.js is a JavaScript runtime for building scalable{","} server-side applications{","} enabling fast and efficient coding...</p>
          <Link href={"/posts/react.js"} className="text-blue-400 lg:text-base text-xs font-semibold border-b border-blue-400 mx-2">read more</Link>
        </div>
        <div className="lg:w-[400px] w-[200px] bg-white pb-4 rounded-md">
          <Image src={image6} alt="next.js logo image" className="lg:w-[400px] lg:h-[400px]"/>
          <h3 className="lg:text-xl text-base font-semibold text-center text-blue-500 mt-3">Next.js course</h3>
          <p className="lg:text-base text-xs text-blue-400 m-2">Next.js is a React framework for building fast web applications with features like SSR{","} API routes{","} and routing...</p>
          <Link href={"/posts/next.js"} className="text-blue-400 lg:text-base text-xs font-semibold border-b border-blue-400 mx-2">read more</Link>
        </div>
      </div>
      <Link href="./courses" className="flex justify-center mt-16" >
        <button className="lg:text-base text-xs text-blue-500 border-2 border-blue-500 rounded-3xl lg:py-2 py-1 lg:px-4 px-2 hover:bg-blue-500 hover:text-white ">see all courses</button> 
      </Link>
    </div>
  </div>
  );
}
