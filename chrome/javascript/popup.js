$(document).ready(function(){
   chrome.tabs.query({
      active: true,
      lastFocusedWindow: true
   }, function(tabs) {
      var url = tabs[0].url;
      var title = tabs[0].title;
      $("#qr").qrcode({text: url});
      $("#url").val(url);
      $("#title").val(title);
      $("#shareFacebook").attr("href", "https://www.facebook.com/sharer/sharer.php?u="+url);
      $("#shareTwitter").attr("href", "https://twitter.com/intent/tweet?url="+url);
      new ClipboardJS("#copyTitle");
      new ClipboardJS("#copyUrl");
   });
   $('#copyTitle')
   .tooltip({
      title: "コピーしました",
      placement: "bottom",
      trigger: 'manual'
   })
   .on('shown.bs.tooltip', function(){
      setTimeout((function(){
         $(this).tooltip('hide');
      }).bind(this), 1000);
   })
   .on('click', function() {
      $(this).tooltip('show');
   });
   $('#copyUrl')
   .tooltip({
      title: "コピーしました",
      placement: "bottom",
      trigger: 'manual'
   })
   .on('shown.bs.tooltip', function(){
      setTimeout((function(){
         $(this).tooltip('hide');
      }).bind(this), 2000);
   })
   .on('click', function() {
      $(this).tooltip('show');
   });
   $("#url").on("input", function(){
      $("#qr").children().remove();
      $("#qr").qrcode({text: $("#url").val()});
   });
});