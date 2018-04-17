import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Hero } from '../shared/hero.model';
import { HeroService } from '../shared/hero.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.less']
})
export class HeroDetailComponent implements OnInit {
  private hero: Hero;

  private heroform: FormGroup;

  constructor(
    private heroService: HeroService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  public ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe((hero) => {
        this.hero = hero;
        this.heroform = this.fb.group({
          id: new FormControl(hero.id, Validators.required),
          name: new FormControl(hero.name, Validators.required),
        });
      });
  }

  private goBack(): void {
    this.location.back();
  }
}
