const Regisform=document.querySelector('#Regisform')
Regisform.addEventListener('submit', (e)=>{
   e.preventDefault()
   const name = document.querySelector('#nombre').value
   const usuario = document.querySelector('#usuario').value
   const pass = document.querySelector('#contraseña').value
   const Users = JSON.parse(localStorage.getItem('users')) || []
   const isUserRegistered = Users.find (user => user.usuario === usuario)    
   if(isUserRegistered){
      return alert ('El usuario ya esta registrado')
   }
   Users.push({name: nombre, usuario: usuario, pass: contraseña})
   localStorage.setItem('users', JSON.stringify(Users))
   alert('registro exitoso')
   window.location.href='login.html'

})