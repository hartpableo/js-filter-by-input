// Declare variables
const menu = document.getElementById('menu-display')
const input = document.getElementById('filter')
const submit = document.getElementById('submit')

// Fetch API
fetch('https://free-food-menus-api-production.up.railway.app/our-foods')
    .then(res => res.json())
    .then(data => {
        let html = '';
        data.forEach(user => {
            html += `
            <div class="card card--menu" data-menu-name="${user.id}">
                <div class="card__image"><img src="${user.img}" alt="${user.name}"></div>
                <div class="card__info">
                    <h3>${user.dsc}</h3>
                    <div class="menu-name">${user.name}</div>
                    <div class="price">$${user.price}</div>
                    <div class="country">${user.country}</div>
                </div>
            </div>
            `
        })
        menu.innerHTML = html;
    })

// Submit
submit.addEventListener('click', (e) => {
    e.preventDefault()
    filterItems()
})

// Search input
input.addEventListener('keyup', () => {
    filterItems()
})

// Filter
function filterItems() {
    // Get the input value typed
    const value = input.value.toLowerCase();

    // Get all menu items
    let menuItems = menu.querySelectorAll('.card--menu')

    // Loop through the menu items
    for (let i = 0; i < menuItems.length; i++) {

        // Get the text of the item
        let menuName = menuItems[i].querySelector('h3').textContent.toLowerCase()

        // Check if the input value is present in the text
        if (menuName.indexOf(value) !== -1) {
            // Show the item
            menuItems[i].style.display = "";
        } else {
            // Hide the item
            menuItems[i].style.display = "none";
        }

    }
}