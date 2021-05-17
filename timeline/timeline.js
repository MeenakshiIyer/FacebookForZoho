var user = {
    name: "Meenakshi B",
    id : '1234567',
    avatar :'../images/profile_pic.jpg',
    cover_img:'../images/cover_image.jpg'
};

var arrNewFeed = [{
    "name":"Sriram Rathnam",
    "time": "1 min ago",
    "img": "../images/feed_sriram.jpg",
    "avatar":"../images/sriram_profile.jpg",
    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusamus minima delectus nemo unde quae recusandae assumenda.",
     "meta":'image',
     "location" : '',
     "video":'',
     "audio":''
}];

var imageUpload = document.getElementById('file-input');

var feed = {
    meta:'',
    img : '',
    location : '',
    video:'',
    audio:''
}

this.setUserDetails();
this. refreshNewsFeed( true);


function setUserDetails() { 
    document.getElementsByTagName("title")[0].innerHTML = this.user.name + " | Facebook";
    document.getElementById("profile-name").innerHTML = this.user.name;
    document.getElementById("profile-pic").src = this.user.avatar;
    document.getElementById("cover").src = this.user.cover_img;
    document.getElementById("camera").addEventListener("click", uploadImageDialog);
}

function refreshNewsFeed( isAllValuesReplaced) {

    for(var i=0;i<this.arrNewFeed.length;i++) {
        var elem = document.getElementsByClassName('feed')[0];
        var HTMLText = `<div class="card rounded">
        <div class="card-header">
            <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                    <img class="img-xs rounded-circle" src="`+this.arrNewFeed[i].avatar+`" alt="">
                    <div class="ml-2">
                        <p>`+this.arrNewFeed[i].name+`</p>
                        <p class="tx-11 text-muted">`+""+`</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body">
            <p class="mb-3 tx-14">`+this.arrNewFeed[i].text+`</p>`; 

            switch (this.arrNewFeed[i].meta ) {
                case 'image': HTMLText +=  `<img class="img-fluid" src="`+this.arrNewFeed[i].img+`" alt="">`                    
                    break;
                case 'location': HTMLText +=  `<img class="img-fluid" src="`+this.arrNewFeed[i].img+`" alt="">`                    
                    break;
                case 'video': HTMLText +=  `<img class="img-fluid" src="`+this.arrNewFeed[i].img+`" alt="">`                    
                    break;
                case 'audio': HTMLText +=  `<img class="img-fluid" src="`+this.arrNewFeed[i].img+`" alt="">`                    
                    break;            
                default:
                    break;
            }

            HTMLText = HTMLText += `
        </div>
        <div class="card-footer">
        <div class="d-flex post-actions">
        <a href="javascript:;" class="d-flex align-items-center text-muted mr-4">
            <i class="far fa-heart"></i>
            <p class="d-none d-md-block ml-2 pl-3 flex1">Like</p>
        </a>
        <a href="javascript:;" class="d-flex align-items-center text-muted mr-4">
            <i class="far fa-comment-alt-smile"></i>
            <p class="d-none d-md-block ml-2 pl-3 flex1">Comment</p>
        </a>
        <a href="javascript:;" class="d-flex align-items-center text-muted">
            <i class="fas fa-share"></i>
            <p class="d-none d-md-block ml-2 pl-3 flex1">Share</p>
        </a>
        </div>
        </div>
        </div>`
        if(isAllValuesReplaced) {
            elem.innerHTML += HTMLText;
        } else {
            
        }
    }
}

function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);
  
    var interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}
  
function addNewFeed() {
    const newFeed = {
        "name": this.user.name,
        "time": this.timeSince(new Date(Date.now())) + ' ago',
        "avatar": this.user.avatar,
        "text": document.getElementById('myText').value
    };
    newFeed.meta = this.feed.meta;

    switch (this.feed.meta) {
        case 'image': newFeed.img = this.feed.img;
            break;
        case 'location': newFeed.location = this.feed.location;
            break;
        case 'video': newFeed.video = this.feed.video;
            break;
        case 'audio': newFeed.audio = this.feed.audio;
            break;
        default:
            break;
    }
    this.arrNewFeed.push(newFeed);
    this. refreshNewsFeed( true);
}

function uploadImageDialog() {
    imageUpload.click();
}

function readURL(input) {
    if (input.files && input.files[0]) {
        this.feed.meta = 'image';
        this.feed.img = URL.createObjectURL(input.files[0]);
    }
}

function getLocation() {
    if (this.navigator.geolocation) {
        this.feed.meta = 'location';
        this.navigator.geolocation.getCurrentPosition(showPosition);
      } else { 
         alert("Geolocation is not supported by this browser.");
      }
}
function initialize() {
    geocoder = new google.maps.Geocoder();
}

function codeLatLng(lat, lng) {
    var latlng = new google.maps.LatLng(lat, lng);
    geocoder.geocode({'latLng': latlng}, function(results, status) {
      if(status == google.maps.GeocoderStatus.OK) {
          console.log(results)
          if(results[1]) {
              //formatted address
              var address = results[0].formatted_address;
              alert("address = " + address);
          } else {
              alert("No results found");
          }
      } else {
          alert("Geocoder failed due to: " + status);
      }
    });
}
function showPosition(position) {
    console.log(position);
    this.initialize();
    this.codeLatLng(position.coords.latitude, position.coords.longitude);
     this.feed.location = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}

var geocoder;


