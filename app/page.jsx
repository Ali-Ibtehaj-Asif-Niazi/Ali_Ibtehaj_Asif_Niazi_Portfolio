import Feed from '@components/Feed';
import Earth from '@components/Earth';
import Chat from '@components/Chat';


const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <p className="verticalSpace"></p>
      <h1 className="head_text text-center">
        <span className="blue_gradient text-center">Ali Ibtehaj Asif Niazi</span>
        <br className="max-md:hidden"/>
        <p className="verticalSpace"></p>
      </h1>
      
      <span className= "flex-center">
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script> 
        <lottie-player 
          src="https://lottie.host/08cd12d6-3502-45d6-94e3-939094322103/YFA6a7u709.json" 
          background="transparent" 
          speed="1.5" 
          style={{ width: '150px', height: '150px' }} 
          loop autoplay>
        </lottie-player>

        <lottie-player 
          src="https://lottie.host/b222471d-4226-4b6c-abfd-16e60b92ab1d/FkgpJKT0qO.json" 
          background="transparent" 
          speed="1.5" 
          style={{ width: '150px', height: '150px' }} 
          loop autoplay>
        </lottie-player>
        

        <lottie-player  
          src="https://lottie.host/3116cb30-f477-4644-a197-3c417885b800/zflWGmiGxC.json" 
          background="transparent" 
          speed="1" 
          style={{ width: '150px', height: '150px' }}  
          loop autoplay>
        </lottie-player>
  
        <lottie-player 
          src="https://lottie.host/e542c907-33fa-40bd-bb0a-037778d57320/WYQu4sr8ve.json" 
          background="transparent" 
          speed="1.5" 
          style={{ width: '150px', height: '150px' }}
          loop autoplay>
        </lottie-player>
  
        <lottie-player 
          src="https://lottie.host/1248292a-c87a-473b-b8b1-d932bd02de17/1qcTEhE9dw.json" 
          background="transparent" 
          speed="1.5" 
          style={{ width: '150px', height: '150px' }} 
          loop autoplay>
        </lottie-player>
      </span>

      <p className="verticalSpace"></p>

      {/* Chat + ThreeJS*/}
      <span className= "bigbox">
        <div className="chat-container1">
          <Chat/>
        </div>
        <p className="ml-16"></p>
        <Earth/>
      </span>
      <Feed/>
      <p>\bot</p>
    </section>
  )
}

export default Home