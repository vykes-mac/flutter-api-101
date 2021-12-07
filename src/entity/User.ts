import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  readonly id: number | undefined

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  age: number

  constructor(firstName: string, lastName: string, age: number) {
    super()
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }
}
