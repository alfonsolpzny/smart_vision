--Create DB
--Create DB
BEGIN TRANSACTION;
CREATE DATABASE IF NOT EXISTS dbui;
USE dbui;

CREATE TABLE IF NOT EXISTS pieces (
    id_program INTEGER,
	fecha date,
    hour time,
    coincidence INTEGER,
    FOREIGN KEY (id_program) REFERENCES program(id_program)
)ENGINE = InnoDB;

INSERT INTO pieces(id_program, fecha, hour, coincidence) VALUES 
('10339431 - 10349529', '2021-11-07', '10:00:00', 99),
('10339431 - 10349529', '2021-11-07', '10:01:00', 99),
('10339431 - 10349529', '2021-11-07', '10:02:00', 98),
('10339431 - 10349529', '2021-11-07', '10:03:00', 89),
('10339431 - 10349529', '2021-11-07', '10:04:00', 95),
('10339431 - 10349529', '2021-11-07', '10:05:00', 99),
('10339431 - 10349529', '2021-11-07', '10:06:00', 0),
('10339431 - 10349529', '2021-11-07', '10:07:00', 99),
('10339431 - 10349529', '2021-11-07', '10:08:00', 95),
('10339431 - 10349529', '2021-11-07', '10:09:00', 93),
('10339431 - 10349529', '2021-11-07', '10:10:00', 99),
('10339431 - 10349529', '2021-11-07', '10:11:00', 30),
('10339431 - 10349529', '2021-11-07', '10:12:00', 99),
('10339431 - 10349529', '2021-11-07', '10:13:00', 99),
('10339431 - 10349529', '2021-11-07', '10:14:00', 93),
('10339431 - 10349529', '2021-11-07', '10:15:00', 99),
('10339431 - 10349529', '2021-11-07', '10:16:00', 91),
('10339431 - 10349529', '2021-11-07', '10:17:00', 99),
('10339431 - 10349529', '2021-11-07', '10:18:00', 100),
('10339431 - 10349529', '2021-11-07', '10:19:00', 99),
('10339431 - 10349529', '2021-11-07', '10:20:00', 99),
('10339431 - 10349529', '2021-11-07', '10:21:00', 99),
('10339431 - 10349529', '2021-11-07', '10:22:00', 89),
('10339431 - 10349529', '2021-11-07', '10:23:00', 99),
('10339431 - 10349529', '2021-11-07', '10:24:00', 99),
('10339431 - 10349529', '2021-11-07', '10:25:00', 99),
('10339431 - 10349529', '2021-11-07', '10:26:00', 90),
('10339431 - 10349529', '2021-11-07', '10:27:00', 99),
('10339431 - 10349529', '2021-11-07', '10:28:00', 99),
('10339431 - 10349529', '2021-11-07', '10:29:00', 99),
('10339431 - 10349529', '2021-11-07', '10:30:00', 99),
('10339431 - 10349529', '2021-11-07', '10:31:00', 99),
('10339431 - 10349529', '2021-11-07', '10:32:00', 99),
('10339431 - 10349529', '2021-11-07', '10:33:00', 99),
('10339431 - 10349529', '2021-11-07', '10:34:00', 90),
('10339431 - 10349529', '2021-11-07', '10:35:00', 99),
('10339431 - 10349529', '2021-11-07', '10:36:00', 49),
('10339431 - 10349529', '2021-11-07', '10:37:00', 99),
('10339431 - 10349529', '2021-11-07', '10:38:00', 90),
('10339431 - 10349529', '2021-11-07', '10:39:00', 99),
('10339431 - 10349529', '2021-11-07', '10:40:00', 99),
('10339431 - 10349529', '2021-11-07', '10:41:00', 99),
('10339431 - 10349529', '2021-11-07', '10:42:00', 99),
('10339431 - 10349529', '2021-11-07', '10:43:00', 98),
('10339431 - 10349529', '2021-11-07', '10:44:00', 99),
('10339431 - 10349529', '2021-11-07', '10:45:00', 99),
('10339431 - 10349529', '2021-11-07', '10:46:00', 98),
('10339431 - 10349529', '2021-11-07', '10:47:00', 99),
('10339431 - 10349529', '2021-11-07', '10:48:00', 99),
('10339431 - 10349529', '2021-11-07', '10:49:00', 99),
('10339431 - 10349529', '2021-11-07', '10:50:00', 99),
('10339431 - 10349529', '2021-11-07', '10:51:00', 40),
('10339431 - 10349529', '2021-11-07', '10:52:00', 99),
('10339431 - 10349529', '2021-11-07', '10:53:00', 99),
('10339431 - 10349529', '2021-11-07', '10:54:00', 99),
('10339431 - 10349529', '2021-11-07', '10:55:00', 99),
('10339431 - 10349529', '2021-11-07', '10:56:00', 99),
('10339431 - 10349529', '2021-11-07', '10:57:00', 99),
('10339431 - 10349529', '2021-11-07', '10:58:00', 99),
('10339431 - 10349529', '2021-11-07', '10:59:00', 92);

