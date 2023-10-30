import '@styles/globals.css';
import '@styles/customStyle.css';
import MainNav from '@components/MainNav';
import Provider from '@components/Provider';
import Head from 'next/head';


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
                    <div className="backgroundspace"></div>
                    <main className='app'>
                        <MainNav/>
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
    }

export default RootLayout;