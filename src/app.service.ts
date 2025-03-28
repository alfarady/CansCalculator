import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private freeCansThreshold = 3;

  calculateCans(initialCans: number) {
    if (initialCans < this.freeCansThreshold) {
      throw new Error('Not enough cans to calculate');
    }

    return this.calcCans(initialCans, 0);
  }

  private calcCans(initialCans: number, lastCans: number, result = 0) {
    if (initialCans < this.freeCansThreshold) {
      return result;
    }

    let totalCans = initialCans;
    let freeCans = Math.floor(totalCans / this.freeCansThreshold);
    totalCans += freeCans;
    result = freeCans + lastCans;

    return this.calcCans(freeCans, totalCans, result);
  }
}
