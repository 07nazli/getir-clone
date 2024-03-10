import { GoPlus } from "react-icons/go";

export default function  Productitem({ product }) {
  return (
    <div className=" bg-white flex flex-col gap-y-1 relative items-center text-center whitespace-nowrap text-sm font-semibold p-3">
        <button className="absolute top-0 right-0 bg-white w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg transition-colors text-[#5d3ebc] shadow-md hover:border-[#5d3ebc]">
            <GoPlus size={16} />
        </button>
        <img src={product.image} alt={product.title} width={100} height={100} />
        <div className="text-[#5d3ebc]">{product.price}</div>
        <div className="text-gray-900">{product.title}</div>
        <div className="text-gray-500">{product.alt}</div>
    </div>
  )
}
