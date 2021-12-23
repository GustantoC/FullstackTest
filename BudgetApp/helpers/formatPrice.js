function formatPrice(price){
  return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'IDR' }).format(price)
}

module.exports = formatPrice