window.onscroll = function () {
   scrollFunction();
};

function scrollFunction() {
   if (
      document.body.scrollTop > 90 ||
      document.documentElement.scrollTop > 90
   ) {
      document.getElementById("page-navlist").style.position = "fixed";
      document.getElementById("page-navlist").style.width = "100%";
      document.getElementById("page-navlist").style.top = "0";
   } else {
      document.getElementById("page-navlist").style.position = "relative";
      document.getElementById("page-navlist").style.width = "100%";
      document.getElementById("page-navlist").style.top = "0";
   }
}