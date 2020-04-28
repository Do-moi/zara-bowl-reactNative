export default function(ballTab = [], action) {
  
    if(action.type == 'saveBasket') {
      console.log('========reducer',action.ball)
      var newBallTab= [...ballTab]
       newBallTab.push(action.ball) 
      console.log('======newballTab',newBallTab)
      return newBallTab
    }

      if(action.type == 'delete') {
        console.log('========reducer delete',action.nb)
       var newBallTab = [...ballTab]
        newBallTab.splice(action.nb,1)
        return newBallTab;
    }
    if(action.type == 'deconnexion'){
      console.log('==========reducer déconnexion')
      var newBallTab = [...ballTab]
      newBallTab = []
      return newBallTab;
    }
     else {
      return ballTab;
    }
    
  }