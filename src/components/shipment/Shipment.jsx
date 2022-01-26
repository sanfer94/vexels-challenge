import {Link} from "react-router-dom";
import { useSelector } from "react-redux";

export default function Shipment() {

    const shipment = useSelector(state => state.shipments)
    const shipmentData = shipment[0].info;
    console.log(shipment);
    //cargo, destination, id, mode, name, origin, services, status, total, type, userid
    return(
        <div className = 'flex-grow p-5'>
            <div className='flex items-center justify-between'>
                <h1>Shipment Information</h1>
                <Link to='/'>
                    <button className="w-20 border-none p-1 bg-green-500 text-white rounded text-base">Go Back</button>
                </Link>
            </div>
            <div className='flex mt-5'>
                <div style={{boxShadow:'0px 0px 15px -10px rgba(0, 0, 0, 0.75)'}} className='flex-grow p-5'>
                    <div className="flex items-center">
                        <div className="flex flex-col">
                            <span className="font-semibold"> {shipmentData.name}</span>
                            <span className="font-light"> {shipmentData.origin}</span>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <span className="font-semibold text-gray text-sm">Type</span>
                        <div className="flex text-black mt-5 mr-0 items-center">
                            {shipmentData.type}
                        </div>
                        <span className="font-semibold text-gray text-sm">Destination</span>
                        <div className="flex text-black mt-5 mr-0 items-center">
                            {shipmentData.destination}
                        </div>
                        <span className="font-semibold text-gray text-sm">Mode</span>
                        <div className="flex text-black mt-5 mr-0 items-center">
                            {shipmentData.mode}
                        </div>
                        <span className="font-semibold text-gray text-sm">Cargo</span>
                        <div className="flex text-black mt-5 mr-0 items-center">
                        {shipmentData.cargo.map(e => {
                        return (
                        <div className="mr-5">

                            <div className='pb-2'>
                                <span>{`Type - ${e.type}`}</span>
                            </div>
                            <div className='pb-2'>
                                <span>{`Description - ${e.description}`}</span>
                            </div>
                            <div className='pb-2'>
                                <span>{`Volume - ${e.volume}`}</span>
                            </div>

                        </div>
                        )
                        })}
                        </div>
                        <span className="font-semibold text-gray text-sm">Services</span>
                        <div className="flex text-black mt-5 mr-3 items-center">
                            {shipmentData.services.map(e => {
                                return (
                                    <>
                                        <div className="mr-5">
                                            <div className='pb-2'>
                                                <span>{`Type - ${e.type}`}</span>
                                            </div>
                                        {e.value !== undefined ? 
                                            <div className='pb-2'>
                                                <span>{`Value - ${e.value}`}</span>
                                            </div> : null
                                        }
                            
                                        </div>
                                    </>
                                    )
                            })}
                        </div>
                        <span className="font-semibold text-gray text-sm">Status</span>
                        <div className="flex text-black mt-5 mr-0 items-center">
                            {shipmentData.status}
                        </div>
                        <span className="font-semibold text-gray text-sm">Total</span>
                        <div className="flex text-black mt-5 mr-0 items-center">
                            {shipmentData.total}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}