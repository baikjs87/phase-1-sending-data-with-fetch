// Add your code here
function submitData(userName, userEmail) {
    const userData = {
        name: userName,
        email: userEmail
    }
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(function(result) {
        const p = document.createElement('p')
        p.innerHTML = result.id
        document.querySelector('body').appendChild(p)
    })
    .catch(function(error) {
        const p = document.createElement('p')
        p.innerHTML = error.message
        document.querySelector('body').appendChild(p)
    })
}