INSERT INTO pieces(id_program, fecha, hour, coincidence) VALUES 
('10348299 - 10348671', '2021-11-07', '11:00:00', 99),
('10348299 - 10348671', '2021-11-07', '11:01:00', 99),
('10348299 - 10348671', '2021-11-07', '11:02:00', 100),
('10348299 - 10348671', '2021-11-07', '11:03:00', 99),
('10348299 - 10348671', '2021-11-07', '11:04:00', 40),
('10348299 - 10348671', '2021-11-07', '11:05:00', 99),
('10348299 - 10348671', '2021-11-07', '11:06:00', 99),
('10348299 - 10348671', '2021-11-07', '11:07:00', 90),
('10348299 - 10348671', '2021-11-07', '11:08:00', 99),
('10348299 - 10348671', '2021-11-07', '11:09:00', 97),
('10348299 - 10348671', '2021-11-07', '11:10:00', 99),
('10348299 - 10348671', '2021-11-07', '11:11:00', 99),
('10348299 - 10348671', '2021-11-07', '11:12:00', 99),
('10348299 - 10348671', '2021-11-07', '11:13:00', 99),
('10348299 - 10348671', '2021-11-07', '11:14:00', 97),
('10348299 - 10348671', '2021-11-07', '11:15:00', 99),
('10348299 - 10348671', '2021-11-07', '11:16:00', 98),
('10348299 - 10348671', '2021-11-07', '11:17:00', 99),
('10348299 - 10348671', '2021-11-07', '11:18:00', 99),
('10348299 - 10348671', '2021-11-07', '11:19:00', 99),
('10348299 - 10348671', '2021-11-07', '11:20:00', 99),
('10348299 - 10348671', '2021-11-07', '11:21:00', 99),
('10348299 - 10348671', '2021-11-07', '11:22:00', 99),
('10348299 - 10348671', '2021-11-07', '11:23:00', 87),
('10348299 - 10348671', '2021-11-07', '11:24:00', 99),
('10348299 - 10348671', '2021-11-07', '11:25:00', 99),
('10348299 - 10348671', '2021-11-07', '11:26:00', 99),
('10348299 - 10348671', '2021-11-07', '11:27:00', 60),
('10348299 - 10348671', '2021-11-07', '11:28:00', 99),
('10348299 - 10348671', '2021-11-07', '11:29:00', 99),
('10348299 - 10348671', '2021-11-07', '11:30:00', 99),
('10348299 - 10348671', '2021-11-07', '11:31:00', 79),
('10348299 - 10348671', '2021-11-07', '11:32:00', 99),
('10348299 - 10348671', '2021-11-07', '11:33:00', 99),
('10348299 - 10348671', '2021-11-07', '11:34:00', 75),
('10348299 - 10348671', '2021-11-07', '11:35:00', 99),
('10348299 - 10348671', '2021-11-07', '11:36:00', 99),
('10348299 - 10348671', '2021-11-07', '11:37:00', 99),
('10348299 - 10348671', '2021-11-07', '11:38:00', 99),
('10348299 - 10348671', '2021-11-07', '11:39:00', 80),
('10348299 - 10348671', '2021-11-07', '11:40:00', 99),
('10348299 - 10348671', '2021-11-07', '11:41:00', 99),
('10348299 - 10348671', '2021-11-07', '11:42:00', 99),
('10348299 - 10348671', '2021-11-07', '11:43:00', 99),
('10348299 - 10348671', '2021-11-07', '11:44:00', 99),
('10348299 - 10348671', '2021-11-07', '11:45:00', 99),
('10348299 - 10348671', '2021-11-07', '11:46:00', 43),
('10348299 - 10348671', '2021-11-07', '11:47:00', 99),
('10348299 - 10348671', '2021-11-07', '11:48:00', 99),
('10348299 - 10348671', '2021-11-07', '11:49:00', 99),
('10348299 - 10348671', '2021-11-07', '11:50:00', 95),
('10348299 - 10348671', '2021-11-07', '11:51:00', 99),
('10348299 - 10348671', '2021-11-07', '11:52:00', 89),
('10348299 - 10348671', '2021-11-07', '11:53:00', 99),
('10348299 - 10348671', '2021-11-07', '11:54:00', 99),
('10348299 - 10348671', '2021-11-07', '11:55:00', 94),
('10348299 - 10348671', '2021-11-07', '11:56:00', 99),
('10348299 - 10348671', '2021-11-07', '11:57:00', 99),
('10348299 - 10348671', '2021-11-07', '11:58:00', 99),
('10348299 - 10348671', '2021-11-07', '11:59:00', 70);

