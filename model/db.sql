DROP TABLE url;
CREATE TABLE `url` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `shortUrlKey` varchar(8) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `originUrl` varchar(225) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `shortUrlKey` (`shortUrlKey`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;

INSERT INTO `url` (`shortUrlKey`, `originUrl`) VALUES ('aaa', 'http://www.google.com');
