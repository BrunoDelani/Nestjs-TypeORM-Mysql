import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @Column({
    nullable: false,
  })
  fullname: string;

  @Column({
    nullable: false,
  })
  nickname: string;
}
