export default function (token = "", action) {
  if (action.type == "saveToken") {
    var newToken = token;
    newToken = action.token;

    return newToken;
  }
  if (action.type == "deleteToken") {
    token = "";

    return token;
  } else {
    return token;
  }
}
