import { MigrationInterface, QueryRunner } from "typeorm";

export class AutoMigration1747420718574 implements MigrationInterface {
    name = 'AutoMigration1747420718574'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "word" ADD "translation" character varying DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "word" DROP COLUMN "translation"`);
    }

}
