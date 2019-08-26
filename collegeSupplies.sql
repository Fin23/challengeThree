DROP DATABASE IF EXISTS collegeSupplies_DB;
CREATE DATABASE collegeSupplies_DB;

USE collegeSupplies_DB;

CREATE TABLE `sales`(
`id` INT (11) NOT NULL AUTO_INCREMENT,
  `year` INT(11) NOT NULL,
  `month`   INT(11) NOT NULL,
  `customer` VARCHAR(30) NOT NULL,
  `state_id`  INT(11) NOT NULL,
  `product_id` VARCHAR(11) NOT NULL,
  `quantity` INT(11) NOT NULL,
  `billed` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id`(`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

DROP TABLE `sales`;


CREATE TABLE `state`(
  `state_id` INT(11) NOT NULL AUTO_INCREMENT,
  `state_name`  VARCHAR(30) NOT NULL,
  PRIMARY KEY (`state_id`),
  KEY `state_id`(`state_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;




CREATE TABLE `product`(
  `product_id` INT(11) NOT NULL AUTO_INCREMENT,
  `product_desc`  VARCHAR(30) NOT NULL,
  PRIMARY KEY (`product_id`),
  KEY `product_id`(`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;



USE collegeSupplies_DB;
  INSERT INTO `sales` VALUES
  (1, 2011, 5, "A", 5, 1, 1, 8),
  (2, 2011, 1, "A", 4, 1, 2, 8),
  (3, 2011, 1, "A", 2, 1, 2, 8),
  (4, 2011, 5, "C", 3, 1, 1, 8),
  (5, 2011, 2, "B", 1, 2, 1, 2),
  (6, 2011, 3, "B", 1, 2, 2, 2),
  (7, 2011, 2, "C", 1, 3, 2, 3),
  (8, 2011, 5, "B", 2, 3, 1, 3),
  (9, 2011, 4, "C", 3, 3, 1, 3),
  (10, 2011, 3, "C", 4, 2, 1, 2),
  (11, 2011, 5, "B", 5, 4, 3, 8),
  (12, 2011, 4, "C", 3, 1, 1, 8)
   


  USE collegeSupplies_DB;

    INSERT INTO `state` VALUES
  (1, "California"),
  (2, 'Nevada'),
  (3, 'Texas'),
  (4, 'Arizona'),
  (5,'Utah'),
  (6,'Washington')


  
USE collegeSupplies_DB;

    INSERT INTO `product` VALUES
  (1, 'Beer'),
  (2, 'Plastic Cups'),
  (3, 'Ping Pong Balls'),
  (4, 'Water')


  




