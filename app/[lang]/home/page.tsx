import { getDictionary } from '../../../get-dictionary'
import { Locale } from '../../../i18n-config'
async function getProducts() {
    const res = await fetch('https://dummyjson.com/products');
    return res.json()
}

export default async function IndexPage({ params: { lang }, }: {
    params: { lang: Locale }
}) {
    const { products } = await getProducts()
    const {home} = await getDictionary(lang)
    console.log(products.products);
    return (
        <div className='flex  flex-col  justify-center items-center gap-5 py-5'>
           <div className='text-center'>
                <h1 className='text-8xl font-bold py-5'>{home.title}</h1>
     <p className='text-2xl' >{home.text}</p>
        </div>
            <div className='flex  flex-wrap justify-center items-center gap-5 py-5'>
                {products ? products.map(function (product: any) {
                    return (
                        <div key={product.id} className="card card-compact w-96 bg-base-100 shadow-xl h-[22rem]">
                            <figure className='max-h-32' ><img src={product.thumbnail} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.title}</h2>
                                <p>{product.description}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Bay Now</button>
                                </div>
                            </div>
                        </div>
                    )
                }) : "null"}
            </div>
     </div>
      
    )
}
