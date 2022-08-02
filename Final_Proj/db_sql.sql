create table contact
(
    id      int auto_increment
        primary key,
    name    varchar(30)  not null,
    email   varchar(30)  not null,
    message varchar(200) not null,
    constraint Parking_id_uindex
        unique (name)
);

INSERT INTO team8.contact (id, name, email, message) VALUES (1, 'Roy', 'roy@wims.com', 'Your service is amazing!!');

create table parkings
(
    id        int auto_increment
        primary key,
    longitude float       null,
    latitude  float       null,
    city      varchar(20) null,
    is_free   tinyint(1)  null,
    constraint Parking_id_uindex
        unique (id)
);

INSERT INTO team8.parkings (id, longitude, latitude, city, is_free) VALUES (1, 34.8296, 32.0971, 'Tel Aviv', 1);
INSERT INTO team8.parkings (id, longitude, latitude, city, is_free) VALUES (2, 34.8275, 32.0979, 'Tel Aviv', 1);
INSERT INTO team8.parkings (id, longitude, latitude, city, is_free) VALUES (3, 34.8337, 32.1, 'Tel Aviv', 1);
INSERT INTO team8.parkings (id, longitude, latitude, city, is_free) VALUES (4, 34.7787, 32.0707, 'Tel Aviv', 1);
INSERT INTO team8.parkings (id, longitude, latitude, city, is_free) VALUES (5, 34.7756, 32.0718, 'Tel Aviv', 1);
INSERT INTO team8.parkings (id, longitude, latitude, city, is_free) VALUES (6, 34.7773, 32.0731, 'Tel Aviv', 1);
INSERT INTO team8.parkings (id, longitude, latitude, city, is_free) VALUES (7, 34.7684, 31.2612, 'Beer Sheva', 1);
INSERT INTO team8.parkings (id, longitude, latitude, city, is_free) VALUES (8, 34.7684, 31.2625, 'Beer Sheva', 1);
INSERT INTO team8.parkings (id, longitude, latitude, city, is_free) VALUES (9, 34.7666, 31.264, 'Beer Sheva', 1);
INSERT INTO team8.parkings (id, longitude, latitude, city, is_free) VALUES (10, 34.7644, 31.2655, 'Beer Sheva', 1);


create table scooters
(
    scooter_id    int auto_increment
        primary key,
    battery_level float       null,
    longitude     float       null,
    latitude      float       null,
    firm_name     varchar(50) null,
    helmet        varchar(3)  null,
    city          varchar(20) null,
    constraint scooters_scooter_id_uindex
        unique (scooter_id)
);

