const items = [
  { name: 'blue-hat'},
  { name: 'red-sweater'},
  { name: 'silver-necklace'},
]

const search = document.querySelector ('.input')

searchInput.addEventListener("input", (e) => {
  let value = e.target.value
  if (value && value.trim().length > 0 {
    value = value.trim().toLowerCase()

    setList(items.filter(items => {
      return items.name.includes(value)
    }))
  } else {

  }
}

const clearButton = document.getElementById('clear')

clearButton.addEventListener("click", () => {
})

function itemList(results) {
  for (const items of results) {
    const resultItem = document.createElement('li')
    resultItem.classList.add('result-list')
    const text = document.createTextNode(items.name)
    resultItem.appendChild(text)
    list.appendChild(resultItem)
  }
}
