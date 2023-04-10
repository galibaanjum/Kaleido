let nextPageToken = ""
function getVideos() {
  fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCDYyCQAk60CqabvkL5gU3Mw&maxResults=10&order=date&key=AIzaSyDGid_bsHgXHEmjkD2yLJWGGFvDDJqUM4A&pageToken=" + nextPageToken)
  //API KEY 1 https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCDYyCQAk60CqabvkL5gU3Mw&maxResults=10&order=date&key=AIzaSyC4S9SCQVJ8uB5ZVCB8Z89Wr0AZS44LGFE&pageToken= //
    //API KEY 2 https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCDYyCQAk60CqabvkL5gU3Mw&maxResults=10&order=date&key=AIzaSyCEsNaNCTC4WnfeYbNveN5Q16A9XJ84HAQ //
    //channel id: UCDYyCQAk60CqabvkL5gU3Mw//

  //NEW API: https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCDYyCQAk60CqabvkL5gU3Mw&maxResults=10&order=date&key=AIzaSyDGid_bsHgXHEmjkD2yLJWGGFvDDJqUM4A //

    .then((result) => {
      return result.json()
    })

    .then((data) => {
      console.log(data)
      let videos = data.items //array
    //console.log(videos)
      nextPageToken = data.nextPageToken
      let videoContainer = document.querySelector(".youtube-container")
      for (video of videos) { //loop array of vids
        let videoID = video.id.videoId //obtaining video id
        videoContainer.innerHTML += ` 
   <h3>${video.snippet.title}</h3>
  <iframe width="420" height="315" 
  class=clickFrame 
src="https://www.youtube.com/embed/${videoID}">
</iframe>`
        //above substituting $ w/ videoID from line 18 
      }
      let frames = document.querySelectorAll(".clickFrame")
      console.log(frames)
      for (frame of frames) {
        console.log(frame)
      }
    })
  
}



window.onload = function() {
  getVideos()


}

//BUTTON 1//
const button1 = document.querySelector("#button1");
console.log(button1);
const status1 = document.querySelector("#status1");
console.log(status1);
let watchRate = 0

button1.addEventListener("click", (e) => {
  console.log("button 1 pressed!");
  watchRate = watchRate + 1;
  if (watchRate <=9) {
    status1.innerHTML = "Yay! You watched a vid & donated! Win-win!";
  } else {
    status1.innerHTML = "Max of 10 donations per day reached. You can still watch more otter videos...";
  }

});
