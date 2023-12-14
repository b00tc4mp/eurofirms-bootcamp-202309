// HEADER.PAYLOAD.SIGNATURE
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTY4NGM4N2RjNGVmMDk0MzAxNjM0M2YiLCJpYXQiOjE3MDI1NDMzMDQsImV4cCI6MTcwMjU0NjkwNH0.PgH5V1tJOAtl9fji7r01QTevwRtiw3WJd9Znwzr_io4'

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