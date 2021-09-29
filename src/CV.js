
import React, { useState } from 'react';
import { PDFDownloadLink,Document, Page } from 'react-pdf/dist/entry.webpack';
import StefanKeeleyactualcv from './Stefan Keeley Cv 26_09_2021.pdf'
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function NewComponent(props) {
  const [numPages, setNumPages] = useState(null);
   const [pageNumber, setPageNumber] = useState(1);

   function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (

    <div style={{background:'#4287f5',width: "100%"}} className = "cvPdf">
        <center>
    <Document file={StefanKeeleyactualcv} onLoadError={console.error} >
      <Page pageNumber={1} onLoadError={console.error}  />
      <Page pageNumber={2} onLoadError={console.error}  />
    </Document>
            </center>
    </div>
  )
}

export default NewComponent;
