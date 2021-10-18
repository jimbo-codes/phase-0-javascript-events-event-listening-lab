function addingEventListener() {
const input = document.getElementById('input');
function clickMe() {
    alert(`i got clicked so hard`);
}
input.addEventListener('click', clickMe);
}
addingEventListener();
