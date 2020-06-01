import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUsers1590802134578 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'phone_id',
            type: 'varchar',
          },
          {
            name: 'phone_model',
            type: 'varchar',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'permission',
            type: 'boolean',
          },
          {
            name: 'v_retomada',
            type: 'varchar',
          },
          {
            name: 'delayAccept',
            type: 'varchar',
          },
          {
            name: 's_x0',
            type: 'varchar',
          },
          {
            name: 's_y0',
            type: 'varchar',
          },
          {
            name: 's_x1',
            type: 'varchar',
          },
          {
            name: 's_y1',
            type: 'varchar',
          },
          {
            name: 'p_speed',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
