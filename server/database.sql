CREATE TABLE Location
(
    pincode numeric(6) PRIMARY KEY,
    area varchar(50) NOT NULL,
    city varchar(40) NOT NULL,
    state varchar(40) NOT NULL
);


CREATE TABLE Inventory
(
    I_id int PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    I_name varchar(50) NOT NULL,
    I_contactno numeric(10),
    I_address numeric(6) NOT NULL,
    FOREIGN KEY (I_address) REFERENCES Location(pincode) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Vaccine
(
    V_name varchar(50) PRIMARY KEY,
    V_company varchar(50) NOT NULL,
    V_cost float NOT NULL
);


CREATE TABLE Hospital
(
    H_id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    H_name varchar(50) NOT NULL,
    H_contactno numeric(10),
    H_address numeric(6) NOT NULL,
    H_email varchar(30),
    H_vac varchar(20),
    quant_rem int,
    FOREIGN KEY (H_address) REFERENCES Location(pincode) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (H_vac) REFERENCES Vaccine(V_name) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Supplies
(
    S_id int GENERATED ALWAYS AS IDENTITY primary key,
    S_hospital int,
    S_inventory int,
    S_quantity numeric,
    Foreign key (S_hospital) references hospital(h_id) on delete cascade on update cascade,
    Foreign key (S_inventory) references inventory(i_id) on delete cascade on update cascade
);

CREATE TABLE Person
(
    P_id int PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    P_name varchar(100) NOT NULL,
    P_Gender char(30) NOT NULL,
    P_DOB DATE NOT NULL,
    P_contactno numeric(10),
    P_address numeric(6),
    P_email varchar(60),
    FOREIGN KEY (P_address) REFERENCES Location(pincode) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Doctor
(
    D_id int PRIMARY KEY,
    D_dept varchar(50) NOT NULL,
    FOREIGN KEY (D_id) REFERENCES Person(P_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Vaccinates
(
    P int,
    Hosp int,
    H_vac varchar(20),
    Date_first DATE,
    Date_second DATE,
    PRIMARY KEY (P, Hosp),
    FOREIGN KEY (P) REFERENCES Person(P_id)  ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (Hosp) REFERENCES Hospital(H_id)  ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (H_vac) REFERENCES Vaccine(V_name) ON DELETE CASCADE ON UPDATE CASCADE
);

-----Views--------
CREATE VIEW hosp_data AS SELECT H_id, H_name, H_contactno, H_type, H_address, H_email, H_vac FROM hospital;

CREATE VIEW vacc_data AS SELECT v.p, v.hosp, h.h_vac, h.h_type FROM vaccinates v JOIN hosp_data h ON h.h_id = v.hosp;

-------Insert----
---Location--------
INSERT INTO Location VALUES(110005, 'CVS Pharmacy', 'Fort Wayne', 'IN');
INSERT INTO Location VALUES(110001, 'Walgreens Pharmacy', 'Fort Wayne', 'IN');
INSERT INTO Location VALUES(400037, 'Dupont Hospital', 'Fort Wayne', 'IN');
INSERT INTO Location VALUES(400038, 'Meijer', 'Fort Wayne', 'IN');
INSERT INTO Location VALUES(303609, '3 RIVERS PHARMACY', 'Fort Wayne', 'IN');
INSERT INTO Location VALUES(395009, 'Kroger Pharmacy', 'Fort Wayne', 'IN');
INSERT INTO Location VALUES(110010, 'Reeta Muskett', 'Fort Wayne', 'IN');
INSERT INTO Location VALUES(110011, 'Basile Jeannequin', 'Fort Wayne', 'IN');
INSERT INTO Location VALUES(110012, 'Keir Dongall', 'Fort Wayne', 'IN');
INSERT INTO Location VALUES(110013, 'Ediva Jeannot', 'Fort Wayne', 'IN');
INSERT INTO Location VALUES(110014, 'Justinian Crigin', 'Fort Wayne', 'IN');
INSERT INTO Location VALUES(110015, 'Waylan Widmoor', 'Fort Wayne', 'IN');
INSERT INTO Location VALUES(110016, 'Tomi Fairleigh', 'Fort Wayne', 'IN');
INSERT INTO Location VALUES(110017, 'Talyah Ech', 'Fort Wayne', 'IN');
INSERT INTO Location VALUES(110018, 'Sherwynd Wickes', 'Fort Wayne', 'IN');
INSERT INTO Location VALUES(110019, 'Roch Ashborne', 'Fort Wayne', 'IN');
INSERT INTO Location VALUES(110020, 'Kerwin Tumilson', 'Fort Wayne', 'IN');



----Inventory------
INSERT INTO Inventory (I_name, I_contactno, I_address) VALUES('Super Shot Clinic Inventory', 7789234235, 400038);
INSERT INTO Inventory (I_name, I_contactno, I_address) VALUES('Passport Health Inventory', 9620124544, 110001);
INSERT INTO Inventory (I_name, I_contactno, I_address) VALUES('Wayne County Inventory', 9916405627, 303609);
INSERT INTO Inventory (I_name, I_contactno, I_address) VALUES('Costco Wholesale', 8626840483, 110005);
INSERT INTO Inventory (I_name, I_contactno, I_address) VALUES('Walmart Supercenter', 9740365018, 395009);

----Vaccine--------
INSERT INTO Vaccine VALUES('Pfizer', 'BioNTech', 100);
INSERT INTO Vaccine VALUES('Moderna', 'Moderna', 100);
INSERT INTO Vaccine VALUES('JJ', 'Janssen', 100);

----Person-------

INSERT INTO Person (p_name,p_email,p_address,p_dob,p_contactno,p_gender) VALUES('Reeta Muskett', 'rmuskett0@a8.net', 110010, '2/1/1991', 2819451488, 'Female');
INSERT INTO Person (p_name,p_email,p_address,p_dob,p_contactno,p_gender) VALUES('Basile Jeannequin', 'bjeannequin1@wix.com', 110011, '5/23/2010', 5136547473,'Male');
INSERT INTO Person (p_name,p_email,p_address,p_dob,p_contactno,p_gender) VALUES('Keir Dongall', 'kdongall3@stanford.edu', 110012,'4/20/2003', 6697480813, 'Male');
INSERT INTO Person (p_name,p_email,p_address,p_dob,p_contactno,p_gender) VALUES('Ediva Jeannot', 'ejeannot4@altervista.org', 110013, '3/4/2005', 2184872464, 'Female');
INSERT INTO Person (p_name,p_email,p_address,p_dob,p_contactno,p_gender) VALUES('Justinian Crigin', 'jcrigin5@live.com', 110014, '10/15/2001', 1643255999, 'Male');
INSERT INTO Person (p_name,p_email,p_address,p_dob,p_contactno,p_gender) VALUES('Waylan Widmoor', 'wwidmoorc@amazon.com', 110015, '11/29/2000', 9726318804, 'Male');
INSERT INTO Person (p_name,p_email,p_address,p_dob,p_contactno,p_gender) VALUES('Tomi Fairleigh', 'tfairleighn@go.com', 110016, '3/15/1995', 9495271744, 'Female');
INSERT INTO Person (p_name,p_email,p_address,p_dob,p_contactno,p_gender) VALUES('Talyah Ech', 'techw@virginia.edu', 110017, '5/5/2005', 5574196446, 'Female');
INSERT INTO Person (p_name,p_email,p_address,p_dob,p_contactno,p_gender) VALUES('Sherwynd Wickes', 'swickes14@mozilla.com', 110018, '11/7/2012', 1078719277, 'Male');
INSERT INTO Person (p_name,p_email,p_address,p_dob,p_contactno,p_gender) VALUES('Roch Ashborne', 'rashborne1c@hhs.gov', 110019, '4/28/1996', 6783470949, 'Female');
INSERT INTO Person (p_name,p_email,p_address,p_dob,p_contactno,p_gender) VALUES('Kerwin Tumilson', 'ktumilson1y@mozilla.com', 110020, '2/28/2003', 5442725478, 'Male');

----Doctor-------

INSERT INTO Doctor VALUES(1, 'General Medic/Surgeon');
INSERT INTO Doctor VALUES(2, 'General Medic/Surgeon');
INSERT INTO Doctor VALUES(3, 'General Medic/Surgeon');
INSERT INTO Doctor VALUES(4, 'General Medic/Surgeon');

----Hospital-------

INSERT INTO Hospital (H_name, H_contactno, H_address, H_email, H_vac) VALUES('Parkview Hospital Randallia', 7789234235, 400038, 'parkview@gmail.com', 'Pfizer');
INSERT INTO Hospital (H_name, H_contactno, H_address, H_email, H_vac) VALUES('Dupont Hospital', 9620124544, 110001, 'dupoint@gmail.com', 'Moderna');
INSERT INTO Hospital (H_name, H_contactno, H_address, H_email, H_vac) VALUES('Lutheran Downtown Hospital', 9916405627, 303609, 'luthdwtwn@gmail.com', 'JJ');
INSERT INTO Hospital (H_name, H_contactno, H_address, H_email, H_vac) VALUES('Lutheran Hospital', 8626840483, 110005, 'luth@gmail.com', 'Pfizer');
INSERT INTO Hospital (H_name, H_contactno, H_address, H_email, H_vac) VALUES('Parkview Regional Medical Center', 9740365018, 395009, 'parkviewreg@gmail.com', 'Pfizer');
 
----Supplies-------

INSERT INTO Supplies (S_hospital, S_inventory, S_quantity) VALUES(5, 1, 30);
INSERT INTO Supplies (S_hospital, S_inventory, S_quantity) VALUES(4, 2, 40);
INSERT INTO Supplies (S_hospital, S_inventory, S_quantity) VALUES(3, 3, 50);
INSERT INTO Supplies (S_hospital, S_inventory, S_quantity) VALUES(2, 4, 60);
INSERT INTO Supplies (S_hospital, S_inventory, S_quantity) VALUES(1, 5, 70);

----Vaccinates-------

INSERT INTO Vaccinates VALUES (5, 1, 'Pfizer', '5/3/2021', '8/4/2021');
INSERT INTO Vaccinates VALUES (6, 2, 'Moderna', '5/22/2021', '8/13/2021');
INSERT INTO Vaccinates VALUES (7, 3, 'JJ', '5/15/2021', '8/9/2021');
INSERT INTO Vaccinates VALUES (8, 4, 'Pfizer', '5/22/2021', '9/17/2021);');
INSERT INTO Vaccinates VALUES (9, 5, 'Moderna', '4/26/2021', '7/3/2021');
INSERT INTO Vaccinates VALUES (10, 1,'JJ',  '5/3/2021', '8/4/2021');
INSERT INTO Vaccinates VALUES (11, 2,'Pfizer',  '5/3/2021', '8/4/2021');


-----Triggers------

CREATE OR REPLACE FUNCTION update_vacc_quant_hosp_fnc()

  RETURNS trigger AS

$$

BEGIN

    update hospital set quant_rem = quant_rem + new.s_quantity where h_id = new.s_hospital;

RETURN NEW;

END;

$$

LANGUAGE 'plpgsql';

CREATE OR REPLACE 
TRIGGER update_vacc_quant_hosp 
AFTER INSERT ON supplies
FOR EACH ROW 


---drop

drop table doctor cascade;
drop table hospital cascade;
drop table inventory cascade;
drop table location cascade;
drop table person cascade;
drop table supplies cascade;
drop table vaccinates cascade;
drop table vaccine cascade;