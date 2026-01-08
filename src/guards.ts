import  type {ChaiOrder} from "./types.js"; 

export function isChaiOrder(value:unknown) : value is ChaiOrder {
    return (
        typeof value === "object" &&
        value!==null&&
        "id" in value &&
        "size" in value &&
        typeof(value as any).id === "number"&&
        ["small","medium","Large"].includes((value as any).size)
    );
}