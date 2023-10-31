"use client";

import Link from 'next/link';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';

const Nav = () => {
    const { data: session } = useSession();
    const [providers, setProviders]=useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false)
    useEffect(() => {
        const setUpProviders = async () =>{
            const response = await getProviders();
            setProviders(response);
        }
        setUpProviders();
    },[])
  return (
    <nav className = "flex-between ml-auto pt-3">
        {/* Desktop Navigation */}
        <div className="sm:flex hidden">
            {session?.user ? (
                <div className="flex gap-3 md:gap-5">
                    <Link href="/create-prompt" className="white_btn">
                        Create Post
                    </Link>
                    <button type="button" onClick={signOut} className="outline_btn">
                        Sign Out
                    </button>
                    <Link href="/profile">
                        <Image 
                            src={session?.user.image}
                            width={37}
                            height={37}
                            className="rounded-full"
                            alt="profile"
                        />
                    </Link>
                </div>
            ):(
                <>
                    {providers &&
                        Object.values(providers).map((provider) => (
                            <button
                                type="button"
                                key={provider.name}
                                onClick={() => signIn(provider.id)}
                                className="white_btn"
                            >
                                Sign In
                            </button>
                        ))
                    }
                </>
            )
            }
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex relative">
            { session?.user ? (
                <div className ="flex">
                    <Link href="https://www.linkedin.com/in/ali-ibtehaj-asif-niazi-ab17881a3/">
                        <Image 
                            src="/assets/images/linkedin.png" 
                            alt="linkedin" 
                            width={20} 
                            height={20}
                            style={{ marginTop: '10px', marginRight: '10px' }}
                        />
                    </Link>
                    <Link href="mailto:aliibtehajasifniazi@gmail.com">
                        <Image 
                            src="/assets/images/gmail.png" 
                            alt="gmail" 
                            width={20} 
                            height={20}
                            style={{ marginTop: '10px', marginRight: '10px' }}
                        />
                    </Link>
                    <Link href="https://github.com/Ali-Ibtehaj-Asif-Niazi">
                        <Image 
                            src="/assets/images/github.png" 
                            alt="github" 
                            width={20} 
                            height={20}
                            style={{ marginTop: '10px', marginRight: '10px' }}
                        />
                    </Link>
                    <Image 
                        src={session?.user.image}
                        width={37}
                        height={37}
                        className="rounded-full"
                        alt="profile"
                        onClick={() => setToggleDropdown((prev)=>!prev)}
                    />
                    {toggleDropdown && (
                        <div className="dropdown">
                            <Link
                                href="/profile"
                                className="dropdown_link"
                                onClick={()=>setToggleDropdown(false)}
                            >
                                My Profile
                            </Link>
                            <Link
                                href="/profile"
                                className="dropdown_link"
                                onClick={()=>setToggleDropdown(false)}
                            >
                                Create Prompt
                            </Link>
                            <button
                                type="button"
                                onClick={()=>{
                                    setToggleDropdown(false);
                                    signOut();
                                }}
                                className="mt-5 w-full white_btn"
                            >
                                Sign Out
                            </button>
                        </div>
                    )}
                </div>
            ):(
                <>
                    {providers &&
                        Object.values(providers).map((provider) => (
                            <button
                                type="button"
                                key={provider.name}
                                onClick={() => signIn(provider.id)}
                                className="white_btn"
                            >
                                Sign In
                            </button>
                        ))
                    }
                </>
            )}
        </div>
    </nav>
  )
}

export default Nav