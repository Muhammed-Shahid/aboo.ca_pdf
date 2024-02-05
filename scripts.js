window.jsPDF = window.jspdf.jsPDF;
// Convert HTML content to PDF
function Convert_HTML_To_PDF() {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}-${month}-${year}`;

  console.log(jsPDF);
  var doc = new jsPDF();

  // Source HTMLElement or a string containing HTML.
  var elementHTML = document.querySelector("#wrapper");

  doc.html(elementHTML, {
    callback: function (doc) {
      // Save the PDF
      doc.save(`${currentDate}_report`);
    },
    margin: [10, 10, 10, 10],
    autoPaging: "text",
    x: 0,
    y: 0,
    width: 190, //target width in the PDF document
    windowWidth: 675, //window width in CSS pixels
  });
}
