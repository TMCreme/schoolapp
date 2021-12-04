import { Component, OnInit } from '@angular/core';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';


const options: DocumentViewerOptions = {
  title: 'My PDF'
}


@Component({
  selector: 'app-textbooklist',
  templateUrl: './textbooklist.page.html',
  styleUrls: ['./textbooklist.page.scss'],
})

export class TextbooklistPage implements OnInit {

  constructor(private document: DocumentViewer) { }
  
  ngOnInit() {
    console.log(this.docs)
  }

  docs = this.document.viewDocument('../../assets/50YearsDataScience.pdf', 'application/pdf', options)


}
