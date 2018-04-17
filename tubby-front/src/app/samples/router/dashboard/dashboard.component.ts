import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/hero.model';
import { HeroService } from '../shared/hero.service';

@Component({
  selector: 'hero-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  private heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  public ngOnInit(): void {
    this.heroService.getHeroes()
      .then((heroes) => this.heroes = heroes.slice(1, 5));
  }
}