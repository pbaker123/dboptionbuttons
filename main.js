const selectors = {
  body: document.querySelector("body"),
};

const buttons = ["return","add","delete","save","cancel"];

selectors.body.addEventListener("click", function(event) {
  const classname = event.explicitOriginalTarget.className;
  console.log(classname);
  if (buttons.includes(classname)) {
    showLabel(classname);
    showDetail(classname);
    addBorder(classname);
    showAvail(classname);
    return;
  };
  return;
});

function showLabel (classname) {
  for (const button of buttons) {
    document.querySelector("." + button + "Label").style.display = "none";
  }
  document.querySelector("." + classname + "Label").style.display = "block";
};

function showDetail (classname) {
  for (const button of buttons) {
    document.querySelector("." + button + "Detail").style.display = "none";
  }
  document.querySelector("." + classname + "Detail").style.display = "block";
};

function addBorder (classname) {
  for (const button of buttons) {
    document.querySelector("." + button).style.border = "";
  }
  console.log(classname);
  document.querySelector("." + classname).style.border = "2px solid #E61E1E";
};

function showAvail (classname) {
  document.querySelector(".availTitle").style.display = "block";
  switch (classname) {  
    case "add":
    case "delete":
      document.querySelector(".iilAvail").style.display = "block";
      document.querySelector(".iidAvail").style.display = "block";
      document.querySelector(".scAvail").style.display = "none";
      document.querySelector(".bcAvail").style.display = "none";
      document.querySelector(".cisAvail").style.display = "block";
      break;
    case "return":
    case "save":
    case "cancel":
      document.querySelector(".iilAvail").style.display = "block";
      document.querySelector(".iidAvail").style.display = "block";
      document.querySelector(".scAvail").style.display = "block";
      document.querySelector(".bcAvail").style.display = "block";
      document.querySelector(".cisAvail").style.display = "block";
      break;
  };
};
