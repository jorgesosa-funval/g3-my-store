export function ProductsCard({ img, name, price, stock, rating }) {
  return (

    <div className="shadow-xl w-80 rounded-md border border-gray-200 cursor-pointer" role="product card">
      <figure className="w-full aspect-square overflow-hidden">
        <img src={img} alt={name} className="w-full object-cover " />
      </figure>
      <div aria-label="card content" className="px-4 pt-2 pb-4 border-t-1 flex flex-col gap-2 border-gray-300 text-gray-600">
        <h3 className="text-xl text-black">{name}</h3>
        <p>Precio: ${price}</p>
        <div className="flex  justify-between">
          <span>Stock: {stock}</span>
          <span>Rating: {rating}</span>
        </div>
      </div>
    </div>
  )
}