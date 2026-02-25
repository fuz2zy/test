

class ScrollObj {

    constructor(objId) {

        this.main(objId)
    }

    main(elId) {
        
        const element = document.getElementById(elId);
        let isMouseDown = false
        let startX, scrollLeft;

        element.addEventListener("wheel", function(event) {
            
            event.preventDefault();
            element.scrollLeft += event.deltaY;

        }, { passive: false})

        element.addEventListener("mousedown", function(event) {
            
            isMouseDown = true;
            startX = event.pageX - element.offsetLeft;
            scrollLeft = element.scrollLeft;

        })

        element.addEventListener("mouseleave", function(event) {
            isMouseDown = false;
        })

        element.addEventListener("mouseup", function(event) {
            isMouseDown = false;
        })

        element.addEventListener("mousemove", function(event) {
            if (!isMouseDown) return;
            element.scrollLeft = scrollLeft - (event.pageX - element.offsetLeft - startX);
        })
    }
}