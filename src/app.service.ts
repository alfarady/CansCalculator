import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private freeCansThreshold = 3;

  calculateTotalCans(initialCans: number): number {
    let totalCans = initialCans;
    let emptyCans = initialCans;

    while (emptyCans >= this.freeCansThreshold) {
      const newCans = Math.floor(emptyCans / this.freeCansThreshold);
      totalCans += newCans;
      emptyCans = (emptyCans % this.freeCansThreshold) + newCans;
    }

    return totalCans;
  }
}
