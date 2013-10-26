# ************************************************************
# Sequel Pro SQL dump
# Version 4096
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: localhost (MySQL 5.5.32-log)
# Datenbank: node_rest_service
# Erstellungsdauer: 2013-10-26 17:54:16 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Export von Tabelle address
# ------------------------------------------------------------

DROP TABLE IF EXISTS `address`;

CREATE TABLE `address` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL DEFAULT '',
  `surname` varchar(255) NOT NULL DEFAULT '',
  `street` varchar(255) NOT NULL DEFAULT '',
  `postcode` varchar(255) NOT NULL DEFAULT '',
  `city` varchar(255) NOT NULL DEFAULT '',
  `country` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;

INSERT INTO `address` (`id`, `firstname`, `surname`, `street`, `postcode`, `city`, `country`)
VALUES
	(1,'Johanna','Wagner','Prinzregenten Str. 23','83022','','Deutschland'),
	(2,'Johanna','Sander','Bahnhofsstr. 83','83022','','Deutschland'),
	(3,'Steffi','Meier','Mitterweg 12','71333','','Deutschland'),
	(4,'Johanna','Wagner','Rathausstraße 6','71333','','Österreich'),
	(5,'Markus','Huber','Prinzregenten Str. 23','12345','','Österreich'),
	(6,'Johanna','Sander','Mitterweg 12','12345','','Schweiz'),
	(7,'Maximilian','Meier','Rathausstraße 6','29383','','Österreich'),
	(8,'Maximilian','Vogel','Mitterweg 12','83022','','Schweiz'),
	(9,'Matthias','Vogel','Mitterweg 12','83022','','Österreich'),
	(10,'Johanna','Wagner','Bahnhofsstr. 83','23232','','Österreich'),
	(11,'Markus','Anders','Rathausstraße 6','83022','','Deutschland'),
	(12,'Maximilian','Wagner','Prinzregenten Str. 23','83022','','Deutschland'),
	(13,'Johanna','Anders','Prinzregenten Str. 23','29383','','Schweiz'),
	(14,'Markus','Wagner','Rathausstraße 6','71333','','Schweiz'),
	(15,'Steffi','Vogel','Prinzregenten Str. 23','12345','','Österreich'),
	(16,'Maximilian','Huber','Mitterweg 12','71333','','Deutschland'),
	(17,'Maximilian','Huber','Bahnhofsstr. 83','12345','','Österreich'),
	(18,'Steffi','Wagner','Mitterweg 12','12345','','Schweiz'),
	(19,'Steffi','Wagner','Bahnhofsstr. 83','29383','','Österreich'),
	(20,'Steffi','Vogel','Bahnhofsstr. 83','12345','','Deutschland'),
	(21,'Markus','Sander','Rathausstraße 6','71333','','Österreich'),
	(22,'Maximilian','Vogel','Bahnhofsstr. 83','71333','','Schweiz'),
	(23,'Matthias','Meier','Mitterweg 12','29383','','Deutschland'),
	(24,'Maximilian','Wagner','Mitterweg 12','12345','','Deutschland'),
	(25,'Steffi','Wagner','Mitterweg 12','83022','','Schweiz'),
	(26,'Matthias','Wagner','Bahnhofsstr. 83','29383','','Österreich'),
	(27,'Steffi','Huber','Mitterweg 12','83022','','Schweiz'),
	(28,'Matthias','Huber','Rathausstraße 6','29383','','Schweiz'),
	(29,'Maximilian','Anders','Rathausstraße 6','29383','','Österreich'),
	(30,'Maximilian','Wagner','Mitterweg 12','29383','','Deutschland'),
	(31,'Johanna','Huber','Bahnhofsstr. 83','23232','','Österreich'),
	(32,'Maximilian','Meier','Prinzregenten Str. 23','23232','','Österreich'),
	(33,'Maximilian','Wagner','Mitterweg 12','23232','','Deutschland'),
	(34,'Maximilian','Wagner','Prinzregenten Str. 23','71333','','Österreich'),
	(35,'Markus','Anders','Bahnhofsstr. 83','71333','','Deutschland'),
	(36,'Matthias','Sander','Mitterweg 12','29383','','Schweiz'),
	(37,'Maximilian','Vogel','Rathausstraße 6','12345','','Deutschland'),
	(38,'Steffi','Sander','Mitterweg 12','83022','','Schweiz'),
	(39,'Maximilian','Wagner','Rathausstraße 6','83022','','Deutschland'),
	(40,'Markus','Huber','Prinzregenten Str. 23','83022','','Österreich'),
	(41,'Maximilian','Sander','Mitterweg 12','12345','','Österreich'),
	(42,'Markus','Sander','Rathausstraße 6','71333','','Schweiz'),
	(43,'Matthias','Meier','Bahnhofsstr. 83','23232','','Deutschland'),
	(44,'Steffi','Anders','Mitterweg 12','83022','','Schweiz'),
	(45,'Matthias','Sander','Bahnhofsstr. 83','83022','','Schweiz'),
	(46,'Steffi','Meier','Prinzregenten Str. 23','23232','','Schweiz'),
	(47,'Johanna','Huber','Prinzregenten Str. 23','23232','','Deutschland'),
	(48,'Steffi','Anders','Rathausstraße 6','29383','','Deutschland'),
	(49,'Markus','Sander','Rathausstraße 6','71333','','Deutschland'),
	(50,'Johanna','Meier','Mitterweg 12','29383','','Deutschland'),
	(51,'Matthias','Vogel','Bahnhofsstr. 83','23232','','Österreich'),
	(52,'Maximilian','Meier','Rathausstraße 6','12345','','Schweiz'),
	(53,'Matthias','Vogel','Bahnhofsstr. 83','71333','','Österreich'),
	(54,'Matthias','Meier','Mitterweg 12','12345','','Deutschland'),
	(55,'Markus','Meier','Prinzregenten Str. 23','29383','','Deutschland'),
	(56,'Johanna','Meier','Bahnhofsstr. 83','12345','','Schweiz'),
	(57,'Steffi','Huber','Bahnhofsstr. 83','29383','','Deutschland'),
	(58,'Maximilian','Anders','Mitterweg 12','12345','','Österreich'),
	(59,'Matthias','Meier','Prinzregenten Str. 23','23232','','Österreich'),
	(60,'Maximilian','Vogel','Mitterweg 12','71333','','Österreich'),
	(61,'Johanna','Anders','Prinzregenten Str. 23','29383','','Österreich'),
	(62,'Matthias','Anders','Rathausstraße 6','83022','','Österreich'),
	(63,'Markus','Huber','Bahnhofsstr. 83','83022','','Deutschland'),
	(64,'Johanna','Huber','Mitterweg 12','71333','','Österreich'),
	(65,'Maximilian','Sander','Mitterweg 12','23232','','Deutschland'),
	(66,'Johanna','Sander','Rathausstraße 6','83022','','Schweiz'),
	(67,'Markus','Meier','Bahnhofsstr. 83','83022','','Österreich'),
	(68,'Matthias','Anders','Mitterweg 12','83022','','Deutschland'),
	(69,'Matthias','Huber','Rathausstraße 6','29383','','Deutschland'),
	(70,'Matthias','Vogel','Mitterweg 12','29383','','Deutschland'),
	(71,'Johanna','Vogel','Prinzregenten Str. 23','29383','','Deutschland'),
	(72,'Maximilian','Wagner','Prinzregenten Str. 23','29383','','Schweiz'),
	(73,'Matthias','Huber','Mitterweg 12','23232','','Deutschland'),
	(74,'Steffi','Wagner','Bahnhofsstr. 83','83022','','Österreich'),
	(75,'Maximilian','Anders','Mitterweg 12','29383','','Deutschland'),
	(76,'Matthias','Meier','Mitterweg 12','12345','','Deutschland'),
	(77,'Johanna','Sander','Mitterweg 12','23232','','Deutschland'),
	(78,'Johanna','Vogel','Rathausstraße 6','29383','','Deutschland'),
	(79,'Johanna','Anders','Bahnhofsstr. 83','29383','','Deutschland'),
	(80,'Steffi','Wagner','Mitterweg 12','12345','','Österreich'),
	(81,'Maximilian','Vogel','Mitterweg 12','83022','','Deutschland'),
	(82,'Steffi','Wagner','Rathausstraße 6','29383','','Deutschland'),
	(83,'Johanna','Huber','Prinzregenten Str. 23','29383','','Deutschland'),
	(84,'Maximilian','Vogel','Prinzregenten Str. 23','29383','','Schweiz'),
	(85,'Matthias','Meier','Mitterweg 12','29383','','Österreich'),
	(86,'Johanna','Sander','Mitterweg 12','83022','','Österreich'),
	(87,'Markus','Meier','Bahnhofsstr. 83','71333','','Schweiz'),
	(88,'Markus','Wagner','Bahnhofsstr. 83','12345','','Schweiz'),
	(89,'Johanna','Wagner','Mitterweg 12','83022','','Deutschland'),
	(90,'Matthias','Vogel','Mitterweg 12','12345','','Deutschland'),
	(91,'Maximilian','Sander','Rathausstraße 6','71333','','Deutschland'),
	(92,'Maximilian','Vogel','Mitterweg 12','29383','','Österreich'),
	(93,'Maximilian','Meier','Rathausstraße 6','71333','','Schweiz'),
	(94,'Matthias','Anders','Bahnhofsstr. 83','71333','','Deutschland'),
	(95,'Markus','Wagner','Prinzregenten Str. 23','29383','','Deutschland'),
	(96,'Maximilian','Anders','Prinzregenten Str. 23','23232','','Schweiz'),
	(97,'Steffi','Vogel','Prinzregenten Str. 23','23232','','Deutschland'),
	(98,'Steffi','Sander','Mitterweg 12','29383','','Schweiz'),
	(99,'Markus','Sander','Bahnhofsstr. 83','29383','','Österreich'),
	(100,'Matthias','Vogel','Rathausstraße 6','23232','','Deutschland');

/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;