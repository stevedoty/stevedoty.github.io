function addResume(){
  var resumeDiv = document.createElement('div');
  resumeDiv.className = "resume";
  var inner = '<img src="images/SteveDotyResume2020.png" alt="" />';
  resumeDiv.innerHTML = inner;
  return resumeDiv;
}

function renderResumeDiv(){
  var renderResume = document.querySelector("#education")
  renderResume.appendChild(addResume());
}

renderResumeDiv();
