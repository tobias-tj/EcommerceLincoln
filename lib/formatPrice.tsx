export function formatPrice(price: number) {
    const priceFormated = new Intl.NumberFormat('es-PY', {
        style: "currency",
        currency: "PYG",
    });


    const finalPrice = priceFormated.format(price);

    return finalPrice;
}