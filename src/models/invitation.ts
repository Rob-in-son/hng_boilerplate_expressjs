import {
  Entity,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
<<<<<<< HEAD
import { User } from "./user";
import { Organization } from "./organization";
import { OrgInviteToken } from "./orgInviteToken"; // Import the OrgInviteToken model
=======

import { Organization } from ".";
>>>>>>> 78e02e38ee685830aa91acb2e343579bc4d1fd45

@Entity()
export class Invitation {
  @PrimaryGeneratedColumn("uuid")
  id: string;

<<<<<<< HEAD
  @Column({ unique: false })
  token: string;

  @ManyToOne(() => Organization)
  organization: Organization;

  @Column()
  email: string;

  @ManyToOne(() => OrgInviteToken)
  orgInviteToken: OrgInviteToken;

  @CreateDateColumn()
=======
  @Column({ type: "uuid", nullable: false })
  token: string;

  @Column({ nullable: true })
  email: string;

  @Column({ default: false })
  isGeneric: boolean;

  @Column({ default: false })
  isAccepted: boolean;

  @ManyToOne(() => Organization)
  organization: Organization;

  @UpdateDateColumn()
>>>>>>> 78e02e38ee685830aa91acb2e343579bc4d1fd45
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
