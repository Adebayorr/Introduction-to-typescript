export function add (a, b) {
    return a + b
}

export const capitalize = (str) => str.slice(0, 1).toUpperCase() + str.slice(1)

export const APP_VERSION = "1.0.0" 

export default function formatCurrency (amount) {
    return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN'
    }).format(amount)
}