INSERT INTO pieces(id_program, fecha, hour, coincidence) VALUES 
('10360242 - 10348671', '2021-11-07', '12:00:00', 99),
('10360242 - 10348671', '2021-11-07', '12:01:00', 99),
('10360242 - 10348671', '2021-11-07', '12:02:00', 100),
('10360242 - 10348671', '2021-11-07', '12:03:00', 99),
('10360242 - 10348671', '2021-11-07', '12:04:00', 80),
('10360242 - 10348671', '2021-11-07', '12:05:00', 99),
('10360242 - 10348671', '2021-11-07', '12:06:00', 96),
('10360242 - 10348671', '2021-11-07', '12:07:00', 90),
('10360242 - 10348671', '2021-11-07', '12:08:00', 99),
('10360242 - 10348671', '2021-11-07', '12:09:00', 97),
('10360242 - 10348671', '2021-11-07', '12:10:00', 99),
('10360242 - 10348671', '2021-11-07', '12:11:00', 90),
('10360242 - 10348671', '2021-11-07', '12:12:00', 99),
('10360242 - 10348671', '2021-11-07', '12:13:00', 99),
('10360242 - 10348671', '2021-11-07', '12:14:00', 97),
('10360242 - 10348671', '2021-11-07', '12:15:00', 99),
('10360242 - 10348671', '2021-11-07', '12:16:00', 98),
('10360242 - 10348671', '2021-11-07', '12:17:00', 99),
('10360242 - 10348671', '2021-11-07', '12:18:00', 99),
('10360242 - 10348671', '2021-11-07', '12:19:00', 90),
('10360242 - 10348671', '2021-11-07', '12:20:00', 99),
('10360242 - 10348671', '2021-11-07', '12:21:00', 99),
('10360242 - 10348671', '2021-11-07', '12:22:00', 99),
('10360242 - 10348671', '2021-11-07', '12:23:00', 87),
('10360242 - 10348671', '2021-11-07', '12:24:00', 99),
('10360242 - 10348671', '2021-11-07', '12:25:00', 99),
('10360242 - 10348671', '2021-11-07', '12:26:00', 99),
('10360242 - 10348671', '2021-11-07', '12:27:00', 88),
('10360242 - 10348671', '2021-11-07', '12:28:00', 99),
('10360242 - 10348671', '2021-11-07', '12:29:00', 99),
('10360242 - 10348671', '2021-11-07', '12:30:00', 99),
('10360242 - 10348671', '2021-11-07', '12:31:00', 79),
('10360242 - 10348671', '2021-11-07', '12:32:00', 99),
('10360242 - 10348671', '2021-11-07', '12:33:00', 23),
('10360242 - 10348671', '2021-11-07', '12:34:00', 75),
('10360242 - 10348671', '2021-11-07', '12:35:00', 99),
('10360242 - 10348671', '2021-11-07', '12:36:00', 99),
('10360242 - 10348671', '2021-11-07', '12:37:00', 99),
('10360242 - 10348671', '2021-11-07', '12:38:00', 99),
('10360242 - 10348671', '2021-11-07', '12:39:00', 80),
('10360242 - 10348671', '2021-11-07', '12:40:00', 99),
('10360242 - 10348671', '2021-11-07', '12:41:00', 39),
('10360242 - 10348671', '2021-11-07', '12:42:00', 99),
('10360242 - 10348671', '2021-11-07', '12:43:00', 99),
('10360242 - 10348671', '2021-11-07', '12:44:00', 99),
('10360242 - 10348671', '2021-11-07', '12:45:00', 99),
('10360242 - 10348671', '2021-11-07', '12:46:00', 93),
('10360242 - 10348671', '2021-11-07', '12:47:00', 99),
('10360242 - 10348671', '2021-11-07', '12:48:00', 99),
('10360242 - 10348671', '2021-11-07', '12:49:00', 99),
('10360242 - 10348671', '2021-11-07', '12:50:00', 95),
('10360242 - 10348671', '2021-11-07', '12:51:00', 99),
('10360242 - 10348671', '2021-11-07', '12:52:00', 89),
('10360242 - 10348671', '2021-11-07', '12:53:00', 99),
('10360242 - 10348671', '2021-11-07', '12:54:00', 99),
('10360242 - 10348671', '2021-11-07', '12:55:00', 94),
('10360242 - 10348671', '2021-11-07', '12:56:00', 99),
('10360242 - 10348671', '2021-11-07', '12:57:00', 99),
('10360242 - 10348671', '2021-11-07', '12:58:00', 99),
('10360242 - 10348671', '2021-11-07', '12:59:00', 70);

