import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import Head from 'next/head';
import VideoBackground from '@components/VideoBackground';


export const metadata = {
    title: "Ali Ibtehaj Asif Niazi",
    description:'Portfolio'
}

const RootLayout = ({children}) => {
    return (
        <html lang="en">
            <Head>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <body>
                <Provider>
                    <VideoBackground/>
                    <main className='app'>
                        <Nav/>
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
    }

export default RootLayout;