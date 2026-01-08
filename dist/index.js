import { isChaiOrder } from "./guards.js";
import { prepareChai } from "./order.js";
const incomingData = {
    id: 1,
    size: "medium",
    sugar: 2
};
if (isChaiOrder(incomingData)) {
    console.log(prepareChai(incomingData));
}
else {
    console.log("Invalid chai order");
}
//# sourceMappingURL=index.js.map