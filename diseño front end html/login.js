const loginform=document.querySelector('#loginform')
loginform.addEventListener('submit', (e)=>{
   e.preventDefault()
   const usuario = document.querySelector('#usuario').value
   const pass = document.querySelector('#contraseña').value
   const Users = JSON.parse(localStorage.getItem('users')) || []
   const validUser = Users.find(user => user.usuario === usuario && user.pass === contraseña)
   if(validUser){
      return alert('usuario y/o contraseña incorrectos!')
   }
   alert('Bienvenido', '${validUser.usuario}')
   window.location.href = 'terapeuta.html'


})



