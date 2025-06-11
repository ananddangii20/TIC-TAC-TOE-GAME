let boxes = document.querySelectorAll(".clicks");
let resetbt = document.querySelector("#reset");
let turn0 = true;
let msg = document.querySelector(".msg-container");
let newbt = document.querySelector("#new-game");
let display = document.querySelector("#show")
let winnerfound = false;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
        winner();
    })
})

const showwinner = (winner) => {
    display.innerText = `Congratulations! \n Winner is ${winner}`;
    msg.classList.remove("hide");
};

const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


const checkwinner = () => {


    for (let pattern of winpatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;


        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                winnerfound = true;
                offbt();
                showwinner(pos1);



            } else {
                let filled = true;
                for (let box of boxes) {
                    if (box.innerText === "") {
                        filled = false;
                        break;
                    }
                }

                if (!winnerfound && filled) {
                    display.innerText = "It's a DRAW";
                    msg.classList.remove("hide");
                }
            }
        }
    }
}




resetbt.addEventListener("click", () => {
    turn0 = true;
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        box.style.backgroundColor = " #547792";
        msg.classList.add("hide");


    })
});

newbt.addEventListener("click", () => {
    turn0 = true;
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        box.style.backgroundColor = " #547792";
        msg.classList.add("hide");

    })
});




const winner = () => {
    for (let pattern of winpatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {

            boxes[pattern[0]].style.backgroundColor = "green";
            boxes[pattern[1]].style.backgroundColor = "green";
            boxes[pattern[2]].style.backgroundColor = "green";

        }
    }

};

const offbt = () => {
    boxes.forEach((box) => {
        box.disabled = true;

    })
};

const onbt = () => {
    boxes.forEach((box) => {
        box.disabled = false;
    })
};




