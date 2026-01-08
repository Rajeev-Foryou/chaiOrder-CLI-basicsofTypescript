export function isChaiOrder(value) {
    return (typeof value === "object" &&
        value !== null &&
        "id" in value &&
        "size" in value &&
        typeof value.id === "number" &&
        ["small", "medium", "Large"].includes(value.size));
}
//# sourceMappingURL=guards.js.map