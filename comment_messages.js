debugger;
var submitButton = document.getElementById('submit');
var comments = document.getElementById('comments');

var createComment = function() {
    debugger;
    var username = document.getElementById('username').value;
    var comment = document.getElementById('comment').value;
    
    var sentence = username + " said: " + comment;
    
    debugger;
    var listComment = document.createElement("h2");
    listComment.textContent = sentence;
    comments.appendChild(listComment);
    
    debugger
};
submitButton.onclick = createComment;
