import { Subscription } from 'rxjs';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cateogry-view',
  templateUrl: './cateogry-view.component.html',
  styleUrls: ['./cateogry-view.component.scss'],
})
export class CateogryViewComponent implements OnInit, OnDestroy {
  Movies: any;
  sub!: Subscription;
  constructor(private actRoute: ActivatedRoute,
              private service: MovieApiServiceService,) { }

  ngOnInit(): void {
    this.sub = this.actRoute.params.subscribe((routeParams) => {
      this.service.fetchSingleTypeMovies(routeParams['cate']).subscribe((res) => {
        this.Movies = res.results
      });
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
