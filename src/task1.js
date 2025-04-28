"use strict";
const totalPrice = ({ price, discount, isInstallment, months, }) => {
    let result;
    if (isInstallment) {
        return (result = ((price / 100) * (100 - discount)) / months);
    }
    else {
        return price;
    }
};
const price = totalPrice({
    price: 100000,
    discount: 25,
    isInstallment: true,
    months: 12,
});
console.log(price);
