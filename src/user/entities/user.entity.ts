import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm'
import { IsEmail, IsNotEmpty } from 'class-validator'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstName: string
  @Column()
  lastName: string
  @Column()
  email: string
  @Column()
  password: string
  @Column()
  role: string
}
