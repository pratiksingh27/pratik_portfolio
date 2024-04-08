import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import article1 from "../../public/images/articles/pagination component in reactjs.jpg"
import article2 from "../../public/images/articles/loding.jpg"
import article3 from "../../public/images/articles/modelcomponent.png"
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

//component for showing img when someone hover onarticlecomponent element
const  MovingImg = ({title, img, link}) => {

const x=useMotionValue(0);
const y=useMotionValue(0);
const imgRef = useRef(null);

function handleMouse(event){
  imgRef.current.style.display="inline-block";
  x.set(event.pageX);
  y.set(-10);
}
function handleMouseLeave(event){
  imgRef.current.style.display="none";
  x.set(0);
  x.set(0);
}

  return(
    <Link href={link} target="_blank"
    onMouseMove={handleMouse}
    onMouseLeave={handleMouseLeave}>
      <h2 className="capitalize text-xl font-semibold hover:underline lg:text-lg sm:text-base">{title}</h2>
      <FramerImage 
      style={{ x:x, y:y }} 
      whileInView={{opacity:1, transition:{duration:0.2}}}
      ref={imgRef} src={img} alt={`${title}-article-preview`}  className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      priority
              sizes="(max-width:768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"/>
      </Link>
  )
}

const ArticleComponent = ({title, link, img, date}) =>{
  return(
    <motion.li
    initial={{y:200}}
    whileInView={{y:0, transition:{duration:0.2, ease:"easeInOut"}}}
    viewport={{once:true}}
    
    className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark dark:bg-dark dark:text-light dark:border-light border-r-4 border-b-4 sm:flex-col">
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary dark:text-primaryDark font-semibold pl-4 sm:text-sm sm:self-start sm:pl-0">{date}</span>
    </motion.li>
  )
}

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark" />

      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto"
        whileHover={{scale:1.05}}
        transition={{duration:0.2}} />
      </Link>

      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl mt-4 font-bold my-2 hover:underline sm:text-base md:text-xl">{title}</h2>
      </Link>
      <p className=" mb-2 md:text-base sm:hidden">{summary}</p>
      <span className="text-primary dark:text-primaryDark font-semibold sm:text-sm">{time}</span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>.PS | Article Page</title>
        <meta
          name="description"
          content="This is the description of the page"
        />
      </Head>
      <TransitionEffect/>
      <main className="w-full flex flex-col items-center justify-center overflow-hidden mb-16 dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Words Can Change The World!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:gap-y-16 md:grid-cols-1">
            <FeaturedArticle 
            title="Build A Custom Pagination Component In Reactjs From Scratch"
            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
            Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
            img={article1}
            link="/blog/build-custom-pagination-component-in-reactjs"
            time="9 min read"
            />
             <FeaturedArticle 
            title="Build A Custom Pagination Component In Reactjs From Scratch"
            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
            Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
            img={article2}
            link="/blog/build-custom-pagination-component-in-reactjs"
            time="9 min read"
            />
          </ul>
            <h2 className="font-bold text-4xl w-full text-center my-16 mt-32 md:text-3xl md:my-8 md:mt-20">All Articles</h2>
            <ul>
              <ArticleComponent
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="Feb 22 2023"
              img={article3}
              link="/"
              />
              <ArticleComponent
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="Feb 22 2023"
              img={article2}
              link="/"
              />
              <ArticleComponent
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="Feb 22 2023"
              img={article1}
              link="/"
              />
              <ArticleComponent
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="Feb 22 2023"
              img={article3}
              link="/"
              />
              <ArticleComponent
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="Feb 22 2023"
              img={article2}
              link="/"
              />
              
              
            </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
