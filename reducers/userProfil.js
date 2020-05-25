export default function (userProfil = "", action) {
  if (action.type == "saveProfil") {
    var newUserProfil = userProfil;
    newUserProfil = action.userProfil;
    return newUserProfil;
  }
  if (action.type == "deleteProfil") {
    userProfil = "";
    return userProfil;
  } else {
    return userProfil;
  }
}
