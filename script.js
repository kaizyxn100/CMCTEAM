alert("Hi there, welcome!");

<script>
function goToPage(page) {
    document.body.classList.add("fade-out");

 setTimeout(function() {
        window.location.href = page}
    , 500);
    
</script>

console.log("Animation loaded");

function goPage(pageId) {
  const pages = document.querySelectorAll('.page');

  pages.forEach(p => {
    p.classList.remove('active');
  });

  document.getElementById(pageId).classList.add('active');
}
