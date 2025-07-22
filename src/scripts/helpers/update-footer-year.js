export function updateFooterYear() {
  const currentYearAtFooter = document.getElementById('current-year-at-footer')
  if (!currentYearAtFooter) {
    console.warn('Element with ID "current-year-at-footer" not found.')
    return
  }
  const currentYear = new Date().getFullYear()
  currentYearAtFooter.textContent = currentYear
}
