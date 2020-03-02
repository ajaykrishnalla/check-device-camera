function hasGetUserMedia() {
  return !!(navigator.mediaDevices &&
    navigator.mediaDevices.getUserMedia);
}

if (hasGetUserMedia()) {
  console.log("hello")
} else {
  alert('getUserMedia() is not supported by your browser');
}