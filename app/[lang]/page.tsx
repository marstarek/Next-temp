import Hero from '../../components/hero/Hero';
import { getDictionary } from '../../get-dictionary'
import { Locale } from '../../i18n-config'
import Link from 'next/link';
import { withRouter } from 'next/router'

export default async function IndexPage({ params: { lang } }: {params: { lang: Locale }}) {
    const dictionary = await getDictionary(lang)

    return (
        <div className=''>
            <div className="text-sm breadcrumbs text-center flex justify-center items-center ">
                <ul>
                    <li>
                        <Link className='text-blue-500 font-bold ' href={`${lang}/home`}>Home<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                        </Link>  
                    </li>
                </ul>
            </div>
            <Hero hero={dictionary.hero} />
        </div>
    )
}