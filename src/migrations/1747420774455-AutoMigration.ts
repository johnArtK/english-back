import { MigrationInterface, QueryRunner } from "typeorm";

export class AutoMigration1747420774455 implements MigrationInterface {
    name = 'AutoMigration1747420774455'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "word" ALTER COLUMN "translation" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "word" ALTER COLUMN "translation" DROP NOT NULL`);
    }

}
