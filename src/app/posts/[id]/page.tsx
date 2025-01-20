
'use client';
import React from 'react'
import CommentSection from "@/components/CommentSection/page";
import Image from 'next/image';
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
import { IoLogoYoutube } from "react-icons/io";

const posts = [
{
    id: "html",
    image: image1,
    title1:"What is HTML?",
    description1: "HTML (HyperText Markup Language) is the standard language used to create and structure content on the web. It provides the framework for web pages by defining the structure and elements, such as text, images, links, and multimedia.",
    title2: "A Brief History",
    description2: "HTML, created by Tim Berners-Lee in 1991, started as a simple web document structure. It evolved into HTML5 (2014), enabling multimedia, interactivity, and responsive design for dynamic web experiences.",
    title3: "How Does HTML Work? ",
    description3: "HTML works by organizing content with tags, which browsers interpret and render into a visible, interactive webpage. It serves as the foundation for creating and displaying websites.",
    title4: "Why Learn HTML?",
    description4:' learning HTML equips you with the foundational knowledge to create, customize, and contribute to the web, making it a versatile and highly valuable skill.',
    title5: "Documentation:",
    documentation:"https://developer.mozilla.org/en-US/docs/Web/HTML",
    title6: "Tutorial:",
    tutorial: "https://www.youtube.com/watch?v=5ccq_nLHneE"
},
{
    id: "css",
    image: image2,
    title1: "What is CSS ?",
    description1: "CSS (Cascading Style Sheets) is a stylesheet language used to style HTML content, controlling layout, colors, fonts, and design, enabling responsive and visually appealing web pages across devices.",
    title2: "Why CSS use in coding ?",
    description2: "CSS is used in coding to style and format web pages, controlling layouts, colors, fonts, and spacing. It separates design from content, enhances user experience, ensures responsiveness, and allows consistent, reusable styles across multiple web pages efficiently.",
    title3: "Importance or CSS:",
    description3: "CSS (Cascading Style Sheets) is crucial for creating visually appealing, responsive, and user-friendly websites. It separates design from content, allowing easy updates and consistent styling. CSS enhances accessibility, improves loading speed, and supports dynamic layouts, enabling modern, attractive web designs across devices, ensuring a better user experience and engagement.",
    title4: "A Brief history:",
    description4: 'CSS was introduced in 1996 by the World Wide Web Consortium (W3C) to separate web content from design. It allowed developers to style pages independently of HTML, improving flexibility, consistency, and user experience. Over time, CSS evolved with new features like Flexbox and Grid for modern web design.',
    title5: "Documentation:",
    documentation:"https://developer.mozilla.org/en-US/docs/Web/CSS",
    title6: "Tutorial:",
    tutorial: "https://www.youtube.com/watch?v=MSICFljRcb4&t=1608s"
},

{
    id: "javascript",
    image: image3, 
    title1: "What is JavaScript ?",
    description1: "JavaScript is a high-level programming language used to create dynamic, interactive elements on websites. It enables features like animations, form validation, and real-time updates, making webpages responsive and engaging. JavaScript is essential for front-end and full-stack web development.",
    title2: "Why JavaScript is popular :",
    description2: "JavaScript is popular due to its versatility, widespread browser support, and ability to create interactive, dynamic web experiences. It enables real-time updates, animations, and advanced features without reloading the page. JavaScript’s use in both front-end and back-end development (via Node.js) makes it essential for modern web applications.",
    title3: "Key features of JavaScript :",
    description3: "Key features of JavaScript include dynamic typing, event-driven programming, support for functions as first-class objects, asynchronous processing (via callbacks, promises, and async/await), cross-platform compatibility, and DOM manipulation. It's versatile, enabling both front-end interactivity and back-end server-side development.",
    title4: "Conclusion",
    description4: "JavaScript is a powerful, flexible programming language that drives interactive and dynamic web experiences. Its widespread use in both front-end and back-end development makes it essential for modern web applications and websites.",
    title5: "Documentation:",
    documentation:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    title6: "Tutorial:",
    tutorial: "https://www.youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR"
},

{
    id: "typescript",
    image: image4,
    title1: "What is TypeScript ?",
    description1: "TypeScript is a superset of JavaScript that adds static typing, enabling early error detection and improved code quality. It compiles to JavaScript, offering features like interfaces, classes, and advanced type-checking, making it ideal for large-scale web applications.",
    title2: "Why TypeScript is popular ?",
    description2: "TypeScript is popular because it enhances JavaScript by adding static typing, which improves code quality, readability, and error detection during development. It supports modern JavaScript features and offers better tooling, such as autocompletion and type inference, making it ideal for large, complex projects and team collaboration.",
    title3: "Key features of TypeScript:",
    description3: "Key features of TypeScript include static typing, type inference, interfaces, classes, and modules. It offers early error detection, better tooling support, compatibility with JavaScript, and scalability for large projects, enhancing code maintainability and developer productivity.",
    title4: "Conclusion",
    description4: "TypeScript improves JavaScript with static typing, better tooling, and error detection, making it ideal for large, maintainable projects.",
    title5: "Documentation:",
    documentation:"https://www.typescriptlang.org/docs/",
    title6: "Tutorial:",
    tutorial: "https://www.youtube.com/playlist?list=PLwGdqUZWnOp0xfHQFmlL52b_6-QZ0mnk_"
},

{
    id: "react.js",
    image: image5,
    title1: "What is React.js ?",
    description1: "React.js is a popular JavaScript library for building user interfaces, particularly single-page applications. Developed by Facebook, it allows developers to create reusable UI components, manage state efficiently, and build dynamic, responsive web apps with fast rendering through a virtual DOM.",
    title2: "Why React.js is popular ?",
    description2: "React.js is popular due to its component-based architecture, enabling reusable UI components and efficient state management. It offers fast rendering with a virtual DOM, improving performance. Its wide community support, flexibility, and ability to build dynamic, scalable web apps make it a top choice for modern web development.",
    title3: "Key features of React.js :",
    description3: "Key features of React.js include component-based architecture, virtual DOM for fast rendering, one-way data binding, JSX syntax, state management, and reusability of UI components. It promotes efficient updates, making it ideal for building dynamic, interactive, and scalable web applications.",
    title4: "Conclusion",
    description4: "React.js is a powerful library for building dynamic, efficient, and scalable web applications, with reusable components and fast rendering.",
    title5: "Documentation:",
    documentation:"https://legacy.reactjs.org/docs/getting-started.html",
    title6: "Tutorial:",
    tutorial: "https://www.youtube.com/playlist?list=PLwGdqUZWnOp1Rab71vx2zMF6qpwGDB2Z1"
},

{
    id: "next.js",
    image: image6,
    title1: "What is Next.js ?",
    description1: "Next.js is a popular React framework that enables server-side rendering, static site generation, and API routes. It simplifies building optimized, fast web applications with features like automatic code splitting, routing, and performance improvements, making React development more efficient.",
    title2: "Why Next.js is popular ?",
    description2: "Next.js is popular for its ease of use in building optimized React applications. It offers features like server-side rendering, static site generation, automatic code splitting, and file-based routing. These capabilities improve performance, SEO, and scalability, making Next.js a preferred choice for modern web development.",
    title3: "Key features of Next.js :",
    description3: "Key features of Next.js include server-side rendering (SSR), static site generation (SSG), automatic code splitting, file-based routing, API routes, built-in image optimization, and fast performance. It enhances SEO, scalability, and developer experience, making it ideal for React applications.",
    title4: "Conclusion",
    description4: "Next.js is a powerful React framework, offering performance optimization, server-side rendering, and enhanced SEO, ideal for modern web development.",
    title5: "Documentation:",
    documentation:"https://nextjs.org/docs",
    title6: "Tutorial:",
    tutorial: "https://www.youtube.com/playlist?list=PLRAV69dS1uWR7KF-zV6YPYtKYEHENETyE"
},
{
    id: "tailwind",
    image: image7,
    title1:"What is TailwindCSS ?",
    description1: "TailwindCSS is a utility-first CSS framework that provides pre-designed classes to style HTML elements quickly. It promotes a highly customizable, responsive, and efficient approach to building modern, scalable web designs without writing custom CSS.",
    title2: "A Brief History",
    description2: "TailwindCSS was created by Adam Wathan and launched in 2017. Unlike traditional CSS frameworks, it follows a utility-first approach, allowing developers to apply pre-built utility classes directly in HTML. Tailwind quickly gained popularity for its flexibility, customizability, and ability to streamline the development of responsive, modern web designs.",
    title3: "How Does TailwindCSS Work? ",
    description3: "TailwindCSS works by providing utility classes that directly style HTML elements, rather than defining custom CSS rules. Developers apply predefined classes for layout, spacing, colors, and typography, enabling fast, flexible, and responsive design without writing custom styles from scratch.",
    title4: "Why Learn TailwindCSS?",
    description4: 'Learning TailwindCSS streamlines web design with reusable utility classes, offering flexibility, faster development, and efficient, responsive layouts without custom CSS.',
    title5: "Documentation:",
    documentation:"https://v2.tailwindcss.com/docs",
    title6: "Tutorial:",
    tutorial: "https://www.youtube.com/playlist?list=PLu0W_9lII9ahwFDuExCpPFHAK829Wto2O"
},
{
    id: "shadcn",
    image: image8,
    title1: "What is ShadeCN ?",
    description1: "ShadeCN is a utility-first CSS framework designed to provide customizable, responsive, and aesthetically pleasing UI components. It offers a streamlined approach to building modern web designs with minimal effort and high flexibility.",
    title2: "Why ShadeCN is Popular ?",
    description2: "ShadeCN is popular due to its simplicity, utility-first design approach, and ease of use. It allows developers to quickly create responsive, modern interfaces without writing excessive custom CSS. Its flexibility and pre-built components save time, making it ideal for efficient web development.",
    title3: "Key Features of ShadeCN :",
    description3: "Key features of ShadeCN include a utility-first approach, customizable components, responsive design, minimal CSS, and easy integration with existing projects. It provides a clean, modern design with pre-built classes, promoting faster development and efficient web design without complex custom styling.",
    title4: "Conclusion",
    description4: 'ShadeCN simplifies web development with its utility-first approach, offering customizable, responsive components that enhance productivity and streamline modern web design.',
    title5: "Documentation:",
    documentation:"https://ui.shadcn.com/docs",
    title6: "Tutorial:",
    tutorial: "https://youtu.be/O4AjymzpIEg"
},

{
    id: "node.js",
    image: image9, 
    title1: "What is Node.js ?",
    description1: "Node.js is an open-source, JavaScript runtime environment built on Chrome's V8 engine, enabling server-side programming. It allows developers to run JavaScript outside the browser, creating scalable, high-performance applications. Node.js is popular for real-time applications, APIs, and back-end development due to its non-blocking, event-driven architecture. ",
    title2: "Why Node.js is popular :",
    description2: "Node.js is popular due to its non-blocking, event-driven architecture, which allows for handling many requests simultaneously with high efficiency. It enables full-stack JavaScript development, allowing both front-end and back-end code to be written in the same language. With its vast package ecosystem (npm), fast performance, and scalability, Node.js is ideal for building real-time applications, APIs, and microservices.",
    title3: "Key features of Node.js :",
    description3: "Key features of Node.js include non-blocking I/O, event-driven architecture, scalability, single-threaded asynchronous processing, a large npm ecosystem, and cross-platform compatibility, making it ideal for building fast, scalable web applications.",
    title4: "Conclusion",
    description4: "Node.js is a powerful, efficient, and scalable platform for building fast web applications, utilizing JavaScript for both client and server-side development.",
    title5: "Documentation:",
    documentation:"https://nodejs.org/en/download/current",
    title6: "Tutorial:",
    tutorial: "https://www.youtube.com/playlist?list=PLwGdqUZWnOp3KELplHtc-RnJ5xTUPqdgH"
},

{
    id: "git",
    image: image10,
    title1: "What Git & GitHub ?",
    description1: "Git is a distributed version control system that allows multiple developers to track changes in code, collaborate, and manage versions. GitHub is a web-based platform that hosts Git repositories, enabling collaborative development, code sharing, and version control with features like pull requests, issue tracking, and project management.",
    title2: "Why Git & GitHub is popular ?",
    description2: "Git and GitHub are popular due to their powerful version control and collaboration features. Git enables developers to track changes, manage multiple versions, and work offline. GitHub provides a centralized platform for hosting code, collaborating with teams, and sharing projects. With features like pull requests, issue tracking, and integration with CI/CD tools, they streamline development workflows and enhance productivity.",
    title3: "Key features of Git & GitHub",
    description3: "Key features of Git include distributed version control, branching, merging, and tracking changes. GitHub enhances collaboration with features like pull requests, code reviews, issue tracking, project boards, and CI/CD integration, enabling efficient team workflows and version management.",
    title4: "Conclusion",
    description4: "Git and GitHub revolutionize software development by enabling efficient version control, collaboration, and project management. They streamline workflows, improve code quality, and empower teams to build, share, and track software projects effectively.",
    title5: "Documentation:",
    documentation:"https://git-scm.com/doc",
    title6: "Tutorial:",
    tutorial: "https://www.youtube.com/playlist?list=PL_s5d7ncPMZaFc6FBXIkabLUiljGkYOYL"
},

{
    id: "figma",
    image: image11,
    title1: "What is Figma ?",
    description1: "Figma is a cloud-based design tool used for creating user interfaces, prototyping, and collaboration in real-time. It allows teams to design, prototype, and iterate on web and mobile apps. Figma enables easy sharing, feedback, and version control, making it ideal for remote collaboration and cross-functional teams.",
    title2: "Why Figma is popular ?",
    description2: "Figma is popular due to its cloud-based, collaborative nature, enabling multiple team members to work on designs simultaneously in real-time. It simplifies design workflows with features like vector editing, prototyping, and version control. Figma's accessibility from any device, easy sharing for feedback, and strong integration with design tools make it a top choice for UI/UX designers.",
    title3: "Key features of Figma :",
    description3: "Key features of Figma include real-time collaboration, vector editing, prototyping, design systems, version control, cloud-based accessibility, easy sharing for feedback, and seamless integration with other design and development tools.",
    title4: "Conclusion",
    description4: "Figma is a powerful, collaborative design tool that enhances teamwork, simplifies prototyping, and streamlines the UI/UX design process.",
    title5: "Documentation:",
    documentation:"https://help.figma.com/hc/en-us",
    title6: "Tutorial:",
    tutorial: "https://www.youtube.com/watch?v=JNZ0nkC7Unk&list=PLwGdqUZWnOp0TlgR6uPLR1s6X_w65FlTl"
},

{
    id: "sanity",
    image: image12,
    title1: "What is SanityIO ?",
    description1: "Sanity.io is a flexible, cloud-based headless content management system (CMS) designed for developers and content creators. It allows users to structure, manage, and deliver content across multiple platforms. With a real-time collaborative interface, custom content models, and robust API, Sanity.io provides powerful tools for creating dynamic, scalable web applications.",
    title2: "Why SanityIO is popular ?",
    description2: "Sanity.io is popular due to its flexibility and scalability as a headless CMS. It provides a real-time collaborative interface, customizable content models, and robust API, allowing developers to build dynamic web applications. Its strong integration capabilities, real-time content updates, and seamless user experience make it ideal for content-driven websites and complex projects, empowering teams to manage content efficiently.",
    title3: "Key features of SanityIO :",
    description3: "Key features of Sanity.io include real-time collaboration, customizable content models, a powerful API, flexible content management, content versioning, integrated media library, and scalability for dynamic, multi-platform applications.",
    title4: "Conclusion",
    description4: "Sanity.io is a versatile, scalable headless CMS that empowers developers and content creators with real-time collaboration, customizable content structures, and seamless integrations, making it ideal for dynamic, content-driven web applications.",
    title5: "Documentation:",
    documentation:"https://www.sanity.io/docs",
    title6: "Tutorial:",
    tutorial: "https://www.youtube.com/playlist?list=PLu0W_9lII9ag1cN0n_UcNRN7fYIwNYJDQ"
}

];

