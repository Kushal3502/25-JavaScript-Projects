const billAmount = document.querySelector('#bill-amount')
const showBillAmount = document.querySelector('.bill-amount')

const discount = document.querySelector('#discount')
const showDiscount = document.querySelector('.discount')

const tip = document.querySelector('#tip')
const showTip = document.querySelector('.tip')

const customers = document.querySelector('#customers')
const showCustomers = document.querySelector('.customers')

const btn = document.querySelector('button')

const tipPaid = document.querySelector('.tip-paid')
const totalAmount = document.querySelector('.total-amount')
const eachPay = document.querySelector('.each-pay')


billAmount.addEventListener('input', () => {
    showBillAmount.textContent = billAmount.value
})
discount.addEventListener('input', () => {
    showDiscount.textContent = discount.value
})
tip.addEventListener('input', () => {
    showTip.textContent = tip.value
})
customers.addEventListener('input', () => {
    showCustomers.textContent = customers.value
})


btn.addEventListener('click', () => {
    const billAfterDiscount = billAmount.value * (1 - (discount.value / 100))
    const tipValue = billAfterDiscount * tip.value / 100
    const toPay = billAfterDiscount + tipValue
    const perHead = toPay / customers.value

    tipPaid.textContent = tipValue.toFixed(2)
    totalAmount.textContent = toPay.toFixed(2)
    eachPay.textContent = perHead.toFixed(2)
})
