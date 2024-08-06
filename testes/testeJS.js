fetch('https://api.exemplo.com/dados')
.then(response => response.json())
.then(data => (
    console.log(data)
))