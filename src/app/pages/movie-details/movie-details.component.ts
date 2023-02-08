import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  getMovieDetailsResult:any = [];
  getMovieVidResult:any = "";
  getMovieCastResult:any = [];
  constructor(private service: MovieApiServiceService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let getParamId = this.actRoute.snapshot.paramMap.get('id');
    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getMovieCast(getParamId);
  }

  getMovie(id: any) {
    this.service.getMovieDetails(id).subscribe((res) => {
      this.getMovieDetailsResult = res;
    });
  }

  getVideo(id: any) {
    this.service.getMovieVid(id).subscribe((res) => {
      res.results.forEach((element: any) => {
        if(element.type=="Trailer") {
          this.getMovieVidResult = element.key;
        }
      });
    })
  }

  getMovieCast(id: any) {
    this.service.getMovieCast(id).subscribe((res) => {
      this.getMovieCastResult = res.cast;
    })
  }

}
