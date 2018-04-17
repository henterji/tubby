import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import { HEROES } from './heroes.mock';

@Injectable()
export class HeroService {
  public getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  public getHeroesSlowly(): Promise<Hero[]> {
    return new Promise((resolve) => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  public getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then((heroes) => heroes.find((hero) => hero.id === id));
  }
}
