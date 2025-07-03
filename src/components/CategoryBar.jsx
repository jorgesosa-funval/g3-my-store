import axios from "axios"
import { useEffect, useState } from "react"

export default function CategoryBar({setCategory}) {
    const [categories, setCategories] = useState([])

    async function fetchData() {
        try {
            const { data } = await axios.get("https://dummyjson.com/products/categories")
            console.table(data)
            setCategories(data)
        } catch (error) {
            console.error(error)
        }
    }
    
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <nav className=""  >
            <div className="flex flex-wrap gap-3 p-4" id="filter_options">

                {
                    categories.slice(0,10).map((category) => {
                        return <button className="bg-gray-500 px-4 py-1 text-white rounded-md cursor-pointer" value={category.slug} onClick={(e) => setCategory(e.target.value)} >
                            {category.name}
                        </button>
                    })


                }

            </div>
        </nav>
    )
}
