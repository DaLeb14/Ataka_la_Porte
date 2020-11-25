export class Niveau {
  constructor() {
    this.num = 1;
    this.nbMonstresParZone = 1;
    this.vitesseMonstre = 30;
    this.vitesseBoss = 100;
  }

  getNiveauSuperieur() {
    this.num++;
    this.nbMonstresParZone++;
    this.vitesseMonstre = this.vitesseMonstre + 2;
    this.vitesseBoss = this.vitesseBoss + 5;
  }
}
