import { combineReducers } from "redux";

const ADD_SHIPMENT = 'ADD_SHIPMENT';

export function addShipment(shipment) {
    console.log('test2');
    return{
        type:ADD_SHIPMENT,
        shipment,
    }
}

const defaultShipment = [
    {
        id:'0000',
    }
];

function shipments(state=defaultShipment, action){
    console.log('test 1')
    console.log(action)
    console.log(state);
    switch(action.type){
        case ADD_SHIPMENT:
            console.log('or here')
            return [
                {info:action.shipment}
            ];
        default:
            console.log('goes here')
            return state
    }
}

const shipmentApp = combineReducers({shipments});

export default shipmentApp;