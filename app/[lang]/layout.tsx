import Navbar from '../../components/navbar/Navbar'
import { getDictionary } from '../../get-dictionary'
import '../globals.css'
import { Locale } from '../../i18n-config'
import { Cairo } from 'next/font/google'
import Footer from '../../components/footer/Footer'
import SideBar from '../../components/sidebar/SideBar'
import { Suspense } from 'react'
import Loading from './Loading'
import { Providers } from '../../components/provider/Providers'
const cairo = Cairo({
    subsets: ['latin'],
    variable: '--font-Cairo',
})
export default async function Root({
    children,
    params,
}: {
    children: React.ReactNode
    params: { lang: Locale }
}) {
  const dictionary = await getDictionary(params.lang)
  console.log(dictionary)

    return (
        <html lang={params.lang} dir={params.lang === 'en' ? 'ltr' : 'rtl'} className={`${cairo.variable} font-Cairo`} >
          <body >
                <Providers >
                <Navbar navbar={dictionary.navbar} lang={params.lang}/>
                <SideBar/>
                <Suspense fallback={<Loading/>}>
                {children}
                </Suspense>
                <Footer footer={dictionary.footer} />
                </Providers >

          </body>
        </html>
    )
}

