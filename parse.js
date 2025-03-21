const elementsToScrape = document.querySelectorAll("._ao3e");
const scrapedData = [];
const fileName = document.querySelector("._alcd span span").textContent.trim();

elementsToScrape.forEach((element) => {
  const data = element.textContent.trim();
  if(data.startsWith('+7')) {
    scrapedData.push(data);
  }
});


let dataString = scrapedData.join();

const blob = new Blob([dataString], { type: "text/plain" });

const url = URL.createObjectURL(blob);

const link = document.createElement("a");
link.href = url;
link.download = `${fileName}.txt`;
link.style.display = "none";

document.body.appendChild(link);
link.click();
document.body.removeChild(link);

URL.revokeObjectURL(url);
