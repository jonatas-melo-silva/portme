// Function to update the current year at the footer
function updateFooterYear() {
  const currentYear = new Date().getFullYear()
  const currentYearAtFooter = document.getElementById('current-year-at-footer')
  if (currentYearAtFooter) {
    currentYearAtFooter.textContent = currentYear
  }
}

updateFooterYear()
