const usersContainer = document.querySelector('#wrap-users')

window.addEventListener('load', () => {
    
    fetch('https://data-base-beerlian-default-rtdb.europe-west1.firebasedatabase.app//users.json')
        .then(res => res.json())
        .then(data => {
            let usersData = Object.entries(data)
            
            // console.log(usersData);
            
            usersData.forEach(user => {
                console.log(user[1]);

                usersContainer.insertAdjacentHTML('beforeend', `
                
                    <div class="user">
                    <div class="user-profile-wrap">
                        <img class="user-profile" src="img/noimg.png" alt="default-image">
                        <div class="user-profile-description">
                            <h1 class="user-profile-name">${user[1].userInput} - ${user[1].phoneInput} </h1>
                            <h3 class="user-explanations">Pass: ${user[1].passInput}</h3>
                        </div>
                    </div>
                    <div class="btn-groups-column">
                        <button class="delete-user-btn">delete</button>
                        <button class="edit-user-btn">edit</button>
                    </div>
                </div>
    
                `)

            })

        })


})