INSERT INTO team8.scooters (scooter_id, battery_level, longitude, latitude, firm_name, helmet, city) VALUES (1, 0.7, 34.7834, 32.0734, 'bird', 'Yes', 'Tel Aviv');
INSERT INTO team8.scooters (scooter_id, battery_level, longitude, latitude, firm_name, helmet, city) VALUES (2, 0.3, 34.7834, 32.0734, 'wind', 'Yes', 'Tel Aviv');
INSERT INTO team8.scooters (scooter_id, battery_level, longitude, latitude, firm_name, helmet, city) VALUES (3, 0.9, 34.7744, 32.0844, 'bird', 'No', 'Tel Aviv');
INSERT INTO team8.scooters (scooter_id, battery_level, longitude, latitude, firm_name, helmet, city) VALUES (4, 0.6, 34.7723, 32.0849, 'lime', 'Yes', 'Tel Aviv');
INSERT INTO team8.scooters (scooter_id, battery_level, longitude, latitude, firm_name, helmet, city) VALUES (5, 0.1, 34.7691, 32.0859, 'wind', 'No', 'Tel Aviv');
INSERT INTO team8.scooters (scooter_id, battery_level, longitude, latitude, firm_name, helmet, city) VALUES (6, 0.8, 34.769, 32.0841, 'lime', 'Yes', 'Tel Aviv');
INSERT INTO team8.scooters (scooter_id, battery_level, longitude, latitude, firm_name, helmet, city) VALUES (7, 0.6, 34.781, 32.0797, 'bird', 'Yes', 'Tel Aviv');
INSERT INTO team8.scooters (scooter_id, battery_level, longitude, latitude, firm_name, helmet, city) VALUES (8, 0.4, 34.8012, 31.2612, 'lime', 'Yes', 'Beer Sheva');
INSERT INTO team8.scooters (scooter_id, battery_level, longitude, latitude, firm_name, helmet, city) VALUES (9, 0.5, 34.8012, 31.2612, 'wind', 'Yes', 'Beer Sheva');
INSERT INTO team8.scooters (scooter_id, battery_level, longitude, latitude, firm_name, helmet, city) VALUES (10, 0.2, 34.7968, 31.2619, 'bird', 'No', 'Beer Sheva');
INSERT INTO team8.scooters (scooter_id, battery_level, longitude, latitude, firm_name, helmet, city) VALUES (11, 0.9, 34.797, 31.259, 'lime', 'No', 'Beer Sheva');
INSERT INTO team8.scooters (scooter_id, battery_level, longitude, latitude, firm_name, helmet, city) VALUES (12, 0.8, 34.797, 31.259, 'lime', 'Yes', 'Beer Sheva');
INSERT INTO team8.scooters (scooter_id, battery_level, longitude, latitude, firm_name, helmet, city) VALUES (13, 0.7, 34.795, 31.2565, 'bird', 'Yes', 'Beer Sheva');
INSERT INTO team8.scooters (scooter_id, battery_level, longitude, latitude, firm_name, helmet, city) VALUES (16, 0.7, 34.7834, 32.0734, 'bird', 'Yes', 'Tel Aviv');
INSERT INTO team8.scooters (scooter_id, battery_level, longitude, latitude, firm_name, helmet, city) VALUES (25, 0.8, 34.7827, 32.0841, 'lime', 'Yes', 'Tel Aviv');
INSERT INTO team8.scooters (scooter_id, battery_level, longitude, latitude, firm_name, helmet, city) VALUES (28, 0.7, 36.7834, 1, 'bird', 'Yes', 'Tel Aviv');
INSERT INTO team8.scooters (scooter_id, battery_level, longitude, latitude, firm_name, helmet, city) VALUES (30, 0.7, 34.8008, 31.2583, 'wind', 'Yes', 'Beer Sheva');
INSERT INTO team8.scooters (scooter_id, battery_level, longitude, latitude, firm_name, helmet, city) VALUES (31, 0.7, 0.0002, 0.0002, 'bird', 'Yes', 'Tel Aviv');
INSERT INTO team8.scooters (scooter_id, battery_level, longitude, latitude, firm_name, helmet, city) VALUES (41, 0.3, 34.7818, 32.0734, 'wind', 'Yes', 'Tel Aviv');
INSERT INTO team8.scooters (scooter_id, battery_level, longitude, latitude, firm_name, helmet, city) VALUES (43, 0.6, 34.7815, 32.0797, 'bird', 'Yes', 'Tel Aviv');
INSERT INTO team8.scooters (scooter_id, battery_level, longitude, latitude, firm_name, helmet, city) VALUES (63, 0.9, 34.7828, 32.0844, 'bird', 'No', 'Tel Aviv');
INSERT INTO team8.scooters (scooter_id, battery_level, longitude, latitude, firm_name, helmet, city) VALUES (73, 0.2, 34.7919, 31.2515, 'bird', 'No', 'Beer Sheva');
INSERT INTO team8.scooters (scooter_id, battery_level, longitude, latitude, firm_name, helmet, city) VALUES (78, 0.4, 34.7921, 31.2527, 'lime', 'Yes', 'Beer Sheva');
INSERT INTO team8.scooters (scooter_id, battery_level, longitude, latitude, firm_name, helmet, city) VALUES (79, 0.1, 34.7831, 32.0859, 'wind', 'No', 'Tel Aviv');
INSERT INTO team8.scooters (scooter_id, battery_level, longitude, latitude, firm_name, helmet, city) VALUES (85, 0.7, 34.7821, 32.0739, 'bird', 'Yes', 'Tel Aviv');
INSERT INTO team8.scooters (scooter_id, battery_level, longitude, latitude, firm_name, helmet, city) VALUES (110, 0.9, 34.7914, 31.2527, 'lime', 'No', 'Beer Sheva');
INSERT INTO team8.scooters (scooter_id, battery_level, longitude, latitude, firm_name, helmet, city) VALUES (114, 0.5, 34.7927, 31.2531, 'wind', 'Yes', 'Beer Sheva');
INSERT INTO team8.scooters (scooter_id, battery_level, longitude, latitude, firm_name, helmet, city) VALUES (125, 0.8, 34.7923, 31.2522, 'lime', 'Yes', 'Beer Sheva');
INSERT INTO team8.scooters (scooter_id, battery_level, longitude, latitude, firm_name, helmet, city) VALUES (134, 0.7, 34.7916, 31.2536, 'bird', 'Yes', 'Beer Sheva');
INSERT INTO team8.scooters (scooter_id, battery_level, longitude, latitude, firm_name, helmet, city) VALUES (147, 0.6, 34.7825, 32.0849, 'lime', 'Yes', 'Tel Aviv');
INSERT INTO team8.scooters (scooter_id, battery_level, longitude, latitude, firm_name, helmet, city) VALUES (148, 0.4, 34.7921, 31.2521, 'wind', 'Yes', 'Beer Sheva');
INSERT INTO team8.scooters (scooter_id, battery_level, longitude, latitude, firm_name, helmet, city) VALUES (2022, 0.7, 34.7834, -2, 'bird', 'Yes', 'Tel Aviv');


create table technicians
(
    username varchar(20) not null
        primary key,
    password varchar(20) not null
);

INSERT INTO team8.technicians (username, password) VALUES ('Amir', '2424');
INSERT INTO team8.technicians (username, password) VALUES ('Amit', '1410');
INSERT INTO team8.technicians (username, password) VALUES ('Roy', '1');
INSERT INTO team8.technicians (username, password) VALUES ('Sefi', '2306');
