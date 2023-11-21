//let sessionUserId = null

//Auto-login
let sessionUserId = db.users[0].id

console.log("root")

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)