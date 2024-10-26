let inventoryArr = [];

export function addItem(item) {
    inventoryArr.push(item);
}
// console.log(addItem('hello'));

export function removeItem(item) {
    inventoryArr = inventoryArr.filter(i => i !== item);
}
// console.log(removeItem('hello'));

export function listItems() {
    console.log(inventoryArr);
}
// listItems(inventoryArr);
