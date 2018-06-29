const names = ['Stefano', 'Connor', 'Monica', 'Felix', 'Cecilia', 'Bruce']
const surnames = ['Veltri', 'Hauy', 'Da Vinci', 'Wayne', 'Sanchez']
const paymentsMethods = ['card', 'cash']
const paymentStatus = ['successful', 'refunded', 'failed']

export const randData = (item) => {
  let sales = []
  for (let i = 0; i < item; i++) {
    const sale = {
      id: getRandNum(item * 10000),
      firstName: getRandArray(names),
      lastName: getRandArray(surnames),
      date: getDate(),
      time: getTime(),
      amount: getRandMoney(300),
      method: getRandArray(paymentsMethods),
      status: getRandArray(paymentStatus)
    }

    sales.push(sale)
  }
  return sales
}

export const getRandNum = (maximum) => Math.floor(Math.random() * Math.floor(maximum))

export const getRandMoney = (maximum) => {
  let randMoney = getRandNum(maximum * 100) / 100
  return randMoney.toFixed(2) + `€`
}

export const getRandArray = (array) => array[getRandNum(array.length)]

export const getDate = () => {
  let date = new Date().getTime()
  let interval = getRandNum(1000 * 60 * 60 * 24 * 30 * 6)
  let paymentDate = new Date(date - interval)
  return paymentDate.toJSON().split("T")[0]
}

export const getTime = () => new Date().toJSON().slice(11,19)
