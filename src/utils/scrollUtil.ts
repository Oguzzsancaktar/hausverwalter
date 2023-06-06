export const scrollToEl = (targetEl: HTMLElement) => {
  window.scrollTo({
    top: targetEl.offsetTop - 60,
    behavior: 'smooth',
  })
}
