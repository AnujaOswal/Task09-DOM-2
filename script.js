//Anonymous function to define html elements
(() => {
	let main = document.createElement("main");
	document.body.appendChild(main);
//border
	let container = document.createElement("div");
	container.classList.add("container");
	main.appendChild(container);
//mainborder
	let row = document.createElement("div");
	row.classList.add("row", "justify-content-center");
	container.appendChild(row);
//col1
	let col1 = document.createElement("div");
	col1.classList.add("col-lg");
	row.appendChild(col1);
//col2
	let col2 = document.createElement("div");
	col2.classList.add("col-lg");
	col2.setAttribute("id", "calculator");
	row.appendChild(col2);
//col2-h1
	let h1 = document.createElement("h1");
	h1.innerText = "Calculator";
	col2.appendChild(h1);
	//---------------------------------------------------
//col2-display-input
	let calcDisplay = document.createElement("input");
	calcDisplay.classList.add("calc-display");
	calcDisplay.id ="show";
	calcDisplay.type= "number";
	calcDisplay.placeholder = "0";
	col2.appendChild(calcDisplay);
	//-----------------------------------------------------
//col2-keyborad div
	let calcKeyBoard = document.createElement("div");
	calcKeyBoard.classList.add("calc_keyboard");
	col2.appendChild(calcKeyBoard);
//in keyboraddiv-rowkeyboard div create
	let rowKeyBoard = document.createElement("div");
	rowKeyBoard.classList.add("row");
	calcKeyBoard.appendChild(rowKeyBoard);

	let rowKeyBoardCol = document.createElement("div");
	rowKeyBoardCol.classList.add("col");
	rowKeyBoard.appendChild(rowKeyBoardCol);
//1STROW-MAKING COLS FOR BUTTIONS
	let rowKeyBoardColRow1 = document.createElement("div");
	rowKeyBoardColRow1.classList.add("row");
	rowKeyBoardCol.appendChild(rowKeyBoardColRow1);


	let rowKeyBoardColRow2 = document.createElement("div");
	rowKeyBoardColRow2.classList.add("row");
	rowKeyBoardCol.appendChild(rowKeyBoardColRow2);

	let rowKeyBoardColRow3 = document.createElement("div");
	rowKeyBoardColRow3.classList.add("row");
	rowKeyBoardCol.appendChild(rowKeyBoardColRow3);

	let rowKeyBoardColRow4 = document.createElement("div");
	rowKeyBoardColRow4.classList.add("row");
	rowKeyBoardCol.appendChild(rowKeyBoardColRow4);

	let rowKeyBoardColRow5 = document.createElement("div");
	rowKeyBoardColRow5.classList.add("row");
	rowKeyBoardCol.appendChild(rowKeyBoardColRow5);

//---------------------------------------------
	//1st row buttons
	let row1ButtonClear = document.createElement("input");
	row1ButtonClear.classList.add("col", "clear", "btn", "btn-dark");
	row1ButtonClear.setAttribute("type", "button");
	row1ButtonClear.setAttribute("value", "MC");
	//row1ButtonClear.innerText = "MC";
	row1ButtonClear.setAttribute("onclick","memory(this.value)")
	rowKeyBoardColRow1.appendChild(row1ButtonClear);

	let row2ButtonClear = document.createElement("input");
	row2ButtonClear.classList.add("col", "clear", "btn", "btn-dark");
	row2ButtonClear.setAttribute("type", "button");
	row2ButtonClear.setAttribute("value", "MR");
	//row2ButtonClear.innerText = "MR";
	row2ButtonClear.setAttribute("onclick","memory(this.value)")
	rowKeyBoardColRow1.appendChild(row2ButtonClear);

	let row3ButtonClear = document.createElement("input");
	row3ButtonClear.classList.add("col", "clear", "btn", "btn-dark");
	row3ButtonClear.setAttribute("type", "button");
	row3ButtonClear.setAttribute("value", "M+");
	//row3ButtonClear.innerText = "M+";
	row3ButtonClear.setAttribute("onclick","memory(this.value)")
	rowKeyBoardColRow1.appendChild(row3ButtonClear);

	let row4ButtonClear = document.createElement("input");
	row4ButtonClear.classList.add("col", "clear", "btn", "btn-dark");
	row4ButtonClear.setAttribute("type", "button");
	row4ButtonClear.setAttribute("value", "M-");
	//row4ButtonClear.innerText = "M-";
	row4ButtonClear.setAttribute("onclick","memory(this.value)")
	rowKeyBoardColRow1.appendChild(row4ButtonClear);

	let row5ButtonClear = document.createElement("input");
	row5ButtonClear.classList.add("col", "clear", "btn", "btn-dark");
	row5ButtonClear.setAttribute("type", "button");
	row5ButtonClear.setAttribute("value", "C");
	//row4ButtonClear.innerText = "M-";
	row5ButtonClear.setAttribute("onclick","clr()");
	rowKeyBoardColRow1.appendChild(row5ButtonClear);

	


	let row1ButtonDiv = document.createElement("input");
	row1ButtonDiv.classList.add("col", "operator", "btn", "btn-dark");
	row1ButtonDiv.setAttribute("type", "button");
	row1ButtonDiv.setAttribute("value", "/");
	row1ButtonDiv.id="divide";
	//row1ButtonDiv.innerText = "/";
	row1ButtonDiv.setAttribute("onclick", "operation(this.id)");
	row1ButtonDiv.setAttribute("onkeypress","operation(this.id)");
	rowKeyBoardColRow1.appendChild(row1ButtonDiv);

//--------------------------------------------------
	//2ndrow buttons
	let row2Button7 = document.createElement("input");
	row2Button7.classList.add("col", "number", "btn", "btn-dark");
	row2Button7.setAttribute("type", "button");
	row2Button7.setAttribute("value", "7");
	//row2Button7.innerText = "7";
	row2Button7.setAttribute("onclick","display(this.value)");
	rowKeyBoardColRow2.appendChild(row2Button7);

	let row2Button8 = document.createElement("input");
	row2Button8.classList.add("col", "number", "btn", "btn-dark");
	row2Button8.setAttribute("type", "button");
	row2Button8.setAttribute("value", "8");
	//row2Button8.innerText = "8";
	row2Button8.setAttribute("onclick","display(this.value)");
	rowKeyBoardColRow2.appendChild(row2Button8);

	let row2Button9 = document.createElement("input");
	row2Button9.classList.add("col", "number", "btn", "btn-dark");
	row2Button9.setAttribute("type", "button");
	row2Button9.setAttribute("value", "9");
	//row2Button9.innerText = "9";
	row2Button9.setAttribute("onclick","display(this.value)");
	rowKeyBoardColRow2.appendChild(row2Button9);

	//mul
	let row2ButtonMul = document.createElement("input");
	row2ButtonMul.classList.add("col", "operator", "btn", "btn-dark");
	row2ButtonMul.setAttribute("type", "button");
	row2ButtonMul.setAttribute("value", " * ");
	//row2ButtonMul.innerText = " * ";
	row2ButtonMul.id="multiply";
	row2ButtonMul.setAttribute("onclick", "operation(this.id)");
	row2ButtonMul.setAttribute("onkeypress","operation(this.id)");
	rowKeyBoardColRow2.appendChild(row2ButtonMul);

	//-------------------------------------------------
	//3ndrow-buttons
	let row3Button4 = document.createElement("input");
	row3Button4.classList.add("col", "number", "btn", "btn-dark");
	row3Button4.setAttribute("type", "button");
	row3Button4.setAttribute("value", "4");
	row3Button4.innerText = "4";
	row3Button4.setAttribute("onclick","display(this.value)");
	rowKeyBoardColRow3.appendChild(row3Button4);

	let row3Button5 = document.createElement("input");
	row3Button5.classList.add("col", "number", "btn", "btn-dark");
	row3Button5.setAttribute("type", "button");
	row3Button5.setAttribute("value", "5");
	row3Button5.innerText = "5";
	row3Button5.setAttribute("onclick","display(this.value)")
	rowKeyBoardColRow3.appendChild(row3Button5);

	let row3Button6 = document.createElement("input");
	row3Button6.classList.add("col", "number", "btn", "btn-dark");
	row3Button6.setAttribute("type", "button");
	row3Button6.setAttribute("value", "6");
	//row3Button6.innerText = "6";
	row3Button6.setAttribute("onclick","display(this.value)");
	rowKeyBoardColRow3.appendChild(row3Button6);

	let row3ButtonSub = document.createElement("input");
	row3ButtonSub.classList.add("col", "operator", "btn", "btn-dark");
	row3ButtonSub.setAttribute("type", "button");
	row3ButtonSub.setAttribute("value", "-");
	//row3ButtonSub.innerText = "-";
	row3ButtonSub.id="sub"
	row3ButtonSub.setAttribute("onclick", "operation(this.id)");
	row3ButtonSub.setAttribute("onkeypress","operation(this.id)");
	rowKeyBoardColRow3.appendChild(row3ButtonSub);

//-------------------------------------------------------------------
	//row4-buttons

	let row4Button1 = document.createElement("input");
	row4Button1.classList.add("col", "number", "btn", "btn-dark");
	row4Button1.setAttribute("type", "button");
	row4Button1.setAttribute("value", "1");
	//row4Button1.innerText = "1";
	row4Button1.setAttribute("onclick", "display(this.value)");
	rowKeyBoardColRow4.appendChild(row4Button1);

	let row4Button2 = document.createElement("input");
	row4Button2.classList.add("col", "number", "btn", "btn-dark");
	row4Button2.setAttribute("type", "button");
	row4Button2.setAttribute("value", "2");
	//row4Button2.innerText = "2";
   row4Button2.setAttribute("onclick", "display(this.value)");
	rowKeyBoardColRow4.appendChild(row4Button2);

	let row4Button3 = document.createElement("input");
	row4Button3.classList.add("col", "number", "btn", "btn-dark");
	row4Button3.setAttribute("type", "button");
	row4Button3.setAttribute("value", "3");
	//row4Button3.innerText = "3";
	row4Button3.setAttribute("onclick", "display(this.value)");
	rowKeyBoardColRow4.appendChild(row4Button3);

	let row4ButtonAdd = document.createElement("input");
	row4ButtonAdd.classList.add("col", "operator", "btn", "btn-dark");
	row4ButtonAdd.setAttribute("type", "button");
	row4ButtonAdd.setAttribute("value", "+");
	//row4ButtonAdd.innerText = "+";
	row4ButtonAdd.id="add";
	row4ButtonAdd.setAttribute("onclick","operation(this.id)");
	row4ButtonAdd.setAttribute("onkeypress","operation(this.id)");
	rowKeyBoardColRow4.appendChild(row4ButtonAdd);

	
//5rowbtn
	let row5Button0 = document.createElement("input");
	row5Button0.classList.add("col-6", "number", "btn", "btn-dark");
	row5Button0.setAttribute("type", "button");
	row5Button0.setAttribute("value", "0");
	//row5Button0.innerText = "0";
	row5Button0.setAttribute("onclick", "display(this.value)")
	rowKeyBoardColRow5.appendChild(row5Button0);

	let row5ButtonResult = document.createElement("input");
	row5ButtonResult.classList.add("col-6", "result", "btn", "btn-dark");
	row5ButtonResult.setAttribute("type", "button");
	row5ButtonResult.setAttribute("value", "=");
	//row5ButtonResult.innerText = "=";
	row5ButtonResult.setAttribute("onclick","equal()");
	rowKeyBoardColRow5.appendChild(row5ButtonResult);

	let col3 = document.createElement("div");
	col3.classList.add("col-lg");
	row.appendChild(col3);
})();

