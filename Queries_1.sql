  ALTER TABLE OPTIONS_QUESTIONS ADD ("ANSWER" CHAR(1) DEFAULT 'N');
    ALTER TABLE OPTIONS_QUESTIONS DROP COLUMN "ANSWER"; 
  select * from OPTIONS_QUESTIONS;
  
--  "SYSTEM"."ANSWER_QUESTIONS" DROP AND CREATE 
    CREATE TABLE "SYSTEM"."ANSWER_QUESTIONS" 
   (	"OPTION_ID" NUMBER, 
	"QUESTION_ID" NUMBER, 
	"ENABLED" CHAR(1 BYTE) DEFAULT 1 NOT NULL ENABLE, 
	"CREATED_BY" VARCHAR2(100 CHAR) NOT NULL ENABLE, 
	 CONSTRAINT "ANSWER_QUESTIONS_PK" PRIMARY KEY ("OPTION_ID", "QUESTION_ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE, 
	 CONSTRAINT "ANSWER_QUESTIONS_FK" FOREIGN KEY ("QUESTION_ID")
	  REFERENCES "SYSTEM"."QUESTIONS_TESTS" ("QUESTION_ID") ENABLE, 
	 CONSTRAINT "ANSWER_OPTIONS_FK" FOREIGN KEY ("OPTION_ID")
	  REFERENCES "SYSTEM"."OPTIONS_QUESTIONS" ("OPTION_ID") ENABLE
   ) PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
  
  DROP TABLE  "SYSTEM"."ANSWER_QUESTIONS" ;
--Drop and recreate
select * from "SYSTEM"."OPTIONS_QUESTIONS" ;
create table "SYSTEM"."OPTIONS_QUESTIONS_bkp" as select * from "SYSTEM"."OPTIONS_QUESTIONS" ;
select * from "SYSTEM"."OPTIONS_QUESTIONS_bkp"  ;




--drop table "SYSTEM"."OPTIONS_QUESTIONS" ;
--ALTER TABLE "SYSTEM"."OPTIONS_QUESTIONS" drop CONSTRAINT "OPTIONS_QUESTIONS_PK";
  CREATE TABLE "SYSTEM"."OPTIONS_QUESTIONS" 
   (	"OPTION_ID" NUMBER, 
	"QUESTION_ID" NUMBER, 
	"OPTION_DESC" VARCHAR2(150 CHAR) NOT NULL ENABLE, 
	"ENABLED" CHAR(1 BYTE) DEFAULT 1 NOT NULL ENABLE, 
	"DISPLAY_ORDER" NUMBER NOT NULL ENABLE, 
	"CREATED_BY" VARCHAR2(100 CHAR) NOT NULL ENABLE, 
	 CONSTRAINT "OPTIONS_QUESTIONS_PK" PRIMARY KEY ("OPTION_ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE, 
	 CONSTRAINT "OPTIONS_QUESTION_FK" FOREIGN KEY ("QUESTION_ID")
	  REFERENCES "SYSTEM"."QUESTIONS_TESTS" ("QUESTION_ID") ENABLE
   ) PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
insert into  "SYSTEM"."OPTIONS_QUESTIONS" select * from "SYSTEM"."OPTIONS_QUESTIONS_bkp";
commit;