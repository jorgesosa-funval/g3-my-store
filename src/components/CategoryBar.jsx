import useData from "../hooks/useData"

export default function CategoryBar({ setCategory, selectedCategory }) {
    const {data:categories} = useData("https://dummyjson.com/products/categories")
 
    return (
        <nav className=""  >
            <div className="flex flex-wrap gap-3 p-4" id="filter_options">

                { categories &&
                    categories.slice(0, 10).map((category) => {
                        return <button
                            className={` px-4 py-1 text-white rounded-md cursor-pointer ${selectedCategory === category.slug? 'bg-blue-500' : 'bg-gray-500'}`}
                            value={category.slug} onClick={(e) => setCategory(e.target.value)}
                        >
                            {category.name}
                        </button>
                    })


                }

            </div>
        </nav>
    )
}
