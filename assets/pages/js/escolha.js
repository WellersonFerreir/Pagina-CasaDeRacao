const searchInput = document.querySelector('#searchInput');
const list = document.querySelector('#list');

searchInput.addEventListener('input', function() {
  const searchValue = this.value.toLowerCase();
  const listItems = list.querySelectorAll('li');

  listItems.forEach(function(listItem) {
    if (listItem.textContent.toLowerCase().indexOf(searchValue) !== -1) {
      listItem.style.display = 'block';
    } else {
      listItem.style.display = 'none';
    }
  });
});
