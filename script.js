const timeLineItems = [...document.getElementsByClassName("timeline-item")];
timeLineItems.forEach(element => {
    element.addEventListener("click",() => {
        toggleInfoVisibilityOn(document.getElementById(element.id + '-info'));
        toggleCircleSelection(element);
    })
});
var nextElementIndex = 0;
document.getElementById("next-timeline-item-button").addEventListener("click", () => { 
    if(nextElementIndex < timeLineItems.length) {
        let element = timeLineItems[nextElementIndex];
        toggleInfoVisibilityOn(document.getElementById(element.id + '-info'));
        toggleCircleSelection(element);
        nextElementIndex++;
        if(nextElementIndex == timeLineItems.length) {
            document.getElementById("next-timeline-item-button").disabled = true;
        }
    }
});
function toggleInfoVisibilityOn(InfoElementForClickedElement) {
    for(infoElement of [...document.getElementsByClassName("year-info")]) {
        infoElement.style.display = "none";
    }
    InfoElementForClickedElement.style.display = "block";
}

function toggleCircleSelection(clickedElement)
{
    for(circle of [...document.getElementsByClassName("timeline-item")]) {
        circle.style.backgroundColor = "#959DB8";
    }
    clickedElement.style.backgroundColor = "white";
}