CREATE TABLE `url` (
  `id` int unsigned NOT NULL UNIQUE AUTO_INCREMENT ,
  `shortUrlKey` varchar(5) UNIQUE DEFAULT NULL,
  `originUrl` varchar(225) DEFAULT NULL,
  PRIMARY KEY (`id`)
) 

INSERT INTO `url` (`shortUrlKey`, `originUrl`) VALUES ('aaa', 'http://www.google.com');
