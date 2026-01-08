export type ChaiSize = "small" | "medium" | "Large";

export type ChaiOrder = {
    readonly id:number;
    size:ChaiSize;
    sugar?:number;
};
