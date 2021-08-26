import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1629999588608 implements MigrationInterface {
    name = 'migration1629999588608'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "credor" ("id_credor" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome_credor" character varying NOT NULL, "cpf_credor" character varying NOT NULL, "status_cadastro" character varying NOT NULL, CONSTRAINT "UQ_350092aaaa1cb1efab345831465" UNIQUE ("cpf_credor"), CONSTRAINT "PK_06bad0a8f3ebfef770f2c29082f" PRIMARY KEY ("id_credor"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "credor"`);
    }

}
