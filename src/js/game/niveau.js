export class Niveau {
  constructor() {
    this.raz();
  }

  getNiveauSuperieur() {
    this.num++;
    this.nbMonstresParZone++;
    this.vitesseBoss = this.vitesseBoss + 5;
    this.vitesseMonstre = this.vitesseMonstre + 2;
  }

  raz() {
    this.num = 1;
    this.nbMonstresParZone = 2;
    this.vitesseMonstre = 30;
    this.vitesseBoss = 100;
  }
}
