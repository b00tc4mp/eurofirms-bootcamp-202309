// HEADER.PAYLOAD.SIGNATURE
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTY3NTRiYTRmYmFjMzI3OTJmYjE4YzYiLCJpYXQiOjE3MDI3ODMwMjMsImV4cCI6MTcwMjc4MzAzM30.CHwh3rLouNK2juLhYbZBB6xwsOYIm0iFdIcDRW13FKE'

const [header64, payload64, signature] = token.split('.')

const headerJSON = atob(header64)
const header = JSON.parse(headerJSON)
console.log(header) // { alg, typ }

const payloadJSON = atob(payload64)
const payload = JSON.parse(payloadJSON)
console.log(payload) // { iat, exp, sub }

const issueAt = new Date(payload.iat * 1000)
console.log(issueAt)

const expiresAt = new Date(payload.exp * 1000)
console.log(expiresAt)