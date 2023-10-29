const currentlocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLenght = menuItem.length;
for (let i = 0; i < menuLenght; i++) {
  if (menuItem[i].href === currentlocation) {
    menuItem[i].className = 'active';
  }
}
