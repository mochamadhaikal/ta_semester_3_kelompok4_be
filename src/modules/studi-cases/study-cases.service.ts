import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class CasesService {
  constructor(private readonly dataSource: DataSource) {}
  getQuizOne() {
    const entityManager = this.dataSource.createEntityManager();
    const dataOne = entityManager.query(`
      SELECT 
        dvd.title, 
        friend.name
      FROM loan
      INNER JOIN dvd ON loan.dvd_id = dvd.dvd_id
      INNER JOIN friend ON loan.friend_id = friend.friend_id
      WHERE MONTH(loan.loan_date) = 1;
    `);

    return dataOne;
  }

  getQuizTwo() {
    const entityManager = this.dataSource.createEntityManager();
    const dataTwo = entityManager.query(`
      SELECT 
        friend.name, 
        COUNT(loan.friend_id) AS loan_amount
      FROM loan
      INNER JOIN friend ON loan.friend_id = friend.friend_id
      GROUP BY loan.friend_id
      ORDER BY loan_amount DESC;
    `);

    return dataTwo;
  }

  getQuizThree() {
    const entityManager = this.dataSource.createEntityManager();
    const dataThree = entityManager.query(`
    SELECT 
      MAX(loan.loan_date) as last_borrowed
    FROM loan
    JOIN dvd ON loan.dvd_id = dvd.dvd_id
    WHERE dvd.title = 'Die Another Day';
    `);

    return dataThree;
  }
}
