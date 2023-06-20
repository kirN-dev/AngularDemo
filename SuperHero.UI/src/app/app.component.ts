import { Component, OnInit } from '@angular/core';
import { SuperHeroService } from './services/super-hero.service';
import { SuperHero } from './models/super-hero';
import { TreeNode } from './models/tree-node';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'SuperHero.UI';

  heroes: SuperHero[] = [];
  heroToEdit?: SuperHero;

  columnsToDisplay = ['name', 'firstName', 'lastName', 'place', 'button'];

  constructor(private superHeroService: SuperHeroService) {}

  ngOnInit(): void {
    this.superHeroService
      .getSuperHeroes()
      .subscribe((result: SuperHero[]) => (this.heroes = result));
  }

  updateHeroList(heroes: SuperHero[]) {
    this.heroes = heroes;
  }

  initNewHero() {
    this.heroToEdit = new SuperHero();
  }

  editHero(hero: SuperHero) {
    this.heroToEdit = hero;
  }

  treeData: TreeNode = {
    name: 'Root',
    children: [
      {
        name: 'Node 1',
        children: [
          {
            name: 'Node 1.1',
          },
          {
            name: 'Node 1.2',
            children: [
              {
                name: 'Node 1.2.1',
              },
              {
                name: 'Node 1.2.2',
              },
            ],
          },
        ],
      },
      {
        name: 'Node 2',
        children: [
          {
            name: 'Node 2.1',
          },
          {
            name: 'Node 2.2',
          },
        ],
      },
    ],
  };
}
