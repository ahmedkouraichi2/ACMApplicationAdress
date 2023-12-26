import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit, OnDestroy {
  textes: string[] = ['la qualité de gestion du courrier garantissant la confidentialité et la sécurité', "Bénéficier d'une adresse prestigieuse à Paris","Son approche personnalisée, adaptée aux besoins spécifiques de chaque entreprise."
  
];
  texteActuel: string ="ACM";
  private indexTexte: number = 0;
  private intervalId: any;

  ngOnInit() {
    this.texteActuel = this.textes[0];
    this.intervalId = setInterval(() => {
      this.changerTexte();
    }, 2000); // Change le texte toutes les 2 secondes
  }

  changerTexte() {
    this.indexTexte = (this.indexTexte + 1) % this.textes.length;
    this.texteActuel = this.textes[this.indexTexte];
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}