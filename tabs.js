

   const $ = document.querySelector.bind(document)  
    
//  const html = {
//     links: document.querySelector('.tab-links'),
//     contents: document.querySelector('.tab-content'),
//  }
    
    //console.log(html.links);
    //console.log(html.contents);

function TabNavigation() {

    const html = {
        links: [...$('.tab-links').children],
        contents: [...$('.tab-content').children],
        openTab: $('[data-open]')
    }

    function hideAllTabContent(){
        html.contents.forEach(section => {
            section.style.display = "none"
        })
    }
    function removeAllActiveClass(){
        html.links.forEach(tab =>{
            tab.className = tab.className.replace(" active", "")
        })
    }
    function showCurrentTab(id){
        const tabcontent= $('#' + id)
        tabcontent.style.display = 'block'
    }

    function selectTab(event) {
        hideAllTabContent()
        removeAllActiveClass()

        const target = event.currentTarget
        showCurrentTab(target.dataset.id)

        target.className += " active"
    }

    function listenForChange(){
        html.links.forEach(tab => {
            tab.addEventListener('click', selectTab)
        })
    }
    function init(){
        hideAllTabContent()
        listenForChange()

        html.openTab.click()
    }

    return {
        init
    }
}

window.addEventListener('load', () =>{
    const tabNavigation = TabNavigation()
    console.log(tabNavigation)
    tabNavigation.init()
})