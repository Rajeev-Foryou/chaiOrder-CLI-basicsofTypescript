export function prepareChai(order) {
    const sugarText = order.sugar ? `with${order.sugar} sugar` : "without sugar";
    return `Preparing ${order.size} chai ${sugarText}`;
}
//# sourceMappingURL=order.js.map