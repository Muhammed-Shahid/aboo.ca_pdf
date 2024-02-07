// jsPDF uses html2canvas to add images.
window.jsPDF = window.jspdf.jsPDF;

function convertToDataURL(canvas) {
  var dataURL = canvas.toDataURL();
  return dataURL;
}

function dateExtractor(date) {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;

  return currentDate;
}

function Convert_HTML_To_PDF() {
  const date = new Date();
  const currentDate = dateExtractor(date); // dd-mm-yyyy

  // converting the chart canvases to dataURL(base64)
  var canvas_bar = document.querySelector("#chart_bar");
  var dataUrl_bar = convertToDataURL(canvas_bar);

  var canvas_doughnut = document.querySelector("#chart_doughnut");
  var dataUrl_doughnut = convertToDataURL(canvas_doughnut);

  var doc = new jsPDF();

  // Source HTMLElement except chart section
  var elementHTML = document.querySelector("#report-sec");

  doc.html(elementHTML, {
    callback: function (doc) {
      
      doc.addPage("a4", "landscape"); // adds new page
      doc.addImage(dataUrl_doughnut, "JPEG", 0, 0, 230, 140);
      // Image of chart is added to the document

      doc.addPage("a4", "landscape");
      doc.addImage(dataUrl_bar, "JPEG", 0, 0, 230, 140);

      doc.save(`${currentDate}_report`);
    },
    margin: [5, 5, 5, 5],
    autoPaging: "text",
    x: 0,
    y: 0,
    width: 200, //target width in the PDF document
    windowWidth: 675, //window width in CSS pixels
  });
}
