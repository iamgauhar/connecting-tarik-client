import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useYourContext } from '../../context/itemContext'
import { getItemByCategory } from '../../config/apiUrl'
import Loader from '../components/Loader'

const ProductCategory = () => {
    const { id } = useParams()

    const { products, setProducts } = useYourContext()
    const { categoryName, setCategoryName } = useYourContext()
    const { loading, setLoading } = useYourContext()

    const getProducts = async () => {
        setLoading(true)
        try {
            const allProducts = await fetch(`${getItemByCategory}/${id}`, {
                method: "GET"
            })

            const response = await allProducts.json()
            setProducts(response.products)
            setCategoryName(response.products[0].categoryName)
            setTimeout(() => {
                setLoading(false)
            }, 1000);
        } catch (error) {
            console.log(err);
        }
    }

    useEffect(() => {
        try {
            getProducts()
        } catch (err) {
            console.log(err);
        }
    }, [])

    return (
        <div className='pt-16 md:px-14'>
            <h1 className='text-center text-2xl font-semibold py-2 my-4 bg-yellow-50'>{categoryName}</h1>
            <div className='flex flex-col flex-wrap items-center gap-4 md:flex-row md:justify-between  '>
                {
                    products.map((item) => {
                        return (
                            <div key={item._id} className="flex flex-col border transition-all duration-300 w-[260px] cursor-pointer shadow-sm rounded-xl bg-slate-100">
                                <div className='w-[200x] h-[200px] m-auto pt-4'>
                                    <img className="w-full h-full object-cover rounded-t-xl hover:scale-105 duration-300" src={item.images[0]} />
                                </div>
                                <div className="p-2 md:p-3">
                                    <p className='text-gray-500 text-xs pt-1'>{item.categoryName}</p>
                                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                        {item.name}
                                    </h3>
                                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                                        <span>&#x20b9; </span> {item.price}
                                    </p>
                                    <NavLink className="mt-2 py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                        View Details

                                    </NavLink>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {loading && <Loader />}
        </div>
    )
}

export default ProductCategory