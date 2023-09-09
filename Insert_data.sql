REM INSERTING into EMPLOYEES
SET DEFINE OFF;
Insert into EMPLOYEES (EMPLOYEE_ID,LAST_NAME,FIRST_NAME,SALARY) values (154960,'Nag','Vij',100000);
Insert into EMPLOYEES (EMPLOYEE_ID,LAST_NAME,FIRST_NAME,SALARY) values (145556,'Krish','Sow',12344);

REM INSERTING into USERS
SET DEFINE OFF;
Insert into USERS (EMAIL,NAME,USER_ID,ENABLED,ROLE) values ('vijay.nagarajan4283@gmail.com','vijay nagarajan',1,'Y','EMPLOYER');
Insert into USERS (EMAIL,NAME,USER_ID,ENABLED,ROLE) values ('sowmyavijay1906@gmail.com','Sowmya Krishnamurthy',2,'Y','EMPLOYER');
Insert into USERS (EMAIL,NAME,USER_ID,ENABLED,ROLE) values ('sk@gmal.com','surya kadambari',3,'Y','EMPLOYER');


Insert into QUESTIONS_TESTS (QUESTION_ID,TEST_ID,QUESTION,ENABLED,CREATED_BY,DISPLAY_ORDER,QUESTION_TYPE) values (2,1015,'What language typescript is superscript of ','Y','vijay.nagarajan4283@gmail.com',0,'MULTI_SELECT');
commit;
Insert into OPTIONS_QUESTIONS (OPTION_ID,QUESTION_ID,OPTION_DESC,ENABLED,DISPLAY_ORDER,CREATED_BY) values (2,2,'Java 12','Y',0,'vijay.nagarajan4283@gmail.com');
Insert into OPTIONS_QUESTIONS (OPTION_ID,QUESTION_ID,OPTION_DESC,ENABLED,DISPLAY_ORDER,CREATED_BY) values (3,2,'Objective C','Y',0,'vijay.nagarajan4283@gmail.com');
Insert into OPTIONS_QUESTIONS (OPTION_ID,QUESTION_ID,OPTION_DESC,ENABLED,DISPLAY_ORDER,CREATED_BY) values (4,2,'JavaScript','Y',0,'vijay.nagarajan4283@gmail.com');
Insert into OPTIONS_QUESTIONS (OPTION_ID,QUESTION_ID,OPTION_DESC,ENABLED,DISPLAY_ORDER,CREATED_BY) values (5,2,'Swift','Y',0,'vijay.nagarajan4283@gmail.com');
commit;