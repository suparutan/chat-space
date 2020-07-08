$(function(){ 
  function buildHTML(message){
    if ( message.image ) {
      var html =
        `<div class="chat-main">
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
      var html =`<div class="chat-main">
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

  var formData = new FormData(this);
  var url = $(this).attr('action')
  $.ajax({
    url: url,
    type: "POST",
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false
  })
  .done(function(data){
    var html = buildHTML(data);
    $('.chat-main__message-list').append(html);
    $('form')[0].reset();
    $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
    
  })
  .fail(function() {
    alert("メッセージ送信に失敗しました");
})
  .always(function(){
    $('.submit-btn').prop('disabled', false);
  });
});
});