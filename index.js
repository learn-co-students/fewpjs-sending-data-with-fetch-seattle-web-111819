// Add your code here

const submitData = (name, email) => {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(res => res.json())
    .then(json => {document.body.textContent = json.id})
    .catch(err => {document.body.textContent = err.message})
}


