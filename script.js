<script>
function filterMenu(category) {
  let items = document.querySelectorAll('.item');
  items.forEach(item => {
    item.style.display = (category === 'all' || item.classList.contains(category)) ? 'block' : 'none';
  });
}
</script>