import { isChaiOrder } from "./guards.js";
import { prepareChai } from "./order.js"; 

const incomingData : unknown = {
    id:1,
    size:"medium",
    sugar:2
}; 

if(isChaiOrder(incomingData)){
    console.log(prepareChai(incomingData));
} else {
    console.log("Invalid chai order");
}