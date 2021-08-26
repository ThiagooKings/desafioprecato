import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1630014891871 implements MigrationInterface {
    name = 'migration1630014891871'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pagamento" ("id_pagamento" uuid NOT NULL DEFAULT uuid_generate_v4(), "valor_inicial" integer NOT NULL, "valor_final" integer NOT NULL, "status_remessa" character varying NOT NULL, "motivo" character varying, "data_pagamento" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp without time zone, "id_credor" uuid, "id_ente-devedor" uuid, CONSTRAINT "REL_01f5e6df51035cff53a0dafe86" UNIQUE ("id_credor"), CONSTRAINT "REL_d2fa708541bcf7866de9a09dfd" UNIQUE ("id_ente-devedor"), CONSTRAINT "PK_d8afafba7a68e8032ec5d597990" PRIMARY KEY ("id_pagamento"))`);
        await queryRunner.query(`ALTER TABLE "pagamento" ADD CONSTRAINT "FK_01f5e6df51035cff53a0dafe86e" FOREIGN KEY ("id_credor") REFERENCES "credor"("id_credor") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pagamento" ADD CONSTRAINT "FK_d2fa708541bcf7866de9a09dfd7" FOREIGN KEY ("id_ente-devedor") REFERENCES "ente_devedor"("id_entedevedor") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pagamento" DROP CONSTRAINT "FK_d2fa708541bcf7866de9a09dfd7"`);
        await queryRunner.query(`ALTER TABLE "pagamento" DROP CONSTRAINT "FK_01f5e6df51035cff53a0dafe86e"`);
        await queryRunner.query(`DROP TABLE "pagamento"`);
    }

}
