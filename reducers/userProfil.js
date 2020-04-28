export default function(userProfil = "", action) {
  
    if(action.type == 'saveProfil') {
      console.log('========reducer saveProfil',action.userProfil)
      var newUserProfil = userProfil
       newUserProfil = action.userProfil
      
      return newUserProfil
    }
    if(action.type == 'deleteProfil'){
      console.log('==========reducer deleteProfil')
       userProfil = ""
      
      return userProfil
    }

     else {
      return userProfil;
    }
    
  }