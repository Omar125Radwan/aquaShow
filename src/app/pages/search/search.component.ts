import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchResult: any = [];
  constructor(private service: MovieApiServiceService) { }

  ngOnInit(): void {
  }

  searchForm  = new FormGroup({
    'movieName': new FormControl(null),
  });

  submitForm() {
    this.service.searchMovie(this.searchForm.value).subscribe((res) => {
      this.searchResult = res.results;
    })
  }

}
