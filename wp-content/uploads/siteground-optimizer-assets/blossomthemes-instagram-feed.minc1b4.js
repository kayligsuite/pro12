jQuery(document).ready(function(a){a(".popup-gallery").magnificPopup({delegate:"a",type:"image",gallery:{enabled:!0}}),a(".popup-modal").magnificPopup({type:"inline",preloader:!1,focus:"#username",modal:!0}),a(document).on("click",".popup-modal-dismiss",function(b){b.preventDefault(),a.magnificPopup.close()}),a.fn.Lazy&&a('.btif-lazy-load').Lazy({scrollDirection:'vertical',effect:'fadeIn',visibleOnly:!0,afterLoad:function(a){var b=a.data('alt');a.attr("alt",b),a.removeAttr("data-alt")},onError:function(a){console.log('error loading '+a.data('src'))}})})