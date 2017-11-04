DROP DATABASE IF EXISTS `chat`;
    
CREATE DATABASE chat;

USE chat;

-- CREATE TABLE messages (
--    Describe your table here.
-- );

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/



-- DROP TABLE IF EXISTS `rooms`;
    
-- CREATE TABLE `rooms` (
--   `id` INTEGER NOT NULL AUTO_INCREMENT,
--   `roomname` CHAR(20) NOT NULL,
--   PRIMARY KEY (`id`)
-- );


DROP TABLE IF EXISTS `users`;
    
CREATE TABLE `users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` CHAR(20) NOT NULL,
  PRIMARY KEY (`id`)
);


-- DROP TABLE IF EXISTS `messages`;
    
CREATE TABLE `messages` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `Content` CHAR(150) NOT NULL,
  `user_id` INTEGER NOT NULL,
  `roomname` CHAR(20) NOT NULL,
  PRIMARY KEY (`id`)
);

ALTER TABLE `messages` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
-- ALTER TABLE `messages` ADD FOREIGN KEY (room_id) REFERENCES `rooms` (`id`);
