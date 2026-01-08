import type { ChaiOrder } from "./types.js";    

export function prepareChai(order:ChaiOrder):string{
    const sugarText = order.sugar?`with${order.sugar} sugar`:"without sugar";

    return `Preparing ${order.size} chai ${sugarText}`;
}