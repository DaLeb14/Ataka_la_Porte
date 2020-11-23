export class Niveau {
  constructor(num, nbMonstresParZone) {
    this.num = num;
    this.nbMonstresParZone = nbMonstresParZone;
  }

  getNiveauSuperieur() {
    this.num++;
  }
}
