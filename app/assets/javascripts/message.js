$(function() { 
  function buildHTML(message){
    if ( message.image ) {
        var html =
        `<div class="chat-main__message-list" data-message-id=${message.id}>
            <div class="chat-main__message-list__user">
              <div class="chat-main__message-list__user__left">
                ${message.user_name}
              </div>
              <div class="chat-main__message-list__user__right">
                ${message.created_at}
              </div>
            </div>
            <div class="lower-message">
              <p class="chat-main__message-list__past">
                ${message.content}
              </p>
            </div>
            <img src=${message.image} >
          </div>`
        return html;
      } else {
        var html =
        `<div class="chat-main__message-list" data-message-id=${message.id}>
            <div class="chat-main__message-list__user">
              <div class="chat-main__message-list__user__left">
                ${message.user_name}
              </div>
              <div class="chat-main__message-list__user__right">
                ${message.created_at}
              </div>
            </div>
            <div class="lower-message">
              <p class="chat-main__message-list__past">
                ${message.content}
              </p>
            </div>
          </div>`
        return html;
    };
  };
  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var reloadMessages = function() {
      var last_message_id = $('.message:last').data("message-id");
      $.ajax({
        url: "api/messages",
        type: 'get',
        dataType: 'json',
        data: {id: last_message_id}
      })
      .done(function(messages) {
        if (messages.length !== 0) {
        var insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.messages').append(insertHTML);
        $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      }
      })
      .fail(function() {
        alert('error');
      });
    };
  });
  if (document.location.href.match(/\/groups\/\d+\/messages/)) {
    setInterval(reloadMessages, 7000);
  }
});
