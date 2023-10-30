import Link from 'next/link';
import Image from 'next/image';

const MainNav = () => {
  return (
    <nav className = "flex-between w-full pt-3">
        <Link href="/" className="flex gap-2 flex-center">
            <Image 
                src="/assets/images/logo2.png" 
                alt="logo" 
                width={30} 
                height={30} 
                className="object-contain"
            />
            <p className="logo_text">Welcome to my Portfolio in NextJs</p>
        </Link>

        <div className="flex gap-3 md:gap-5">
            <Link href="https://www.linkedin.com/in/ali-ibtehaj-asif-niazi-ab17881a3/">
                <Image 
                    src="/assets/images/linkedin.png" 
                    alt="linkedin" 
                    width={20} 
                    height={20}
                    style={{ marginTop: '10px' }}
                />
            </Link>
            <Link href="mailto:aliibtehajasifniazi@gmail.com">
                <Image 
                    src="/assets/images/gmail.png" 
                    alt="gmail" 
                    width={20} 
                    height={20}
                    style={{ marginTop: '10px' }}
                />
            </Link>
            <Link href="https://github.com/Ali-Ibtehaj-Asif-Niazi">
                <Image 
                    src="/assets/images/github.png" 
                    alt="github" 
                    width={20} 
                    height={20}
                    style={{ marginTop: '10px' }}
                />
            </Link>
        </div>
       
    </nav>
  )
}

export default MainNav