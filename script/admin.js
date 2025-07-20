const usersContainer = document.querySelector('#wrap-users')
const deleteModal = document.querySelector('#delete-modal')
const editModal = document.querySelector('#edit-modal')

const firstname = document.querySelector('.firstname')
const lastname = document.querySelector('.lastname')
const password = document.querySelector('.password')

let userID = null

window.addEventListener('load', () => {
   getAllUsers()
})

function getAllUsers () {
     
    fetch('https://data-base-beerlian-default-rtdb.europe-west1.firebasedatabase.app/users.json')
        .then(res => res.json())
        .then(data => {
            let usersData = Object.entries(data)
            
            usersContainer.innerHTML = ''

            usersData.forEach(user => {

                console.log(user);

                usersContainer.insertAdjacentHTML('beforeend', `
                
                    <div class="user">
                    <div class="user-profile-wrap">
                        <img class="user-profile" src="content/img/noimg.png" alt="default-image">
                        <div class="user-profile-description">
                            <h1 class="user-profile-name">${user[1].userInput} - ${user[1].phoneInput}<span class="user-age"></span> </h1>
                            <h3 class="user-explanations">Pass: ${user[1].passInput}</h3>
                        </div>
                    </div>
                    <div class="btn-groups-column">
                        <button class="delete-user-btn" onclick="openDeleteModal('${user[0]}')">delete</button>
                        <button class="edit-user-btn" onclick="openEditModal('${user[0]}')">edit</button>
                    </div>
                </div>
    
                `)

            })
        })
}

// Delete

function openDeleteModal (id) {

    userID = id

    deleteModal.classList.add('visible')
}

function closeDeleteModal () {
    deleteModal.classList.remove('visible')
}

function deleteUser () {
    
    // User Remove

    fetch(`https://data-base-beerlian-default-rtdb.europe-west1.firebasedatabase.app/users/${userID}.json`, {
        method: 'DELETE'
    }).then(res => {

        console.log(res);

        getAllUsers()
        closeDeleteModal()
    })
}

// Edit

function openEditModal (id) {
    userID = id

    editModal.classList.add('visible')

} 

function closeEditModal () {
    editModal.classList.remove('visible')
}

function updateUser () {

    // Update User

    const userNewData = {
        firstname: firstname.value,
        lastname: lastname.value,
        password: password.value,
    }

    fetch(`https://data-base-beerlian-default-rtdb.europe-west1.firebasedatabase.app/users/${userID}.json`, {
        method: 'PUT',
        headers: {
            "Content-type": 'application/json'
        },
        body: JSON.stringify(userNewData)
    })
        .then(res => {
            console.log(res)
            closeEditModal()
            getAllUsers()
        })

}