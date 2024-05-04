function getGoogleRepos() {
    fetch('https://api.github.com/orgs/google/repos')
      .then(async res => {
        if (!res.ok) {
          throw new Error(res.status);
        }
  
        const data = await res.json();
  
        const tabela = document.getElementById('tabela-repos').querySelector('tbody');
  
        data.map(item => {
          const tr = document.createElement('tr');
  
          tr.innerHTML = `

         </thead>
         <tbody>
            <th>${item.name.toUpperCase()}</th>
            <th>${item.url}</th>
            <th><img src="${item.owner.avatar_url}" alt="Imagem do Proprietário" width="30%" height="30%" ></th>
         </tbody>
           `
  
          tabela.appendChild(tr);
        });
      })
      .catch(e => console.error(e));
  }

  getGoogleRepos()
