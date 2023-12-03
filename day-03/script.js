const counterForm = document.getElementById("dividir-form")
const submitBtn = document.getElementById("submit-btn")
const userInputContainer = document.getElementById("user-input-container")
const resultContainer = document.getElementById("resultado-container")

counterForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const counterFormData = new FormData(counterForm)

  const childrenAmount = counterFormData.get("childrenAmount")
  const candyAmount = counterFormData.get("candyAmount")

  const totalCandies = calcTotalCandies(childrenAmount, candyAmount)

  renderTemplate(childrenAmount, candyAmount, totalCandies)
})

const renderTemplate = (childrenAmount, candyAmount, total) => {
  const candySingular = "doce"
  const candyPlural = "doces"
  if (total === 0 || total === undefined) {
    resultContainer.innerHTML = `
      <p class="total">Parece que ninguém vai receber nenhum doce hoje! 
      <span class="text-bold">${candyAmount}</span>  ${candyPlural} não é suficiente para 
      <span class="text-bold">${childrenAmount}</span> crianças!</p>
  `
  } else if ((total === 0 || total === undefined) && candyAmount === 1) {
    resultContainer.innerHTML = `
      <p class="total">Parece que ninguém vai receber nenhum doce hoje! 
      <span class="text-bold">${candyAmount}</span> ${candySingular} não é suficiente para 
      <span class="text-bold">${childrenAmount}</span> crianças!</p>
  `
  } else if (total === 1) {
    resultContainer.innerHTML = `
      <p class="total">🍬 Cada criança ganhará 
        <span class="text-bold">${total}</span> 
        ${candySingular}! 🍬
      </p>
  `
  } else {
    resultContainer.innerHTML = `
      <p class="total">🍬 Cada criança ganhará 
        <span class="text-bold">${total}</span> 
        ${candyPlural}! 🍬
      </p>
  `
  }
  setTimeout(() => {
    resultContainer.innerHTML = ""
    counterForm.reset()
  }, 3000)
}

const calcTotalCandies = (children, candy) => {
  const remaining = candy % children
  if (remaining === 0) {
    return candy / children
  } else {
    return (candy - remaining) / children
  }
}

const clearContent = () => {
  userInputContainer
}
