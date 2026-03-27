function songs(array){
  let songs = [];
  for (let line of array) {
    if (line.startsWith("addSong")) {
        let name = line.replace("addSong ", "") 
        songs.push({name});
    }else if(line.includes("by")){
        let [songName,artist] = line.split(" by ")
        let song = songs.find(s => s.name === songName)

        if(song){
           song.artist = artist;
        }
    }else if(line.includes("duration")){
        let [songName,duration] = line.split(" duration ")

         let song = songs.find(s => s.name === songName)

         if(song){
            song.duration = duration
         }
    }
  }
   for (let song of songs) {
      if (song.name && song.artist && song.duration) {
         console.log(JSON.stringify(song)); 
      }
   }
}
songs([
  "addSong Shape of You",
  "addSong Believer",
  "Shape of You by Ed Sheeran",
  "Shape of You duration 4:24",
  "Believer by Imagine Dragons"
]);