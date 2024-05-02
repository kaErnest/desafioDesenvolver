const ul = document.querySelector('ul')

function getGoogleRepos() {
    fetch('https://api.github.com/orgs/google/repos')
     .then(async res => {
        if(!res.ok) {
            throw new Error(res.status)
        }

        var data = await res.json()

        data.map(item => {
            let li = document.createElement('li')

            li.innerHTML = `
            <strong>${item.name.toUpperCase()}</strong>
            <span>URL: ${item.url}</span>
            <span>Imagem do Proprietário:
             ${item.owner.avatar_url}
            </span>
            `
            ul.appendChild(li)
        })

     }).catch(e => console.log(e))
    
}

getGoogleRepos()