export default function Post({ params }: { params: { id: string } }) {
    const { id } = params;
    const post = posts.find((p) => p.id === id);

    if(!post) {
        return (
            <h2 className='text-2xl font-bold text-center my-32'>Post Not Found</h2>
        );
    }
    
    const renderParagraphs = (description: string ) => {
        return description.split("/n").map((para, index) => (
            <p key={index} className='mt-4 text-justify'>
                {para.trim()}{""}
                </p>
        ));
    };

    return (
        <main>
            <div className='min-h-screen container mx-auto px-4 xs:px-6 sm:px-52 m-3'>
    <div className='border rounded-md p-2 shadow-md hover:shadow-lg transition'>
        <div className='flex justify-center'>
            {post.image && (
            <Image 
            src={post.image} 
            alt='JavaScript Image'
            height={500}
            width={800}
            className='rounded-md m-2'></Image>
        )}
        </div>
        <div className='px-4'>
            <h1 className='text-xl lg:text-3xl text-blue-500 font-bold mt-5'>
                {post.title1}
                </h1> 
            <div className='text-sm lg:text-lg text-blue-500 mt-0'>
                {renderParagraphs(post.description1)} 
            </div>
            <h1 className='text-xl lg:text-3xl text-blue-500 font-bold mt-5'>
                {post.title2}
                </h1> 
            <div className='text-sm lg:text-lg text-blue-500 mt-0'>
                {renderParagraphs(post.description2)} 
            </div>
            <h1 className='text-xl lg:text-3xl text-blue-500 font-bold mt-5'>
                {post.title3}
                </h1> 
            <div className='text-sm lg:text-lg text-blue-500 mt-0'>
                {renderParagraphs(post.description3)} 
            </div>
            <h1 className='text-xl lg:text-3xl text-blue-500 font-bold mt-5'>
                {post.title4}
                </h1> 
            <div className='text-sm lg:text-lg text-blue-500 mt-0'>
                {renderParagraphs(post.description4)} 
            </div>
            <div className="mt-10 flex justify-around">
                <div className="">
                    <div className="text-sm lg:text-xl font-semibold text-blue-500"> 
                        {post.title5}
                    </div>
                    <a href={post.documentation} 
                        className="cursor-pointer border-2 border-blue-500 grid place-content-center rounded-full text-blue-500 text-xs lg:text-sm py-1 lg:py-2 px-3 lg:px-5  hover:bg-blue-500 hover:text-white">
                        Click Here
                    </a>
                </div>
                <div className="">
                    <div className="text-sm lg:text-xl font-semibold  text-blue-500">
                        {post.title6}
                    </div>
                    <a  href={post.tutorial}
                        className="cursor-pointer text-blue-500 grid place-content-center border-2 border-blue-500 rounded-full w-20 lg:w-40 py-1 lg:py-2 hover:bg-blue-500 hover:text-white">
                        <IoLogoYoutube />
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
        <div className='pb-5 sm:pb-8'>
            <CommentSection />
        </div>
        </main>
    )
};