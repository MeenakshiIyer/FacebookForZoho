var arrNewFeed = [{
    "name":"Sriram Rathnam",
    "time": "1 min ago",
    "img": "../images/feed_sriram.jpg",
    "avatar":"../images/sriram_profile.jpg",
    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Accusamus minima delectus nemo unde quae recusandae assumenda."
}];

this. refreshNewsFeed( true);

function refreshNewsFeed( isAllValuesReplaced) {
    var newPosts = [];

    for(var i=0;i<this.arrNewFeed.length;i++) {
        var elem = document.getElementsByClassName('feed')[0];
        const innerHTMLValue = `<div class="card rounded">
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
            <p class="mb-3 tx-14">`+this.arrNewFeed[i].text+`</p>
            <img class="img-fluid" src="`+this.arrNewFeed[i].img+`" alt="">
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
        elem.innerHTML += innerHTMLValue;
        } else {
            
        }
    }
}


function addNewFeed(name, time, img, avatar, text) {
    const newFeed = {
        "name": name,
        "time": time,
        "img": img,
        "avatar": avatar,
        "text": text
    }

    this.arrNewFeed.push(newFeed);
    this. refreshNewsFeed( true);

}