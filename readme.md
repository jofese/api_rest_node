#Simple CRUD API REST NODE.JS

#1. configure .env


 Create a .env with variables and set options database like name, user, password
 
PORT=4000

DB_NAME=

DB_USER=

DB_PASSWORD=

DB_HOST=127.0.0.1



#2. Create table in database

CREATE TABLE `product` (
  `idProduct` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `code` varchar(20) DEFAULT NULL,
  `barcode` varchar(25) DEFAULT NULL,
  `name` text DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `purchasePrice` decimal(12,2) DEFAULT NULL,
  `basePrice` decimal(12,2) DEFAULT NULL,
  `unitPrice` decimal(12,2) DEFAULT NULL,
  `active` tinyint(1) DEFAULT 1,
  `status` tinyint(1) DEFAULT 1,
  `created_by` int(11) DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) DEFAULT 1,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`idProduct`)
); 

#3. install project

npm install

#4. run development

npm run dev
