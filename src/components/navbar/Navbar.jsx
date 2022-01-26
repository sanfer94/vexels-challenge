import React from "react";

export default function NavBar() {
    return(
        <div className="w-full h-12 bg-gray-200 sticky top-0 z-50">
            <div className="h-full pt-0 pr-5 flex items-center justify-between">
                <div className="topLeft">
                    <span className="font-bold text-3xl text-red-600">Shipments</span>
                </div>
            </div>
        </div>
    )
}