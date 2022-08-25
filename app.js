const FrontendData = "`data`";
const JsonData = "`data`";

function Frontend() {
    alert("Frontend: created!");
    download("frontend.json", JSON.stringify({ Data: FrontendData }));
}

function JavaScript() {
    alert("JavaScriptData created!");
    download("javascript.json", JSON.stringify({ Data: JsonData }));
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}