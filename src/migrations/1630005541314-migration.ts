import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1630005541314 implements MigrationInterface {
    name = 'migration1630005541314'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ente_devedor" ("id_entedevedor" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome_entedevedor" character varying NOT NULL, "cnpj_entedevedor" character varying NOT NULL, CONSTRAINT "UQ_6b895179134c0355a5cf60081cb" UNIQUE ("cnpj_entedevedor"), CONSTRAINT "PK_ade4633940c6fca687e300e4820" PRIMARY KEY ("id_entedevedor"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "ente_devedor"`);
    }

}
