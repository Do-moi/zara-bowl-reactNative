export default function(token = "", action) {
  
    if(action.type == 'saveToken') {
      console.log('========reducer token',action.token)
      var newToken = token
       newToken = action.token
      
      return newToken
    }
    if(action.type == 'deleteToken'){
      console.log('==========reducer deleteToken')
       token = ""
      
      return token
    }

     else {
      return token;
    }
    
  }