export const dev = window.location.origin.includes('localhost')
export const baseURL = dev ? 'http://localhost:3000' : ''
export const nasaUrl = 'https://api.nasa.gov/planetary/'
export const useSockets = false

export const domain = 'dev-isjroxsf.us.auth0.com'
export const audience = 'https://DonDev.com'
export const clientId = '13J6ELedzGPoK4iJIBq1ogGxV6s8Z9AC'