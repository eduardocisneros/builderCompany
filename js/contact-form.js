$(document).ready(function(){
  $(".submit-contact-button").on('click', function(e){
    e.preventDefault();

    fetchNewCsrfToken().then(newToken => {
      $.ajax({
        url: '/send/contact/form',
        type: "POST",
        headers: {'X-CSRF-TOKEN':newToken},
        cache: false,
        dataType: "json",
        data: {
          name: $("#messageContactForm").find('input[name="name"]').val(),
          email: $("#messageContactForm").find('input[name="email"]').val(),
          phone: $("#messageContactForm").find('input[name="phone"]').val(),
          subject: $("#messageContactForm").find('input[name="subject"]').val(),
          message: $("#messageContactForm").find('textarea[name="msg"]').val(),
        }
      }).done(function(data){
          if(data.status == 'success'){
            window.location.href = "/projects/builder/mailsended";
          }else{
            alert('Message not sent. Please try again.');
          }
      });

    });
  });
});
