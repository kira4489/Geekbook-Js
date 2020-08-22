fetch('https://api.rand.fun/text/password?length=20')
.then(response => response.json())
.then(data=> document.body.innerHTML =data.result)

fetch('https://rand.fun/number/integer')
.then(response => response.json())
.then(data => document.body.innerHTML = data.result)