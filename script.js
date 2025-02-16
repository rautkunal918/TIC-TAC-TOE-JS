let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset");
let newgame = document.querySelector("#new_btn");
let msgcontainer = document.querySelector(".msg-container");
let msgg = document.querySelector("#msg");




let turno = true; //playerx playery
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame = () => {
    turno = true;
    enableboxes();
    msgcontainer.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turno) {
            box.innerText = ("O");
            turno = false;
        } else {
            box.innerText = ("X")
            turno = true;
        }
        box.disabled = true;


        checkwinners();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }

};

const show_winner = (winner) => {
    msgg.innerText = `Congratulations ,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const checkwinners = () => {
    for (let patterns of winpatterns) {
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val == pos2val && pos2val == pos3val) {
                show_winner(pos1val);

            }
        }
    }
};

newgame.addEventListener("click", resetGame);
reset_btn.addEventListener("click", resetGame);