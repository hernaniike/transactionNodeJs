import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
// import Category from './Category';

@Entity('users')
class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  phone_id: string;

  @Column()
  phone_model: string;

  @Column()
  name: string;

  @Column()
  permission: boolean;

  @Column()
  v_retomada: string;

  @Column()
  delayAccept: string;

  @Column()
  s_x0: string;

  @Column()
  s_y0: string;

  @Column()
  s_x1: string;

  @Column()
  s_y1: string;

  @Column()
  p_speed: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default Users;
