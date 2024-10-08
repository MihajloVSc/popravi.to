const toggleFiltersAndView = function(){

    const filterButton = document.getElementById('filterButton')
        listButton = document.getElementById('listViewButton')
        mapButton = document.getElementById('mapViewButton')
        mqlMobile = window.matchMedia("(max-width: 768px)")

    const toggleProfileTab = () => {
        if (mqlMobile.matches){    
            document.getElementById('yourAccount').addEventListener('click', function(){
                document.getElementById('accountPanel').classList.toggle('visually-hidden')
            })
        } 
    }

    const toggleFilter = () => {
        document.querySelector('#filterModal').classList.toggle('visually-hidden')
    }

    const toggleListView = () => {
        document.getElementById('reportsContainer').classList.remove('visually-hidden')
        document.getElementById('mapContainer').classList.add('visually-hidden')
        listButton.classList.add('list-map-active')
        mapButton.classList.remove('list-map-active')
    }

    const toggleMapView = () => {
        document.getElementById('reportsContainer').classList.add('visually-hidden')
        document.getElementById('mapContainer').classList.remove('visually-hidden')
        
        //force a window resize event because the map doesn't fully load until the window gets resized
        window.dispatchEvent(new Event('resize'));
        mapButton.classList.add('list-map-active')
        listButton.classList.remove('list-map-active')
    }

    mqlMobile.addEventListener('change', toggleProfileTab)
    filterButton.addEventListener('click', toggleFilter)
    listButton.addEventListener('click', toggleListView)
    mapButton.addEventListener('click', toggleMapView) 

    return {
        toggleProfileTab: toggleProfileTab
    }
}()

toggleFiltersAndView.toggleProfileTab()