INSERT INTO pieces(id_program, fecha, hour, coincidence) VALUES 
('10397387 - 10349529', '2021-11-07', '13:00:00', 99),
('10397387 - 10349529', '2021-11-07', '13:01:00', 98),
('10397387 - 10349529', '2021-11-07', '13:02:00', 99),
('10397387 - 10349529', '2021-11-07', '13:03:00', 97),
('10397387 - 10349529', '2021-11-07', '13:04:00', 99),
('10397387 - 10349529', '2021-11-07', '13:05:00', 92),
('10397387 - 10349529', '2021-11-07', '13:06:00', 99),
('10397387 - 10349529', '2021-11-07', '13:07:00', 99),
('10397387 - 10349529', '2021-11-07', '13:08:00', 99),
('10397387 - 10349529', '2021-11-07', '13:09:00', 91),
('10397387 - 10349529', '2021-11-07', '13:10:00', 0),
('10397387 - 10349529', '2021-11-07', '13:11:00', 80),
('10397387 - 10349529', '2021-11-07', '13:12:00', 99),
('10397387 - 10349529', '2021-11-07', '13:13:00', 99),
('10397387 - 10349529', '2021-11-07', '13:14:00', 99),
('10397387 - 10349529', '2021-11-07', '13:15:00', 99),
('10397387 - 10349529', '2021-11-07', '13:16:00', 91),
('10397387 - 10349529', '2021-11-07', '13:17:00', 99),
('10397387 - 10349529', '2021-11-07', '13:18:00', 99),
('10397387 - 10349529', '2021-11-07', '13:19:00', 99),
('10397387 - 10349529', '2021-11-07', '13:20:00', 99),
('10397387 - 10349529', '2021-11-07', '13:21:00', 99),
('10397387 - 10349529', '2021-11-07', '13:22:00', 51),
('10397387 - 10349529', '2021-11-07', '13:23:00', 99),
('10397387 - 10349529', '2021-11-07', '13:24:00', 94),
('10397387 - 10349529', '2021-11-07', '13:25:00', 99),
('10397387 - 10349529', '2021-11-07', '13:26:00', 99),
('10397387 - 10349529', '2021-11-07', '13:27:00', 99),
('10397387 - 10349529', '2021-11-07', '13:28:00', 99),
('10397387 - 10349529', '2021-11-07', '13:29:00', 93),
('10397387 - 10349529', '2021-11-07', '13:30:00', 99),
('10397387 - 10349529', '2021-11-07', '13:31:00', 100),
('10397387 - 10349529', '2021-11-07', '13:32:00', 100),
('10397387 - 10349529', '2021-11-07', '13:33:00', 100),
('10397387 - 10349529', '2021-11-07', '13:34:00', 99),
('10397387 - 10349529', '2021-11-07', '13:35:00', 99),
('10397387 - 10349529', '2021-11-07', '13:36:00', 73),
('10397387 - 10349529', '2021-11-07', '13:37:00', 99),
('10397387 - 10349529', '2021-11-07', '13:38:00', 83),
('10397387 - 10349529', '2021-11-07', '13:39:00', 99),
('10397387 - 10349529', '2021-11-07', '13:40:00', 99),
('10397387 - 10349529', '2021-11-07', '13:41:00', 92),
('10397387 - 10349529', '2021-11-07', '13:42:00', 99),
('10397387 - 10349529', '2021-11-07', '13:43:00', 99),
('10397387 - 10349529', '2021-11-07', '13:44:00', 95),
('10397387 - 10349529', '2021-11-07', '13:45:00', 80),
('10397387 - 10349529', '2021-11-07', '13:46:00', 99),
('10397387 - 10349529', '2021-11-07', '13:47:00', 99),
('10397387 - 10349529', '2021-11-07', '13:48:00', 99),
('10397387 - 10349529', '2021-11-07', '13:49:00', 79),
('10397387 - 10349529', '2021-11-07', '13:50:00', 99),
('10397387 - 10349529', '2021-11-07', '13:51:00', 99),
('10397387 - 10349529', '2021-11-07', '13:52:00', 99),
('10397387 - 10349529', '2021-11-07', '13:53:00', 75),
('10397387 - 10349529', '2021-11-07', '13:54:00', 12),
('10397387 - 10349529', '2021-11-07', '13:55:00', 99),
('10397387 - 10349529', '2021-11-07', '13:56:00', 73),
('10397387 - 10349529', '2021-11-07', '13:57:00', 99),
('10397387 - 10349529', '2021-11-07', '13:58:00', 80),
('10397387 - 10349529', '2021-11-07', '13:59:00', 99);