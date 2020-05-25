export default function (ballTab = [], action) {
  if (action.type == "saveBasket") {
    var newBallTab = [...ballTab];
    newBallTab.push(action.ball);
    return newBallTab;
  }

  if (action.type == "delete") {
    var newBallTab = [...ballTab];
    newBallTab.splice(action.nb, 1);
    return newBallTab;
  }
  if (action.type == "deconnexion") {
    var newBallTab = [...ballTab];
    newBallTab = [];
    return newBallTab;
  } else {
    return ballTab;
  }
}