function clr(){
    document.getElementById("show").value = "";
}

function display(dig){
    let num = document.getElementById("show").value;
    let sol = window.localStorage.getItem("sol");
    let mr = window.localStorage.getItem("Memory");
    
    if(sol > 0)
    {
        window.localStorage.removeItem("sol");
        document.getElementById("show").value = "";
        document.getElementById("show").value = dig;        
    }
    else if(+num === 0 || num === " " || num === mr)
    {
        document.getElementById("show").value = dig;
    }
    else
    {
        document.getElementById("show").value = num + dig;
    }
}

function operation(operator){
    let a = +document.getElementById("show").value;
    window.localStorage.setItem("a", a);
    clr();
    window.localStorage.setItem("op", operator);
}

//Equals
function equal(){
    let b = +document.getElementById("show").value;
    let a = +window.localStorage.getItem("a");
    let op = window.localStorage.getItem("op");
    let sol;
    let display = document.getElementById("show").value;
    
    if(op === "divide")
    {
        sol=(window.localStorage.setItem("sol", display = a / b));
        document.getElementById("show").value = a / b;
    }
    else if(op === "multiply")
    {
        sol=(window.localStorage.setItem("sol", display = a * b));
        document.getElementById("show").value = a * b;
    }
    else if(op === "add")
    {
        sol=(window.localStorage.setItem("sol", display = a + b));
        document.getElementById("show").value = a + b;
    }
    else if(op === "sub")
    {
        sol=(window.localStorage.setItem("sol", display = a - b));
        document.getElementById("show").value = a - b;
    }
}

//Memory
function memory(ele){
    let mem = +document.getElementById("show").value;
    let save = +window.localStorage.getItem("Memory");
    
    if(ele === "M+")
    {
        window.localStorage.setItem("Memory", save + mem);
    }
    else if(ele === "M-")
    {
        window.localStorage.setItem("Memory", save - mem);
    }
    else if(ele === "MC")
    {
        window.localStorage.removeItem("Memory");
        document.getElementById("show").value = "";
    }
    else if(ele = "MR")
    {
        document.getElementById("show").value = window.localStorage.getItem("Memory");
    }
}