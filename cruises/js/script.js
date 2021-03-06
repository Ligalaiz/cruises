"use strict";
$('[data-fancybox]').fancybox({
    smallBtn: "false",
    buttons: [
        "close"
      ],
    touch: {
      vertical: false,
      momentum: false
    }
});

$(".owl-carousel").owlCarousel({
  nav:true,
  dots:false,
  items: 1,
  onChanged: itemCount,
  onChange: itemsCount,
  navText: ['','']
});
  function itemCount(event) {
      var item = event.item.index;
      $('.current-count').text(item + 1);
  }
  function itemsCount(event) {
      var items = event.item.count;
      $('.size-count').text(items);
  }
