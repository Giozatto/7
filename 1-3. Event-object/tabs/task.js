const tabs = Array.from(document.querySelectorAll('.tab'));
const tabContents = Array.from(document.querySelectorAll('.tab__content'));
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', changeTabs)
}
let index = 0;

function changeTabs(event) {
    tabsIndex = tabs.indexOf(event.target);
    tabs[index].classList.remove('tab_active');
    tabContents[index].classList.remove('tab__content_active');
    index = tabsIndex;
    tabs[tabsIndex].classList.add('tab_active');
    tabContents[tabsIndex].classList.add('tab__content_active');
}