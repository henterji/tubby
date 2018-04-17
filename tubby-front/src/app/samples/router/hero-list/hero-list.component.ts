import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Hero } from '../shared/hero.model';
import { HeroService } from '../shared/hero.service';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.less']
})
export class HeroListComponent implements OnInit {
  private heroes: Hero[];
  private selectedHero: Hero;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private heroService: HeroService) { }

  public ngOnInit(): void {
    this.getHeroes();
  }

  private getHeroes(): void {
    this.heroService.getHeroes().then((heroes) => this.heroes = heroes);
  }

  private onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  private gotoDetail(): void {
    this.router.navigate(['../detail', this.selectedHero.id], { relativeTo: this.route });
  }
}
