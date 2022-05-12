const circles = document.querySelectorAll(".dragable");
const cubes = document.querySelectorAll(".cube");

let innerX, innerY;

circles.forEach((circleItem, index) => {
    circleItem.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData(`dragItemId`, event.target.id);
        innerX = event.offsetX;
        innerY = event.offsetY;
    });
    circleItem.addEventListener("mousedown", () => {
        circleItem.style.zIndex = "1";
        circles.forEach((item, i) => {
            if (i !== index) {
                circles[i].style.zIndex = "0";
            }
        });
    });
});


cubes.forEach((cube, index) => {
    cube.addEventListener("dragover", (event) => {
        event.preventDefault();
    });
});


cubes.forEach(cube => {
    cube.addEventListener("drop", function (event) {
        const dropId = event.dataTransfer.getData("dragItemId");
      
        const drop = document.getElementById(dropId);
        console.log(drop)
       
        let offsetX = event.offsetX - innerX + "px";
        let offsetY = event.offsetY - innerY + "px";

        console.log(offsetX)
                
        drop.style.display = "absolute";
        drop.style.top = offsetY;
        drop.style.left = offsetX;


        cube.appendChild(drop)

        // if (offsetX !== event.offsetX && offsetY !== event.offsetY) {
        //     console.log(event.offsetX, event.offsetY);
          
        // }
    });
})





