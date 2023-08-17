import Feed from '@components/Feed';
import Image from 'next/image';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md:hidden"/>
            <span className="orange_gradient text-center">AI-Powered Promts</span>
        </h1>
        <div className= "flex center">
        <Image 
          src="/assets/images/reactt.gif"
          alt="reactt" 
          width={100} 
          height={100}
          className="image-with-text" 
            />
        <h2 className="desc text-center ">
          By: Ali Ibtehaj Asif Niazi
        </h2>
        <Image 
          src="/assets/images/mypic.png"
          alt="reactt" 
          width={50} 
          height={50}
          className="image-with-text" 
          />
        </div>
        <Feed/>
    </section>
  )
}

export default Home