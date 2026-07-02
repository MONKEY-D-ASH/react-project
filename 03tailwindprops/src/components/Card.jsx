import React from "react";

// we can define the default values the you want to display incase you are not provided the required prop 

function Card({username = " AK ", price = 50}){    
    // console.log(props);

    return(
<div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
  <div className="relative h-48 w-full overflow-hidden">
        <img 
        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" 
        src="https://images.pexels.com/photos/37034160/pexels-photo-37034160.jpeg" 
        alt="Product Image"
        />
        
  </div>

  <div className="p-5">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Trending Item</span>
    
        <h3 className="mt-1 mb-2 text-xl font-bold text-gray-900 tracking-tight">
            {username}
        </h3>
    
        <p className="mb-4 text-sm leading-relaxed text-gray-600">
            Experience ultimate comfort and unmatched style with our newly redesigned athletic footwear. Engineered for everyday performance.
        </p>

        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <span className="text-lg font-extrabold text-gray-900">${price}</span>
            <a 
                href="#" 
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-100 transition-colors duration-200"
            >
                View Details
            </a>
        </div>
  </div>
</div>

    )
}

export default Card