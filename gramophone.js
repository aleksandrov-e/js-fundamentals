function gramophone(bandName,albumName,songName){
  let songDuration = (albumName.length * bandName.length) * songName.length / 2
  let rotates = Math.ceil(songDuration / 2.5);
  console.log(rotates);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')