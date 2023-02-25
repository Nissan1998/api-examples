const loadUsers=() =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUsers(data))
}
const displayUsers = users =>{
    const genderTag = document.getElementById('user-gender');
    genderTag.innerHTML = users.results[0].gender;          
    const userName = document.getElementById('user-name');
    userName.innerHTML = users.results[0].name.first +' ' + users.results[0].name.last;
    const userTitle = document.getElementById('user-title')
    userTitle.innerHTML = users.results[0].name.title
    
    
}

loadUsers()
