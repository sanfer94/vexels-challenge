import { DataGrid } from '@mui/x-data-grid';
import {useState, useEffect} from 'react';
import { getShipments } from "../../api/shipments";
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { addShipment } from '../../store/shipment';

export default function ShipmentList(props){
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchShipments = async () => {
            const data = await getShipments();
            if(data && data.length > 0){
                const shipments = data.map((shipment) => ({
                    id:shipment.id,
                    name:shipment.name,
                    cargo:shipment.cargo,
                    mode:shipment.mode,
                    type:shipment.type,
                    destination:shipment.destination,
                    origin:shipment.origin,
                    services:shipment.services,
                    total:shipment.total,
                    status:shipment.status,
                    userId:shipment.userId
                }));
                shipments.pop()
                shipments.pop()
                setData(shipments);
            }

            
        }
        fetchShipments();
    }, [])

    const columns = [
        {field: 'id', headerName: 'ID', width:90},
        {field: 'name', 
        headerName: 'Name', 
        width: 200, 
        },
        {field:'cargo', 
        headerName:'Cargo',
        width:200, 
        renderCell:(params) => {

            const cargo = params.row.cargo;
            return(
                // puede ser mas de uno, tiene type, description y volume
                <div>
                    {cargo.map(e => {
                        return (
                        <div>
                            <hr className='border-t-2 pb-2 border-black'></hr>
                            <div className='pb-2'>
                            <span>{`Type - ${e.type}`}</span>
                            </div>
                            <div className='pb-2'>
                            <span>{`Description - ${e.description}`}</span>
                            </div>
                            <div className='pb-2'>
                            <span>{`Volume - ${e.volume}`}</span>
                            </div>
                            <hr className='border-t-2 pb-2 border-black'></hr>
                        </div>
                        )
                    })}
                    
                </div>
            )
        }},
        {field:'mode', headerName:'Mode', width:100},
        {field:'type', headerName:'Type', width:100},
        {field:'destination', headerName:'Destination', width:300},
        {field:'origin', headerName:'Origin', width:150},
        {field:'services', headerName:'Services', width:150,
        renderCell:(params) => {

            const services = params.row.services;
            let index = 0;
            return(
                //puede ser mas de uno, y tener type y value
                <div>
                    {services.map(e => {
                        let currentIndex = index;
                        index++;
                        return (
                        <>
                        <div key = {params.row.id}>
                            <div className='pb-2'>
                            <span>{`Type - ${e.type}`}</span>
                            </div>
                            {e.value !== undefined ? 
                            <div className='pb-2'>
                            <span>{`Value - ${e.value}`}</span>
                            </div> : null
                        }
                            
                        </div>
                        <div>
                            { (currentIndex+1 !== services.length) && <hr className='border-t-2 pb-2 border-black'></hr>}
                        </div>
                        </>
                        )
                    })}
                    
                </div>
            )
        }},
        {field:'total', headerName:'Total', width:100},
        {field:'status', headerName:'Status', width:100},
        {field:'userId', headerName:'UID', width:90},
        {field: 'action', headreName:'Action', width:150, 
        renderCell: (params) => {
            return(
                <>
                    <Link to={"/shipment/" + params.row.id}>
                        <button onClick={() => dispatch(addShipment(params.row))} className="bg-blue-300 pt-1 pr-2 text-white cursor-pointer">View</button>
                    </Link>
                </>
            )
        }}
    ];

    return(
        <div>
            <DataGrid
                rows = {data}
                disableSelectionOnClick
                columns={columns}
                pageSize={20}
                autoHeight
            />
        </div>
    )
}