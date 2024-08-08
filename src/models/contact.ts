import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 100 })
  name!: string;

  @Column({ type: "varchar", length: 100 })
  email!: string;

<<<<<<< HEAD:src/models/contact-us.ts
  @Column({ type: "varchar", length: 20 })
  phoneNumber!: string;

=======
>>>>>>> 78e02e38ee685830aa91acb2e343579bc4d1fd45:src/models/contact.ts
  @Column({ type: "text" })
  message!: string;
}
