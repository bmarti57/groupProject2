DROP DATABASE IF EXISTS allsongs_db;
CREATE DATABASE allsongs_db;
USE allsongs_db; 

CREATE TABLE all_songs (
  id INT AUTO_INCREMENT NOT NULL,
  Arist VARCHAR(255) NOT NULL,
  Tempo DECIMAL(5,2) NOT NULL,
  Duration TIME NOT NULL,
  Length TIME NOT NULL,
  Danceability DECIMAL (7,6) NOT NULL,
  Title VARCHAR(255) NOT NULL,
  Decade VARCHAR(40) NOT NULL,
  Genre VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE games (
  id INT AUTO_INCREMENT NOT NULL,
  user_id INT NOT NULL  ,
  PRIMARY KEY (id)
);

CREATE TABLE game_choices (
  game_id INT NOT NULL,
  song_id INT NOT NULL
);