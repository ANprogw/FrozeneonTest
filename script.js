const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('shop__shopping-area_status_active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('shop__tab_status_active')
        })
        tab.classList.add('shop__tab_status_active')
        target.classList.add('shop__shopping-area_status_active')
    })
})