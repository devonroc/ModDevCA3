import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {

    quotes: Observable<any>;


  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
  this.quotes = this.api.getQuotes();
  this.quotes.subscribe(data => {console.log('my data' , data);
    });

}

    openDetails(quote){
        let quoteId = quote.quote_id;
    this.router.navigateByUrl('/tabs/quotes/${quoteId}');

    }
    }