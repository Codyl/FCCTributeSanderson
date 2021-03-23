const timeLineItems = [...document.getElementsByClassName("timeline-item")];
var nextElementIndex = 0;
timeLineItems.forEach(element => {
    element.addEventListener("click",() => {
        toggleInfoVisibilityOn(document.getElementById(element.id + '-info'));
        toggleCircleSelection(element);
        nextElementIndex = parseInt(element.dataset.index)+1;
        toggleButtonDisplayIfEndOfTimeline();
    });
});
document.getElementById("next-timeline-item-button").addEventListener("click", () => { 
    if(nextElementIndex < timeLineItems.length) {
        let element = timeLineItems[nextElementIndex];
        toggleInfoVisibilityOn(document.getElementById(element.id + '-info'));
        toggleCircleSelection(element);
        nextElementIndex++;
        toggleButtonDisplayIfEndOfTimeline();
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
function toggleButtonDisplayIfEndOfTimeline() {
    // document.getElementById("tribute-info").style.display = "none";
    if(nextElementIndex == timeLineItems.length) {
        document.getElementById("next-timeline-item-button").style.display = "none";
    }
    else {
        document.getElementById("next-timeline-item-button").style.display = "block";
    }
}