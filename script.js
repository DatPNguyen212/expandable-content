const expandContainersList = document.querySelectorAll('[data-expand-container')

const textContainersList = document.querySelectorAll('[data-text-container]')

const expandButtonsList = document.querySelectorAll('[data-expand-button]')

console.log(expandContainersList)
console.log(textContainersList)
console.log(expandButtonsList)

expandButtonsList.forEach((button) => {
  button.addEventListener('click', expandTextContainer)
})

function expandTextContainer(event) {
  event.target.closest('[data-expand-container').classList.toggle('expand')
  buttonContent = event.target
    .closest('[data-expand-container]')
    .classList.contains('expand')
    ? 'Read less'
    : 'Read more'

  event.target.textContent = buttonContent
}

function checkOverflow() {
  textContainersList.forEach((textContainer) => {
    if (textContainer.scrollHeight > textContainer.clientHeight) {
      textContainer
        .closest('[data-expand-container]')
        .setAttribute('data-overflow', 'true')
    } else {
      textContainer
        .closest('[data-expand-container]')
        .setAttribute('data-overflow', 'false')
    }
  })
}

textContainersList.forEach((textContainer) => {})
