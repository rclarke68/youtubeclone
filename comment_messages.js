debugger;
var submitButton = document.getElementById('submit');
var commentsReciever = document.getElementById('comment');
var commenthistory = new Firebase('https://cpwmpqv1b9g.firebaseio-demo.com/');
var mommyanddaddy = document.getElementById('daddy-and-mommy');

var createComment2 = function () {
    debugger
    var username = document.getElementById('username').value;
    var comment = document.getElementById('comment').value;
    
    var data = {};
    data.username = username;
    data.comment = comment;
    commenthistory.push(data);
    
    
    // commenthistory.push({username: name, comment: text});
    document.getElementById('comment').value = ('');
};
        
    
commenthistory.on('child_added', function(snapshot) {
    debugger
    var message = snapshot.val();
    displayChatMessage(message.username, message.comment);
});
function displayChatMessage(name, text) {
    debugger
    var listMessages = document.createElement("p");
    listMessages.textContent = name + ": " + text;
    mommyanddaddy.appendChild(listMessages)
}
submitButton.onclick = createComment2;
// var createComment = function() {
//     debugger;
//     var username = document.getElementById('username').value;
//     var comment = document.getElementById('comment').value;
    
//     var sentence = username + " said: " + comment;
    
//     debugger;
//     var listComment = document.createElement("h2");
//     listComment.textContent = sentence;
//     comments.appendChild(listComment);
    
//     debugger
// };
// submitButton.onclick = createComment;