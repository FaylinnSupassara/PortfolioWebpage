function postFunction(){
    var text = document.getElementById("text1");
    var postText = document.getElementById("post1");
    var replyText1 = document.getElementById("reply1");
    var replyText2 = document.getElementById("reply2");
    
    if(postText.innerHTML == ""){
        postText.innerHTML = text.value;     
    }

    else if(postText.innerHTML != "" && replyText1.innerHTML == ""){

        replyText1.innerHTML = text.value;
    }

    else if(postText.innerHTML != "" && replyText1.innerHTML !="" && replyText2.innerHTML ==""){
        replyText2.innerHTML = text.value;
    }
}

function clearFunction(){
    var text = document.getElementById("text1");
    var postText = document.getElementById("post1");
    var replyText1 = document.getElementById("reply1");
    var replyText2 = document.getElementById("reply2");

    text.value = "";
    postText.innerHTML ="";
    replyText1.innerHTML = "";
    replyText2.innerHTML = "";

}
