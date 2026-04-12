const config = {
  businessName: 'Nimbus Labs',
  tagline: 'Build a stronger pipeline with less overhead',
}

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
if (prefersDark) {
  document.documentElement.classList.add('dark')
}

const businessNameEl = document.getElementById('business-name')
const taglineEl = document.getElementById('tagline')
const footerCopyEl = document.getElementById('footer-copy')
const themeToggle = document.getElementById('theme-toggle')

if (businessNameEl) {
  businessNameEl.textContent = config.businessName
}

if (taglineEl) {
  taglineEl.textContent = config.tagline
}

if (footerCopyEl) {
  footerCopyEl.textContent = `© ${config.businessName}. All rights reserved.`
}

themeToggle?.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark')
})
