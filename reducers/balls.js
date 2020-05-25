export default function (balls = [], action) {
  if (action.type == "saveBallRedux") {
    var copyBalls = [...balls];
    copyBalls = action.listBalls;
    return copyBalls;
  } else {
    return balls;
  }
}
