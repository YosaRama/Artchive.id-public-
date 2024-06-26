# ************************************************************
# Sequel Ace SQL dump
# Version 20046
#
# https://sequel-ace.com/
# https://github.com/Sequel-Ace/Sequel-Ace
#
# Host: artchiveid.cuhc5c4micxh.ap-southeast-1.rds.amazonaws.com (MySQL 8.0.28)
# Database: db_artchive
# Generation Time: 2023-01-26 07:23:33 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE='NO_AUTO_VALUE_ON_ZERO', SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table _ArticleToMedia
# ------------------------------------------------------------

DROP TABLE IF EXISTS `_ArticleToMedia`;

CREATE TABLE `_ArticleToMedia` (
  `A` int NOT NULL,
  `B` int NOT NULL,
  UNIQUE KEY `_ArticleToMedia_AB_unique` (`A`,`B`),
  KEY `_ArticleToMedia_B_index` (`B`),
  CONSTRAINT `_ArticleToMedia_A_fkey` FOREIGN KEY (`A`) REFERENCES `article` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `_ArticleToMedia_B_fkey` FOREIGN KEY (`B`) REFERENCES `media` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `_ArticleToMedia` WRITE;
/*!40000 ALTER TABLE `_ArticleToMedia` DISABLE KEYS */;

INSERT INTO `_ArticleToMedia` (`A`, `B`)
VALUES
	(3,361),
	(3,362);

/*!40000 ALTER TABLE `_ArticleToMedia` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table _ArtworkToGenre
# ------------------------------------------------------------

DROP TABLE IF EXISTS `_ArtworkToGenre`;

CREATE TABLE `_ArtworkToGenre` (
  `A` int NOT NULL,
  `B` int NOT NULL,
  UNIQUE KEY `_ArtworkToGenre_AB_unique` (`A`,`B`),
  KEY `_ArtworkToGenre_B_index` (`B`),
  CONSTRAINT `_ArtworkToGenre_ibfk_1` FOREIGN KEY (`A`) REFERENCES `artwork` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `_ArtworkToGenre_ibfk_2` FOREIGN KEY (`B`) REFERENCES `genre` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `_ArtworkToGenre` WRITE;
/*!40000 ALTER TABLE `_ArtworkToGenre` DISABLE KEYS */;

INSERT INTO `_ArtworkToGenre` (`A`, `B`)
VALUES
	(62,1),
	(63,1),
	(64,1),
	(65,1),
	(2,2),
	(13,2),
	(14,2),
	(17,2),
	(18,2),
	(19,2),
	(20,2),
	(21,2),
	(22,2),
	(23,2),
	(24,2),
	(27,2),
	(30,2),
	(31,2),
	(43,2),
	(44,2),
	(47,2),
	(54,2),
	(66,2),
	(67,2),
	(68,2),
	(69,2),
	(70,2),
	(76,2),
	(77,2),
	(78,2),
	(82,2),
	(83,2),
	(85,2),
	(86,2),
	(87,2),
	(88,2),
	(89,2),
	(93,2),
	(95,2),
	(96,2),
	(97,2),
	(100,2),
	(101,2),
	(114,2),
	(115,2),
	(29,3),
	(41,3),
	(45,3),
	(49,3),
	(50,3),
	(51,3),
	(52,3),
	(55,3),
	(105,3),
	(106,3),
	(107,3),
	(109,3),
	(42,4),
	(90,4),
	(91,4),
	(98,4),
	(99,4),
	(107,6),
	(109,6),
	(105,7),
	(25,8),
	(36,8),
	(37,8),
	(38,8),
	(39,8),
	(40,8),
	(46,8),
	(92,10),
	(116,10),
	(108,11),
	(109,11),
	(26,12),
	(28,12),
	(32,12),
	(56,12),
	(108,12),
	(112,12),
	(34,14),
	(110,14),
	(105,16),
	(106,16),
	(107,16),
	(108,16),
	(109,16),
	(106,17),
	(107,17),
	(108,17),
	(109,17),
	(33,19),
	(35,19),
	(71,19),
	(106,19),
	(107,19),
	(108,19),
	(109,19),
	(113,19),
	(53,20),
	(80,20),
	(81,20),
	(84,20),
	(109,20),
	(57,21),
	(72,21),
	(73,21),
	(74,21),
	(75,21),
	(79,21),
	(102,21),
	(103,21),
	(104,21),
	(105,21),
	(106,21),
	(107,21),
	(108,21),
	(109,21);

/*!40000 ALTER TABLE `_ArtworkToGenre` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table _ArtworkToMedia
# ------------------------------------------------------------

DROP TABLE IF EXISTS `_ArtworkToMedia`;

CREATE TABLE `_ArtworkToMedia` (
  `A` int NOT NULL,
  `B` int NOT NULL,
  UNIQUE KEY `_ArtworkToMedia_AB_unique` (`A`,`B`),
  KEY `_ArtworkToMedia_B_index` (`B`),
  CONSTRAINT `_ArtworkToMedia_ibfk_1` FOREIGN KEY (`A`) REFERENCES `artwork` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `_ArtworkToMedia_ibfk_2` FOREIGN KEY (`B`) REFERENCES `media` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `_ArtworkToMedia` WRITE;
/*!40000 ALTER TABLE `_ArtworkToMedia` DISABLE KEYS */;

INSERT INTO `_ArtworkToMedia` (`A`, `B`)
VALUES
	(62,305),
	(62,306),
	(62,307),
	(63,308),
	(63,309),
	(63,310),
	(64,311),
	(64,312),
	(64,313),
	(65,314),
	(65,315),
	(65,316),
	(66,317),
	(66,318),
	(66,319),
	(67,320),
	(67,321),
	(67,322),
	(68,323),
	(68,324),
	(68,325),
	(69,326),
	(69,327),
	(69,328),
	(70,329),
	(70,330),
	(70,331),
	(71,332),
	(71,333),
	(71,334),
	(72,335),
	(72,336),
	(72,337),
	(73,338),
	(73,339),
	(73,340),
	(74,341),
	(74,342),
	(74,343),
	(75,344),
	(75,345),
	(75,346),
	(82,347),
	(82,348),
	(82,349),
	(83,350),
	(83,351),
	(83,352),
	(84,353),
	(84,354),
	(84,355),
	(90,373),
	(91,377),
	(92,379),
	(98,389),
	(99,391),
	(102,399),
	(105,416),
	(108,420),
	(109,422),
	(110,431),
	(110,432),
	(110,433),
	(112,437),
	(112,438),
	(113,440),
	(113,441);

/*!40000 ALTER TABLE `_ArtworkToMedia` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table _ArtworkToOrder
# ------------------------------------------------------------

DROP TABLE IF EXISTS `_ArtworkToOrder`;

CREATE TABLE `_ArtworkToOrder` (
  `A` int NOT NULL,
  `B` int NOT NULL,
  UNIQUE KEY `_ArtworkToOrder_AB_unique` (`A`,`B`),
  KEY `_ArtworkToOrder_B_index` (`B`),
  CONSTRAINT `_ArtworkToOrder_A_fkey` FOREIGN KEY (`A`) REFERENCES `artwork` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `_ArtworkToOrder_B_fkey` FOREIGN KEY (`B`) REFERENCES `order` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `_ArtworkToOrder` WRITE;
/*!40000 ALTER TABLE `_ArtworkToOrder` DISABLE KEYS */;

INSERT INTO `_ArtworkToOrder` (`A`, `B`)
VALUES
	(103,1),
	(110,3),
	(110,4),
	(110,5);

/*!40000 ALTER TABLE `_ArtworkToOrder` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table _exhibition_media_gallery
# ------------------------------------------------------------

DROP TABLE IF EXISTS `_exhibition_media_gallery`;

CREATE TABLE `_exhibition_media_gallery` (
  `A` int NOT NULL,
  `B` int NOT NULL,
  UNIQUE KEY `_exhibition_media_gallery_AB_unique` (`A`,`B`),
  KEY `_exhibition_media_gallery_B_index` (`B`),
  CONSTRAINT `_exhibition_media_gallery_A_fkey` FOREIGN KEY (`A`) REFERENCES `exhibition` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `_exhibition_media_gallery_B_fkey` FOREIGN KEY (`B`) REFERENCES `media` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table _prisma_migrations
# ------------------------------------------------------------

DROP TABLE IF EXISTS `_prisma_migrations`;

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`)
VALUES
	('0330a76e-4eb9-4667-8403-4ec2936c82c9','42ccecc2001641e141e02ecfe12c2a1d2a7951ea8fdb2868a63c754a6e80290c','2022-03-30 11:06:43.398','20220219112626_biography_text',NULL,NULL,'2022-03-30 11:06:43.179',1),
	('099f3552-c9de-4f5c-9556-e838000b1866','d928988e2ab9dcd73a61446d1973f200ce0c778f37d6feb5b9626385b347b2fc','2022-03-30 11:06:45.908','20220328111935_add_markup_prise',NULL,NULL,'2022-03-30 11:06:45.689',1),
	('10a44cd6-4ac7-4101-885a-35500fd37cc7','e20c8fcce6d8a5bf24cdbcc3e4c64fa44f86d011592570968d92fb0510b096de','2022-05-09 06:51:24.854','20220504125250_updated_slug_exhibition',NULL,NULL,'2022-05-09 06:51:24.610',1),
	('171a0900-65fb-4232-a664-6018d3246313','24aedf07d9ed052590964dc0cc15b492cb689dc270d4cf3b4e6fd608764fe0ea','2022-03-30 11:06:36.293','20211220022343_',NULL,NULL,'2022-03-30 11:06:36.145',1),
	('1780b928-2374-4cc3-8520-36ad91343c49','85c14e539bf0defaf6f85054bd702dd04b9269cd4ef81d8745a3c96306cfd34c','2022-10-08 16:14:04.024','20220828120812_add_transaction_id_on_order_schema',NULL,NULL,'2022-10-08 16:14:03.824',1),
	('1f1dbd8d-a0f5-4490-96b6-f6ff545d82a1','1308bad2b46489bfa01243917a596d76d66a599f64e21b81a9d072be38c2739c','2022-03-30 11:06:41.492','20220122065414_',NULL,NULL,'2022-03-30 11:06:40.389',1),
	('267bd76a-2610-4949-9ed6-259d342f0fbb','fdab91714d3d7eb3e028267d4b81a1fa9c1d30e40455923b264dbff4e925af48','2022-03-30 11:06:37.841','20211229075729_',NULL,NULL,'2022-03-30 11:06:37.675',1),
	('27c16c86-de6f-4634-bf13-79128c517933','f7245f81f0963ce55888bc2771c545c29f7c8a7b893c291ac7172bc052358c44','2022-05-09 06:51:24.561','20220504064906_add_exhibitions',NULL,NULL,'2022-05-09 06:51:23.368',1),
	('29e4c1e1-0865-4f19-a4b2-0c2b54838bbd','ae80af2994760e9aeaf7ea533c4323bdc192992b82d9e11cb0973a5d74f2a5b2','2022-03-30 11:06:40.346','20220109074648_artwork',NULL,NULL,'2022-03-30 11:06:39.784',1),
	('2abc1b2c-1b25-40b1-97a9-f744a1448537','edb79a4fe4c1eb98465482b8b2ce69b089e931992784351207e8f68f7fe59e0b','2022-03-30 11:06:41.833','20220129064212_',NULL,NULL,'2022-03-30 11:06:41.536',1),
	('2f330c86-3cdf-429a-aeb8-efb7fbdba480','864219c7ed5fa2500997a587f0c9202fb279ed03a345dae3da6f99e45b796730','2022-03-30 11:06:45.621','20220315053838_change_fields_upload_by',NULL,NULL,'2022-03-30 11:06:45.067',1),
	('31bf9d17-7d24-49c8-9038-1db91a09a025','ecfcf033d05554cb2b7ea228c7995777cebb5af086391d345a0ee1efa8837f6f','2022-05-22 15:11:04.687','20220522144435_add_short_description_articles',NULL,NULL,'2022-05-22 15:11:04.369',1),
	('32e693a3-d2f9-499d-b037-d68b1b563ae7','a2b8e8f077e1935b78117625480e656ed83df97bd17596b7ef087e1d6b950efc','2022-07-10 11:44:35.404','20220629110742_add_article_gallery',NULL,NULL,'2022-07-10 11:44:34.844',1),
	('36ba5495-8795-4a51-9308-00e02b79b125','bd6280736f637f2ca467f9bbe90785c6ed7dc2351da5105afaf34beddbb5efef','2022-03-30 11:06:44.322','20220315051710_reschema_media',NULL,NULL,'2022-03-30 11:06:44.104',1),
	('3c85b03b-9823-4c1e-913c-592a438935dd','6ffea6bd9ed801c90c950553b038fccc1f838bd53cca99e07ad60a47f056ef92','2022-10-08 16:14:03.474','20220828114454_add_order_id_on_order_schema',NULL,NULL,'2022-10-08 16:14:03.146',1),
	('3dd7a7d3-563f-4cb7-9b1d-3cd3f522cdb8','7d65fc5a4275f4dc809c4b7ecf029b7f12d4e0d5202db59f767c33da37a3fc6e','2022-03-30 11:06:43.135','20220217032505_role_rules',NULL,NULL,'2022-03-30 11:06:42.903',1),
	('44a4e93d-5a9c-447a-9b82-27fc49a90453','c0fcc9ca97e9df6bccdfe2a1c6c23560e663e7fc7ca519b87deca37b135722c2','2022-03-30 11:06:42.352','20220205114733_add_user_status',NULL,NULL,'2022-03-30 11:06:42.191',1),
	('4c496362-3262-4cc1-8ef6-0099e1716bad','020093f6dc04aae189edee7d6023debb2c541e6c4273d162e989bb7a8ba287a0','2022-03-30 11:06:38.204','20211229155633_',NULL,NULL,'2022-03-30 11:06:37.885',1),
	('506bd377-9a6f-44c6-be84-ec95099da670','5bb448232c597c144cd2c311f55cc50fa97407c9a13171156ff32a926c1f118e',NULL,'20230103154949_','A migration failed to apply. New migrations cannot be applied before the error is recovered from. Read more about how to resolve migration issues in a production database: https://pris.ly/d/migrate-resolve\n\nMigration name: 20230103154949_\n\nDatabase error code: 1060\n\nDatabase error:\nDuplicate column name \'description\'\n\nPlease check the query number 1 from the migration file.\n\n   0: sql_migration_connector::apply_migration::apply_script\n           with migration_name=\"20230103154949_\"\n             at migration-engine/connectors/sql-migration-connector/src/apply_migration.rs:104\n   1: migration_core::state::ApplyMigrations\n             at migration-engine/core/src/state.rs:185','2023-01-26 06:57:18.362','2023-01-26 06:57:06.061',0),
	('50d1b138-ee31-40bd-9146-c2cb1d61ba6a','133be9cc8d430c9f1281961c5b30f285476801d8df287c76c504b4d22c4b33b6','2022-03-30 11:06:42.856','20220216114424_user_providers',NULL,NULL,'2022-03-30 11:06:42.673',1),
	('5335f376-94f1-437f-8053-92739eb6a356','3f7443996c124e27b59ba002679ee286f36b51c203f25a3a9077c3e3089bbce4','2022-03-30 11:06:39.087','20211230041006_',NULL,NULL,'2022-03-30 11:06:38.939',1),
	('5b284a16-f73b-4683-b884-26cfa903a300','e5e89e8d7ead4e7e983c1938b1a4ed03961e3b9033c52997a24217f8a667fabb','2022-03-30 11:06:35.112','20211219130241_',NULL,NULL,'2022-03-30 11:06:34.856',1),
	('61b7eb14-1594-42db-a1a0-417a066f939f','ac72dc06c8b3e81697ff1111c2d75fe4366559d7de1c3750ddaafe19d2d68d50','2022-10-08 16:14:03.024','20220824125955_remove_collection_and_add_order',NULL,NULL,'2022-10-08 16:14:01.917',1),
	('6a0099d6-d541-4b77-be4f-2de1a76c2452','66cbfedc31445ff34a5e51d05db7493751e0da99db9069bf84ad67c6f595dd40','2022-03-30 11:06:44.842','20220315053715_media_user_rel',NULL,NULL,'2022-03-30 11:06:44.409',1),
	('6b20fd91-9ca0-4044-ade2-3d6fc46b2248','c423ead0d7b50fb3fc0a9ed962d9500b2f695fb9bf7519b7a907fa0a0db43455','2022-03-30 11:06:36.096','20211219142105_',NULL,NULL,'2022-03-30 11:06:35.905',1),
	('6c3ea53a-77ba-4433-8187-d312ea4aa44b','f1c2685b67683a68905c762668598dce48c1caae8490463b6a80815d0403bc87','2022-03-30 11:06:46.245','20220328112028_change_markup_price_default',NULL,NULL,'2022-03-30 11:06:46.071',1),
	('73d11ba5-558e-4305-beb0-bc8e950ea1d5','a1951bb38d2ee2856bb819d22f483d02d50da78c033ba77f48562aaa3a2625b3','2022-05-11 15:47:01.131','20220511151951_add_slug_articles',NULL,NULL,'2022-05-11 15:47:00.792',1),
	('753172bb-cd29-4a49-bf25-b5b5b870683a','ae4b9471edd49ceabf3ddd540076211cfb933125360f738813f25cf5b8418676','2022-03-30 11:06:35.313','20211219134246_',NULL,NULL,'2022-03-30 11:06:35.156',1),
	('76df4a32-6e07-4d5b-a170-3963169a61fd','127446da98755184ef6f7e1139c240702fe9684b98e629124c65330df18c1101','2022-05-09 06:51:23.323','20220502075110_add_artciles_thumbnail',NULL,NULL,'2022-05-09 06:51:23.071',1),
	('7d0b4f0f-6cb5-4386-94ca-93f58ee11a5b','c230dab8a1d6d25c6a806f3ddb28b84ba2365ade544c5afd07fda2cc4874c94b','2022-03-30 11:06:33.884','20211219104423_',NULL,NULL,'2022-03-30 11:06:33.238',1),
	('85dceb94-5545-4dd5-b24c-c00e85b36104','1eaaec77bdb8260b2c316439fe29664722b3018b107c40795ac63ef3f0d56323','2022-05-09 06:51:23.022','20220501141701_update_article',NULL,NULL,'2022-05-09 06:51:22.830',1),
	('87054941-6f6a-4ac0-8d4c-eb62f2a28af0','a280c13c3cc3fbe1c5b23b1f325942aba1b0be7bfa5025738c3cc321f05ec630','2022-06-13 06:00:06.718','20220609024843_rename_payment_table',NULL,NULL,'2022-06-13 06:00:06.263',1),
	('8d0c78a6-d046-41ad-9dc8-b00ad34531f0','8085c04f434aeb24103b65860b82f8189bc38772a151cd479bf1ea938b165160','2022-03-30 11:06:43.630','20220220132031_user_birth_date',NULL,NULL,'2022-03-30 11:06:43.443',1),
	('90cf1b2d-9938-488f-b475-38d01e7bc3ee','5bb448232c597c144cd2c311f55cc50fa97407c9a13171156ff32a926c1f118e','2023-01-26 07:05:42.800','20230103154949_',NULL,NULL,'2023-01-26 07:05:42.463',1),
	('940edfaf-2590-4789-9a18-fbdc3a13ff68','12009b48b25fba8eabe839606e57ebec72612877f9a260600836578aeb049338','2022-03-30 11:06:32.542','20211219035814_',NULL,NULL,'2022-03-30 11:06:32.308',1),
	('95b353bb-53cd-44b6-9a83-99740e4cad8f','003291f4cdb75bbfd69d2d5e1fff40374b107faf0bd961383d4efe1a518d5e21','2022-03-30 11:06:37.630','20211229075118_',NULL,NULL,'2022-03-30 11:06:37.258',1),
	('9784fc69-ca66-442c-a734-72c640239878','dc97cd0ca4337a74953e1cce747f5782eaecd29d522fb9fcf0c03fe0127ff0e8',NULL,'20230103154949_','A migration failed to apply. New migrations cannot be applied before the error is recovered from. Read more about how to resolve migration issues in a production database: https://pris.ly/d/migrate-resolve\n\nMigration name: 20230103154949_\n\nDatabase error code: 1060\n\nDatabase error:\nDuplicate column name \'description\'\n\nPlease check the query number 1 from the migration file.\n\n   0: sql_migration_connector::apply_migration::apply_script\n           with migration_name=\"20230103154949_\"\n             at migration-engine/connectors/sql-migration-connector/src/apply_migration.rs:104\n   1: migration_core::state::ApplyMigrations\n             at migration-engine/core/src/state.rs:185','2023-01-26 07:00:40.506','2023-01-26 07:00:07.818',0),
	('a030d071-be5d-4704-a0bb-61ca1d7e7127','c0645b9fad031b2ac958639e13bfcc9d0095d06d4ec7d07bf9af73bb67b663d7','2022-06-13 06:00:06.179','20220609024745_add_payment_history',NULL,NULL,'2022-06-13 06:00:05.682',1),
	('a03fa7f9-a4a3-4172-8b6f-76eb91ee04ae','f694bf657319be29a2b9826eba6e56edfc468ee389f9bcbbcbf573c3db44d255','2022-03-30 11:06:38.690','20211230030738_',NULL,NULL,'2022-03-30 11:06:38.249',1),
	('a05f61f6-14d4-4f27-a707-e7029730211b','5bb448232c597c144cd2c311f55cc50fa97407c9a13171156ff32a926c1f118e',NULL,'20230103154949_','A migration failed to apply. New migrations cannot be applied before the error is recovered from. Read more about how to resolve migration issues in a production database: https://pris.ly/d/migrate-resolve\n\nMigration name: 20230103154949_\n\nDatabase error code: 1060\n\nDatabase error:\nDuplicate column name \'description\'\n\nPlease check the query number 1 from the migration file.\n\n   0: sql_migration_connector::apply_migration::apply_script\n           with migration_name=\"20230103154949_\"\n             at migration-engine/connectors/sql-migration-connector/src/apply_migration.rs:104\n   1: migration_core::state::ApplyMigrations\n             at migration-engine/core/src/state.rs:185','2023-01-26 06:56:50.980','2023-01-25 12:32:25.175',0),
	('a1b5bc19-5049-42d5-a311-8237d2594465','dbf8ba87638ab95bb4f4c924a76cd34121d447b0a127c7d5284be5c4238496c4','2022-03-30 11:06:35.860','20211219134955_',NULL,NULL,'2022-03-30 11:06:35.355',1),
	('a20c9f93-57c3-4210-ae12-7688adc69e92','791c45aa94ea6d6a2e1c32d58b3f1ef48ba50fc41f30e98437bb588156bd5bb9','2022-05-09 06:51:26.956','20220505150424_updated_artist_exhibition_and_artwork_exhibition_relation',NULL,NULL,'2022-05-09 06:51:26.544',1),
	('a3a68c85-fa7f-4c10-846c-ebd50b8d4352','9ebd09adc194c590281255a9a274e1226ed7247885326bfe47bbe42e033331cc','2022-03-30 11:06:36.968','20211229073555_',NULL,NULL,'2022-03-30 11:06:36.534',1),
	('a50d981e-5771-4521-a4df-85cf10d811b1','5d310337a271868a23e6223173e659565c4db1e609c6f35590a711ff67e54671','2022-03-30 11:06:34.812','20211219130049_',NULL,NULL,'2022-03-30 11:06:33.934',1),
	('a5b1b951-8eae-4581-ba93-4a9cc81f673f','5bb448232c597c144cd2c311f55cc50fa97407c9a13171156ff32a926c1f118e',NULL,'20230103154949_','A migration failed to apply. New migrations cannot be applied before the error is recovered from. Read more about how to resolve migration issues in a production database: https://pris.ly/d/migrate-resolve\n\nMigration name: 20230103154949_\n\nDatabase error code: 1060\n\nDatabase error:\nDuplicate column name \'description\'\n\nPlease check the query number 1 from the migration file.\n\n   0: sql_migration_connector::apply_migration::apply_script\n           with migration_name=\"20230103154949_\"\n             at migration-engine/connectors/sql-migration-connector/src/apply_migration.rs:104\n   1: migration_core::state::ApplyMigrations\n             at migration-engine/core/src/state.rs:185','2023-01-26 07:05:36.441','2023-01-26 07:03:15.864',0),
	('a87ef5c7-61ed-4e97-bc02-6300b8d7111a','492b481606cf58b09bcdbfa5eb43a7d78b03d5e37d0d560a2beadd3cd711dfdd','2022-03-30 11:06:43.826','20220302172706_genre_unique_title',NULL,NULL,'2022-03-30 11:06:43.672',1),
	('af24155b-f4c8-4308-bba8-576544ecb258','48d7821b85c4f24e950676da03e2c753633bda4db81d555a7df105977b48652a','2022-12-23 17:41:47.393','20221223160630_add_curatorial_pick_on_artwrok',NULL,NULL,'2022-12-23 17:41:46.404',1),
	('b07c4d19-9914-4221-8be4-038c578c48a2','c29ecb571c29b321cd4cd10ba4e9e1ca06d27cf61c95410576d589710a8b0e6e','2022-10-08 16:14:04.284','20220828123743_add_status_on_cart_schema',NULL,NULL,'2022-10-08 16:14:04.085',1),
	('b097ceea-d1be-4c17-b68c-b0fa5526b4d4','2f03302b6c72d9e972e8d08cbeb6eb3430f362228b8b2edc0e03a8bb9ade86f9','2022-10-08 16:14:04.584','20220901063047_change_not_require_for_notes_on_order',NULL,NULL,'2022-10-08 16:14:04.345',1),
	('b39f07a1-c475-4d07-90cb-ada88459f94b','1816a547b42ac631bde18c4d24f7458666b5276c9af6ba3329522a417ebf46ae','2022-03-30 11:06:37.215','20211229074239_',NULL,NULL,'2022-03-30 11:06:37.011',1),
	('b5090b38-8f37-4a61-967d-9416ed6c686f','b688acad3102c808cb2d0e898894bc5093db38ccc212e9519432fdf4f4c78f9e','2022-04-01 09:55:52.768','20220401095349_make_nullable_artwork_material',NULL,NULL,'2022-04-01 09:55:52.442',1),
	('b54340db-d645-43c1-af30-1fbda249e295','d9ff4c8fded0343fb0a016e753e2e0d7ac9f3a96da71e218a48d563d602ee084','2022-05-09 06:51:22.741','20220501122610_add_article',NULL,NULL,'2022-05-09 06:51:22.374',1),
	('ba0ea1bb-2939-4f96-a895-e1dc9734481d','d2cfb27468ae3b44ada66fe0aa9c217b0485c822f33bdac53d31e67b0fefdf83','2022-05-09 16:03:06.767','20220509150908_update_artwork_material',NULL,NULL,'2022-05-09 16:03:06.400',1),
	('be4c8ec9-1721-4471-bd0f-279e5c02fadf','82bc1c60d82ce6090b13f2e412badbe7ffb24776d097b1b31eb9300a63be1aba','2022-11-02 16:27:48.759','20221102155623_add_is_delete_column_on_artwork',NULL,NULL,'2022-11-02 16:27:48.402',1),
	('c76b66fc-1be5-48be-a200-228d1668cc47','4596064f062af2394e6ac16f27da0970f88c50ba54225d343c9dfb25daa3bfb9','2022-10-08 16:14:03.754','20220828115507_add_notes_on_order_schema',NULL,NULL,'2022-10-08 16:14:03.536',1),
	('cc0b58eb-bcb1-402a-9489-d88a2cb98154','cb21c87dcc74c5bc926007608c92c3684e15e33a3d883d31ded5f9111f2c2b65','2023-01-26 07:01:25.315','20230122103541_add_phone_number_user',NULL,NULL,'2023-01-26 07:01:24.857',1),
	('cd483dc8-1987-4fa7-986b-483ee48ee7fd','b682281c4582c5ece3507b84965bf033532b4b70501523294faf724b3d1c67cd','2022-03-30 11:06:39.302','20211230070924_',NULL,NULL,'2022-03-30 11:06:39.134',1),
	('d232c40f-273d-4ab5-b45f-b92990d3d533','e6e9e63ec086dc804c5582162aa72aa40868cc8b5a082048414cbd66bb9a3c80','2022-05-09 06:51:26.039','20220505035042_updated_artist_on_exhibition',NULL,NULL,'2022-05-09 06:51:25.741',1),
	('d7ecf265-1fe9-4f39-bb35-7440ef93fb3a','35520759e6206c2e2a636b7f3166e90fadef1948a64dedb434efc56ae0262abf','2022-03-30 11:06:33.190','20211219093630_',NULL,NULL,'2022-03-30 11:06:32.971',1),
	('dafb9e54-5205-4b75-8e3a-1c1694f32812','64f361b3f6957851abd8c24d724070810e8a986baa2b37f17431b3933d50dd8f','2022-05-09 06:51:25.696','20220505031818_update_artist_on_exhibition_schema',NULL,NULL,'2022-05-09 06:51:25.358',1),
	('dceff80e-21df-4dc0-b11d-17600a74303e','f2106a20f17b0bdbaa0519433ea153c026626340bc69f69ea8045909bcf63791','2022-05-09 06:51:27.167','20220506152412_add_exhibition_on_art_status',NULL,NULL,'2022-05-09 06:51:27.002',1),
	('e169cd4e-b43b-4968-9f07-82f87d16ec99','4ea3b557778159c2c0d29589c3e1994512079a5710f46dd527e9c9a3ed4e9b94','2022-03-30 11:06:42.147','20220130162511_add_user_artwork_slug',NULL,NULL,'2022-03-30 11:06:41.881',1),
	('e41d50e6-9428-4daa-9cb5-e80bd803b5f5','d7a2cbd42bfd0efaa6aba43827b3b2ea5041f65a1abda9db0f3af18ffb65aa01','2022-05-09 06:51:25.310','20220505022200_update_exhibition_created_by_updated_by',NULL,NULL,'2022-05-09 06:51:24.900',1),
	('e8575ce5-2a1b-4146-a2bc-f788c65a6deb','f215db5070180c1704350228f7606d478d76b182dd5517cae11ceaf54aa1b8e7','2022-03-30 11:06:39.732','20220109074014_',NULL,NULL,'2022-03-30 11:06:39.563',1),
	('e8a4c72b-ef81-463a-a5a8-780a88866a6b','5ae76c78381ff9080a84515f1fbf3594ba7e5af874c5844a1e2690d6e5cd5503','2022-03-30 11:06:36.492','20211220032815_',NULL,NULL,'2022-03-30 11:06:36.335',1),
	('e9ee54bb-7958-4d55-b25b-6909244d5557','e1fd70fdd278c22e7b0d03b0cb1987f2ae47d26ffa47af6cb5a247c9ecbc0c1f','2022-03-30 11:06:39.514','20220101125640_',NULL,NULL,'2022-03-30 11:06:39.348',1),
	('ebc48b5b-c0fe-497d-bd7d-c15cce7f6a45','14e470bff47336f448bb488494f0274481da4bbe2323413854e4b6c909d13647','2022-03-30 11:06:32.928','20211219093501_',NULL,NULL,'2022-03-30 11:06:32.624',1),
	('f19435ce-0713-42d8-8f20-e3fa77833236','2f49abf403aa0d0cd14c88a4319c2cf42fb251a4b74e9b683cccdd3f298946b1','2022-05-09 06:51:26.497','20220505043229_updated_artwork_on_exhibition_relations',NULL,NULL,'2022-05-09 06:51:26.085',1),
	('f2a62479-3404-4851-86b4-d9f2f2bbd958','3428034de47e499602c20f4c1aa4964543b1cad50133f410ba4476a18ceb2488','2022-10-08 16:14:04.894','20220922144149_change_status_order',NULL,NULL,'2022-10-08 16:14:04.645',1),
	('f3c8da97-eb88-465e-9631-a6955763c29c','04721eec3c07af0465fdfa953b93d150244845d126a82afea7cf4b3dfc390d5a','2022-03-30 11:06:44.060','20220309155918_artwork_status_edit',NULL,NULL,'2022-03-30 11:06:43.894',1),
	('f679f72b-a919-4134-bb5a-4e3dd46d0fcd','c05462eb9cacce4c4b7f985f6ebaa3b4724e947bb572733537c6db434266e5f4','2022-08-12 10:28:39.179','20220811094734_update_cart',NULL,NULL,'2022-08-12 10:28:38.249',1),
	('f6c1284a-d5b5-4ce4-8212-7954f0d1da8c','dd603e76379221ba91b84400f79b4f4140b7332e2643184572f54a373672def6','2022-03-30 11:06:42.627','20220216113423_password_rules',NULL,NULL,'2022-03-30 11:06:42.395',1),
	('fa52e7c4-61d2-4a6e-9ec9-e71ccab32ea6','91d09d914bd4a9189d5db42b0060ef0b78817678565c252a934adc6ffe05fb4b','2022-04-01 09:49:48.575','20220401094846_add_enum_artwork_material',NULL,NULL,'2022-04-01 09:49:48.269',1),
	('fa9cb8ae-66f8-483a-88de-c2f736978e93','2b9ffa7480a28bdbc32a2a4016e508c95644058fee1097bd5cd8a6d6d86d0b4a','2022-03-30 11:06:38.895','20211230040314_',NULL,NULL,'2022-03-30 11:06:38.735',1);

/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table article
# ------------------------------------------------------------

DROP TABLE IF EXISTS `article`;

CREATE TABLE `article` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('PUBLISHED','DRAFT') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'DRAFT',
  `author` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_id` int NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_id` int DEFAULT NULL,
  `updated_at` datetime(3) DEFAULT NULL,
  `thumbnail_id` int NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_description` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`),
  UNIQUE KEY `article_slug_key` (`slug`),
  KEY `article_created_id_fkey` (`created_id`),
  KEY `article_updated_id_fkey` (`updated_id`),
  KEY `article_thumbnail_id_fkey` (`thumbnail_id`),
  CONSTRAINT `article_created_id_fkey` FOREIGN KEY (`created_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `article_thumbnail_id_fkey` FOREIGN KEY (`thumbnail_id`) REFERENCES `media` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `article_updated_id_fkey` FOREIGN KEY (`updated_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;

INSERT INTO `article` (`id`, `title`, `content`, `status`, `author`, `created_id`, `created_at`, `updated_id`, `updated_at`, `thumbnail_id`, `slug`, `short_description`)
VALUES
	(2,'The First Indonesian Drawing Exhibition','<p>Drawing exhibition is a national drawing day initiated by the Indonesian Drawing Forum and then held by the Jepun Artfriends. This drawing exhibition is the first time in Indonesia and is held in Bali. The opening of the exhibition will be on 15th May, 2022 and the exhibition will end on 29th May, 2022. A total of 7 artists are involved in the drawing exhibition which takes place at K Sudana Gallery, Ubud, Bali. The seven artists who initiated this exhibition are I Made Wiradana, I Made Duatmika, I Made Romi Sukadana, Vincensius Dedy Reru, I Made A Palguna, I Kadek Dwi Armika, and Pande Wijaya Suta who brought more than two masterpieces to be exhibited. The drawing exhibition is held to commemorate the national education day which falls on May 2. Drawing exhibitions are closely related to the world of education. When a child is drawing, there is a process of cognitive development and the child\'s imagination. This is related to educational theory, children are learning with a visual learning style, which wants to visualize their imagination.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p>A little explanation about Jepun Artfriends as the organizer. Jepun Artfriends is an artist collective formed around a shared passion for fishing. When two passions collide, an extraordinary creation is born. Painting in nature, on ships, and on the beach are just a few of the activities pursued. The objective and mission of Jepun Artfriends is to strengthen artist relationships while also offering a relaxing environment after a long day in the studio. The notion of Jepun Artfriends is to paint together in the middle of nature. Life on Earth receives its energy from nature. By painting in nature, Jepun Artfriends attempt to communicate nature. Furthermore, the goal of Jepun Artfriends is to foster brotherhood and camaraderie among artists.</p><p>They try to make works with linear lines, pencil strokes, or regular dense charcoal nicks so that the impression of the drawing still appears. Even though there are several works that use new media to translate elements - the drawing element itself. Like the use of wire or iron as the embodiment of a line. It is a unique thing. Their experience, artistic character, and process are still put forward even in the drawing form. Scratches and lines become a momentary overflow of their emotions about something. They are no longer talking about drawing literally but have entered the complexity of the artist. Where precisely it raises the attraction and new questions emerge. Relevance and new possibilities for the development of the drawing itself. Of course, a challenge isn\'t it? The May declaration of the month of National Drawing by the Indonesian Drawing Forum (FDI) coincided with National Education Day which is on 2nd of May. However, since May 2nd this year coincides with Eid al-Fitr, the declaration event will be carried out simultaneously throughout Indonesia on May 14th for that reason. But for the future National Drawing Day is still commemorated on May 2 every year. Drawing will still find its fun, its uniqueness, and its abilities in a work. Where “tension” and “dialogue” are experienced by the art connoisseur and the artist.</p>','PUBLISHED','I Wayan Arnata',1,'2022-06-17 12:52:37.140',1,'2022-06-20 07:28:52.476',359,'the-first-indonesian-drawing-exhibition','This article is about the first Indonesian Drawing Exhibition, held by Jepun Artfriends on 15th until 29th May 2022'),
	(3,'Bali Art Festival 2022','<p>Bali is the island of a thousand cultures and arts with its own characteristics and uniqueness. To promote Bali’s arts and cultures, the provincial government of Bali holds a one-month-long cultural expo called Pesta Kesenian Bali (Bali Art Festival). It’s a much-anticipated event held every year at Denpasar. Since its inception in 1979, the Bali Arts Festival has been a part of Bali\'s identity. Its primary goal is to both maintain and promote Balinese cultural values. Both for tourists and for the younger generations. There will be parades, musical performances, dancing performances, and a slew of other events. In honor of the art and culture festival. Representatives from every Bali district and town are among the participants. Thousands of artists are proud to be a part of this massive event. Millions more, including locals and visitors, participate as spectators. Visitors will see customs from other Indonesian provinces in addition to Balinese arts. During the 2018 edition of the tournament. Representatives from Japan, Thailand, and India also participated in the art exhibition.</p><p>This year, Bali Art Festival held from 12 June until 10 July 2022 and kicked off the return of their full live program with an extraordinary parade on the streets of Denpasar, in front of the Bajra Sandhi Monument. The festival has a different topic each year in order to explore different creative concepts or cultural components, which lends some diversity to this cultural spectacle. \"Danu Kerthi: Huluning Amreta\" (Glorifying the Water of the Source of Life) is the subject for 2022, and it aims to raise awareness about the function and value of water in Bali. The majority of the events and performances take place at Denpasar\'s Taman Werdhi Budaya Arts Center, although the schedule also includes visits to the Indonesian Institution of Arts (ISI) Denpasar and the Bajra Sandhi Monument, among other locations in the Bali city. Painters and sculptors from all across the island were encouraged to contribute work based on the festival\'s subject of water as a source of life and creation. The works of 121 artists (47 hand-selected, 68 by open invitation) are now on show in the sites named. The art styles shown range from Kamasan, Batuan, Padangtegal, Pengosekan, Ubud, Keliki, Young Artist, Nyuh Kuning, Mas, Kerambitan, and Nagasepaha, demonstrating the diversity of Bali.</p>','PUBLISHED','I Wayan Arnata',1,'2022-06-21 06:01:54.560',1,'2022-07-10 13:10:16.292',360,'bali-art-festival-2022','This year, Bali Art Festival held on 12 June until 10 July 2022 and kicked off the return of their full live program with an extraordinary parade on the streets of Denpasar, in front of the Bajra Sandhi Monument');

/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table artists_on_exhibitions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `artists_on_exhibitions`;

CREATE TABLE `artists_on_exhibitions` (
  `exhibition_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`exhibition_id`,`user_id`),
  UNIQUE KEY `artists_on_exhibitions_exhibition_id_user_id_key` (`exhibition_id`,`user_id`),
  KEY `artists_on_exhibitions_user_id_fkey` (`user_id`),
  CONSTRAINT `artists_on_exhibitions_exhibition_id_fkey` FOREIGN KEY (`exhibition_id`) REFERENCES `exhibition` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `artists_on_exhibitions_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `artists_on_exhibitions` WRITE;
/*!40000 ALTER TABLE `artists_on_exhibitions` DISABLE KEYS */;

INSERT INTO `artists_on_exhibitions` (`exhibition_id`, `user_id`)
VALUES
	(1,6),
	(1,27),
	(1,29),
	(1,31),
	(1,32),
	(1,50),
	(1,51);

/*!40000 ALTER TABLE `artists_on_exhibitions` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table artwork
# ------------------------------------------------------------

DROP TABLE IF EXISTS `artwork`;

CREATE TABLE `artwork` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sku` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `artist_id` int NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `year` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `material` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` enum('UNIQUE','EDITION') COLLATE utf8mb4_unicode_ci NOT NULL,
  `height` int NOT NULL,
  `price` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('SOLD','DRAFT','PUBLISH','EDIT','EXHIBITION') COLLATE utf8mb4_unicode_ci NOT NULL,
  `approve` tinyint(1) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) DEFAULT NULL,
  `width` int NOT NULL,
  `media_cover_id` int NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `markup_price` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  `curatorial_pick` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `artwork_sku_key` (`sku`),
  UNIQUE KEY `artwork_slug_key` (`slug`),
  KEY `artist` (`artist_id`),
  KEY `artwork_media_cover_id_fkey` (`media_cover_id`),
  CONSTRAINT `artwork_artist_id_fkey` FOREIGN KEY (`artist_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `artwork_media_cover_id_fkey` FOREIGN KEY (`media_cover_id`) REFERENCES `media` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `artwork` WRITE;
/*!40000 ALTER TABLE `artwork` DISABLE KEYS */;

INSERT INTO `artwork` (`id`, `sku`, `artist_id`, `title`, `year`, `material`, `description`, `type`, `height`, `price`, `status`, `approve`, `createdAt`, `updatedAt`, `width`, `media_cover_id`, `slug`, `markup_price`, `isDeleted`, `curatorial_pick`)
VALUES
	(2,'ARTCHIVE/USR-6/ART-2/30032022',6,'Perkawinan','2022','ACRYLIC_ON_CANVAS','Manusia yadnya','UNIQUE',80,'8000000','PUBLISH',1,'2022-03-30 14:38:43.673','2022-04-01 16:51:04.058',60,8,'perkawinan','11200000',0,0),
	(13,'ARTCHIVE/USR-6/ART-3/02042022',6,'Nyanyian ikan menuju mandalika','2022','ACRYLIC_ON_CANVAS','Sirkuit','EDITION',80,'8000000','PUBLISH',1,'2022-04-01 16:11:25.470','2022-04-01 16:51:10.939',60,29,'nyanyian-ikan-menuju-mandalika','11200000',0,0),
	(14,'ARTCHIVE/USR-6/ART-14/02042022',6,'Ngeraja singa','2022','ACRYLIC_ON_CANVAS','Manusia yadnya','EDITION',50,'4000000','PUBLISH',1,'2022-04-01 16:16:24.915','2022-04-01 16:51:15.285',40,30,'ngeraja-singa','5600000',0,0),
	(17,'ARTCHIVE/USR-6/ART-17/02042022',6,'Rumah kita III','2022','ACRYLIC_ON_CANVAS','Keluarga kecil','EDITION',40,'4000000','PUBLISH',1,'2022-04-02 04:53:40.750','2022-04-02 05:42:59.188',40,45,'rumah-kita-iii','5600000',0,0),
	(18,'ARTCHIVE/USR-6/ART-18/04042022',6,'Lagu Lama','2022','ACRYLIC_ON_CANVAS','Lagu ahmat albar','EDITION',40,'4000000','PUBLISH',1,'2022-04-04 00:08:34.679','2022-04-04 15:54:51.499',40,115,'lagu-lama','5600000',0,0),
	(19,'ARTCHIVE/USR-6/ART-19/04042022',6,'Lautan Warna Di Pura Besakih','2022','ACRYLIC_ON_CANVAS','Maturan','EDITION',80,'8000000','PUBLISH',1,'2022-04-04 06:15:06.827','2022-04-06 17:17:27.097',60,133,'lautan-warna-di-pura-besakih','11200000',0,0),
	(20,'ARTCHIVE/USR-6/ART-20/06042022',6,'Saraswati','2022','ACRYLIC_ON_CANVAS','Piodalan ilmu pengetahwan','EDITION',80,'8000000','PUBLISH',1,'2022-04-06 14:10:22.809','2022-04-06 17:17:40.556',60,134,'saraswati','11200000',0,0),
	(21,'ARTCHIVE/USR-6/ART-21/06042022',6,'Rumah Kita','2022','ACRYLIC_ON_CANVAS','Keluarga kecil ku','EDITION',50,'4000000','PUBLISH',1,'2022-04-06 14:12:54.592','2022-04-06 17:17:56.111',40,135,'rumah-kita','5600000',0,0),
	(22,'ARTCHIVE/USR-6/ART-22/07042022',6,'Rumah Kita Ii','2022','ACRYLIC_ON_CANVAS','Keluarga kecil ku','EDITION',50,'4000000','PUBLISH',1,'2022-04-06 23:03:43.042','2022-04-07 02:40:49.203',40,174,'rumah-kita-ii','5600000',0,0),
	(23,'ARTCHIVE/USR-6/ART-23/07042022',6,'Joging','2022','ACRYLIC_ON_PAPER','Olahraga pagi','EDITION',45,'3000000','PUBLISH',1,'2022-04-06 23:10:16.213','2022-04-07 02:41:53.677',35,175,'joging','4200000',0,0),
	(24,'ARTCHIVE/USR-27/ART-24/07042022',27,'New Energy','2022','MIXED_MEDIA','Pigur orimitive menjadi sumber insfirasi','EDITION',120,'20000000','SOLD',1,'2022-04-07 11:21:32.905','2022-04-07 11:24:24.967',100,176,'new-energy','28000000',0,0),
	(25,'ARTCHIVE/USR-30/ART-25/07042022',30,'Cat','2021','OIL_ON_CANVAS','Kucing binatang lembut namun keras','EDITION',70,'3000000','PUBLISH',1,'2022-04-07 11:25:07.724','2022-04-07 11:25:31.096',60,180,'cat','4200000',0,0),
	(26,'ARTCHIVE/USR-28/ART-25/07042022',28,'Kesayangan','2022','ACRYLIC_ON_CANVAS','Peliharaan kesayangan','EDITION',50,'2000000','PUBLISH',1,'2022-04-07 11:28:20.025','2022-04-07 11:30:51.558',50,185,'kesayangan','2800000',0,0),
	(27,'ARTCHIVE/USR-27/ART-26/07042022',27,'Primitive Series','2022','MIXED_MEDIA','Sederhana,simple menjadi subyak metter','EDITION',80,'15000000','PUBLISH',1,'2022-04-07 11:29:20.580','2022-04-07 11:29:46.760',100,186,'primitive-series','21000000',0,0),
	(28,'ARTCHIVE/USR-29/ART-28/07042022',29,'Kan Ku Doakan Selalu, Merah Putihku Berkibarlah Selamanya','2021','OTHER','Doa sang bapak bangsa','EDITION',140,'12000000','PUBLISH',1,'2022-04-07 11:33:12.934','2022-04-08 00:46:52.220',120,182,'kan-ku-doakan-selalu-merah-putihku-berkibarlah-selamanya','16800000',0,0),
	(29,'ARTCHIVE/USR-26/ART-25/07042022',26,'Gerak Aksara 4','2022','MIXED_MEDIA','Tulisan sastra bali dalam rerajahan di yakini mempuyai suatu energi..yang menginfirasi karya saya. ','UNIQUE',90,'5000000','PUBLISH',1,'2022-04-07 11:35:57.767','2022-04-07 12:21:33.376',80,183,'gerak-aksara-4','7000000',0,0),
	(30,'ARTCHIVE/USR-27/ART-30/07042022',27,'Strong Man','2022','MIXED_MEDIA','Figur laki laki yang kuat,kekar dan gentleman','UNIQUE',100,'20,000,000','PUBLISH',1,'2022-04-07 11:41:33.974','2023-01-02 14:50:17.772',120,188,'strong-man','28000000',0,1),
	(31,'ARTCHIVE/USR-27/ART-31/07042022',27,'Having Fun','2022','MIXED_MEDIA','happy, relaxed without limits','UNIQUE',80,'15000000','PUBLISH',1,'2022-04-07 11:47:58.486','2022-04-07 12:25:59.983',100,191,'having-fun','21000000',0,0),
	(32,'ARTCHIVE/USR-28/ART-32/07042022',28,'Matahariku','2022','ACRYLIC_ON_CANVAS','Matahari sebagai semangat kehidupan','UNIQUE',100,'9000000','PUBLISH',1,'2022-04-07 11:54:30.126','2022-04-07 12:29:49.250',100,196,'matahariku','12600000',0,0),
	(33,'ARTCHIVE/USR-32/ART-33/07042022',32,'Penjaga #1','2021','ACRYLIC_ON_CANVAS','Bedogol merupakan penjaga kesucian pura agar tidak mengganggu manusia dalam menjalankan upacara\n','EDITION',60,'5000000','PUBLISH',1,'2022-04-07 12:21:13.742','2022-04-17 22:51:22.809',80,199,'penjaga-1','7000000',0,0),
	(34,'ARTCHIVE/USR-29/ART-34/07042022',29,'Pemandangan Alam Depan Rumah','2021','OTHER','Tentang polusi sampah dan ketidak pedulian masyarakat dalam membuang sampah ','UNIQUE',120,'13000000','PUBLISH',1,'2022-04-07 12:41:12.751','2022-04-07 13:03:38.321',150,206,'pemandangan-alam-depan-rumah','18200000',0,0),
	(35,'ARTCHIVE/USR-32/ART-35/07042022',32,'Penjaga #2','2021','ACRYLIC_ON_CANVAS','Bedogol merupakan penjaga kesucian pura agar tidak mengganggu manusia dalam menjalankan upacara\n','EDITION',60,'5000000','PUBLISH',1,'2022-04-07 13:34:55.166','2022-04-07 13:58:31.776',80,207,'penjaga2','7000000',0,0),
	(36,'ARTCHIVE/USR-30/ART-36/08042022',30,'Seri Cat','2021','OIL_ON_CANVAS','Kucing adalah binatang lembut namun keras','EDITION',70,'3000000','PUBLISH',1,'2022-04-08 01:55:34.153','2022-04-08 11:34:38.826',60,212,'seri-cat','4200000',0,0),
	(37,'ARTCHIVE/USR-30/ART-37/08042022',30,'Seri Cat','2021','OIL_ON_CANVAS','Kucing adalah binatang yang lembut namun keras','EDITION',70,'3000000','PUBLISH',1,'2022-04-08 02:04:22.438','2022-04-08 11:34:59.842',60,213,'seri-cat-2','4200000',0,0),
	(38,'ARTCHIVE/USR-30/ART-38/08042022',30,'Seri Kucing','2021','OIL_ON_CANVAS','Kucing adalah binatang yang lembut namun keras','EDITION',70,'3000000','PUBLISH',1,'2022-04-08 02:07:05.960','2022-04-08 11:35:15.440',60,214,'seri-kucing','4200000',0,0),
	(39,'ARTCHIVE/USR-30/ART-39/08042022',30,'Seri Kucing','2021','OIL_ON_CANVAS','Kucing adalah binatang yang lembut namun keras','EDITION',70,'3000000','PUBLISH',1,'2022-04-08 02:10:17.571','2022-04-08 11:35:51.691',60,215,'seri-kucing-2','4200000',0,0),
	(40,'ARTCHIVE/USR-30/ART-40/08042022',30,'Optimis','2021','OIL_ON_CANVAS','Tetat optimis terus berkarya walau pariwisata khususnya di bali lagi down karena pandemi','UNIQUE',50,'2500000','PUBLISH',1,'2022-04-08 02:19:59.429','2022-04-08 11:36:02.344',40,216,'optimis','3500000',0,0),
	(41,'ARTCHIVE/USR-31/ART-41/08042022',31,'After Rain','2021','ACRYLIC_ON_CANVAS','Menangkap kesan dari alam','EDITION',50,'4500000','PUBLISH',1,'2022-04-08 03:15:17.140','2022-04-08 11:36:21.028',55,217,'after-rain','6300000',0,0),
	(42,'ARTCHIVE/USR-31/ART-42/08042022',31,'Terasering ','2021','ACRYLIC_ON_CANVAS','Menangkap kesan dari alam ','EDITION',50,'4500000','PUBLISH',1,'2022-04-08 03:28:00.938','2022-04-08 11:36:32.185',55,218,'terasering','6300000',0,0),
	(43,'ARTCHIVE/USR-6/ART-43/10042022',6,'Ngoding','2022','ACRYLIC_ON_PAPER','Aktifitas di rumah,dgn kesibukan masing2','EDITION',40,'3000000','PUBLISH',1,'2022-04-10 02:04:31.563','2022-04-10 02:28:53.198',30,220,'ngoding','4200000',0,0),
	(44,'ARTCHIVE/USR-6/ART-44/10042022',6,'Potret Diri','2022','ACRYLIK_INK_ON_PAPER','gambar potret dgn warna hitam menyimbulkan ketenangan.','EDITION',40,'3500000','EXHIBITION',1,'2022-04-10 02:09:31.288','2022-05-10 03:21:45.874',40,221,'potret-diri','4900000',0,0),
	(45,'ARTCHIVE/USR-26/ART-45/10042022',26,'Pencapaian Kemakmuran','2021','MIXED_MEDIA','Back roud lukisan ini mengisyaratkan beragam bentuk dan jenis propesi setiap orang.. Yang semuanya ingin sukses dan makmur dalam hidupnya si simbulkan dengan warna emas yang menjulang keatas.di tampilkan dengan gaya tiga dimensi. Bayangan  gelap dalam kehidupan kian di tinggalkan.','UNIQUE',130,'20000000','PUBLISH',1,'2022-04-10 08:27:38.969','2022-04-10 11:05:18.257',180,225,'pencapaian-kemakmuran','28000000',0,0),
	(46,'ARTCHIVE/USR-30/ART-46/11042022',30,'Only Play Game','2022','OIL_ON_CANVAS','Jangan sampai generasi muda kebablasan main game lupa belajar ','UNIQUE',100,'7500000','PUBLISH',1,'2022-04-11 02:33:51.805','2022-04-11 13:01:34.166',99,226,'only-play-game','10500000',0,0),
	(47,'ARTCHIVE/USR-6/ART-47/12042022',6,'House Pets','2022','ACRYLIK_INK_ON_PAPER','binatang penghias rumah kadang buat senang kadang menjengkelkan.','EDITION',40,'3000000','EXHIBITION',1,'2022-04-12 13:27:12.964','2022-05-16 11:41:46.772',30,228,'ikankucing-dan-burung','4200000',0,0),
	(49,'ARTCHIVE/USR-36/ART-48/15042022',36,'Abstract','2021','ACRYLIC_ON_CANVAS','Esensi','UNIQUE',65,'4000000','PUBLISH',1,'2022-04-15 06:58:10.058','2022-04-15 07:00:23.052',65,233,'abstract','5600000',0,0),
	(50,'ARTCHIVE/USR-36/ART-50/15042022',36,'Harmoni 1','2022','ACRYLIC_ON_CANVAS','Esensi','EDITION',80,'5000000','PUBLISH',1,'2022-04-15 07:07:47.437','2022-04-15 07:25:29.094',80,234,'harmoni1','7000000',0,0),
	(51,'ARTCHIVE/USR-36/ART-51/15042022',36,'Harmoni 2','2022','ACRYLIC_ON_CANVAS','Esensi','EDITION',80,'5000000','PUBLISH',1,'2022-04-15 07:14:58.423','2022-04-15 07:25:42.914',80,237,'harmoni-2','7000000',0,0),
	(52,'ARTCHIVE/USR-36/ART-52/15042022',36,'Harmoni 3','2022','ACRYLIC_ON_CANVAS','Esensi','EDITION',80,'5000000','PUBLISH',1,'2022-04-15 07:19:49.832','2022-04-15 07:25:53.393',80,238,'harmoni-3','7000000',0,0),
	(53,'ARTCHIVE/USR-39/ART-53/15042022',39,'Refresh','2022','ACRYLIC_ON_CANVAS','Respon melukis bersama Ko Handy.dan teman2 di Toncity Artspace','UNIQUE',60,'3,000,000','PUBLISH',1,'2022-04-15 09:06:57.732','2022-11-22 13:32:20.881',55,242,'refresh','4200000',0,0),
	(54,'ARTCHIVE/USR-6/ART-54/20042022',6,'Persiapan Mekepung','2022','ACRYLIC_ON_CANVAS','Mekepung,merupakan tradisi karapan kerbau yg ada di bali barat(jembrana).','EDITION',100,'18000000','PUBLISH',1,'2022-04-20 09:42:24.392','2022-04-20 15:32:27.393',120,244,'persiapan-mekepung','25200000',0,0),
	(55,'ARTCHIVE/USR-26/ART-55/24042022',26,'Gerak Aksara 1','2021','MIXED_MEDIA','Karya ini terispirasi dari bentuk tulisan sastra bali dan Jawa kuno yang mengandung makna dalam kehidupan manusia. ','UNIQUE',100,'12000000','PUBLISH',1,'2022-04-24 10:49:59.430','2022-04-25 14:04:30.770',150,245,'gerak-aksara-1','16800000',0,0),
	(56,'ARTCHIVE/USR-28/ART-56/25042022',28,'Bersama Majikan','2022','ACRYLIC_ON_CANVAS','Kuda sebagai lambang keperkasaan dan kesetiaan kepada pemiliknya','UNIQUE',80,'9000000','PUBLISH',1,'2022-04-25 09:31:50.640','2022-04-25 14:04:39.796',135,246,'bersama-majikan','12600000',0,0),
	(57,'ARTCHIVE/USR-28/ART-57/25042022',28,'Menjaga Perbatasan','2022','ACRYLIC_ON_CANVAS','Perbatasan wilayah yg sering menjadi perdebatan saling menunjukan kekuatan','UNIQUE',90,'10000000','PUBLISH',1,'2022-04-25 09:38:05.819','2022-04-25 14:04:47.860',135,247,'menjaga-perbatasan','14000000',0,0),
	(62,'ARTCHIVE/USR-31/ART-58/09052022',31,'Bullfighter','2022','ACRYLIC,_PENCIL_ON_CANVAS','The bullfighter is the bull of choice among other fighting bulls. The bull\'s criteria are stocky, dashing, and having a \"Barcode\". The bullfighter is worked on using a pencil drawing technique with shading to get dark and light. The anatomical shape and plasticity of this work in detail on an acrylic paint background with artistic palette knife strokes and red accents as a harmonious balance in the work. The weird barcode seems to be affixed to the body of a bullfighter so that it becomes the center of attention about the function of a barcode.','UNIQUE',140,'8500000','EXHIBITION',1,'2022-05-09 08:13:19.748','2022-05-14 02:15:15.703',120,277,'bullfighter','11900000',0,0),
	(63,'ARTCHIVE/USR-31/ART-63/09052022',31,'Affection','2022','ACRYLIC,_PENCIL_ON_CANVAS','Love for all that is universal for partners, family, friends, friends, or fellow living beings. In the work, two horses are depicted which give a gesture as if shaking hands or showing love by gently pressing their partner\'s head. The painting was done using a pencil drawing technique on canvas with an acrylic paint background. The \"Love Blue\" symbol, such as an emoji sticker that is intentionally displayed differently, is a symbol of loyalty to harmonization that emphasizes the meaning of the work.','UNIQUE',140,'8500000','EXHIBITION',1,'2022-05-09 08:14:39.465','2022-05-15 15:37:22.889',120,276,'affection','11900000',0,0),
	(64,'ARTCHIVE/USR-29/ART-64/09052022',29,'Five Butterflies','2022','CHARCOAL_ON_PAPER,_CANVAS','Five butterflies flying cheerfully in the flower bushes','UNIQUE',90,'8500000','EXHIBITION',1,'2022-05-09 08:16:41.953','2022-05-14 02:16:45.316',140,278,'five-butterflies','11900000',0,0),
	(65,'ARTCHIVE/USR-29/ART-65/09052022',29,'View At Edery Cafe ( On The Spot )','2022','CHARCOAL_ON_PAPER,_CANVAS','A relaxing painting activity out of the studio with Jepun Artfriends, which is located at Edery Cafe, Bilangan Ubud.','UNIQUE',35,'4250000','EXHIBITION',1,'2022-05-09 08:18:16.595','2022-05-14 02:17:38.582',138,279,'view-at-edery-cafe-on-the-spot','5950000',0,0),
	(66,'ARTCHIVE/USR-6/ART-66/09052022',6,'My World','2022','INK_ON_PAPER','This is my world','UNIQUE',48,'2500000','SOLD',1,'2022-05-09 08:19:38.673','2022-05-16 10:53:22.874',35,280,'my-world','3500000',0,0),
	(67,'ARTCHIVE/USR-6/ART-67/09052022',6,'Gambara','2022','INK_ON_PAPER','Gambara has the meaning of imagination of stupidity and intelligence, it can also be ugliness and attractiveness. The black buffalo (Kebo) is the symbol of stupidity and an elephant that is smaller than a buffalo is the symbol of intelligence. And there is someone who brings a sketch paper describing myself which generates intelligence and stupidity itself.','UNIQUE',48,'2500000','SOLD',1,'2022-05-09 08:20:16.390','2022-05-15 15:37:34.233',35,281,'gamara','3500000',0,0),
	(68,'ARTCHIVE/USR-6/ART-68/09052022',6,'Belenggu Cinta','2022','INK_ON_PAPER','An elephant is cuddling a mother in this painting, while a young toddler is playing with a cell phone next to her. Iron pillars surround the area. This image represents how a woman feels when she leaves her homework and her child at home to work. All working mothers are likely to have this confusing feeling.','UNIQUE',48,'2500000','SOLD',1,'2022-05-09 08:21:07.697','2022-05-16 10:53:32.976',35,282,'belenggu-cinta','3500000',0,0),
	(69,'ARTCHIVE/USR-50/ART-69/09052022',50,'Stone Of Happines #1','2022','CONTE_&_CHARCOAL_PENCIL_ON_PAPER','stones','UNIQUE',75,'6000000','EXHIBITION',1,'2022-05-09 08:23:01.229','2022-05-14 02:21:08.343',108,283,'stone-of-happines-1','8400000',0,0),
	(70,'ARTCHIVE/USR-50/ART-70/09052022',50,'Stone Of Happines #2','2022','CONTE_&_CHARCOAL_PENCIL_ON_PAPER','Stones','UNIQUE',75,'6450000','EXHIBITION',1,'2022-05-09 08:23:56.235','2022-05-14 02:22:17.829',108,284,'stone-of-happines-2','9030000',0,0),
	(71,'ARTCHIVE/USR-32/ART-71/09052022',32,'Green Man','2022','ACRYLIC_ON_CANVAS','Green Man','UNIQUE',60,'3500000','EXHIBITION',1,'2022-05-09 08:25:57.419','2022-05-14 02:23:29.257',70,285,'green-man','4900000',0,0),
	(72,'ARTCHIVE/USR-32/ART-72/09052022',32,'Mask','2022','ACRYLIC_ON_CANVAS','Mask','UNIQUE',60,'3500000','EXHIBITION',1,'2022-05-09 08:26:47.966','2022-05-14 02:24:12.091',70,286,'mask','4900000',0,0),
	(73,'ARTCHIVE/USR-32/ART-73/09052022',32,'Ratu','2022','ACRYLIC_ON_CANVAS','Ratu is Queen','UNIQUE',60,'3500000','EXHIBITION',1,'2022-05-09 08:27:33.777','2022-05-14 02:25:22.491',70,287,'ratu','4900000',0,0),
	(74,'ARTCHIVE/USR-32/ART-74/09052022',32,'Rilex','2022','ACRYLIC_ON_CANVAS','Just Rilex','UNIQUE',60,'3500000','EXHIBITION',1,'2022-05-09 08:28:29.574','2022-05-10 03:03:06.577',70,288,'rilex','4900000',0,0),
	(75,'ARTCHIVE/USR-32/ART-75/09052022',32,'Wanita','2022','ACRYLIC_ON_CANVAS','Wanita is Ladies','UNIQUE',60,'3500000','EXHIBITION',1,'2022-05-09 08:29:17.861','2022-05-10 03:03:14.910',70,289,'wanita','4900000',0,0),
	(76,'ARTCHIVE/USR-27/ART-76/09052022',27,'Buda, Topeng, Kaktus Dan Binatang','2022','MIXED_MEDIA','sesuatu simple dan sederhana selalu menarik untuk di explore','UNIQUE',20,'1400000','EXHIBITION',1,'2022-05-09 08:31:13.545','2022-05-10 06:28:29.119',20,290,'buda-topeng-kaktus-dan-binatang','1960000',0,0),
	(77,'ARTCHIVE/USR-6/ART-77/10052022',6,'Tiga Putra','2022','ACRYLIC_INK_ON_PAPER','inspirasi dari tiga putra kami.','UNIQUE',34,'3000000','EXHIBITION',1,'2022-05-10 03:14:54.330','2022-05-10 06:36:02.429',32,295,'tiga-putra','4200000',0,0),
	(78,'ARTCHIVE/USR-6/ART-78/10052022',6,'Cerita Malam Hari','2022','ACRYLIC_INK_ON_PAPER','kehidupan di rumah tangga dgn aktifitas masing-masing.','UNIQUE',34,'3000000','EXHIBITION',1,'2022-05-10 03:17:41.991','2022-05-16 11:33:48.528',32,294,'dunia-ku','4200000',0,0),
	(79,'ARTCHIVE/USR-51/ART-79/10052022',51,'How To Draw Face To Face','2022','Permanen Marker & Wire','How to draw face to face ?','UNIQUE',60,'6000000','EXHIBITION',1,'2022-05-10 10:26:21.534','2022-05-10 11:04:05.738',60,296,'how-to-draw-face-to-face','8400000',0,0),
	(80,'ARTCHIVE/USR-51/ART-80/10052022',51,'Making Love','2022','Bamboo, Rattan, & Nylon Paper','Making Love','UNIQUE',150,'12000000','EXHIBITION',1,'2022-05-10 10:58:14.642','2022-05-12 15:40:14.856',70,297,'making-love','16800000',0,0),
	(81,'ARTCHIVE/USR-51/ART-81/10052022',51,'Love On Face To Face','2022','CARCOAL_&_BAMBOO_ON_CANVAS','Love on Face to Face','UNIQUE',80,'5000000','EDIT',0,'2022-05-10 11:01:46.783','2022-05-16 10:54:19.542',60,298,'love-on-face-to-face','7000000',0,0),
	(82,'ARTCHIVE/USR-6/ART-82/11052022',6,'Meta','2022','Ink On Paper','perkemangan jaman di bidang teknologi setidaknya harus kita ikuti.','UNIQUE',34,'3500000','EXHIBITION',1,'2022-05-11 06:41:06.027','2022-05-11 06:42:35.229',32,300,'meta','4900000',0,0),
	(83,'ARTCHIVE/USR-6/ART-83/11052022',6,'Melihat Dunia Baru','2022','Ink On Paper','Melihat dunia baru','UNIQUE',34,'3500000','EXHIBITION',1,'2022-05-11 06:42:16.142','2022-05-11 06:42:44.416',32,301,'melihat-dunia-baru','4900000',0,0),
	(84,'ARTCHIVE/USR-51/ART-84/12052022',51,'Plebon','2022','Pencil On Black Paper','Plebon is one of ceremonial in bali','UNIQUE',30,'2000000','EXHIBITION',1,'2022-05-12 11:23:38.060','2022-05-12 11:23:45.376',40,302,'plebon','2800000',0,0),
	(85,'ARTCHIVE/USR-6/ART-85/16072022',6,'Kucing Biru','2022','ACRYLIC_ON_CANVAS','Kucing kesayangan','EDITION',40,'3000000','SOLD',1,'2022-07-16 04:43:34.365','2022-07-17 01:42:02.341',40,362,'kucing-biru','4200000',0,0),
	(86,'ARTCHIVE/USR-6/ART-86/16072022',6,'Dialog','2022','ACRYLIC_ON_CANVAS','Antara ibu dan anak berdialog.','EDITION',40,'3000000','SOLD',1,'2022-07-16 04:53:04.602','2022-07-17 01:43:02.118',40,365,'dialog','4200000',0,0),
	(87,'ARTCHIVE/USR-6/ART-87/16072022',6,'Kucing Coklat','2022','ACRYLIC_ON_CANVAS','Kucing manja','EDITION',40,'3000000','SOLD',1,'2022-07-16 04:55:19.861','2022-07-17 01:43:39.665',40,366,'kucing-coklat','4200000',0,0),
	(88,'ARTCHIVE/USR-6/ART-88/16072022',6,'Kucing Belang','2022','ACRYLIC_ON_CANVAS','Menungu istri','EDITION',40,'3000000','SOLD',1,'2022-07-16 04:58:14.691','2022-07-17 01:44:12.585',40,367,'kucing-belang','4200000',0,0),
	(89,'ARTCHIVE/USR-6/ART-89/18072022',6,'7 Wanita Dalam G20.','2022','ACRYLIC_ON_CANVAS','Wanita2 hebat ,dalam G20.','UNIQUE',300,'200000000','SOLD',1,'2022-07-18 08:02:34.893','2022-07-18 08:46:14.961',500,369,'7-wanita-dalam-g20','280000000',0,0),
	(90,'ARTCHIVE/USR-59/ART-90/03082022',59,'Moment Of Silence','2018','ACRYLIC_ON_CANVAS','Process birth of my son like a world stop.','UNIQUE',140,'30000000','PUBLISH',1,'2022-08-03 09:10:00.932','2022-08-06 07:14:17.730',110,371,'moment-of-silince','42000000',0,0),
	(91,'ARTCHIVE/USR-59/ART-91/06082022',59,'Toxic','2022','ACRYLIC_ON_CANVAS','Toxic : Irritation,disappointment,even despair which then becomes toxic,all negative thoughts.According to me toxic should be ableto be turned into a satisfying beauty,so that what redides in the depths of his heart is a sense of solemnity.My opinion ,what happened to me started from his inner desire that gave rise to a high energy anxiety,which without realizing it had drained all the energy in his body.Anxiety that drains a lot of energy creates  a desire to behave and act outside the moral-social control.It is this kind of mental anxiety that must be expressed through works of art so that is does not have a negative  impact on themselves and their social enviroment.','UNIQUE',150,'30000000','PUBLISH',1,'2022-08-06 12:38:55.266','2022-08-07 09:03:54.556',150,376,'toxic','42000000',0,0),
	(92,'ARTCHIVE/USR-59/ART-92/09082022',59,'Jangan Samakan Pikiranku Denganmu ','2021','MIXED_MEDIA','The mindset of every human imagination,intuition is not the same as each other.','UNIQUE',63,'10000000','PUBLISH',1,'2022-08-09 10:20:15.884','2022-08-10 02:02:23.966',131,378,'jangan-samakan-pikiranku-denganmu','14000000',0,0),
	(93,'ARTCHIVE/USR-6/ART-93/11082022',6,'Barong','2022','MIXED_MEDIA','Barong merupakan simbolik dari shangyang dharma,yg menyelamatkan dunia dari petaka semesta.','EDITION',69,'18000000','PUBLISH',1,'2022-08-11 12:36:40.031','2022-08-12 09:25:34.022',139,380,'barong','25200000',0,0),
	(95,'ARTCHIVE/USR-6/ART-94/22082022',6,'Hari Kemerdekaan','2022','ACRYLIC_ON_CANVAS','Memperingati hari kemerdekaan 17 agustus 2022,yg ke 77 di gg jeun .on the sport dgn kelompok jepun art.','EDITION',200,'50,000,000','PUBLISH',1,'2022-08-21 23:20:50.827','2022-08-24 00:42:08.633',150,383,'hari-kemerdekaan','70000000',0,0),
	(96,'ARTCHIVE/USR-6/ART-96/28082022',6,'Matsya','2022','ACRYLIC_ON_CANVAS','Penjelmaan dewa wisnu menjadi ikan besar untuk menyelamatkan dunia.','EDITION',65,'6,000,000','PUBLISH',1,'2022-08-28 06:11:29.055','2023-01-02 14:48:43.831',50,385,'matsya','8400000',0,1),
	(97,'ARTCHIVE/USR-6/ART-97/28082022',6,'Kurma','2022','ACRYLIC_ON_CANVAS','Penyelamatan dunia oleh dewa wisnu menjadi kura-kura besar,dlm perebutan tirta amerta antara para raksasa dan para dewa.','EDITION',65,'6,000,000','PUBLISH',1,'2022-08-28 07:41:33.760','2022-08-30 04:32:02.498',50,387,'kurma','8400000',0,0),
	(98,'ARTCHIVE/USR-59/ART-98/29082022',59,'Emotion','2015','ACRYLIC_ON_CANVAS','A complex experience of consciousness,bodily sensation,and behavior that reflects the personal.','UNIQUE',150,'25,000,000','PUBLISH',1,'2022-08-29 14:48:26.980','2022-08-30 04:31:25.365',120,388,'emotion','35000000',0,0),
	(99,'ARTCHIVE/USR-59/ART-99/29082022',59,'Garden For My Child #2','2021','MIXED_MEDIA','Ketika bayangan yang ada didalam kepala angan angan untuk mewujudkan impian yang paling dekat harus terlaksana lewat imajinasi.','UNIQUE',150,'25,000,000','PUBLISH',1,'2022-08-29 14:55:18.595','2022-08-30 04:31:12.256',150,390,'garden-for-my-child-2','35000000',0,0),
	(100,'ARTCHIVE/USR-6/ART-100/01092022',6,'Waraha','2022','ACRYLIC_ON_CANVAS','Penyelamatan dewa wisnu menjadi babi yg sangat besar dari serangan raksasa hiranyaksa.','EDITION',65,'6,000,000','PUBLISH',1,'2022-09-01 08:23:10.282','2022-09-02 01:43:06.703',50,392,'waraha','8400000',0,0),
	(101,'ARTCHIVE/USR-6/ART-101/01092022',6,'Narashima','2022','ACRYLIC_ON_CANVAS','Penyelamatan dunia oleh dewa wisnu dalam keganasan raksasa hirania kasipu yang tidak bisa terbunuh dalam rumah, luar rumah, oleh manusia dan para dewa.','EDITION',120,'18,000,000','PUBLISH',1,'2022-09-01 08:29:06.371','2022-09-02 01:45:15.916',100,393,'narashima','25200000',0,0),
	(102,'ARTCHIVE/USR-66/ART-102/02092022',66,'The Heart','2022','OIL_ON_CANVAS','Wanita adalah sinar Tuhan. Wanita adalah misteri untuk membimbing pria dalam berbuat bijak dan terbuka.','UNIQUE',100,'15,000,000','PUBLISH',1,'2022-09-02 11:36:11.742','2023-01-02 14:47:45.339',60,398,'the-heart','21000000',0,1),
	(103,'ARTCHIVE/USR-66/ART-103/07102022',66,'Travelling Without Moving ','2022','OIL_ON_CANVAS','Tentang kemajuan teknologi yang begitu cepat yang menyebabkan kita berpindah dari satu tempat ke tempat lain tanpa benar-benar sampai ke tujuannya. mgkn ada juga sisi manusia yg lain yang berusaha menikmatinya, terlepas itu semu ataupun nyata.','UNIQUE',110,'27,000,000','PUBLISH',1,'2022-10-07 13:02:48.347','2022-10-08 16:16:59.616',140,408,'travelling-without-moving','37800000',0,0),
	(104,'ARTCHIVE/USR-69/ART-104/13102022',69,'Out Of The Box','2022','ACRYLIC_ON_CANVAS','Berfikir bebas, lepas, keluar dari mainstream','UNIQUE',80,'10,000,000','PUBLISH',1,'2022-10-13 05:15:05.803','2022-10-17 03:41:44.901',100,410,'out-of-the-box','14000000',0,0),
	(105,'ARTCHIVE/USR-70/ART-105/18102022',70,'Harvest #1','2021','ACRYLIC_ON_CANVAS','Harvest is the what I waiting for after process ','UNIQUE',90,'27,000,000','PUBLISH',1,'2022-10-18 09:31:12.654','2022-10-19 04:13:10.247',150,415,'harvest-1','37800000',0,0),
	(106,'ARTCHIVE/USR-70/ART-106/18102022',70,'Hi Beautiful #1','2021','ACRYLIC_ON_CANVAS','just a girl that i need it. first layer is Monalisa painting and second layer i took from broken screen.\nthis painting is my response from coronavirus effect, pandemic.','UNIQUE',90,'27,000,000','PUBLISH',1,'2022-10-18 09:35:49.272','2022-10-19 04:13:55.749',150,417,'hi-beautiful-1','37800000',0,0),
	(107,'ARTCHIVE/USR-70/ART-107/18102022',70,'Hi Beautiful #2','2021','ACRYLIC_ON_CANVAS','just a girl that i need it. first layer is girl painting and second layer i took from broken screen.\nthis painting is my response from coronavirus effect, pandemic.\nUV light effect more good visual','UNIQUE',60,'12,000,000','PUBLISH',1,'2022-10-18 09:38:46.318','2022-10-19 04:14:16.256',80,424,'hi-beautiful-2','16800000',0,0),
	(108,'ARTCHIVE/USR-70/ART-108/18102022',70,'Harvest #2','2021','ACRYLIC_ON_CANVAS','just a girl that i need it. first layer is view painting and second layer i took from broken screen.\nthis painting is my response from coronavirus effect, pandemic.\nbarcode can be scan as well ','UNIQUE',50,'10,000,000','PUBLISH',1,'2022-10-18 09:42:17.442','2022-10-19 05:32:17.991',80,419,'harvest-2','14000000',0,0),
	(109,'ARTCHIVE/USR-70/ART-109/18102022',70,'Harvest #3','2021','ACRYLIC_ON_CANVAS','just a girl that i need it. first layer is biew painting and second layer i took from broken screen.\nthis painting is my response from coronavirus effect, pandemic.\nall barcode can be scan as well on each painting.','UNIQUE',50,'10,000,000','PUBLISH',1,'2022-10-18 09:44:43.926','2022-10-19 05:32:37.226',80,421,'harvest-3','14000000',0,0),
	(110,'ARTCHIVE/USR-72/ART-110/25102022',72,'Progressive Perseverare','2020','ACRYLIC_ON_CANVAS','Karya ini menceritakan tentang semangat mengarungi kehidupan. Spirit yang menyala dan pantang menyerah. Dinamika kehidupan ibarat mengarungi Samudra luas dengan gelombang ombak badai yang terkadang menerjang. Seperti semboyan Badai pasti berlalu adalah sebuah keniscayaan','UNIQUE',140,'25,000,000','PUBLISH',1,'2022-10-25 04:36:19.237','2022-10-25 04:44:48.737',100,429,'progressive-perseverare','35000000',0,0),
	(112,'ARTCHIVE/USR-73/ART-111/07112022',73,'Self Healing','2022','MIXED_MEDIA','About self healing. How to manage energy to heal mind, body & soul.','UNIQUE',100,'10,000,000','PUBLISH',1,'2022-11-07 04:19:16.260','2022-11-08 01:46:00.753',100,436,'self-healing','14000000',0,0),
	(113,'ARTCHIVE/USR-73/ART-113/07112022',73,'Sublime (menyublim)','2022','MIXED_MEDIA','Love is in the air','UNIQUE',120,'10,000,000','PUBLISH',1,'2022-11-07 04:30:45.522','2022-11-08 01:46:24.012',50,439,'sublime-menyublim','14000000',0,0),
	(114,'ARTCHIVE/USR-6/ART-114/18112022',6,'Keluarga','2022','ACRYLIC_ON_CANVAS','Keluarga merupakan, kelompok orang-orang yang saling mengikat satu sama yang lainnya. ','EDITION',100,'12,500,000','PUBLISH',1,'2022-11-18 09:32:41.782','2022-11-20 11:51:11.534',100,445,'keluarga','17500000',0,0),
	(115,'ARTCHIVE/USR-6/ART-115/20112022',6,'Wanita Dan Ikan','2022','ACRYLIC_ON_CANVAS','Lahirnya karya wanita dan kucing ini karena adanya efek warna pada canvas yg sudah ada tumpukan warna. Ahirnya terbrntuklah karya yg berjudul wanita dan kucing. ','EDITION',70,'12,500,000','PUBLISH',1,'2022-11-20 12:53:52.963','2022-11-22 03:09:07.567',70,446,'wanita-dan-ikan','17500000',0,0),
	(116,'ARTCHIVE/USR-84/ART-116/23112022',84,'Penari Naga','2022','ACRYLIC_ON_CANVAS','Menggambarkan ritual tarian naga yang di yakini membawa ke beruntungan dan keberkahan','EDITION',100,'23,000,000','DRAFT',0,'2022-11-23 01:14:50.566','2022-11-24 01:24:50.356',80,452,'penari-naga','32200000',0,0);

/*!40000 ALTER TABLE `artwork` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table artworks_on_exhibitions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `artworks_on_exhibitions`;

CREATE TABLE `artworks_on_exhibitions` (
  `artwork_id` int NOT NULL,
  `exhibition_id` int NOT NULL,
  `exhibition_price` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`artwork_id`,`exhibition_id`),
  UNIQUE KEY `artworks_on_exhibitions_exhibition_id_artwork_id_key` (`exhibition_id`,`artwork_id`),
  CONSTRAINT `artworks_on_exhibitions_artwork_id_fkey` FOREIGN KEY (`artwork_id`) REFERENCES `artwork` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `artworks_on_exhibitions_exhibition_id_fkey` FOREIGN KEY (`exhibition_id`) REFERENCES `exhibition` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `artworks_on_exhibitions` WRITE;
/*!40000 ALTER TABLE `artworks_on_exhibitions` DISABLE KEYS */;

INSERT INTO `artworks_on_exhibitions` (`artwork_id`, `exhibition_id`, `exhibition_price`)
VALUES
	(44,1,'3000000'),
	(47,1,'3000000'),
	(62,1,'12000000'),
	(63,1,'12000000'),
	(64,1,'12000000'),
	(65,1,'6000000'),
	(66,1,'3500000'),
	(67,1,'3500000'),
	(68,1,'3500000'),
	(69,1,'8500000'),
	(70,1,'9000000'),
	(71,1,'5000000'),
	(72,1,'5000000'),
	(73,1,'5000000'),
	(74,1,'5000000'),
	(75,1,'5000000'),
	(76,1,'2000000'),
	(77,1,'3000000'),
	(78,1,'3000000'),
	(79,1,'6000000'),
	(80,1,'12000000'),
	(82,1,'3500000'),
	(83,1,'3500000'),
	(84,1,'2000000');

/*!40000 ALTER TABLE `artworks_on_exhibitions` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table cart
# ------------------------------------------------------------

DROP TABLE IF EXISTS `cart`;

CREATE TABLE `cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `artwork_id` int NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `cart_user_id_fkey` (`user_id`),
  KEY `cart_artwork_id_fkey` (`artwork_id`),
  CONSTRAINT `cart_artwork_id_fkey` FOREIGN KEY (`artwork_id`) REFERENCES `artwork` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `cart_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;

INSERT INTO `cart` (`id`, `user_id`, `artwork_id`, `created_at`, `updated_at`, `status`)
VALUES
	(3,1,110,'2022-11-06 13:04:35.986','2022-11-06 13:04:35.987',0),
	(4,85,114,'2022-12-27 13:27:30.544','2022-12-27 13:27:30.545',0),
	(5,87,110,'2022-12-29 08:25:19.555','2022-12-29 08:25:19.555',0);

/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table certificate
# ------------------------------------------------------------

DROP TABLE IF EXISTS `certificate`;

CREATE TABLE `certificate` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `artworkId` int NOT NULL,
  `cretedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `serial_no` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` enum('MAIN','EDITION') COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `certificate_userId_fkey` (`userId`),
  KEY `certificate_artworkId_fkey` (`artworkId`),
  CONSTRAINT `certificate_artworkId_fkey` FOREIGN KEY (`artworkId`) REFERENCES `artwork` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `certificate_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `certificate` WRITE;
/*!40000 ALTER TABLE `certificate` DISABLE KEYS */;

INSERT INTO `certificate` (`id`, `userId`, `artworkId`, `cretedAt`, `serial_no`, `url`, `type`)
VALUES
	(1,27,24,'2022-04-07 11:53:18.329','ARTCHIVE/ART-24/07042022/27/07042022/1','ARTIST-27/ART-24/CERTIFICATE/cb3d2dc5-1a09-4e8a-a931-d5c8d9ac21da-main-certificate-1.pdf','MAIN'),
	(2,27,24,'2022-04-07 11:53:21.035','ARTCHIVE/ART-24/07042022/27/07042022/1','ARTIST-27/ART-24/CERTIFICATE/d36b0f1c-d637-44a3-abd9-642bb9f645ce-certificate-1.pdf','EDITION'),
	(3,6,85,'2022-07-17 01:42:10.972','ARTCHIVE/ART-85/16072022/6/17072022/2','ARTIST-6/ART-85/CERTIFICATE/0e845ad8-2ade-41ae-8031-032d1819b79f-main-certificate-2.pdf','MAIN'),
	(4,6,85,'2022-07-17 01:42:13.254','ARTCHIVE/ART-85/16072022/6/17072022/2','ARTIST-6/ART-85/CERTIFICATE/9f0dcf3d-8738-4e92-bb73-6d853604e4c1-certificate-2.pdf','EDITION'),
	(5,6,86,'2022-07-17 01:43:08.472','ARTCHIVE/ART-86/16072022/6/17072022/4','ARTIST-6/ART-86/CERTIFICATE/83d6f04b-564c-4e00-ad3c-00d384c1f16b-main-certificate-4.pdf','MAIN'),
	(6,6,86,'2022-07-17 01:43:10.837','ARTCHIVE/ART-86/16072022/6/17072022/4','ARTIST-6/ART-86/CERTIFICATE/d17aaf0a-8a4b-4667-87fa-5cbc9899d94e-certificate-4.pdf','EDITION'),
	(7,6,87,'2022-07-17 01:43:46.348','ARTCHIVE/ART-87/16072022/6/17072022/6','ARTIST-6/ART-87/CERTIFICATE/c4530eb1-fa56-42e0-b42b-84fbf535f057-main-certificate-6.pdf','MAIN'),
	(8,6,87,'2022-07-17 01:43:48.841','ARTCHIVE/ART-87/16072022/6/17072022/6','ARTIST-6/ART-87/CERTIFICATE/84d4fe8f-120c-462b-9863-21a91a200fd5-certificate-6.pdf','EDITION'),
	(9,6,88,'2022-07-17 01:44:18.630','ARTCHIVE/ART-88/16072022/6/17072022/8','ARTIST-6/ART-88/CERTIFICATE/972617c9-5b91-4fb7-9914-3b83fdf009ba-main-certificate-8.pdf','MAIN'),
	(10,6,88,'2022-07-17 01:44:21.866','ARTCHIVE/ART-88/16072022/6/17072022/8','ARTIST-6/ART-88/CERTIFICATE/f19e44ec-1e23-4461-a4c3-555e91182c78-certificate-8.pdf','EDITION'),
	(11,6,89,'2022-07-18 08:46:20.179','ARTCHIVE/ART-89/18072022/6/18072022/10','ARTIST-6/ART-89/CERTIFICATE/615a5319-f18b-4c5c-9639-aabf634276e8-main-certificate-10.pdf','MAIN'),
	(12,6,89,'2022-07-18 08:46:22.783','ARTCHIVE/ART-89/18072022/6/18072022/10','ARTIST-6/ART-89/CERTIFICATE/f2c47565-122d-4252-9f28-c323a6599e7a-certificate-10.pdf','EDITION');

/*!40000 ALTER TABLE `certificate` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table exhibition
# ------------------------------------------------------------

DROP TABLE IF EXISTS `exhibition`;

CREATE TABLE `exhibition` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_description` text COLLATE utf8mb4_unicode_ci,
  `start_date` datetime(3) NOT NULL,
  `end_date` datetime(3) NOT NULL,
  `organized_by` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` text COLLATE utf8mb4_unicode_ci,
  `lat` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lng` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `start_time` text COLLATE utf8mb4_unicode_ci,
  `end_time` text COLLATE utf8mb4_unicode_ci,
  `catalogue_link` text COLLATE utf8mb4_unicode_ci,
  `thumbnail_id` int NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) DEFAULT NULL,
  `created_by` int NOT NULL,
  `updated_by` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `exhibition_thumbnail_id_key` (`thumbnail_id`),
  UNIQUE KEY `exhibition_slug_key` (`slug`),
  KEY `exhibition_created_by_fkey` (`created_by`),
  KEY `exhibition_updated_by_fkey` (`updated_by`),
  CONSTRAINT `exhibition_created_by_fkey` FOREIGN KEY (`created_by`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `exhibition_thumbnail_id_fkey` FOREIGN KEY (`thumbnail_id`) REFERENCES `media` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `exhibition_updated_by_fkey` FOREIGN KEY (`updated_by`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `exhibition` WRITE;
/*!40000 ALTER TABLE `exhibition` DISABLE KEYS */;

INSERT INTO `exhibition` (`id`, `title`, `slug`, `description`, `short_description`, `start_date`, `end_date`, `organized_by`, `address`, `lat`, `lng`, `start_time`, `end_time`, `catalogue_link`, `thumbnail_id`, `created_at`, `updated_at`, `created_by`, `updated_by`)
VALUES
	(1,'Drawing Exhibition','drawing-exhibition','<p>Art is freedom. Being able to bend things most people see as a straight line. Work will have meaning when it is displayed, appreciated and creates space discussion between the viewer and the work. Drawing is an important part of art. The basis that determines where the work will speak.&nbsp;Whether it will be painting/two-dimensional works or remain as a complete depiction. Jepun Artfriend, in order to participate in declaring the national drawing month, tries to respond to this by holding a drawing exhibition. Exhibitions initiated by 7 artists include: I Made Wiradana, I Made Duatmika, I Made Romi Sukadana, Vincensius Dedy Reru, I Made A Palguna, I Kadek Dwi Armika, and Pande Wijaya Suta and will bring some of the works latest drawing. They try to make works with linear lines, pencil strokes, or regular dense charcoal nicks so that the impression of the drawing still appears. Even though there are several works that use new media to translate elements - the drawing element itself. Like the use of wire or iron as the embodiment of a line. It is a unique thing. Their experience, artistic character, and process are still put forward even in the drawing form. Scratches and lines become a momentary overflow of their emotions about something. They are no longer talking about drawing literally but have entered the complexity of the artist. Where precisely it raises the attraction and new questions emerge. Relevance and new possibilities for the development of the drawing itself. Of course, a challenge isn\'t it? The May declaration of the month of National Drawing by the Indonesian Drawing Forum (FDI) coincided with National Education Day which is on 2nd of May. However, since May 2nd this year coincides with Eid al-Fitr, the declaration event will be carried out simultaneously throughout Indonesia on May 14th for that reason. But for the future National Drawing Day is still commemorated on May 2 every year. Drawing will still find its fun, its uniqueness, its uniqueness, and its abilities in a work. Where “tension” and “dialogue” are experienced by the art connoisseur and the artist.</p><p><br></p><h2><strong>About Jepun Artfriend</strong></h2><p>Jepun Artfriends is an artist collective formed around a shared passion for fishing. When two passions collide, an extraordinary creation is born. Painting in nature, on ships, and on the beach are just a few of the activities pursued. The objective and mission of Jepun Artfriends is to strengthen artist relationships while also offering a relaxing environment after a long day in the studio. The notion of Jepun Artfriends is to paint together in the middle of nature. Life on Earth receives its energy from nature. By painting in nature, Jepun Artfriends attempt to communicate nature. Furthermore, the goal of Jepun Artfriends is to foster brotherhood and camaraderie among artists.</p><p><br></p><h2><strong>About Artchive.id</strong></h2><p>Art is one of masterpiece on this earth because every single art has a deep meaning. Indonesia has many talented Artist this is because Indonesia has a lot type of culture. Gallery is one of the media used by art workers to exhibit their works of art, but unfortunately in Indonesia, access to exhibit paintings in galleries is very limited and access to visit galleries is also limited but artworks in Indonesia do not get good attention. For now with Technology all around the world can enjoy the artworks just in one hand, Technology will help grow the attention of art in Indonesia. Artchive are there for solve the art problem in Indonesia.Archive.Id is an online gallery platform that helps artist to Artchive.id and sells their artwork in a digital platform. The gallery will publish artists artwork or promote their exhibition on this digital platform. Artchive.Id team will tackle end-to-end on event organizer until promotion when gallery have exhibition.</p>','First drawing exhibition in Indonesia by Forum Drawing Exhibition on Ubud, Bali Collaborate with Jepun Artfriends 15th May - 29th May','2022-05-15 08:38:22.000','2022-05-29 08:38:22.000','Group Exhibition by Jepun Artfriends','Sudana Gallery','-8.489506068659663','115.25428236548949','05:00 PM','11:00 PM','https://www.canva.com/design/DAE_5-yffsE/VdIVWkNgaNGA1vRP5fY79w/view?utm_content=DAE_5-yffsE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',291,'2022-05-09 08:39:52.229','2022-05-16 01:44:24.527',1,1);

/*!40000 ALTER TABLE `exhibition` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table genre
# ------------------------------------------------------------

DROP TABLE IF EXISTS `genre`;

CREATE TABLE `genre` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`),
  UNIQUE KEY `genre_title_key` (`title`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `genre` WRITE;
/*!40000 ALTER TABLE `genre` DISABLE KEYS */;

INSERT INTO `genre` (`id`, `title`, `createdAt`, `updatedAt`, `description`)
VALUES
	(1,'Realism','2022-03-30 14:03:22.730','2022-03-30 14:03:22.731',NULL),
	(2,'Naive','2022-03-30 14:03:27.524','2022-04-02 08:51:31.990',NULL),
	(3,'Abstract','2022-03-30 14:03:54.706','2022-03-30 14:03:54.707',NULL),
	(4,'Abstract Expressionism','2022-04-02 08:51:43.344','2022-04-02 08:51:43.344',NULL),
	(5,'Calligraphy','2022-04-02 08:51:53.008','2022-04-02 08:51:53.008',NULL),
	(6,'Conceptual','2022-04-02 08:51:59.637','2022-04-02 08:51:59.638',NULL),
	(7,'Constructivism','2022-04-02 08:52:33.428','2022-04-02 08:52:33.428',NULL),
	(8,'Cubism','2022-04-02 08:52:40.324','2022-04-02 08:52:40.324',NULL),
	(9,'Documentary','2022-04-02 08:52:50.544','2022-04-02 08:52:50.544',NULL),
	(10,'Expressionism','2022-04-02 08:52:59.895','2022-04-02 08:52:59.896',NULL),
	(11,'Fantastic','2022-04-02 08:53:10.179','2022-04-02 08:53:10.180',NULL),
	(12,'Figurative','2022-04-02 08:54:44.750','2022-04-02 08:54:44.751',NULL),
	(13,'Illustration','2022-04-02 08:54:53.362','2022-04-02 08:54:53.362',NULL),
	(14,'Impressionism','2022-04-02 08:55:04.884','2022-04-02 08:55:04.885',NULL),
	(15,'Magical Realism','2022-04-02 08:55:18.349','2022-04-02 08:55:18.350',NULL),
	(16,'Minimalism','2022-04-02 08:55:31.939','2022-04-02 08:55:31.940',NULL),
	(17,'Pop','2022-04-02 08:56:05.130','2022-04-02 08:56:05.131',NULL),
	(18,'Surrealism','2022-04-02 08:56:10.201','2022-04-02 08:56:10.201',NULL),
	(19,'Decorative','2022-04-07 12:57:00.815','2022-04-07 12:57:00.815',NULL),
	(20,'Other','2022-04-07 12:57:06.549','2022-04-07 12:57:06.549',NULL),
	(21,'Contemporary','2022-04-07 12:58:56.429','2022-04-07 12:58:56.430',NULL),
	(24,'Kamasan','2023-01-04 09:46:01.258','2023-01-04 09:46:01.259',NULL);

/*!40000 ALTER TABLE `genre` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table media
# ------------------------------------------------------------

DROP TABLE IF EXISTS `media`;

CREATE TABLE `media` (
  `id` int NOT NULL AUTO_INCREMENT,
  `filename` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `mimetype` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` text COLLATE utf8mb4_unicode_ci,
  `description` text COLLATE utf8mb4_unicode_ci,
  `medium_url` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) DEFAULT NULL,
  `upload_by` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `media_url_key` (`url`),
  UNIQUE KEY `media_medium_url_key` (`medium_url`),
  KEY `media_upload_by_fkey` (`upload_by`),
  CONSTRAINT `media_upload_by_fkey` FOREIGN KEY (`upload_by`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `media` WRITE;
/*!40000 ALTER TABLE `media` DISABLE KEYS */;

INSERT INTO `media` (`id`, `filename`, `mimetype`, `url`, `title`, `description`, `medium_url`, `created_at`, `updated_at`, `upload_by`)
VALUES
	(1,'Artchive-logo.jpg','image/jpeg','USER-1/de81c1b8-019c-486f-a41a-78c3d84c7c08-Artchive-logo.jpg-original',NULL,NULL,'USER-1/de81c1b8-019c-486f-a41a-78c3d84c7c08-Artchive-logo.jpg-medium','2022-03-30 13:44:32.030','2022-03-30 13:44:32.030',1),
	(2,'WhatsApp Image 2022-03-25 at 23.53.07.jpeg','image/jpeg','USER-1/a540499c-ad69-47ec-a32d-df49528b54f4-WhatsApp Image 2022-03-25 at 23.53.07.jpeg-original',NULL,NULL,'USER-1/a540499c-ad69-47ec-a32d-df49528b54f4-WhatsApp Image 2022-03-25 at 23.53.07.jpeg-medium','2022-03-30 13:45:57.832','2022-03-30 13:45:57.832',1),
	(3,'04cd61a0-cc4a-4d8d-80af-19e1a4edbc89.jpeg','image/jpeg','USER-2/ART-1/3d42ec23-6268-44d0-9f59-6b454e25ddc4-04cd61a0-cc4a-4d8d-80af-19e1a4edbc89.jpeg-original',NULL,NULL,'USER-2/ART-1/3d42ec23-6268-44d0-9f59-6b454e25ddc4-04cd61a0-cc4a-4d8d-80af-19e1a4edbc89.jpeg-medium','2022-03-30 14:06:54.217','2022-03-30 14:06:54.217',NULL),
	(4,'IMG-20220329-WA0006.jpg','image/jpeg','USER-2/ART-1/d4024921-1eb3-4f72-8acb-19625b7f41dd-IMG-20220329-WA0006.jpg-original',NULL,NULL,'USER-2/ART-1/d4024921-1eb3-4f72-8acb-19625b7f41dd-IMG-20220329-WA0006.jpg-medium','2022-03-30 14:13:59.124','2022-03-30 14:13:59.125',NULL),
	(5,'IMG-20220329-WA0006.jpg','image/jpeg','USER-2/ART-1/cfd43067-0d33-4d90-be90-cd54c0f3d957-IMG-20220329-WA0006.jpg-original',NULL,NULL,'USER-2/ART-1/cfd43067-0d33-4d90-be90-cd54c0f3d957-IMG-20220329-WA0006.jpg-medium','2022-03-30 14:20:07.312','2022-03-30 14:20:07.314',NULL),
	(6,'IMG20220327160016.jpg','image/jpeg','USER-2/ART-1/530b62d9-8088-4d5b-8a0b-eed5ce7029ea-IMG20220327160016.jpg-original',NULL,NULL,'USER-2/ART-1/530b62d9-8088-4d5b-8a0b-eed5ce7029ea-IMG20220327160016.jpg-medium','2022-03-30 14:21:19.625','2022-03-30 14:21:19.625',NULL),
	(7,'IMG-20220330-WA0001.jpg','image/jpeg','USER-2/ART-1/81586237-4aea-494a-85c6-28c4c27415ed-IMG-20220330-WA0001.jpg-original',NULL,NULL,'USER-2/ART-1/81586237-4aea-494a-85c6-28c4c27415ed-IMG-20220330-WA0001.jpg-medium','2022-03-30 14:24:16.786','2022-03-30 14:24:16.787',NULL),
	(8,'IMG_20220323_160429.jpg','image/jpeg','USER-6/ART-2/e5d2e39e-3e1f-4f28-be28-2447b36e4eae-IMG_20220323_160429.jpg-original',NULL,NULL,'USER-6/ART-2/e5d2e39e-3e1f-4f28-be28-2447b36e4eae-IMG_20220323_160429.jpg-medium','2022-03-30 14:31:30.441','2022-03-30 14:31:30.442',6),
	(9,'IMG_20220314_091109.jpg','image/jpeg','USER-6/90f1bfbb-f155-4da8-b33f-deddfdb24dd2-IMG_20220314_091109.jpg-original',NULL,NULL,'USER-6/90f1bfbb-f155-4da8-b33f-deddfdb24dd2-IMG_20220314_091109.jpg-medium','2022-03-30 14:45:49.565','2022-03-30 14:45:49.566',6),
	(10,'IMG_20220326_132123.jpg','image/jpeg','USER-6/d589ace0-947a-4bcf-b5b1-e7e914e0abd8-IMG_20220326_132123.jpg-original',NULL,NULL,'USER-6/d589ace0-947a-4bcf-b5b1-e7e914e0abd8-IMG_20220326_132123.jpg-medium','2022-03-30 14:48:24.476','2022-03-30 14:48:24.477',6),
	(11,'IMG_20220330_223942_247.jpg','image/jpeg','USER-9/c44529e6-1f43-475d-93af-62106919bfbf-IMG_20220330_223942_247.jpg-original',NULL,NULL,'USER-9/c44529e6-1f43-475d-93af-62106919bfbf-IMG_20220330_223942_247.jpg-medium','2022-03-30 16:31:28.777','2022-03-30 16:31:28.778',NULL),
	(12,'IMG_20220326_162344_342.jpg','image/jpeg','USER-9/10d7fb0f-ee5e-4946-8ee3-f7ab7f5af75c-IMG_20220326_162344_342.jpg-original',NULL,NULL,'USER-9/10d7fb0f-ee5e-4946-8ee3-f7ab7f5af75c-IMG_20220326_162344_342.jpg-medium','2022-03-30 16:31:42.148','2022-03-30 16:31:42.148',NULL),
	(13,'IMG_20220130_113134_805.webp','image/webp','USER-9/ART-3/831b8ee6-9d67-4ba5-a8f5-01a2f2b5dfd4-IMG_20220130_113134_805.webp-original',NULL,NULL,'USER-9/ART-3/831b8ee6-9d67-4ba5-a8f5-01a2f2b5dfd4-IMG_20220130_113134_805.webp-medium','2022-03-30 16:34:11.504','2022-03-30 16:34:11.505',NULL),
	(14,'04cd61a0-cc4a-4d8d-80af-19e1a4edbc89.jpeg','image/jpeg','USER-8/ART-4/cd3634e7-e694-4e88-8795-1950bbf8775f-04cd61a0-cc4a-4d8d-80af-19e1a4edbc89.jpeg-original',NULL,NULL,'USER-8/ART-4/cd3634e7-e694-4e88-8795-1950bbf8775f-04cd61a0-cc4a-4d8d-80af-19e1a4edbc89.jpeg-medium','2022-03-30 18:55:54.182','2022-03-30 18:55:54.183',NULL),
	(15,'20210128011320-1-jadi-salah-satu-ras-kucing-terbesar-rawat-kucing-maine-coon-dengan-pola-makan-tepat-001-zaki.jpg','image/jpeg','USER-8/1bf13f54-add0-49bf-a5f7-16ba434677f3-20210128011320-1-jadi-salah-satu-ras-kucing-terbesar-rawat-kucing-maine-coon-dengan-pola-makan-tepat-001-zaki.jpg-original',NULL,NULL,'USER-8/1bf13f54-add0-49bf-a5f7-16ba434677f3-20210128011320-1-jadi-salah-satu-ras-kucing-terbesar-rawat-kucing-maine-coon-dengan-pola-makan-tepat-001-zaki.jpg-medium','2022-03-30 19:09:17.533','2022-03-30 19:09:17.534',NULL),
	(16,'20210128011320-1-jadi-salah-satu-ras-kucing-terbesar-rawat-kucing-maine-coon-dengan-pola-makan-tepat-001-zaki.jpg','image/jpeg','USER-8/ART-5/712a96c8-afc0-4c16-99d7-b24958d7cd37-20210128011320-1-jadi-salah-satu-ras-kucing-terbesar-rawat-kucing-maine-coon-dengan-pola-makan-tepat-001-zaki.jpg-original',NULL,NULL,'USER-8/ART-5/712a96c8-afc0-4c16-99d7-b24958d7cd37-20210128011320-1-jadi-salah-satu-ras-kucing-terbesar-rawat-kucing-maine-coon-dengan-pola-makan-tepat-001-zaki.jpg-medium','2022-03-30 19:10:17.485','2022-03-30 19:10:17.486',NULL),
	(17,'WhatsApp Image 2022-03-25 at 23.53.07.jpeg','image/jpeg','USER-10/332f2365-8649-4c7e-9abf-fd38a71074e3-WhatsApp Image 2022-03-25 at 23.53.07.jpeg-original',NULL,NULL,'USER-10/332f2365-8649-4c7e-9abf-fd38a71074e3-WhatsApp Image 2022-03-25 at 23.53.07.jpeg-medium','2022-04-01 04:15:45.045','2022-04-01 04:15:45.046',NULL),
	(18,'Artchive-logo-black.jpg','image/jpeg','USER-10/5b11e1a6-af53-472e-aa66-b5c8fea2697b-Artchive-logo-black.jpg-original',NULL,NULL,'USER-10/5b11e1a6-af53-472e-aa66-b5c8fea2697b-Artchive-logo-black.jpg-medium','2022-04-01 04:34:45.950','2022-04-01 04:34:45.950',NULL),
	(19,'IMG_20220331_133021.jpg','image/jpeg','USER-6/df8952fa-a3b3-4908-b015-459583211bbc-IMG_20220331_133021.jpg-original',NULL,NULL,'USER-6/df8952fa-a3b3-4908-b015-459583211bbc-IMG_20220331_133021.jpg-medium','2022-04-01 10:38:48.823','2022-04-01 10:38:48.823',6),
	(20,'IMG_20220331_144515_674.jpg','image/jpeg','USER-6/af4c2c1f-c18c-4d16-836e-2985e96d8f59-IMG_20220331_144515_674.jpg-original',NULL,NULL,'USER-6/af4c2c1f-c18c-4d16-836e-2985e96d8f59-IMG_20220331_144515_674.jpg-medium','2022-04-01 10:40:39.399','2022-04-01 10:40:39.400',6),
	(21,'IMG_20220315_141525.jpg','image/jpeg','USER-6/744a2dec-e3a0-4269-89ec-2e15e4969c6c-IMG_20220315_141525.jpg-original',NULL,NULL,'USER-6/744a2dec-e3a0-4269-89ec-2e15e4969c6c-IMG_20220315_141525.jpg-medium','2022-04-01 10:44:10.381','2022-04-01 10:44:10.382',6),
	(22,'IMG_20220331_144515_674.jpg','image/jpeg','USER-6/f26ea2e8-02e5-4cbc-a765-11d84d7eac71-IMG_20220331_144515_674.jpg-original',NULL,NULL,'USER-6/f26ea2e8-02e5-4cbc-a765-11d84d7eac71-IMG_20220331_144515_674.jpg-medium','2022-04-01 11:09:24.807','2022-04-01 11:09:24.807',6),
	(23,'1635411233289.jpg','image/jpeg','USER-16/ART-3/3dbbe8d8-bebb-4ce0-a1ce-f82d4afa0cf0-1635411233289.jpg-original',NULL,NULL,'USER-16/ART-3/3dbbe8d8-bebb-4ce0-a1ce-f82d4afa0cf0-1635411233289.jpg-medium','2022-04-01 15:06:07.722','2022-04-01 15:06:07.722',NULL),
	(24,'Map_2603_E_.jpg','image/jpeg','USER-17/35123acb-09c5-4a3c-90f6-a0e46962b265-Map_2603_E_.jpg-original',NULL,NULL,'USER-17/35123acb-09c5-4a3c-90f6-a0e46962b265-Map_2603_E_.jpg-medium','2022-04-01 15:06:47.582','2022-04-01 15:06:47.583',NULL),
	(25,'wallpaperbetter.com_3840x2160.jpg','image/jpeg','USER-17/583bce9d-8d07-4d43-8ce6-addd47479ca8-wallpaperbetter.com_3840x2160.jpg-original',NULL,NULL,'USER-17/583bce9d-8d07-4d43-8ce6-addd47479ca8-wallpaperbetter.com_3840x2160.jpg-medium','2022-04-01 15:07:39.837','2022-04-01 15:07:39.838',NULL),
	(26,'wallpaperbetter.com_3840x2160.jpg','image/jpeg','USER-17/d6a464f1-d6ae-4dcc-aaaa-0c668262b39a-wallpaperbetter.com_3840x2160.jpg-original',NULL,NULL,'USER-17/d6a464f1-d6ae-4dcc-aaaa-0c668262b39a-wallpaperbetter.com_3840x2160.jpg-medium','2022-04-01 15:07:52.767','2022-04-01 15:07:52.767',NULL),
	(27,'20190814_203753.jpg','image/jpeg','USER-17/20ad3568-e88a-4296-a64e-dbb5244fcd33-20190814_203753.jpg-original',NULL,NULL,'USER-17/20ad3568-e88a-4296-a64e-dbb5244fcd33-20190814_203753.jpg-medium','2022-04-01 15:15:26.618','2022-04-01 15:15:26.619',NULL),
	(28,'20190815_142217.jpg','image/jpeg','USER-17/bfb9785b-5e05-41a1-956b-f0061c97224a-20190815_142217.jpg-original',NULL,NULL,'USER-17/bfb9785b-5e05-41a1-956b-f0061c97224a-20190815_142217.jpg-medium','2022-04-01 15:16:40.616','2022-04-01 15:16:40.617',NULL),
	(29,'IMG_20220325_140906_867.jpg','image/jpeg','USER-6/ART-3/0e90ed0b-045e-4a37-bb99-c1fb794787c5-IMG_20220325_140906_867.jpg-original',NULL,NULL,'USER-6/ART-3/0e90ed0b-045e-4a37-bb99-c1fb794787c5-IMG_20220325_140906_867.jpg-medium','2022-04-01 16:09:32.071','2022-04-01 16:09:32.071',6),
	(30,'IMG_20220320_133619_864.jpg','image/jpeg','USER-6/ART-14/fa0674d0-c7fd-4cce-aed1-195eeec12bd6-IMG_20220320_133619_864.jpg-original',NULL,NULL,'USER-6/ART-14/fa0674d0-c7fd-4cce-aed1-195eeec12bd6-IMG_20220320_133619_864.jpg-medium','2022-04-01 16:14:10.761','2022-04-01 16:14:10.762',6),
	(31,'20190503_162030.jpg','image/jpeg','USER-17/dc2035fe-3645-4b5e-a2f8-14065fb25689-20190503_162030.jpg-original',NULL,NULL,'USER-17/dc2035fe-3645-4b5e-a2f8-14065fb25689-20190503_162030.jpg-medium','2022-04-01 16:26:05.386','2022-04-01 16:26:05.387',NULL),
	(32,'Screenshot (385).png','image/png','USER-17/ART-15/717d43c3-8767-4f61-b01e-e1981508c084-Screenshot (385).png-original',NULL,NULL,'USER-17/ART-15/717d43c3-8767-4f61-b01e-e1981508c084-Screenshot (385).png-medium','2022-04-01 16:27:32.065','2022-04-01 16:27:32.065',NULL),
	(33,'Clean_And_Simple_Room.jpg','image/jpeg','USER-17/ART-15/b51d8d02-37c9-4566-bc44-16b0839efe7f-Clean_And_Simple_Room.jpg-original',NULL,NULL,'USER-17/ART-15/b51d8d02-37c9-4566-bc44-16b0839efe7f-Clean_And_Simple_Room.jpg-medium','2022-04-01 16:33:59.656','2022-04-01 16:33:59.657',NULL),
	(34,'IMG_0221.jpg','image/jpeg','USER-19/15e20315-4830-4fcf-8295-43c2d6677d15-IMG_0221.jpg-original',NULL,NULL,'USER-19/15e20315-4830-4fcf-8295-43c2d6677d15-IMG_0221.jpg-medium','2022-04-02 02:39:36.984','2022-04-02 02:39:36.985',19),
	(35,'private lounge .png','image/png','USER-19/789105a1-c785-470b-9953-b1ceb521be5d-private lounge .png-original',NULL,NULL,'USER-19/789105a1-c785-470b-9953-b1ceb521be5d-private lounge .png-medium','2022-04-02 02:40:07.125','2022-04-02 02:40:07.125',19),
	(36,'Capture.PNG','image/png','USER-21/378a599b-c894-4609-aa2e-dc6717d46db8-Capture.PNG-original',NULL,NULL,'USER-21/378a599b-c894-4609-aa2e-dc6717d46db8-Capture.PNG-medium','2022-04-02 03:08:17.920','2022-04-02 03:08:17.920',21),
	(37,'1643874459857.jpg','image/jpeg','USER-16/a1b36f58-7ee5-4457-ac3f-b4a7dd1a2861-1643874459857.jpg-original',NULL,NULL,'USER-16/a1b36f58-7ee5-4457-ac3f-b4a7dd1a2861-1643874459857.jpg-medium','2022-04-02 04:03:16.744','2022-04-02 04:03:16.744',NULL),
	(38,'1645020289435.jpg','image/jpeg','USER-16/c47bdabd-7f99-43ab-8388-0ec608322057-1645020289435.jpg-original',NULL,NULL,'USER-16/c47bdabd-7f99-43ab-8388-0ec608322057-1645020289435.jpg-medium','2022-04-02 04:05:30.308','2022-04-02 04:05:30.309',NULL),
	(39,'1633597663731.jpg','image/jpeg','USER-16/a9435ab0-63c7-4f67-8754-a13a3323a5e7-1633597663731.jpg-original',NULL,NULL,'USER-16/a9435ab0-63c7-4f67-8754-a13a3323a5e7-1633597663731.jpg-medium','2022-04-02 04:07:15.844','2022-04-02 04:07:15.844',NULL),
	(40,'1635411233289.jpg','image/jpeg','USER-16/ART-16/55ec0ce0-9a09-45d8-a1cc-42d99e5ba57b-1635411233289.jpg-original',NULL,NULL,'USER-16/ART-16/55ec0ce0-9a09-45d8-a1cc-42d99e5ba57b-1635411233289.jpg-medium','2022-04-02 04:17:26.329','2022-04-02 04:17:26.330',NULL),
	(41,'Clean_And_Simple_Room (1).jpg','image/jpeg','USER-16/ART-16/f04af47a-4e16-428f-82fc-c19bc5888f8b-Clean_And_Simple_Room (1).jpg-original',NULL,NULL,'USER-16/ART-16/f04af47a-4e16-428f-82fc-c19bc5888f8b-Clean_And_Simple_Room (1).jpg-medium','2022-04-02 04:19:47.507','2022-04-02 04:19:47.507',NULL),
	(42,'IMG_20211208_160257.jpg','image/jpeg','USER-16/ART-17/61b42547-2b83-4ddf-83ac-4820f4898f99-IMG_20211208_160257.jpg-original',NULL,NULL,'USER-16/ART-17/61b42547-2b83-4ddf-83ac-4820f4898f99-IMG_20211208_160257.jpg-medium','2022-04-02 04:22:28.908','2022-04-02 04:22:28.909',NULL),
	(43,'Screenshot_2022-03-13-18-36-40-31.jpg','image/jpeg','USER-6/bc040676-592e-4fe4-b426-2ce98147fc8f-Screenshot_2022-03-13-18-36-40-31.jpg-original',NULL,NULL,'USER-6/bc040676-592e-4fe4-b426-2ce98147fc8f-Screenshot_2022-03-13-18-36-40-31.jpg-medium','2022-04-02 04:48:14.583','2022-04-02 04:48:14.583',6),
	(44,'IMG_20220402_112139.jpg','image/jpeg','USER-6/ART-17/f8393b71-a359-4779-8253-269e84d06cf0-IMG_20220402_112139.jpg-original',NULL,NULL,'USER-6/ART-17/f8393b71-a359-4779-8253-269e84d06cf0-IMG_20220402_112139.jpg-medium','2022-04-02 04:51:20.004','2022-04-02 04:51:20.005',6),
	(45,'IMG_20220402_112139.jpg','image/jpeg','USER-6/ART-17/9e3fbeba-62fc-4644-b40d-33bbdcd97ea8-IMG_20220402_112139.jpg-original',NULL,NULL,'USER-6/ART-17/9e3fbeba-62fc-4644-b40d-33bbdcd97ea8-IMG_20220402_112139.jpg-medium','2022-04-02 04:52:14.413','2022-04-02 04:52:14.413',6),
	(46,'IMG_20211208_160257.jpg','image/jpeg','USER-16/ART-18/7aa50ae8-582e-4d76-bcb5-03221b877106-IMG_20211208_160257.jpg-original',NULL,NULL,'USER-16/ART-18/7aa50ae8-582e-4d76-bcb5-03221b877106-IMG_20211208_160257.jpg-medium','2022-04-02 06:57:51.011','2022-04-02 06:57:51.012',NULL),
	(47,'IMG_20211208_160257.jpg','image/jpeg','USER-16/ART-18/b0bb2bba-b3ec-4621-8e41-beb11d0588b0-IMG_20211208_160257.jpg-original',NULL,NULL,'USER-16/ART-18/b0bb2bba-b3ec-4621-8e41-beb11d0588b0-IMG_20211208_160257.jpg-medium','2022-04-02 07:07:04.483','2022-04-02 07:07:04.484',NULL),
	(48,'IMG-20220402-WA0008.jpg','image/jpeg','USER-22/ART-18/79c10bf0-4b98-4591-922d-a2a522ff498c-IMG-20220402-WA0008.jpg-original',NULL,NULL,'USER-22/ART-18/79c10bf0-4b98-4591-922d-a2a522ff498c-IMG-20220402-WA0008.jpg-medium','2022-04-02 16:41:33.919','2022-04-02 16:41:33.919',NULL),
	(49,'IMG-20220403-WA0001.jpg','image/jpeg','USER-16/ART-18/f2138ccb-257f-4d88-b8ad-64cb73d6119c-IMG-20220403-WA0001.jpg-original',NULL,NULL,'USER-16/ART-18/f2138ccb-257f-4d88-b8ad-64cb73d6119c-IMG-20220403-WA0001.jpg-medium','2022-04-02 16:46:46.942','2022-04-02 16:46:46.943',NULL),
	(50,'IMG-20220403-WA0001.jpg','image/jpeg','USER-16/ART-18/d2e95f64-298c-4b84-8e0d-750fbf559b50-IMG-20220403-WA0001.jpg-original',NULL,NULL,'USER-16/ART-18/d2e95f64-298c-4b84-8e0d-750fbf559b50-IMG-20220403-WA0001.jpg-medium','2022-04-02 16:47:09.550','2022-04-02 16:47:09.551',NULL),
	(51,'20190814_203753.jpg','image/jpeg','USER-17/92fdddce-f9be-4b70-80c7-978e0619bcb2-20190814_203753.jpg-original',NULL,NULL,'USER-17/92fdddce-f9be-4b70-80c7-978e0619bcb2-20190814_203753.jpg-medium','2022-04-03 03:09:36.851','2022-04-03 03:09:36.852',NULL),
	(52,'IMG-20220403-WA0001.jpg','image/jpeg','USER-16/ART-18/a6428986-adbc-4766-bb14-f536f8ed8e48-IMG-20220403-WA0001.jpg-original',NULL,NULL,'USER-16/ART-18/a6428986-adbc-4766-bb14-f536f8ed8e48-IMG-20220403-WA0001.jpg-medium','2022-04-03 03:13:25.870','2022-04-03 03:13:25.871',NULL),
	(53,'20190413_153315.jpg','image/jpeg','USER-17/ART-18/57e61221-d30c-4bd8-9177-6e2ef858c4aa-20190413_153315.jpg-original',NULL,NULL,'USER-17/ART-18/57e61221-d30c-4bd8-9177-6e2ef858c4aa-20190413_153315.jpg-medium','2022-04-03 03:26:55.005','2022-04-03 03:26:55.006',NULL),
	(54,'fotoprofile2.jpg','image/jpeg','USER-17/cf4d912d-ed21-4030-8e1e-c4844508319f-fotoprofile2.jpg-original',NULL,NULL,'USER-17/cf4d912d-ed21-4030-8e1e-c4844508319f-fotoprofile2.jpg-medium','2022-04-03 03:27:35.367','2022-04-03 03:27:35.368',NULL),
	(55,'fotoprofile1.jpg','image/jpeg','USER-17/7f11e259-0f52-45ea-a50f-62979c0fbcb0-fotoprofile1.jpg-original',NULL,NULL,'USER-17/7f11e259-0f52-45ea-a50f-62979c0fbcb0-fotoprofile1.jpg-medium','2022-04-03 03:27:47.125','2022-04-03 03:27:47.125',NULL),
	(56,'banner2.jpg','image/jpeg','USER-17/c9721ff5-07c1-421d-ab1e-c97026b0f2f1-banner2.jpg-original',NULL,NULL,'USER-17/c9721ff5-07c1-421d-ab1e-c97026b0f2f1-banner2.jpg-medium','2022-04-03 03:28:04.337','2022-04-03 03:28:04.338',NULL),
	(57,'banner1.jpg','image/jpeg','USER-17/7900c33c-dfd9-410d-8057-08d05a8ca6b5-banner1.jpg-original',NULL,NULL,'USER-17/7900c33c-dfd9-410d-8057-08d05a8ca6b5-banner1.jpg-medium','2022-04-03 03:28:45.163','2022-04-03 03:28:45.164',NULL),
	(58,'banner1.jpg','image/jpeg','USER-17/d637dfcd-d016-4d6b-a832-ef2990e1934a-banner1.jpg-original',NULL,NULL,'USER-17/d637dfcd-d016-4d6b-a832-ef2990e1934a-banner1.jpg-medium','2022-04-03 04:09:56.868','2022-04-03 04:09:56.869',NULL),
	(59,'banner2.jpg','image/jpeg','USER-17/208daa1c-a5d2-4ae9-8354-bc38bf796834-banner2.jpg-original',NULL,NULL,'USER-17/208daa1c-a5d2-4ae9-8354-bc38bf796834-banner2.jpg-medium','2022-04-03 04:10:33.497','2022-04-03 04:10:33.498',NULL),
	(60,'banner2.jpg','image/jpeg','USER-17/dbfeb779-4e17-4e53-99c3-b37f95dda628-banner2.jpg-original',NULL,NULL,'USER-17/dbfeb779-4e17-4e53-99c3-b37f95dda628-banner2.jpg-medium','2022-04-03 04:11:07.105','2022-04-03 04:11:07.105',NULL),
	(61,'fotoprofile2.jpg','image/jpeg','USER-17/773ac16d-8116-4e84-9f9b-2c687c6cc9a9-fotoprofile2.jpg-original',NULL,NULL,'USER-17/773ac16d-8116-4e84-9f9b-2c687c6cc9a9-fotoprofile2.jpg-medium','2022-04-03 04:11:08.306','2022-04-03 04:11:08.307',NULL),
	(62,'banner1.jpg','image/jpeg','USER-17/9e1fadb5-5ba8-443c-aff5-df55b757c637-banner1.jpg-original',NULL,NULL,'USER-17/9e1fadb5-5ba8-443c-aff5-df55b757c637-banner1.jpg-medium','2022-04-03 05:27:11.208','2022-04-03 05:27:11.208',NULL),
	(63,'fotoprofile1.jpg','image/jpeg','USER-17/e7af8974-af2d-4e2d-b073-e5b17e33cb13-fotoprofile1.jpg-original',NULL,NULL,'USER-17/e7af8974-af2d-4e2d-b073-e5b17e33cb13-fotoprofile1.jpg-medium','2022-04-03 05:27:12.867','2022-04-03 05:27:12.867',NULL),
	(64,'banner1.jpg','image/jpeg','USER-17/258d8633-349f-4eb5-8932-dcc2cc70c15a-banner1.jpg-original',NULL,NULL,'USER-17/258d8633-349f-4eb5-8932-dcc2cc70c15a-banner1.jpg-medium','2022-04-03 05:28:04.942','2022-04-03 05:28:04.943',NULL),
	(65,'fotoprofile1.jpg','image/jpeg','USER-17/8e53ee25-ad0f-4724-8b59-f398550e9bb5-fotoprofile1.jpg-original',NULL,NULL,'USER-17/8e53ee25-ad0f-4724-8b59-f398550e9bb5-fotoprofile1.jpg-medium','2022-04-03 05:28:06.317','2022-04-03 05:28:06.318',NULL),
	(66,'banner1.jpg','image/jpeg','USER-17/085911c8-2e72-49e1-8253-95f6a602e794-banner1.jpg-original',NULL,NULL,'USER-17/085911c8-2e72-49e1-8253-95f6a602e794-banner1.jpg-medium','2022-04-03 05:29:33.105','2022-04-03 05:29:33.106',NULL),
	(67,'fotoprofile1.jpg','image/jpeg','USER-17/46aefd93-763c-4eeb-b922-5566c3178246-fotoprofile1.jpg-original',NULL,NULL,'USER-17/46aefd93-763c-4eeb-b922-5566c3178246-fotoprofile1.jpg-medium','2022-04-03 05:29:34.860','2022-04-03 05:29:34.861',NULL),
	(68,'banner2.jpg','image/jpeg','USER-17/71093038-9944-4b6d-933d-57880140d57d-banner2.jpg-original',NULL,NULL,'USER-17/71093038-9944-4b6d-933d-57880140d57d-banner2.jpg-medium','2022-04-03 05:30:04.783','2022-04-03 05:30:04.784',NULL),
	(69,'fotoprofile2.jpg','image/jpeg','USER-17/560641b9-ea67-4e44-bd36-14449478d820-fotoprofile2.jpg-original',NULL,NULL,'USER-17/560641b9-ea67-4e44-bd36-14449478d820-fotoprofile2.jpg-medium','2022-04-03 05:30:05.942','2022-04-03 05:30:05.942',NULL),
	(70,'banner2.jpg','image/jpeg','USER-17/895c5556-71d3-431f-8577-dbaaff9bc90d-banner2.jpg-original',NULL,NULL,'USER-17/895c5556-71d3-431f-8577-dbaaff9bc90d-banner2.jpg-medium','2022-04-03 05:59:01.227','2022-04-03 05:59:01.227',NULL),
	(71,'fotoprofile2.jpg','image/jpeg','USER-17/20e7a09c-b5c0-4814-9c7d-61b887a07366-fotoprofile2.jpg-original',NULL,NULL,'USER-17/20e7a09c-b5c0-4814-9c7d-61b887a07366-fotoprofile2.jpg-medium','2022-04-03 05:59:02.440','2022-04-03 05:59:02.440',NULL),
	(72,'banner1.jpg','image/jpeg','USER-17/f071a50b-5cd0-4257-8651-a250db105da9-banner1.jpg-original',NULL,NULL,'USER-17/f071a50b-5cd0-4257-8651-a250db105da9-banner1.jpg-medium','2022-04-03 06:01:15.858','2022-04-03 06:01:15.859',NULL),
	(73,'fotoprofile1.jpg','image/jpeg','USER-17/78bca3f9-b7d3-412e-8aa0-5b145e5dc18c-fotoprofile1.jpg-original',NULL,NULL,'USER-17/78bca3f9-b7d3-412e-8aa0-5b145e5dc18c-fotoprofile1.jpg-medium','2022-04-03 06:01:18.126','2022-04-03 06:01:18.126',NULL),
	(74,'banner2.jpg','image/jpeg','USER-17/f9b2b01e-c294-4e84-9e23-80040ef73ae3-banner2.jpg-original',NULL,NULL,'USER-17/f9b2b01e-c294-4e84-9e23-80040ef73ae3-banner2.jpg-medium','2022-04-03 06:15:09.024','2022-04-03 06:15:09.024',NULL),
	(75,'fotoprofile2.jpg','image/jpeg','USER-17/db139fac-e57f-4f9d-bb74-6513601459ea-fotoprofile2.jpg-original',NULL,NULL,'USER-17/db139fac-e57f-4f9d-bb74-6513601459ea-fotoprofile2.jpg-medium','2022-04-03 06:15:10.285','2022-04-03 06:15:10.286',NULL),
	(76,'banner1.jpg','image/jpeg','USER-17/79c1ac90-a71b-4dd9-9b11-ce2321dec72c-banner1.jpg-original',NULL,NULL,'USER-17/79c1ac90-a71b-4dd9-9b11-ce2321dec72c-banner1.jpg-medium','2022-04-03 06:19:12.773','2022-04-03 06:19:12.773',NULL),
	(77,'banner2.jpg','image/jpeg','USER-17/0effc756-c5fb-45b6-af6a-fb8db69c5e11-banner2.jpg-original',NULL,NULL,'USER-17/0effc756-c5fb-45b6-af6a-fb8db69c5e11-banner2.jpg-medium','2022-04-03 06:19:48.897','2022-04-03 06:19:48.898',NULL),
	(78,'fotoprofile2.jpg','image/jpeg','USER-17/10aa51fa-b1ca-486d-b03d-4dec7c8658c3-fotoprofile2.jpg-original',NULL,NULL,'USER-17/10aa51fa-b1ca-486d-b03d-4dec7c8658c3-fotoprofile2.jpg-medium','2022-04-03 06:19:50.250','2022-04-03 06:19:50.250',NULL),
	(79,'banner1.jpg','image/jpeg','USER-17/8b758451-4fcc-4192-a964-0f4dc2ba0f4b-banner1.jpg-original',NULL,NULL,'USER-17/8b758451-4fcc-4192-a964-0f4dc2ba0f4b-banner1.jpg-medium','2022-04-03 06:20:34.828','2022-04-03 06:20:34.829',NULL),
	(80,'fotoprofile1.jpg','image/jpeg','USER-17/2fc1fe83-38f9-4566-9723-9f1d3b170c89-fotoprofile1.jpg-original',NULL,NULL,'USER-17/2fc1fe83-38f9-4566-9723-9f1d3b170c89-fotoprofile1.jpg-medium','2022-04-03 06:20:36.825','2022-04-03 06:20:36.826',NULL),
	(81,'banner1.jpg','image/jpeg','USER-17/132831fd-15ca-4330-ac0a-462c5d4d84ca-banner1.jpg-original',NULL,NULL,'USER-17/132831fd-15ca-4330-ac0a-462c5d4d84ca-banner1.jpg-medium','2022-04-03 06:21:01.747','2022-04-03 06:21:01.747',NULL),
	(82,'fotoprofile1.jpg','image/jpeg','USER-17/acae3355-8862-443d-9519-2655104cb4fa-fotoprofile1.jpg-original',NULL,NULL,'USER-17/acae3355-8862-443d-9519-2655104cb4fa-fotoprofile1.jpg-medium','2022-04-03 06:21:03.962','2022-04-03 06:21:03.962',NULL),
	(83,'gustav.jpg','image/jpeg','USER-17/0d7a40e6-6d7e-4298-93e5-f56cc8dec3ae-gustav.jpg-original',NULL,NULL,'USER-17/0d7a40e6-6d7e-4298-93e5-f56cc8dec3ae-gustav.jpg-medium','2022-04-03 06:21:40.520','2022-04-03 06:21:40.520',NULL),
	(84,'banner1.jpg','image/jpeg','USER-17/3b12018b-108f-40e4-9dd4-cb357efe710b-banner1.jpg-original',NULL,NULL,'USER-17/3b12018b-108f-40e4-9dd4-cb357efe710b-banner1.jpg-medium','2022-04-03 06:25:00.582','2022-04-03 06:25:00.583',NULL),
	(85,'fotoprofile1.jpg','image/jpeg','USER-17/1b7be435-8e3a-4bb2-afc1-c9d92a5dc285-fotoprofile1.jpg-original',NULL,NULL,'USER-17/1b7be435-8e3a-4bb2-afc1-c9d92a5dc285-fotoprofile1.jpg-medium','2022-04-03 06:25:04.545','2022-04-03 06:25:04.546',NULL),
	(86,'artworktest.jpg','image/jpeg','USER-17/ART-18/7b95fe93-c476-45b8-a95c-f32ad87b5f87-artworktest.jpg-original',NULL,NULL,'USER-17/ART-18/7b95fe93-c476-45b8-a95c-f32ad87b5f87-artworktest.jpg-medium','2022-04-03 06:58:22.115','2022-04-03 06:58:22.115',NULL),
	(87,'artworktest.jpg','image/jpeg','USER-17/e4301d23-dcb8-41ea-9ac9-7df9da06e1ae-artworktest.jpg-original',NULL,NULL,'USER-17/e4301d23-dcb8-41ea-9ac9-7df9da06e1ae-artworktest.jpg-medium','2022-04-03 06:59:20.549','2022-04-03 06:59:20.550',NULL),
	(88,'artworktest.jpg','image/jpeg','USER-17/ART-18/7599e05b-1441-4519-9614-a3388767e12a-artworktest.jpg-original',NULL,NULL,'USER-17/ART-18/7599e05b-1441-4519-9614-a3388767e12a-artworktest.jpg-medium','2022-04-03 07:01:11.220','2022-04-03 07:01:11.220',NULL),
	(89,'artworktest.jpg','image/jpeg','USER-17/ART-18/215a6107-ce75-4c74-87cd-9ba1f5d76b6a-artworktest.jpg-original',NULL,NULL,'USER-17/ART-18/215a6107-ce75-4c74-87cd-9ba1f5d76b6a-artworktest.jpg-medium','2022-04-03 07:01:34.845','2022-04-03 07:01:34.846',NULL),
	(90,'artworktest.jpg','image/jpeg','USER-17/ART-18/c9c1e1f3-fca4-4d9a-9203-03b08b411c55-artworktest.jpg-original',NULL,NULL,'USER-17/ART-18/c9c1e1f3-fca4-4d9a-9203-03b08b411c55-artworktest.jpg-medium','2022-04-03 07:21:25.856','2022-04-03 07:21:25.856',NULL),
	(91,'artworktest.jpg','image/jpeg','USER-17/ART-18/11e80e90-4f83-4bd2-a3a3-7cf030cb3941-artworktest.jpg-original',NULL,NULL,'USER-17/ART-18/11e80e90-4f83-4bd2-a3a3-7cf030cb3941-artworktest.jpg-medium','2022-04-03 07:21:46.485','2022-04-03 07:21:46.486',NULL),
	(92,'artworktest.jpg','image/jpeg','USER-17/ART-18/895d0e03-1761-4246-97ea-f480ce10a981-artworktest.jpg-original',NULL,NULL,'USER-17/ART-18/895d0e03-1761-4246-97ea-f480ce10a981-artworktest.jpg-medium','2022-04-03 07:22:51.908','2022-04-03 07:22:51.909',NULL),
	(93,'artworktest.jpg','image/jpeg','USER-17/ART-18/f37ab7ad-c290-40f0-8c31-07d4ea8cdd1a-artworktest.jpg-original',NULL,NULL,'USER-17/ART-18/f37ab7ad-c290-40f0-8c31-07d4ea8cdd1a-artworktest.jpg-medium','2022-04-03 07:23:49.049','2022-04-03 07:23:49.049',NULL),
	(94,'artworktest.jpg','image/jpeg','USER-17/ART-18/7c91644d-5072-41f5-99ff-980ee0c03431-artworktest.jpg-original',NULL,NULL,'USER-17/ART-18/7c91644d-5072-41f5-99ff-980ee0c03431-artworktest.jpg-medium','2022-04-03 07:25:34.495','2022-04-03 07:25:34.496',NULL),
	(95,'artworktest.jpg','image/jpeg','USER-17/ART-18/4904ba9b-16a1-4afb-ac0e-0ed36d6c3544-artworktest.jpg-original',NULL,NULL,'USER-17/ART-18/4904ba9b-16a1-4afb-ac0e-0ed36d6c3544-artworktest.jpg-medium','2022-04-03 11:23:32.582','2022-04-03 11:23:32.582',NULL),
	(96,'artworktest.jpg','image/jpeg','USER-17/ART-18/ddff368b-c66e-4b79-aa13-407cc025e298-artworktest.jpg-original',NULL,NULL,'USER-17/ART-18/ddff368b-c66e-4b79-aa13-407cc025e298-artworktest.jpg-medium','2022-04-03 11:23:46.126','2022-04-03 11:23:46.126',NULL),
	(97,'artworktest.jpg','image/jpeg','USER-17/ART-18/9e5576dd-3851-4f42-a2b0-b22967184ece-artworktest.jpg-original',NULL,NULL,'USER-17/ART-18/9e5576dd-3851-4f42-a2b0-b22967184ece-artworktest.jpg-medium','2022-04-03 11:27:17.877','2022-04-03 11:27:17.878',NULL),
	(98,'artworktest.jpg','image/jpeg','USER-17/ART-18/354eb753-cbae-4729-b7a4-b64af02f6c37-artworktest.jpg-original',NULL,NULL,'USER-17/ART-18/354eb753-cbae-4729-b7a4-b64af02f6c37-artworktest.jpg-medium','2022-04-03 11:28:07.609','2022-04-03 11:28:07.610',NULL),
	(99,'artworktest.jpg','image/jpeg','USER-17/ART-18/75237c86-19c2-42c6-a6a3-52fbc2030b60-artworktest.jpg-original',NULL,NULL,'USER-17/ART-18/75237c86-19c2-42c6-a6a3-52fbc2030b60-artworktest.jpg-medium','2022-04-03 11:28:48.263','2022-04-03 11:28:48.263',NULL),
	(100,'artworktest.jpg','image/jpeg','USER-17/ART-18/be458446-7cd4-4905-ac88-8a43f967a190-artworktest.jpg-original',NULL,NULL,'USER-17/ART-18/be458446-7cd4-4905-ac88-8a43f967a190-artworktest.jpg-medium','2022-04-03 11:29:55.137','2022-04-03 11:29:55.138',NULL),
	(101,'artworktest.jpg','image/jpeg','USER-17/ART-18/1b724ad4-b257-4202-a356-c4472d46fc30-artworktest.jpg-original',NULL,NULL,'USER-17/ART-18/1b724ad4-b257-4202-a356-c4472d46fc30-artworktest.jpg-medium','2022-04-03 11:30:27.040','2022-04-03 11:30:27.041',NULL),
	(102,'artworktest.jpg','image/jpeg','USER-17/ART-18/015d0b48-25f6-4840-81ec-3daa200b4e31-artworktest.jpg-original',NULL,NULL,'USER-17/ART-18/015d0b48-25f6-4840-81ec-3daa200b4e31-artworktest.jpg-medium','2022-04-03 11:36:42.942','2022-04-03 11:36:42.942',NULL),
	(103,'artworktest.jpg','image/jpeg','USER-17/ART-18/c4f69380-de04-4ff3-ac1b-41ce782a8f53-artworktest.jpg-original',NULL,NULL,'USER-17/ART-18/c4f69380-de04-4ff3-ac1b-41ce782a8f53-artworktest.jpg-medium','2022-04-03 11:37:28.887','2022-04-03 11:37:28.887',NULL),
	(104,'artworktest.jpg','image/jpeg','USER-17/ART-18/37ce3cb6-90b7-467d-a180-db5e186f7bcb-artworktest.jpg-original',NULL,NULL,'USER-17/ART-18/37ce3cb6-90b7-467d-a180-db5e186f7bcb-artworktest.jpg-medium','2022-04-03 11:48:38.192','2022-04-03 11:48:38.192',NULL),
	(105,'artworktest.jpg','image/jpeg','USER-17/ART-18/ec72165b-8b22-43aa-8d6d-73150c7a04ac-artworktest.jpg-original',NULL,NULL,'USER-17/ART-18/ec72165b-8b22-43aa-8d6d-73150c7a04ac-artworktest.jpg-medium','2022-04-03 12:10:33.707','2022-04-03 12:10:33.707',NULL),
	(106,'IMG_20220403_141152.jpg','image/jpeg','USER-6/ART-18/4e8d5178-c094-4fb1-9d1a-5a852c317df3-IMG_20220403_141152.jpg-original',NULL,NULL,'USER-6/ART-18/4e8d5178-c094-4fb1-9d1a-5a852c317df3-IMG_20220403_141152.jpg-medium','2022-04-03 16:20:21.719','2022-04-03 16:20:21.719',6),
	(107,'IMG_20220403_141152.jpg','image/jpeg','USER-6/ART-18/8ef7ced7-f228-402a-9945-3cea89df6a2a-IMG_20220403_141152.jpg-original',NULL,NULL,'USER-6/ART-18/8ef7ced7-f228-402a-9945-3cea89df6a2a-IMG_20220403_141152.jpg-medium','2022-04-03 16:23:44.039','2022-04-03 16:23:44.040',6),
	(108,'IMG_20220403_141152.jpg','image/jpeg','USER-6/ART-18/a0a75d60-b136-4846-b6f8-3a80eb864beb-IMG_20220403_141152.jpg-original',NULL,NULL,'USER-6/ART-18/a0a75d60-b136-4846-b6f8-3a80eb864beb-IMG_20220403_141152.jpg-medium','2022-04-03 16:26:06.726','2022-04-03 16:26:06.727',6),
	(109,'IMG_20220403_141152.jpg','image/jpeg','USER-6/ART-18/3c5e4237-3aa6-41c2-ad73-ccdf78d2ab4a-IMG_20220403_141152.jpg-original',NULL,NULL,'USER-6/ART-18/3c5e4237-3aa6-41c2-ad73-ccdf78d2ab4a-IMG_20220403_141152.jpg-medium','2022-04-03 16:30:43.634','2022-04-03 16:30:43.634',6),
	(110,'Melbourne.jpg','image/jpeg','USER-22/ART-18/3229dd96-cb89-4f6a-8978-1f37f4986a00-Melbourne.jpg-original',NULL,NULL,'USER-22/ART-18/3229dd96-cb89-4f6a-8978-1f37f4986a00-Melbourne.jpg-medium','2022-04-03 16:34:28.738','2022-04-03 16:34:28.739',NULL),
	(111,'20220403_230519.jpg','image/jpeg','USER-17/ART-18/8fed5450-2087-41d3-b6b0-a32619ad6697-20220403_230519.jpg-original',NULL,NULL,'USER-17/ART-18/8fed5450-2087-41d3-b6b0-a32619ad6697-20220403_230519.jpg-medium','2022-04-03 16:36:55.061','2022-04-03 16:36:55.061',NULL),
	(112,'fotoprofile2.jpg','image/jpeg','USER-17/dcd169c0-a099-451c-b208-8c17e8c7f372-fotoprofile2.jpg-original',NULL,NULL,'USER-17/dcd169c0-a099-451c-b208-8c17e8c7f372-fotoprofile2.jpg-medium','2022-04-03 16:38:40.713','2022-04-03 16:38:40.714',NULL),
	(113,'banner2.jpg','image/jpeg','USER-17/5acb9193-aaf2-4eb7-92e6-1a754a331ae4-banner2.jpg-original',NULL,NULL,'USER-17/5acb9193-aaf2-4eb7-92e6-1a754a331ae4-banner2.jpg-medium','2022-04-03 16:38:50.215','2022-04-03 16:38:50.215',NULL),
	(114,'fotoprofile1.jpg','image/jpeg','USER-17/6c4bb798-4df3-4b45-8db4-3943d00e526e-fotoprofile1.jpg-original',NULL,NULL,'USER-17/6c4bb798-4df3-4b45-8db4-3943d00e526e-fotoprofile1.jpg-medium','2022-04-03 16:39:29.229','2022-04-03 16:39:29.229',NULL),
	(115,'IMG_20220403_141152.jpg','image/jpeg','USER-6/ART-18/f9766f7e-87a2-4524-a130-e8c5270945ec-IMG_20220403_141152.jpg-original',NULL,NULL,'USER-6/ART-18/f9766f7e-87a2-4524-a130-e8c5270945ec-IMG_20220403_141152.jpg-medium','2022-04-04 00:07:12.136','2022-04-04 00:07:12.137',6),
	(116,'IMG_20220318_180407_125.jpg','image/jpeg','USER-6/ART-19/7de3fe47-442e-49c7-abe5-ca6c2b3da806-IMG_20220318_180407_125.jpg-original',NULL,NULL,'USER-6/ART-19/7de3fe47-442e-49c7-abe5-ca6c2b3da806-IMG_20220318_180407_125.jpg-medium','2022-04-04 06:11:24.211','2022-04-04 06:11:24.212',6),
	(117,'artworktest.jpg','image/jpeg','USER-17/ART-20/7045f78c-875b-4a00-8119-ab422b679dcf-artworktest.jpg-original',NULL,NULL,'USER-17/ART-20/7045f78c-875b-4a00-8119-ab422b679dcf-artworktest.jpg-medium','2022-04-04 06:38:50.096','2022-04-04 06:38:50.097',NULL),
	(118,'artworktest.jpg','image/jpeg','USER-17/ART-20/889aabba-5de7-4459-b628-076b674671ff-artworktest.jpg-original',NULL,NULL,'USER-17/ART-20/889aabba-5de7-4459-b628-076b674671ff-artworktest.jpg-medium','2022-04-04 06:43:10.381','2022-04-04 06:43:10.381',NULL),
	(119,'artworktest.jpg','image/jpeg','USER-17/ART-20/879a1f48-0a27-4f47-8a0d-7863070f28cf-artworktest.jpg-original',NULL,NULL,'USER-17/ART-20/879a1f48-0a27-4f47-8a0d-7863070f28cf-artworktest.jpg-medium','2022-04-04 06:45:25.704','2022-04-04 06:45:25.705',NULL),
	(120,'artworktest.jpg','image/jpeg','USER-17/ART-20/55fdc4d9-4031-4fa9-9a08-202bd689e3c4-artworktest.jpg-original',NULL,NULL,'USER-17/ART-20/55fdc4d9-4031-4fa9-9a08-202bd689e3c4-artworktest.jpg-medium','2022-04-04 06:46:48.973','2022-04-04 06:46:48.973',NULL),
	(121,'artworktest.jpg','image/jpeg','USER-17/ART-20/0b16b0f9-b895-43f9-8716-3c946a526f31-artworktest.jpg-original',NULL,NULL,'USER-17/ART-20/0b16b0f9-b895-43f9-8716-3c946a526f31-artworktest.jpg-medium','2022-04-04 06:48:05.813','2022-04-04 06:48:05.814',NULL),
	(122,'artworktest.jpg','image/jpeg','USER-17/ART-20/7406b467-12fc-4df9-b785-7003b35096a9-artworktest.jpg-original',NULL,NULL,'USER-17/ART-20/7406b467-12fc-4df9-b785-7003b35096a9-artworktest.jpg-medium','2022-04-04 06:51:49.316','2022-04-04 06:51:49.317',NULL),
	(123,'artworktest.jpg','image/jpeg','USER-17/ART-20/ecc21dd9-225f-4ee1-9782-8163ff42a506-artworktest.jpg-original',NULL,NULL,'USER-17/ART-20/ecc21dd9-225f-4ee1-9782-8163ff42a506-artworktest.jpg-medium','2022-04-04 06:53:36.015','2022-04-04 06:53:36.016',NULL),
	(124,'artworktest.jpg','image/jpeg','USER-17/ART-20/287de940-f353-4107-9c37-51d0283aff92-artworktest.jpg-original',NULL,NULL,'USER-17/ART-20/287de940-f353-4107-9c37-51d0283aff92-artworktest.jpg-medium','2022-04-04 06:55:28.219','2022-04-04 06:55:28.220',NULL),
	(125,'artworktest.jpg','image/jpeg','USER-17/ART-20/47b3759c-d5b2-4054-97c2-e8d8639af427-artworktest.jpg-original',NULL,NULL,'USER-17/ART-20/47b3759c-d5b2-4054-97c2-e8d8639af427-artworktest.jpg-medium','2022-04-04 07:02:14.218','2022-04-04 07:02:14.218',NULL),
	(126,'artworktest.jpg','image/jpeg','USER-17/ART-20/e0a625b5-c849-44d6-ba69-bea654012255-artworktest.jpg-original',NULL,NULL,'USER-17/ART-20/e0a625b5-c849-44d6-ba69-bea654012255-artworktest.jpg-medium','2022-04-04 07:05:19.743','2022-04-04 07:05:19.744',NULL),
	(127,'artworktest.jpg','image/jpeg','USER-17/ART-20/0bfd00ca-f7c2-4421-8937-de19e4451755-artworktest.jpg-original',NULL,NULL,'USER-17/ART-20/0bfd00ca-f7c2-4421-8937-de19e4451755-artworktest.jpg-medium','2022-04-04 07:06:00.707','2022-04-04 07:06:00.708',NULL),
	(128,'artworktest.jpg','image/jpeg','USER-17/ART-20/d1bb0493-c636-4ee8-b69d-63b7f2278128-artworktest.jpg-original',NULL,NULL,'USER-17/ART-20/d1bb0493-c636-4ee8-b69d-63b7f2278128-artworktest.jpg-medium','2022-04-04 07:06:45.180','2022-04-04 07:06:45.180',NULL),
	(129,'artworktest.jpg','image/jpeg','USER-17/ART-20/b3ff58b2-f0ac-4852-be9d-e7f0051aa4ff-artworktest.jpg-original',NULL,NULL,'USER-17/ART-20/b3ff58b2-f0ac-4852-be9d-e7f0051aa4ff-artworktest.jpg-medium','2022-04-04 07:08:19.259','2022-04-04 07:08:19.259',NULL),
	(130,'artworktest.jpg','image/jpeg','USER-17/ART-20/eba1260b-22ef-4e09-b3e1-420d3fbc8511-artworktest.jpg-original',NULL,NULL,'USER-17/ART-20/eba1260b-22ef-4e09-b3e1-420d3fbc8511-artworktest.jpg-medium','2022-04-04 07:09:54.809','2022-04-04 07:09:54.810',NULL),
	(131,'artworktest.jpg','image/jpeg','USER-17/ART-20/d5a36e8f-62d4-4402-8688-d53f0622150b-artworktest.jpg-original',NULL,NULL,'USER-17/ART-20/d5a36e8f-62d4-4402-8688-d53f0622150b-artworktest.jpg-medium','2022-04-04 07:13:22.723','2022-04-04 07:13:22.724',NULL),
	(132,'artworktest.jpg','image/jpeg','USER-17/ART-20/d7830fe3-efcb-4f07-9379-2c3ca7ed89d6-artworktest.jpg-original',NULL,NULL,'USER-17/ART-20/d7830fe3-efcb-4f07-9379-2c3ca7ed89d6-artworktest.jpg-medium','2022-04-04 07:14:04.233','2022-04-04 07:14:04.234',NULL),
	(133,'IMG_20220318_164112.jpg','image/jpeg','USER-6/9ff6ec47-1630-4444-ac22-17d8a1916a8e-IMG_20220318_164112.jpg-original',NULL,NULL,'USER-6/9ff6ec47-1630-4444-ac22-17d8a1916a8e-IMG_20220318_164112.jpg-medium','2022-04-06 14:04:52.294','2022-04-06 14:04:52.296',6),
	(134,'IMG_20220331_133021.jpg','image/jpeg','USER-6/ART-20/d0645378-db84-4217-a131-5149b80de70a-IMG_20220331_133021.jpg-original',NULL,NULL,'USER-6/ART-20/d0645378-db84-4217-a131-5149b80de70a-IMG_20220331_133021.jpg-medium','2022-04-06 14:07:37.467','2022-04-06 14:07:37.467',6),
	(135,'IMG_20220315_152523_259.jpg','image/jpeg','USER-6/ART-21/c03812f9-2f9a-4f2f-8a49-92ffa1ae1d24-IMG_20220315_152523_259.jpg-original',NULL,NULL,'USER-6/ART-21/c03812f9-2f9a-4f2f-8a49-92ffa1ae1d24-IMG_20220315_152523_259.jpg-medium','2022-04-06 14:11:20.700','2022-04-06 14:11:20.700',6),
	(136,'artworktest.jpg','image/jpeg','USER-17/ART-22/89e947a7-2ecd-44cb-8bc6-b749bb6d38a9-artworktest.jpg-original',NULL,NULL,'USER-17/ART-22/89e947a7-2ecd-44cb-8bc6-b749bb6d38a9-artworktest.jpg-medium','2022-04-06 15:02:49.274','2022-04-06 15:02:49.275',NULL),
	(137,'artworktest.jpg','image/jpeg','USER-17/ART-22/86e6742d-872e-444e-b658-bb6d3b5f9736-artworktest.jpg-original',NULL,NULL,'USER-17/ART-22/86e6742d-872e-444e-b658-bb6d3b5f9736-artworktest.jpg-medium','2022-04-06 15:20:04.994','2022-04-06 15:20:04.994',NULL),
	(138,'artworktest.jpg','image/jpeg','USER-17/ART-22/da4a9424-c47c-44f1-a7f3-a861004ef58c-artworktest.jpg-original',NULL,NULL,'USER-17/ART-22/da4a9424-c47c-44f1-a7f3-a861004ef58c-artworktest.jpg-medium','2022-04-06 15:22:03.059','2022-04-06 15:22:03.060',NULL),
	(139,'artworktest.jpg','image/jpeg','USER-17/ART-22/4f6dcc50-9400-4ae0-bf91-76e8b1dd7c1c-artworktest.jpg-original',NULL,NULL,'USER-17/ART-22/4f6dcc50-9400-4ae0-bf91-76e8b1dd7c1c-artworktest.jpg-medium','2022-04-06 15:23:08.871','2022-04-06 15:23:08.877',NULL),
	(140,'artworktest.jpg','image/jpeg','USER-17/ART-22/7e8054ab-68cb-4b68-9e9f-e0122c10d319-artworktest.jpg-original',NULL,NULL,'USER-17/ART-22/7e8054ab-68cb-4b68-9e9f-e0122c10d319-artworktest.jpg-medium','2022-04-06 15:41:07.584','2022-04-06 15:41:07.585',NULL),
	(141,'artworktest.jpg','image/jpeg','USER-17/ART-22/443909c3-1589-4d2a-a1cb-b72ce01cd03f-artworktest.jpg-original',NULL,NULL,'USER-17/ART-22/443909c3-1589-4d2a-a1cb-b72ce01cd03f-artworktest.jpg-medium','2022-04-06 15:41:56.211','2022-04-06 15:41:56.211',NULL),
	(142,'artworktest.jpg','image/jpeg','USER-17/ART-22/75b11d0f-2aae-499f-8022-f20d1aca2253-artworktest.jpg-original',NULL,NULL,'USER-17/ART-22/75b11d0f-2aae-499f-8022-f20d1aca2253-artworktest.jpg-medium','2022-04-06 15:45:05.574','2022-04-06 15:45:05.575',NULL),
	(143,'artworktest.jpg','image/jpeg','USER-17/ART-22/2a2a655f-0aa7-44e1-8db4-b635ea73828b-artworktest.jpg-original',NULL,NULL,'USER-17/ART-22/2a2a655f-0aa7-44e1-8db4-b635ea73828b-artworktest.jpg-medium','2022-04-06 15:45:57.370','2022-04-06 15:45:57.370',NULL),
	(144,'artworktest.jpg','image/jpeg','USER-17/ART-22/d3c78454-97f8-4127-a401-d7719598b342-artworktest.jpg-original',NULL,NULL,'USER-17/ART-22/d3c78454-97f8-4127-a401-d7719598b342-artworktest.jpg-medium','2022-04-06 15:55:18.687','2022-04-06 15:55:18.687',NULL),
	(145,'artworktest.jpg','image/jpeg','USER-17/ART-22/58a7bd59-e59d-4f8f-82b1-f7eb4558f128-artworktest.jpg-original',NULL,NULL,'USER-17/ART-22/58a7bd59-e59d-4f8f-82b1-f7eb4558f128-artworktest.jpg-medium','2022-04-06 16:03:49.223','2022-04-06 16:03:49.229',NULL),
	(146,'artworktest.jpg','image/jpeg','USER-17/ART-22/17cc3070-9550-4b83-864d-ba1561748f51-artworktest.jpg-original',NULL,NULL,'USER-17/ART-22/17cc3070-9550-4b83-864d-ba1561748f51-artworktest.jpg-medium','2022-04-06 16:07:03.818','2022-04-06 16:07:03.818',NULL),
	(147,'artworktest.jpg','image/jpeg','USER-17/ART-22/02d91c16-ddbd-4b48-9673-3c4458224549-artworktest.jpg-original',NULL,NULL,'USER-17/ART-22/02d91c16-ddbd-4b48-9673-3c4458224549-artworktest.jpg-medium','2022-04-06 16:18:27.571','2022-04-06 16:18:27.572',NULL),
	(148,'artworktest.jpg','image/jpeg','USER-17/ART-22/7ddd8a84-6ec0-4e32-b8e2-955bdbda90ea-artworktest.jpg-original',NULL,NULL,'USER-17/ART-22/7ddd8a84-6ec0-4e32-b8e2-955bdbda90ea-artworktest.jpg-medium','2022-04-06 16:24:33.995','2022-04-06 16:24:33.996',NULL),
	(149,'artworktest.jpg','image/jpeg','USER-17/ART-22/296477e0-c09a-4abe-88a5-429b579f64ab-artworktest.jpg-original',NULL,NULL,'USER-17/ART-22/296477e0-c09a-4abe-88a5-429b579f64ab-artworktest.jpg-medium','2022-04-06 16:26:52.137','2022-04-06 16:26:52.137',NULL),
	(150,'Fadjar-Sidik-Portrait3 (1).png','image/png','USER-17/ART-22/ab392531-f9ff-4ccd-bde5-d578e581a06c-Fadjar-Sidik-Portrait3 (1).png-original',NULL,NULL,'USER-17/ART-22/ab392531-f9ff-4ccd-bde5-d578e581a06c-Fadjar-Sidik-Portrait3 (1).png-medium','2022-04-06 16:29:07.249','2022-04-06 16:29:07.249',NULL),
	(151,'Fadjar-Sidik).png','image/png','USER-17/ART-22/b9b939ad-ba84-4d48-9294-001a4dfc5a79-Fadjar-Sidik).png-original',NULL,NULL,'USER-17/ART-22/b9b939ad-ba84-4d48-9294-001a4dfc5a79-Fadjar-Sidik).png-medium','2022-04-06 16:30:19.984','2022-04-06 16:30:19.985',NULL),
	(152,'Fadjar-Sidik-Portrait3 (1).png','image/png','USER-17/ART-22/ae76cd54-b1a3-49f1-8490-ffb5a73f50e6-Fadjar-Sidik-Portrait3 (1).png-original',NULL,NULL,'USER-17/ART-22/ae76cd54-b1a3-49f1-8490-ffb5a73f50e6-Fadjar-Sidik-Portrait3 (1).png-medium','2022-04-06 16:32:06.979','2022-04-06 16:32:06.980',NULL),
	(153,'artworktest.jpg','image/jpeg','USER-17/ART-22/6fa17bb5-8c64-43d5-a4d4-042b4b9c4b7d-artworktest.jpg-original',NULL,NULL,'USER-17/ART-22/6fa17bb5-8c64-43d5-a4d4-042b4b9c4b7d-artworktest.jpg-medium','2022-04-06 16:34:02.657','2022-04-06 16:34:02.657',NULL),
	(154,'artworktest.jpg','image/jpeg','USER-17/ART-22/6b405413-a1df-44c3-ae10-44abda4b49ca-artworktest.jpg-original',NULL,NULL,'USER-17/ART-22/6b405413-a1df-44c3-ae10-44abda4b49ca-artworktest.jpg-medium','2022-04-06 16:34:17.085','2022-04-06 16:34:17.085',NULL),
	(155,'artworktest.jpg','image/jpeg','USER-17/ART-22/05388190-a7f7-4da9-8bfc-304f2bc4c2b6-artworktest.jpg-original',NULL,NULL,'USER-17/ART-22/05388190-a7f7-4da9-8bfc-304f2bc4c2b6-artworktest.jpg-medium','2022-04-06 16:35:51.775','2022-04-06 16:35:51.776',NULL),
	(156,'artworktest.jpg','image/jpeg','USER-17/ART-22/da27640b-5dbb-407d-9349-311db9040a81-artworktest.jpg-original',NULL,NULL,'USER-17/ART-22/da27640b-5dbb-407d-9349-311db9040a81-artworktest.jpg-medium','2022-04-06 16:36:04.523','2022-04-06 16:36:04.523',NULL),
	(157,'artworktest.jpg','image/jpeg','USER-17/ART-22/09d2dad9-e816-4644-9ef9-1831d47710bf-artworktest.jpg-original',NULL,NULL,'USER-17/ART-22/09d2dad9-e816-4644-9ef9-1831d47710bf-artworktest.jpg-medium','2022-04-06 16:36:47.129','2022-04-06 16:36:47.130',NULL),
	(158,'artworktest.jpg','image/jpeg','USER-17/ART-22/4fa45ce8-ed48-4568-b289-720745449caf-artworktest.jpg-original',NULL,NULL,'USER-17/ART-22/4fa45ce8-ed48-4568-b289-720745449caf-artworktest.jpg-medium','2022-04-06 16:37:01.050','2022-04-06 16:37:01.050',NULL),
	(159,'artworktest.jpg','image/jpeg','USER-17/ART-22/a612342a-7957-49db-b541-ea1992e6e5ca-artworktest.jpg-original',NULL,NULL,'USER-17/ART-22/a612342a-7957-49db-b541-ea1992e6e5ca-artworktest.jpg-medium','2022-04-06 16:37:06.236','2022-04-06 16:37:06.236',NULL),
	(160,'artworktest.jpg','image/jpeg','USER-17/ART-22/e135efea-7b47-4c1c-9781-8d36734b1d16-artworktest.jpg-original',NULL,NULL,'USER-17/ART-22/e135efea-7b47-4c1c-9781-8d36734b1d16-artworktest.jpg-medium','2022-04-06 16:38:36.449','2022-04-06 16:38:36.449',NULL),
	(161,'artworktest.jpg','image/jpeg','USER-17/ART-22/71e1732c-2a92-4a6f-8e51-5d45b1d0aee0-artworktest.jpg-original',NULL,NULL,'USER-17/ART-22/71e1732c-2a92-4a6f-8e51-5d45b1d0aee0-artworktest.jpg-medium','2022-04-06 16:38:49.744','2022-04-06 16:38:49.745',NULL),
	(162,'artworktest.jpg','image/jpeg','USER-17/ART-22/906353ba-e413-4f96-a1cf-f69e62b2e07f-artworktest.jpg-original',NULL,NULL,'USER-17/ART-22/906353ba-e413-4f96-a1cf-f69e62b2e07f-artworktest.jpg-medium','2022-04-06 16:38:55.406','2022-04-06 16:38:55.407',NULL),
	(163,'artworktest.jpg','image/jpeg','USER-17/ART-22/0a61c9b0-811a-4d02-b700-3304d8efaf45-artworktest.jpg-original',NULL,NULL,'USER-17/ART-22/0a61c9b0-811a-4d02-b700-3304d8efaf45-artworktest.jpg-medium','2022-04-06 16:41:10.797','2022-04-06 16:41:10.798',NULL),
	(164,'artworktest.jpg','image/jpeg','USER-17/ART-22/50cb6b05-eb5c-416c-8bbe-1ae74f8b4e7b-artworktest.jpg-original',NULL,NULL,'USER-17/ART-22/50cb6b05-eb5c-416c-8bbe-1ae74f8b4e7b-artworktest.jpg-medium','2022-04-06 16:41:24.337','2022-04-06 16:41:24.338',NULL),
	(165,'artworktest.jpg','image/jpeg','USER-17/ART-22/80627bed-c957-419a-b444-28d6d8bbc5b1-artworktest.jpg-original',NULL,NULL,'USER-17/ART-22/80627bed-c957-419a-b444-28d6d8bbc5b1-artworktest.jpg-medium','2022-04-06 16:43:01.679','2022-04-06 16:43:01.679',NULL),
	(166,'artworktest.jpg','image/jpeg','USER-17/ART-22/e64882f0-92fe-4c72-bcc0-17b437e664a9-artworktest.jpg-original',NULL,NULL,'USER-17/ART-22/e64882f0-92fe-4c72-bcc0-17b437e664a9-artworktest.jpg-medium','2022-04-06 16:43:14.806','2022-04-06 16:43:14.807',NULL),
	(167,'artworktest.jpg','image/jpeg','USER-17/ART-22/b53ee738-3b1c-4843-8ce4-579923e05068-artworktest.jpg-original',NULL,NULL,'USER-17/ART-22/b53ee738-3b1c-4843-8ce4-579923e05068-artworktest.jpg-medium','2022-04-06 16:43:20.378','2022-04-06 16:43:20.378',NULL),
	(168,'artworktest.jpg','image/jpeg','USER-17/ART-22/d47d10e6-149b-4493-8f3d-9dd0128b3370-artworktest.jpg-original',NULL,NULL,'USER-17/ART-22/d47d10e6-149b-4493-8f3d-9dd0128b3370-artworktest.jpg-medium','2022-04-06 16:45:22.687','2022-04-06 16:45:22.687',NULL),
	(169,'artworktest.jpg','image/jpeg','USER-17/ART-22/9159a8d6-a0c8-4d84-912d-3e4562b4249c-artworktest.jpg-original',NULL,NULL,'USER-17/ART-22/9159a8d6-a0c8-4d84-912d-3e4562b4249c-artworktest.jpg-medium','2022-04-06 16:47:20.152','2022-04-06 16:47:20.152',NULL),
	(170,'artworktest.jpg','image/jpeg','USER-17/ART-22/1b624a71-f35c-4a91-9dd9-a8437ca5695f-artworktest.jpg-original',NULL,NULL,'USER-17/ART-22/1b624a71-f35c-4a91-9dd9-a8437ca5695f-artworktest.jpg-medium','2022-04-06 16:47:33.410','2022-04-06 16:47:33.411',NULL),
	(171,'artworktest.jpg','image/jpeg','USER-17/ART-22/3977fff2-1144-4b36-87eb-f05f25bdbadd-artworktest.jpg-original',NULL,NULL,'USER-17/ART-22/3977fff2-1144-4b36-87eb-f05f25bdbadd-artworktest.jpg-medium','2022-04-06 16:47:38.900','2022-04-06 16:47:38.901',NULL),
	(172,'artworktest.jpg','image/jpeg','USER-17/ART-22/6b05e418-92bf-4596-ba3c-2a3952ef54d9-artworktest.jpg-original',NULL,NULL,'USER-17/ART-22/6b05e418-92bf-4596-ba3c-2a3952ef54d9-artworktest.jpg-medium','2022-04-06 16:48:40.014','2022-04-06 16:48:40.015',NULL),
	(173,'artworktest.jpg','image/jpeg','USER-17/ART-22/c6a23237-0bda-4bdd-b5b8-57f570dc9127-artworktest.jpg-original',NULL,NULL,'USER-17/ART-22/c6a23237-0bda-4bdd-b5b8-57f570dc9127-artworktest.jpg-medium','2022-04-06 16:48:53.854','2022-04-06 16:48:53.858',NULL),
	(174,'IMG_20220314_164040_751.jpg','image/jpeg','USER-6/ART-22/de888ed6-b95a-4ab8-a348-a92ee94db234-IMG_20220314_164040_751.jpg-original',NULL,NULL,'USER-6/ART-22/de888ed6-b95a-4ab8-a348-a92ee94db234-IMG_20220314_164040_751.jpg-medium','2022-04-06 23:02:01.102','2022-04-06 23:02:01.103',6),
	(175,'IMG_20220406_082252.jpg','image/jpeg','USER-6/ART-23/67d5b4f5-f565-49a9-95d4-b7e72734f1ec-IMG_20220406_082252.jpg-original',NULL,NULL,'USER-6/ART-23/67d5b4f5-f565-49a9-95d4-b7e72734f1ec-IMG_20220406_082252.jpg-medium','2022-04-06 23:05:02.917','2022-04-06 23:05:02.918',6),
	(176,'IMG20210919155016.jpg','image/jpeg','USER-27/ART-24/3547883e-348c-42ef-ba97-126e705f58fb-IMG20210919155016.jpg-original',NULL,NULL,'USER-27/ART-24/3547883e-348c-42ef-ba97-126e705f58fb-IMG20210919155016.jpg-medium','2022-04-07 11:18:12.598','2022-04-07 11:18:12.598',27),
	(177,'IMG-20220318-WA0015.jpg','image/jpeg','USER-28/c848dfd4-4e3f-41b7-9d58-a2f2a082edb2-IMG-20220318-WA0015.jpg-original',NULL,NULL,'USER-28/c848dfd4-4e3f-41b7-9d58-a2f2a082edb2-IMG-20220318-WA0015.jpg-medium','2022-04-07 11:18:20.598','2022-04-07 11:18:20.598',28),
	(178,'IMG20220407095247.jpg','image/jpeg','USER-30/ART-24/6e60c8ff-9a2c-4ad9-a495-9d50a0d3c7ca-IMG20220407095247.jpg-original',NULL,NULL,'USER-30/ART-24/6e60c8ff-9a2c-4ad9-a495-9d50a0d3c7ca-IMG20220407095247.jpg-medium','2022-04-07 11:18:51.894','2022-04-07 11:18:51.895',30),
	(179,'IMG_20200109_183354.jpg','image/jpeg','USER-31/7debd12b-d3f0-4585-b7d5-7494ffb8dfc5-IMG_20200109_183354.jpg-original',NULL,NULL,'USER-31/7debd12b-d3f0-4585-b7d5-7494ffb8dfc5-IMG_20200109_183354.jpg-medium','2022-04-07 11:20:20.837','2022-04-07 11:20:20.838',31),
	(180,'IMG20220407095218.jpg','image/jpeg','USER-30/ART-24/a1944db6-1500-4c59-a7f0-b3db30395e4a-IMG20220407095218.jpg-original',NULL,NULL,'USER-30/ART-24/a1944db6-1500-4c59-a7f0-b3db30395e4a-IMG20220407095218.jpg-medium','2022-04-07 11:21:41.206','2022-04-07 11:21:41.207',30),
	(181,'20150704_162238.jpg','image/jpeg','USER-28/8a6f020b-0c48-48d3-b812-2ed0539132fd-20150704_162238.jpg-original',NULL,NULL,'USER-28/8a6f020b-0c48-48d3-b812-2ed0539132fd-20150704_162238.jpg-medium','2022-04-07 11:21:50.796','2022-04-07 11:21:50.797',28),
	(182,'Kan ku doakan selalu bangsaku, merah putihku berkibarlah selamanya  - coffee,oil on canvas - 120 x 140 cm - 2021.jpg','image/jpeg','USER-29/ART-25/9bcf7186-80c0-4fce-b860-237098234b67-Kan ku doakan selalu bangsaku, merah putihku berkibarlah selamanya  - coffee,oil on canvas - 120 x 140 cm - 2021.jpg-original',NULL,NULL,'USER-29/ART-25/9bcf7186-80c0-4fce-b860-237098234b67-Kan ku doakan selalu bangsaku, merah putihku berkibarlah selamanya  - coffee,oil on canvas - 120 x 140 cm - 2021.jpg-medium','2022-04-07 11:22:33.853','2022-04-07 11:22:33.853',29),
	(183,'IMG_20220326_103520_306.jpg','image/jpeg','USER-26/ART-24/bb62c75e-9466-4134-bc9c-cb34fc89c32e-IMG_20220326_103520_306.jpg-original',NULL,NULL,'USER-26/ART-24/bb62c75e-9466-4134-bc9c-cb34fc89c32e-IMG_20220326_103520_306.jpg-medium','2022-04-07 11:23:05.827','2022-04-07 11:23:05.827',26),
	(184,'C360_2015-06-29-16-35-40-875.jpg','image/jpeg','USER-28/ART-25/517c5837-edab-49a3-8f04-1a4b2778be10-C360_2015-06-29-16-35-40-875.jpg-original',NULL,NULL,'USER-28/ART-25/517c5837-edab-49a3-8f04-1a4b2778be10-C360_2015-06-29-16-35-40-875.jpg-medium','2022-04-07 11:23:24.596','2022-04-07 11:23:24.597',28),
	(185,'IMG-20220318-WA0015.jpg','image/jpeg','USER-28/ART-25/45aeb8e7-8eb2-4983-a53a-bb628d9d9fe6-IMG-20220318-WA0015.jpg-original',NULL,NULL,'USER-28/ART-25/45aeb8e7-8eb2-4983-a53a-bb628d9d9fe6-IMG-20220318-WA0015.jpg-medium','2022-04-07 11:24:08.269','2022-04-07 11:24:08.270',28),
	(186,'IMG_20210621_145356.jpg','image/jpeg','USER-27/ART-25/c9ca3f28-ef75-4760-b7f8-783b5447d0cc-IMG_20210621_145356.jpg-original',NULL,NULL,'USER-27/ART-25/c9ca3f28-ef75-4760-b7f8-783b5447d0cc-IMG_20210621_145356.jpg-medium','2022-04-07 11:26:41.221','2022-04-07 11:26:41.222',27),
	(187,'IMG_20211209_135452.jpg','image/jpeg','USER-31/0e58b03d-814b-4e99-a33b-c0b446aafb0a-IMG_20211209_135452.jpg-original',NULL,NULL,'USER-31/0e58b03d-814b-4e99-a33b-c0b446aafb0a-IMG_20211209_135452.jpg-medium','2022-04-07 11:28:07.095','2022-04-07 11:28:07.095',31),
	(188,'IMG_20210621_145132.jpg','image/jpeg','USER-27/ART-29/f35f1afa-b71d-48a0-84b9-d8f2f73ae4f3-IMG_20210621_145132.jpg-original',NULL,NULL,'USER-27/ART-29/f35f1afa-b71d-48a0-84b9-d8f2f73ae4f3-IMG_20210621_145132.jpg-medium','2022-04-07 11:35:54.491','2022-04-07 11:35:54.491',27),
	(189,'IMG_20210709_170527_093.jpg','image/jpeg','USER-32/4c82ce82-ed7d-481b-bc24-98b1bd588df3-IMG_20210709_170527_093.jpg-original',NULL,NULL,'USER-32/4c82ce82-ed7d-481b-bc24-98b1bd588df3-IMG_20210709_170527_093.jpg-medium','2022-04-07 11:36:41.736','2022-04-07 11:36:41.737',32),
	(190,'IMG_20211216_093110_867.jpg','image/jpeg','USER-32/4c2a6cdd-ee7a-42a9-a0b6-0852c8aceae7-IMG_20211216_093110_867.jpg-original',NULL,NULL,'USER-32/4c2a6cdd-ee7a-42a9-a0b6-0852c8aceae7-IMG_20211216_093110_867.jpg-medium','2022-04-07 11:37:54.858','2022-04-07 11:37:54.858',32),
	(191,'IMG_20220313_204010.jpg','image/jpeg','USER-27/ART-31/127c9c38-f09b-4050-9554-9f8204b578d6-IMG_20220313_204010.jpg-original',NULL,NULL,'USER-27/ART-31/127c9c38-f09b-4050-9554-9f8204b578d6-IMG_20220313_204010.jpg-medium','2022-04-07 11:46:14.083','2022-04-07 11:46:14.083',27),
	(192,'sweet dream l  BIAB 2019.jpg','image/jpeg','USER-32/2a118f9e-6ff1-451c-bb69-1fd13dc7ee8e-sweet dream l  BIAB 2019.jpg-original',NULL,NULL,'USER-32/2a118f9e-6ff1-451c-bb69-1fd13dc7ee8e-sweet dream l  BIAB 2019.jpg-medium','2022-04-07 11:46:17.772','2022-04-07 11:46:17.773',32),
	(193,'IMG20220212090221.jpg','image/jpeg','USER-27/a3e0f073-73b8-4032-9f58-b601cab8d92c-IMG20220212090221.jpg-original',NULL,NULL,'USER-27/a3e0f073-73b8-4032-9f58-b601cab8d92c-IMG20220212090221.jpg-medium','2022-04-07 11:49:28.954','2022-04-07 11:49:28.955',27),
	(194,'C360_2015-06-29-16-35-40-875.jpg','image/jpeg','USER-28/ART-32/ae7c2fa7-1141-4068-9dd0-5c122a495e11-C360_2015-06-29-16-35-40-875.jpg-original',NULL,NULL,'USER-28/ART-32/ae7c2fa7-1141-4068-9dd0-5c122a495e11-C360_2015-06-29-16-35-40-875.jpg-medium','2022-04-07 11:49:42.927','2022-04-07 11:49:42.928',28),
	(195,'IMG_20211011_135155.jpg','image/jpeg','USER-27/00e03bdb-5267-46d8-bde3-32f1443616f0-IMG_20211011_135155.jpg-original',NULL,NULL,'USER-27/00e03bdb-5267-46d8-bde3-32f1443616f0-IMG_20211011_135155.jpg-medium','2022-04-07 11:50:20.013','2022-04-07 11:50:20.014',27),
	(196,'IMG-20220302-WA0032.jpg','image/jpeg','USER-28/ART-32/bc84e494-89ec-4f5d-a213-f14fc05738bf-IMG-20220302-WA0032.jpg-original',NULL,NULL,'USER-28/ART-32/bc84e494-89ec-4f5d-a213-f14fc05738bf-IMG-20220302-WA0032.jpg-medium','2022-04-07 11:51:32.003','2022-04-07 11:51:32.004',28),
	(197,'IMG-20211008-WA0052.jpg','image/jpeg','USER-29/e7c7118e-9371-40e5-aaa9-af16838db346-IMG-20211008-WA0052.jpg-original',NULL,NULL,'USER-29/e7c7118e-9371-40e5-aaa9-af16838db346-IMG-20211008-WA0052.jpg-medium','2022-04-07 11:57:07.374','2022-04-07 11:57:07.374',29),
	(198,'IMG-20220104-WA0011.jpg','image/jpeg','USER-27/3b598a78-99f2-4f19-9ab4-02070103754f-IMG-20220104-WA0011.jpg-original',NULL,NULL,'USER-27/3b598a78-99f2-4f19-9ab4-02070103754f-IMG-20220104-WA0011.jpg-medium','2022-04-07 11:58:44.168','2022-04-07 11:58:44.168',27),
	(199,'IMG_20210616_081311_051.jpg','image/jpeg','USER-32/ART-33/5e76dde1-a950-4090-ac06-1cee1c4a5728-IMG_20210616_081311_051.jpg-original',NULL,NULL,'USER-32/ART-33/5e76dde1-a950-4090-ac06-1cee1c4a5728-IMG_20210616_081311_051.jpg-medium','2022-04-07 12:07:06.001','2022-04-07 12:07:06.001',32),
	(200,'IMG-20190203-WA0002.jpg','image/jpeg','USER-26/58efbe27-d588-4592-a6c5-16621515fd61-IMG-20190203-WA0002.jpg-original',NULL,NULL,'USER-26/58efbe27-d588-4592-a6c5-16621515fd61-IMG-20190203-WA0002.jpg-medium','2022-04-07 12:14:27.053','2022-04-07 12:14:27.053',26),
	(201,'IMG_20220314_231820.jpg','image/jpeg','USER-26/d21ae960-8995-4642-b6ae-efe7bb3cb500-IMG_20220314_231820.jpg-original',NULL,NULL,'USER-26/d21ae960-8995-4642-b6ae-efe7bb3cb500-IMG_20220314_231820.jpg-medium','2022-04-07 12:20:17.083','2022-04-07 12:20:17.084',26),
	(202,'IMG-20190203-WA0002.jpg','image/jpeg','USER-26/bf11e2b9-4118-438c-aff8-70060a151a5c-IMG-20190203-WA0002.jpg-original',NULL,NULL,'USER-26/bf11e2b9-4118-438c-aff8-70060a151a5c-IMG-20190203-WA0002.jpg-medium','2022-04-07 12:22:04.088','2022-04-07 12:22:04.089',26),
	(203,'IMG-20211112-WA0028.jpg','image/jpeg','USER-28/41c46b6d-6efa-4f50-8432-0e20d6942392-IMG-20211112-WA0028.jpg-original',NULL,NULL,'USER-28/41c46b6d-6efa-4f50-8432-0e20d6942392-IMG-20211112-WA0028.jpg-medium','2022-04-07 12:22:32.492','2022-04-07 12:22:32.493',28),
	(204,'IMG-20210406-WA0054.jpg','image/jpeg','USER-28/b51457ff-aeef-4b0d-909a-640387c7695a-IMG-20210406-WA0054.jpg-original',NULL,NULL,'USER-28/b51457ff-aeef-4b0d-909a-640387c7695a-IMG-20210406-WA0054.jpg-medium','2022-04-07 12:25:36.468','2022-04-07 12:25:36.468',28),
	(205,'DSCF1140a.jpg','image/jpeg','USER-29/3745b430-4cbb-478f-b222-be24ddd0b366-DSCF1140a.jpg-original',NULL,NULL,'USER-29/3745b430-4cbb-478f-b222-be24ddd0b366-DSCF1140a.jpg-medium','2022-04-07 12:26:28.242','2022-04-07 12:26:28.242',29),
	(206,'DSCF1140a.jpg','image/jpeg','USER-29/ART-34/77e0d803-639c-4bb0-8a01-c198f822815f-DSCF1140a.jpg-original',NULL,NULL,'USER-29/ART-34/77e0d803-639c-4bb0-8a01-c198f822815f-DSCF1140a.jpg-medium','2022-04-07 12:28:01.146','2022-04-07 12:28:01.147',29),
	(207,'IMG_20210616_081318_373.jpg','image/jpeg','USER-32/ART-35/cb681fc6-ed2f-4648-bda9-c8379685cdeb-IMG_20210616_081318_373.jpg-original',NULL,NULL,'USER-32/ART-35/cb681fc6-ed2f-4648-bda9-c8379685cdeb-IMG_20210616_081318_373.jpg-medium','2022-04-07 13:33:46.821','2022-04-07 13:33:46.821',32),
	(208,'IMG_20220406_160001.jpg','image/jpeg','USER-6/97d68243-90e8-4aa9-8902-ba6980339b67-IMG_20220406_160001.jpg-original',NULL,NULL,'USER-6/97d68243-90e8-4aa9-8902-ba6980339b67-IMG_20220406_160001.jpg-medium','2022-04-07 15:11:52.243','2022-04-07 15:11:52.244',6),
	(209,'Screenshot_2022-03-13-18-36-40-31.jpg','image/jpeg','USER-6/f599fd02-39e3-47ef-992f-e8c35cb5c4df-Screenshot_2022-03-13-18-36-40-31.jpg-original',NULL,NULL,'USER-6/f599fd02-39e3-47ef-992f-e8c35cb5c4df-Screenshot_2022-03-13-18-36-40-31.jpg-medium','2022-04-07 15:12:36.119','2022-04-07 15:12:36.120',6),
	(210,'Potret diri-20170808','application/octet-stream','USER-30/0ea3a293-1a75-4186-a4f6-32161d833b12-Potret diri-20170808',NULL,NULL,'USER-30/0ea3a293-1a75-4186-a4f6-32161d833b12-Potret diri-20170808','2022-04-08 01:46:56.091','2022-04-08 01:46:56.092',30),
	(211,'Potret diri-20170808','application/octet-stream','USER-30/f1538109-04f2-42f0-b106-ec730c12a5bc-Potret diri-20170808',NULL,NULL,'USER-30/f1538109-04f2-42f0-b106-ec730c12a5bc-Potret diri-20170808','2022-04-08 01:47:35.115','2022-04-08 01:47:35.116',30),
	(212,'IMG_20220408_093607.jpg','image/jpeg','USER-30/ART-36/7ba60487-8563-488b-ba92-86bca51ae603-IMG_20220408_093607.jpg-original',NULL,NULL,'USER-30/ART-36/7ba60487-8563-488b-ba92-86bca51ae603-IMG_20220408_093607.jpg-medium','2022-04-08 01:51:34.146','2022-04-08 01:51:34.147',30),
	(213,'IMG_20220408_093534.jpg','image/jpeg','USER-30/ART-37/57300a46-431c-4c81-b02b-56c5a3beb361-IMG_20220408_093534.jpg-original',NULL,NULL,'USER-30/ART-37/57300a46-431c-4c81-b02b-56c5a3beb361-IMG_20220408_093534.jpg-medium','2022-04-08 01:59:53.777','2022-04-08 01:59:53.778',30),
	(214,'IMG_20220408_093502.jpg','image/jpeg','USER-30/ART-38/c759ad47-fec8-40db-8c93-3895ffd1e263-IMG_20220408_093502.jpg-original',NULL,NULL,'USER-30/ART-38/c759ad47-fec8-40db-8c93-3895ffd1e263-IMG_20220408_093502.jpg-medium','2022-04-08 02:05:20.990','2022-04-08 02:05:20.991',30),
	(215,'IMG_20220408_093438.jpg','image/jpeg','USER-30/ART-39/060bfeb1-2a09-4646-a945-042d7246341d-IMG_20220408_093438.jpg-original',NULL,NULL,'USER-30/ART-39/060bfeb1-2a09-4646-a945-042d7246341d-IMG_20220408_093438.jpg-medium','2022-04-08 02:07:38.973','2022-04-08 02:07:38.974',30),
	(216,'IMG_20220408_101316.jpg','image/jpeg','USER-30/ART-40/07f59319-9c01-456a-a793-a5d16c71ee31-IMG_20220408_101316.jpg-original',NULL,NULL,'USER-30/ART-40/07f59319-9c01-456a-a793-a5d16c71ee31-IMG_20220408_101316.jpg-medium','2022-04-08 02:14:48.282','2022-04-08 02:14:48.282',30),
	(217,'4_ After Rain.jpg','image/jpeg','USER-31/ART-41/525e3bd3-a3bf-4cdd-aaca-7287549b00f2-4_ After Rain.jpg-original',NULL,NULL,'USER-31/ART-41/525e3bd3-a3bf-4cdd-aaca-7287549b00f2-4_ After Rain.jpg-medium','2022-04-08 03:10:52.648','2022-04-08 03:10:52.649',31),
	(218,'3_ Terasering.jpg','image/jpeg','USER-31/ART-42/1abf9420-76f6-4877-9cbf-a182b369b00a-3_ Terasering.jpg-original',NULL,NULL,'USER-31/ART-42/1abf9420-76f6-4877-9cbf-a182b369b00a-3_ Terasering.jpg-medium','2022-04-08 03:26:28.273','2022-04-08 03:26:28.273',31),
	(219,'rapat 1.png','image/png','USER-19/0057a8d2-db72-4dc1-befc-b63910a1d178-rapat 1.png-original',NULL,NULL,'USER-19/0057a8d2-db72-4dc1-befc-b63910a1d178-rapat 1.png-medium','2022-04-09 03:51:39.751','2022-04-09 03:51:39.752',19),
	(220,'IMG_20220407_161542.jpg','image/jpeg','USER-6/ART-43/aeaa7094-4cf6-4bc4-a930-1cf944f731ac-IMG_20220407_161542.jpg-original',NULL,NULL,'USER-6/ART-43/aeaa7094-4cf6-4bc4-a930-1cf944f731ac-IMG_20220407_161542.jpg-medium','2022-04-10 01:59:23.469','2022-04-10 01:59:23.469',6),
	(221,'IMG_20220409_142939.jpg','image/jpeg','USER-6/ART-44/5fb19add-4f19-4d72-9ddf-604fa0fe001e-IMG_20220409_142939.jpg-original',NULL,NULL,'USER-6/ART-44/5fb19add-4f19-4d72-9ddf-604fa0fe001e-IMG_20220409_142939.jpg-medium','2022-04-10 02:05:32.473','2022-04-10 02:05:32.474',6),
	(222,'IMG_20211116_082116.jpg','image/jpeg','USER-26/ART-45/90ec8375-e1eb-4705-a9eb-e6385c0277b8-IMG_20211116_082116.jpg-original',NULL,NULL,'USER-26/ART-45/90ec8375-e1eb-4705-a9eb-e6385c0277b8-IMG_20211116_082116.jpg-medium','2022-04-10 04:18:21.147','2022-04-10 04:18:21.147',26),
	(223,'IMG_20211116_082116.jpg','image/jpeg','USER-26/ART-45/b6146909-4b90-4a1e-8774-d3d77517c11a-IMG_20211116_082116.jpg-original',NULL,NULL,'USER-26/ART-45/b6146909-4b90-4a1e-8774-d3d77517c11a-IMG_20211116_082116.jpg-medium','2022-04-10 04:25:52.082','2022-04-10 04:25:52.083',26),
	(224,'IMG_20211116_082116.jpg','image/jpeg','USER-26/ART-45/f90fca88-f918-402d-b79a-e7c41eb84ae5-IMG_20211116_082116.jpg-original',NULL,NULL,'USER-26/ART-45/f90fca88-f918-402d-b79a-e7c41eb84ae5-IMG_20211116_082116.jpg-medium','2022-04-10 05:51:37.898','2022-04-10 05:51:37.899',26),
	(225,'IMG_20211116_082116.jpg','image/jpeg','USER-26/ART-45/95bb4830-84be-4a78-9313-933a6354f577-IMG_20211116_082116.jpg-original',NULL,NULL,'USER-26/ART-45/95bb4830-84be-4a78-9313-933a6354f577-IMG_20211116_082116.jpg-medium','2022-04-10 08:21:19.328','2022-04-10 08:21:19.329',26),
	(226,'IMG_20220408_093639.jpg','image/jpeg','USER-30/ART-46/9c379735-f9f2-46ad-bf89-ea113d6e381d-IMG_20220408_093639.jpg-original',NULL,NULL,'USER-30/ART-46/9c379735-f9f2-46ad-bf89-ea113d6e381d-IMG_20220408_093639.jpg-medium','2022-04-11 02:30:10.161','2022-04-11 02:30:10.162',30),
	(227,'IMG-20220412-WA0020.jpg','image/jpeg','USER-28/ART-47/45dfca60-524d-41e4-a35a-aa196193baed-IMG-20220412-WA0020.jpg-original',NULL,NULL,'USER-28/ART-47/45dfca60-524d-41e4-a35a-aa196193baed-IMG-20220412-WA0020.jpg-medium','2022-04-12 07:02:54.603','2022-04-12 07:02:54.604',28),
	(228,'IMG_20220411_162359.jpg','image/jpeg','USER-6/ART-47/da49b4ba-4af7-4069-92ba-999725e9d94f-IMG_20220411_162359.jpg-original',NULL,NULL,'USER-6/ART-47/da49b4ba-4af7-4069-92ba-999725e9d94f-IMG_20220411_162359.jpg-medium','2022-04-12 13:24:23.454','2022-04-12 13:24:23.454',6),
	(229,'4.png','image/png','USER-17/ART-48/95d36049-1dab-4837-9adb-3440dc0300cf-4.png-original',NULL,NULL,'USER-17/ART-48/95d36049-1dab-4837-9adb-3440dc0300cf-4.png-medium','2022-04-13 02:22:54.105','2022-04-13 02:22:54.105',NULL),
	(230,'IMG_20220415_091731.jpg','image/jpeg','USER-6/7b349356-1d82-4b11-a752-fb9851e54eb5-IMG_20220415_091731.jpg-original',NULL,NULL,'USER-6/7b349356-1d82-4b11-a752-fb9851e54eb5-IMG_20220415_091731.jpg-medium','2022-04-15 01:18:12.769','2022-04-15 01:18:12.770',6),
	(231,'IMG_20220312_193829.jpg','image/jpeg','USER-36/ART-48/e0e03f97-dc10-48f8-8eb9-4308c3ba12a5-IMG_20220312_193829.jpg-original',NULL,NULL,'USER-36/ART-48/e0e03f97-dc10-48f8-8eb9-4308c3ba12a5-IMG_20220312_193829.jpg-medium','2022-04-15 06:47:58.193','2022-04-15 06:47:58.194',36),
	(232,'IMG_20211221_012531.jpg','image/jpeg','USER-36/ART-48/a0a4cbab-7e93-430d-b96b-2528371668f3-IMG_20211221_012531.jpg-original',NULL,NULL,'USER-36/ART-48/a0a4cbab-7e93-430d-b96b-2528371668f3-IMG_20211221_012531.jpg-medium','2022-04-15 06:50:13.908','2022-04-15 06:50:13.908',36),
	(233,'IMG_20211026_174601.jpg','image/jpeg','USER-36/ART-48/24d9080e-6e39-4e99-877f-f0f257b488ae-IMG_20211026_174601.jpg-original',NULL,NULL,'USER-36/ART-48/24d9080e-6e39-4e99-877f-f0f257b488ae-IMG_20211026_174601.jpg-medium','2022-04-15 06:54:32.506','2022-04-15 06:54:32.507',36),
	(234,'IMG_20220114_135331.jpg','image/jpeg','USER-36/ART-50/7d17122d-5f7b-4c03-9cfa-2370a5a30fe8-IMG_20220114_135331.jpg-original',NULL,NULL,'USER-36/ART-50/7d17122d-5f7b-4c03-9cfa-2370a5a30fe8-IMG_20220114_135331.jpg-medium','2022-04-15 07:04:31.017','2022-04-15 07:04:31.017',36),
	(235,'IMG_20220307_194939.jpg','image/jpeg','USER-36/ART-51/b029b9da-a195-40bf-a1f4-26f4847c2c79-IMG_20220307_194939.jpg-original',NULL,NULL,'USER-36/ART-51/b029b9da-a195-40bf-a1f4-26f4847c2c79-IMG_20220307_194939.jpg-medium','2022-04-15 07:09:13.249','2022-04-15 07:09:13.250',36),
	(236,'IMG_20220117_092026.jpg','image/jpeg','USER-36/ART-51/d33f399a-4036-4279-9462-c3f33d69e834-IMG_20220117_092026.jpg-original',NULL,NULL,'USER-36/ART-51/d33f399a-4036-4279-9462-c3f33d69e834-IMG_20220117_092026.jpg-medium','2022-04-15 07:10:32.429','2022-04-15 07:10:32.430',36),
	(237,'IMG_20220114_135259.jpg','image/jpeg','USER-36/ART-51/a256951a-c81d-4ccc-b886-b44334de71b3-IMG_20220114_135259.jpg-original',NULL,NULL,'USER-36/ART-51/a256951a-c81d-4ccc-b886-b44334de71b3-IMG_20220114_135259.jpg-medium','2022-04-15 07:13:17.114','2022-04-15 07:13:17.114',36),
	(238,'IMG_20220114_135230.jpg','image/jpeg','USER-36/ART-52/5b638d8a-ee79-418e-8155-f296bff17aac-IMG_20220114_135230.jpg-original',NULL,NULL,'USER-36/ART-52/5b638d8a-ee79-418e-8155-f296bff17aac-IMG_20220114_135230.jpg-medium','2022-04-15 07:18:08.771','2022-04-15 07:18:08.772',36),
	(239,'IMG_20220128_184715.jpg','image/jpeg','USER-36/00fcb04a-39e3-421a-a9ed-f216fda37bd7-IMG_20220128_184715.jpg-original',NULL,NULL,'USER-36/00fcb04a-39e3-421a-a9ed-f216fda37bd7-IMG_20220128_184715.jpg-medium','2022-04-15 07:30:04.264','2022-04-15 07:30:04.265',36),
	(240,'IMG-20210918-WA0229.jpg','image/jpeg','USER-36/0d61708d-0a20-4d21-b402-88d9987c0dda-IMG-20210918-WA0229.jpg-original',NULL,NULL,'USER-36/0d61708d-0a20-4d21-b402-88d9987c0dda-IMG-20210918-WA0229.jpg-medium','2022-04-15 07:30:49.281','2022-04-15 07:30:49.281',36),
	(241,'IMG_20210701_160122.jpg','image/jpeg','USER-36/375751bc-4cf1-4c64-9dc3-1daf9e434f32-IMG_20210701_160122.jpg-original',NULL,NULL,'USER-36/375751bc-4cf1-4c64-9dc3-1daf9e434f32-IMG_20210701_160122.jpg-medium','2022-04-15 07:31:53.731','2022-04-15 07:31:53.731',36),
	(242,'20220415_170253.jpg','image/jpeg','USER-39/ART-53/a61dc525-fcb7-4622-894f-dba749fa60dc-20220415_170253.jpg-original',NULL,NULL,'USER-39/ART-53/a61dc525-fcb7-4622-894f-dba749fa60dc-20220415_170253.jpg-medium','2022-04-15 09:06:16.397','2022-04-15 09:06:16.398',39),
	(243,'AdobeStock_404801693.jpeg','image/jpeg','USER-17/dc1bcc2f-3b50-4178-a4b2-692dffe197b7-AdobeStock_404801693.jpeg-original',NULL,NULL,'USER-17/dc1bcc2f-3b50-4178-a4b2-692dffe197b7-AdobeStock_404801693.jpeg-medium','2022-04-17 10:13:32.805','2022-04-17 10:13:32.807',NULL),
	(244,'IMG_20220420_142756.jpg','image/jpeg','USER-6/ART-54/d87611fc-7eba-49a3-bd50-dc3586778805-IMG_20220420_142756.jpg-original',NULL,NULL,'USER-6/ART-54/d87611fc-7eba-49a3-bd50-dc3586778805-IMG_20220420_142756.jpg-medium','2022-04-20 09:38:20.652','2022-04-20 09:38:20.653',6),
	(245,'IMG_20211116_082813.jpg','image/jpeg','USER-26/ART-55/3970338f-92df-4839-a7ea-41b953f55717-IMG_20211116_082813.jpg-original',NULL,NULL,'USER-26/ART-55/3970338f-92df-4839-a7ea-41b953f55717-IMG_20211116_082813.jpg-medium','2022-04-24 10:44:34.610','2022-04-24 10:44:34.612',26),
	(246,'IMG-20220210-WA0037.jpg','image/jpeg','USER-28/ART-56/7a260a02-b465-48ae-a7c1-190cba47d20e-IMG-20220210-WA0037.jpg-original',NULL,NULL,'USER-28/ART-56/7a260a02-b465-48ae-a7c1-190cba47d20e-IMG-20220210-WA0037.jpg-medium','2022-04-25 09:28:54.721','2022-04-25 09:28:54.722',28),
	(247,'IMG-20220210-WA0039.jpg','image/jpeg','USER-28/ART-57/c6deca93-d028-4026-9463-b92564cdd9ea-IMG-20220210-WA0039.jpg-original',NULL,NULL,'USER-28/ART-57/c6deca93-d028-4026-9463-b92564cdd9ea-IMG-20220210-WA0039.jpg-medium','2022-04-25 09:35:32.494','2022-04-25 09:35:32.495',28),
	(248,'Ni Luh , 90 x 70cm , coffee ,chocolate on canvas , 2018.jpg','image/jpeg','USER-29/a60185e4-abdf-4681-9458-2f1baca9b991-Ni Luh , 90 x 70cm , coffee ,chocolate on canvas , 2018.jpg-original',NULL,NULL,'USER-29/a60185e4-abdf-4681-9458-2f1baca9b991-Ni Luh , 90 x 70cm , coffee ,chocolate on canvas , 2018.jpg-medium','2022-04-27 06:59:11.882','2022-04-27 06:59:11.883',29),
	(249,'Untitle , 90 x 70cm ,coffee, chocolate , 2018.JPG','image/jpeg','USER-29/e7f2610f-f5c4-4abb-8869-f3368ab6db2f-Untitle , 90 x 70cm ,coffee, chocolate , 2018.JPG-original',NULL,NULL,'USER-29/e7f2610f-f5c4-4abb-8869-f3368ab6db2f-Untitle , 90 x 70cm ,coffee, chocolate , 2018.JPG-medium','2022-04-27 07:01:42.927','2022-04-27 07:01:42.928',29),
	(250,'a4a95c1d-433e-4985-b1ca-e59598fbe694_570.jpg','image/jpeg','USER-17/ART-58/f95e11c2-9f7c-43c9-93d0-7a76876a3d5d-a4a95c1d-433e-4985-b1ca-e59598fbe694_570.jpg-original',NULL,NULL,'USER-17/ART-58/f95e11c2-9f7c-43c9-93d0-7a76876a3d5d-a4a95c1d-433e-4985-b1ca-e59598fbe694_570.jpg-medium','2022-04-27 14:57:30.648','2022-04-27 14:57:30.649',NULL),
	(251,'5.jpg','image/jpeg','USER-17/fafc044a-66b8-47e8-9325-83e835e40b5f-5.jpg-original',NULL,NULL,'USER-17/fafc044a-66b8-47e8-9325-83e835e40b5f-5.jpg-medium','2022-04-27 14:59:55.911','2022-04-27 14:59:55.912',NULL),
	(252,'5.jpg','image/jpeg','USER-17/aefd59fa-f143-4118-867e-a43b60a36d36-5.jpg-original',NULL,NULL,'USER-17/aefd59fa-f143-4118-867e-a43b60a36d36-5.jpg-medium','2022-04-27 15:00:02.027','2022-04-27 15:00:02.028',NULL),
	(253,'Artchive-logo-without-text.png','image/png','USER-17/89e4d9bb-2997-46e8-89bf-b6fa5eb01276-Artchive-logo-without-text.png-original',NULL,NULL,'USER-17/89e4d9bb-2997-46e8-89bf-b6fa5eb01276-Artchive-logo-without-text.png-medium','2022-04-27 15:00:23.926','2022-04-27 15:00:23.927',NULL),
	(254,'Pablo_Picasso,_1913-14,_L\'Homme_aux_cartes_(Card_Player),_oil_on_canvas,_108_x_89.5_cm,_Museum_of_Modern_Art,_New_York.jpg','image/jpeg','USER-17/ART-58/2df604b3-449b-4d36-a692-c5f5b5031545-Pablo_Picasso,_1913-14,_L\'Homme_aux_cartes_(Card_Player),_oil_on_canvas,_108_x_89.5_cm,_Museum_of_Modern_Art,_New_York.jpg-original',NULL,NULL,'USER-17/ART-58/2df604b3-449b-4d36-a692-c5f5b5031545-Pablo_Picasso,_1913-14,_L\'Homme_aux_cartes_(Card_Player),_oil_on_canvas,_108_x_89.5_cm,_Museum_of_Modern_Art,_New_York.jpg-medium','2022-04-27 15:07:49.977','2022-04-27 15:07:49.977',NULL),
	(255,'Pablo_Picasso,_1913-14,_L\'Homme_aux_cartes_(Card_Player),_oil_on_canvas,_108_x_89.5_cm,_Museum_of_Modern_Art,_New_York.jpg','image/jpeg','USER-17/ART-58/772e1b86-9152-4886-bede-ee89eb39ca43-Pablo_Picasso,_1913-14,_L\'Homme_aux_cartes_(Card_Player),_oil_on_canvas,_108_x_89.5_cm,_Museum_of_Modern_Art,_New_York.jpg-original',NULL,NULL,'USER-17/ART-58/772e1b86-9152-4886-bede-ee89eb39ca43-Pablo_Picasso,_1913-14,_L\'Homme_aux_cartes_(Card_Player),_oil_on_canvas,_108_x_89.5_cm,_Museum_of_Modern_Art,_New_York.jpg-medium','2022-04-27 15:50:39.368','2022-04-27 15:50:39.368',NULL),
	(256,'Pablo_Picasso,_1913-14,_L\'Homme_aux_cartes_(Card_Player),_oil_on_canvas,_108_x_89.5_cm,_Museum_of_Modern_Art,_New_York.jpg','image/jpeg','USER-17/ART-58/4c1344be-0836-475c-bb5e-2780af7c4295-Pablo_Picasso,_1913-14,_L\'Homme_aux_cartes_(Card_Player),_oil_on_canvas,_108_x_89.5_cm,_Museum_of_Modern_Art,_New_York.jpg-original',NULL,NULL,'USER-17/ART-58/4c1344be-0836-475c-bb5e-2780af7c4295-Pablo_Picasso,_1913-14,_L\'Homme_aux_cartes_(Card_Player),_oil_on_canvas,_108_x_89.5_cm,_Museum_of_Modern_Art,_New_York.jpg-medium','2022-04-27 15:52:04.210','2022-04-27 15:52:04.211',NULL),
	(257,'Pablo_Picasso,_1913-14,_L\'Homme_aux_cartes_(Card_Player),_oil_on_canvas,_108_x_89.5_cm,_Museum_of_Modern_Art,_New_York.jpg','image/jpeg','USER-17/ART-58/88b958ea-848a-45b5-916a-c5572ddf5934-Pablo_Picasso,_1913-14,_L\'Homme_aux_cartes_(Card_Player),_oil_on_canvas,_108_x_89.5_cm,_Museum_of_Modern_Art,_New_York.jpg-original',NULL,NULL,'USER-17/ART-58/88b958ea-848a-45b5-916a-c5572ddf5934-Pablo_Picasso,_1913-14,_L\'Homme_aux_cartes_(Card_Player),_oil_on_canvas,_108_x_89.5_cm,_Museum_of_Modern_Art,_New_York.jpg-medium','2022-04-27 15:53:37.705','2022-04-27 15:53:37.705',NULL),
	(258,'Pablo_Picasso,_1913-14,_L\'Homme_aux_cartes_(Card_Player),_oil_on_canvas,_108_x_89.5_cm,_Museum_of_Modern_Art,_New_York.jpg','image/jpeg','USER-17/ART-58/c4154725-fdbb-4b1a-a2eb-09c8fe436e74-Pablo_Picasso,_1913-14,_L\'Homme_aux_cartes_(Card_Player),_oil_on_canvas,_108_x_89.5_cm,_Museum_of_Modern_Art,_New_York.jpg-original',NULL,NULL,'USER-17/ART-58/c4154725-fdbb-4b1a-a2eb-09c8fe436e74-Pablo_Picasso,_1913-14,_L\'Homme_aux_cartes_(Card_Player),_oil_on_canvas,_108_x_89.5_cm,_Museum_of_Modern_Art,_New_York.jpg-medium','2022-04-27 15:54:27.419','2022-04-27 15:54:27.419',NULL),
	(259,'Pablo_Picasso,_1913-14,_L\'Homme_aux_cartes_(Card_Player),_oil_on_canvas,_108_x_89.5_cm,_Museum_of_Modern_Art,_New_York.jpg','image/jpeg','USER-17/ART-58/7d3e837b-9bee-46ca-9d74-3d41cff3a28f-Pablo_Picasso,_1913-14,_L\'Homme_aux_cartes_(Card_Player),_oil_on_canvas,_108_x_89.5_cm,_Museum_of_Modern_Art,_New_York.jpg-original',NULL,NULL,'USER-17/ART-58/7d3e837b-9bee-46ca-9d74-3d41cff3a28f-Pablo_Picasso,_1913-14,_L\'Homme_aux_cartes_(Card_Player),_oil_on_canvas,_108_x_89.5_cm,_Museum_of_Modern_Art,_New_York.jpg-medium','2022-04-27 15:55:40.724','2022-04-27 15:55:40.725',NULL),
	(260,'Pablo_Picasso,_1913-14,_L\'Homme_aux_cartes_(Card_Player),_oil_on_canvas,_108_x_89.5_cm,_Museum_of_Modern_Art,_New_York.jpg','image/jpeg','USER-17/ART-60/2fe3ac6d-e0ee-4276-b85c-cb314becf0ee-Pablo_Picasso,_1913-14,_L\'Homme_aux_cartes_(Card_Player),_oil_on_canvas,_108_x_89.5_cm,_Museum_of_Modern_Art,_New_York.jpg-original',NULL,NULL,'USER-17/ART-60/2fe3ac6d-e0ee-4276-b85c-cb314becf0ee-Pablo_Picasso,_1913-14,_L\'Homme_aux_cartes_(Card_Player),_oil_on_canvas,_108_x_89.5_cm,_Museum_of_Modern_Art,_New_York.jpg-medium','2022-04-27 15:56:13.679','2022-04-27 15:56:13.679',NULL),
	(261,'Pablo_Picasso,_1913-14,_L\'Homme_aux_cartes_(Card_Player),_oil_on_canvas,_108_x_89.5_cm,_Museum_of_Modern_Art,_New_York.jpg','image/jpeg','USER-17/ART-60/0ebeeb64-6d86-4418-a981-feba7d399ae1-Pablo_Picasso,_1913-14,_L\'Homme_aux_cartes_(Card_Player),_oil_on_canvas,_108_x_89.5_cm,_Museum_of_Modern_Art,_New_York.jpg-original',NULL,NULL,'USER-17/ART-60/0ebeeb64-6d86-4418-a981-feba7d399ae1-Pablo_Picasso,_1913-14,_L\'Homme_aux_cartes_(Card_Player),_oil_on_canvas,_108_x_89.5_cm,_Museum_of_Modern_Art,_New_York.jpg-medium','2022-04-27 15:57:48.329','2022-04-27 15:57:48.330',NULL),
	(262,'16511117690363738879101804111326.jpg','image/jpeg','USER-22/ART-58/c01d759f-7c0c-46ab-b59c-bf4458ca8bfc-16511117690363738879101804111326.jpg-original',NULL,NULL,'USER-22/ART-58/c01d759f-7c0c-46ab-b59c-bf4458ca8bfc-16511117690363738879101804111326.jpg-medium','2022-04-28 02:09:45.546','2022-04-28 02:09:45.546',NULL),
	(263,'4.jpg','image/jpeg','STAGING/USER-17/5f82216c-6aa4-43b4-86cd-9de1725905a7-4.jpg',NULL,NULL,'STAGING/USER-17/5f82216c-6aa4-43b4-86cd-9de1725905a7-4.jpg','2022-04-28 09:41:50.456','2022-04-28 09:41:50.457',1),
	(264,'Modern_chic_living_room_interior_with_long_sofa.jpg','image/jpeg','STAGING/USER-17/ART-58/b6e9df18-563a-48bd-aa44-2fe05287f9a7-Modern_chic_living_room_interior_with_long_sofa.jpg',NULL,NULL,'STAGING/USER-17/ART-58/b6e9df18-563a-48bd-aa44-2fe05287f9a7-Modern_chic_living_room_interior_with_long_sofa.jpg','2022-04-28 11:04:58.406','2022-04-28 11:04:58.407',NULL),
	(265,'Pablo_Picasso,_1913-14,_L\'Homme_aux_cartes_(Card_Player),_oil_on_canvas,_108_x_89.5_cm,_Museum_of_Modern_Art,_New_York.jpg','image/jpeg','STAGING/USER-17/ART-58/faac6ced-7e5d-4e4a-8644-6946b5f0b796-Pablo_Picasso,_1913-14,_L\'Homme_aux_cartes_(Card_Player),_oil_on_canvas,_108_x_89.5_cm,_Museum_of_Modern_Art,_New_York.jpg',NULL,NULL,'STAGING/USER-17/ART-58/faac6ced-7e5d-4e4a-8644-6946b5f0b796-Pablo_Picasso,_1913-14,_L\'Homme_aux_cartes_(Card_Player),_oil_on_canvas,_108_x_89.5_cm,_Museum_of_Modern_Art,_New_York.jpg','2022-04-28 11:08:33.281','2022-04-28 11:08:33.281',NULL),
	(266,'Pablo_Picasso,_1918,_Pierrot,_oil_on_canvas,_92.7_x_73_cm,_Museum_of_Modern_Art.jpg','image/jpeg','STAGING/USER-17/ART-58/b083047f-c318-4e35-9b47-8de4a21648c8-Pablo_Picasso,_1918,_Pierrot,_oil_on_canvas,_92.7_x_73_cm,_Museum_of_Modern_Art.jpg',NULL,NULL,'STAGING/USER-17/ART-58/b083047f-c318-4e35-9b47-8de4a21648c8-Pablo_Picasso,_1918,_Pierrot,_oil_on_canvas,_92.7_x_73_cm,_Museum_of_Modern_Art.jpg','2022-04-28 11:41:42.317','2022-04-28 11:41:42.318',NULL),
	(267,'Pablo_Picasso,_1913-14,_L\'Homme_aux_cartes_(Card_Player),_oil_on_canvas,_108_x_89.5_cm,_Museum_of_Modern_Art,_New_York.jpg','image/jpeg','STAGING/USER-17/ART-58/18a52169-6df3-4f4d-9ed2-a5d84c87ec69-Pablo_Picasso,_1913-14,_L\'Homme_aux_cartes_(Card_Player),_oil_on_canvas,_108_x_89.5_cm,_Museum_of_Modern_Art,_New_York.jpg',NULL,NULL,'STAGING/USER-17/ART-58/18a52169-6df3-4f4d-9ed2-a5d84c87ec69-Pablo_Picasso,_1913-14,_L\'Homme_aux_cartes_(Card_Player),_oil_on_canvas,_108_x_89.5_cm,_Museum_of_Modern_Art,_New_York.jpg','2022-04-28 11:42:03.549','2022-04-28 11:42:03.550',NULL),
	(268,'Pablo_Picasso,_1913-14,_L\'Homme_aux_cartes_(Card_Player),_oil_on_canvas,_108_x_89.5_cm,_Museum_of_Modern_Art,_New_York.jpg','image/jpeg','STAGING/USER-17/ART-58/cea51a06-0477-45c9-a117-6ce1e7d87aff-Pablo_Picasso,_1913-14,_L\'Homme_aux_cartes_(Card_Player),_oil_on_canvas,_108_x_89.5_cm,_Museum_of_Modern_Art,_New_York.jpg',NULL,NULL,'STAGING/USER-17/ART-58/cea51a06-0477-45c9-a117-6ce1e7d87aff-Pablo_Picasso,_1913-14,_L\'Homme_aux_cartes_(Card_Player),_oil_on_canvas,_108_x_89.5_cm,_Museum_of_Modern_Art,_New_York.jpg','2022-04-28 11:42:56.032','2022-04-28 11:42:56.032',NULL),
	(269,'Modern_chic_living_room_interior_with_long_sofa.jpg','image/jpeg','STAGING/USER-17/ART-58/f8f9b8b9-aba1-465d-bdf0-d313432eef9f-Modern_chic_living_room_interior_with_long_sofa.jpg',NULL,NULL,'STAGING/USER-17/ART-58/f8f9b8b9-aba1-465d-bdf0-d313432eef9f-Modern_chic_living_room_interior_with_long_sofa.jpg','2022-04-28 11:45:09.338','2022-04-28 11:45:09.338',NULL),
	(270,'Modern_chic_living_room_interior_with_long_sofa.jpg','image/jpeg','STAGING/USER-17/ART-62/8162d48f-44a3-44a1-9093-3f83d32160d6-Modern_chic_living_room_interior_with_long_sofa.jpg',NULL,NULL,'STAGING/USER-17/ART-62/8162d48f-44a3-44a1-9093-3f83d32160d6-Modern_chic_living_room_interior_with_long_sofa.jpg','2022-04-28 14:47:40.551','2022-04-28 14:47:40.552',NULL),
	(271,'Modern_chic_living_room_interior_with_long_sofa.jpg','image/jpeg','STAGING/USER-17/ART-62/5c2ad175-bd98-49b1-b424-4b588d1791a1-Modern_chic_living_room_interior_with_long_sofa.jpg',NULL,NULL,'STAGING/USER-17/ART-62/5c2ad175-bd98-49b1-b424-4b588d1791a1-Modern_chic_living_room_interior_with_long_sofa.jpg','2022-04-28 15:10:58.211','2022-04-28 15:10:58.212',NULL),
	(272,'IMG-20220330-WA0012.jpg','image/jpeg','STAGING/USER-50/b6732415-d5b4-4328-bb73-f020d227335b-IMG-20220330-WA0012.jpg',NULL,NULL,'STAGING/USER-50/b6732415-d5b4-4328-bb73-f020d227335b-IMG-20220330-WA0012.jpg','2022-05-09 03:45:12.019','2022-05-09 03:45:12.020',50),
	(273,'20210722_123954.jpg','image/jpeg','STAGING/USER-50/c877b638-118e-4654-aa41-d80b7db22913-20210722_123954.jpg',NULL,NULL,'STAGING/USER-50/c877b638-118e-4654-aa41-d80b7db22913-20210722_123954.jpg','2022-05-09 03:47:44.825','2022-05-09 03:47:44.825',50),
	(274,'1. romi sukadana, bullfightter 120x140 cm acrylic pencil on canvas.jpg','image/jpeg','USER-31/ART-58/d33030cd-173b-48bb-8d94-fa0f871acf25-1. romi sukadana, bullfightter 120x140 cm acrylic pencil on canvas.jpg',NULL,NULL,NULL,'2022-05-09 08:09:12.834','2022-05-09 08:09:12.834',1),
	(275,'2. romi sukadana affaction 120 x 140 cm acrylic pencil on canvas.jpg','image/jpeg','USER-31/ART-63/a1a55160-a765-474b-ae42-c3a00c4ed90f-2. romi sukadana affaction 120 x 140 cm acrylic pencil on canvas.jpg',NULL,NULL,NULL,'2022-05-09 08:13:54.228','2022-05-09 08:13:54.229',1),
	(276,'romi-2.jpg','image/jpeg','USER-31/ART-63/74145596-ca72-4f82-8d82-c03e6ff6302e-romi-2.jpg',NULL,NULL,NULL,'2022-05-09 08:14:26.017','2022-05-09 08:14:26.018',1),
	(277,'romi-1.jpg','image/jpeg','USER-31/ART-62/9348023f-87fe-4e50-8098-a66583a21f50-romi-1.jpg',NULL,NULL,NULL,'2022-05-09 08:15:03.888','2022-05-09 08:15:03.889',1),
	(278,'dedy-1.jpg','image/jpeg','USER-29/ART-64/178a65d1-9fad-495b-a10e-a4f4c7beb72c-dedy-1.jpg',NULL,NULL,NULL,'2022-05-09 08:15:39.685','2022-05-09 08:15:39.686',1),
	(279,'dedy-2.jpg','image/jpeg','USER-29/ART-65/37b4ef69-9ae3-4056-9c2f-b3af73e1a99c-dedy-2.jpg',NULL,NULL,NULL,'2022-05-09 08:16:53.084','2022-05-09 08:16:53.084',1),
	(280,'duatmika-1.jpg','image/jpeg','USER-6/ART-66/f361dc29-9cda-449a-a167-7fe15c33d5ea-duatmika-1.jpg',NULL,NULL,NULL,'2022-05-09 08:18:32.969','2022-05-09 08:18:32.970',1),
	(281,'duatmika-2.jpg','image/jpeg','USER-6/ART-67/8d70ac45-bdf3-438a-b8ed-5efd7c4902cb-duatmika-2.jpg',NULL,NULL,NULL,'2022-05-09 08:19:49.294','2022-05-09 08:19:49.295',1),
	(282,'duatmika-3.jpg','image/jpeg','USER-6/ART-68/d46bb131-3ef0-4c1a-a4ca-0a521f779a71-duatmika-3.jpg',NULL,NULL,NULL,'2022-05-09 08:20:28.425','2022-05-09 08:20:28.425',1),
	(283,'palguna-1.jpg','image/jpeg','USER-50/ART-69/7c42fdaf-d9aa-4ba7-9c0d-ffee73e2edec-palguna-1.jpg',NULL,NULL,NULL,'2022-05-09 08:21:21.453','2022-05-09 08:21:21.453',1),
	(284,'palguna-2.jpg','image/jpeg','USER-50/ART-70/8332065a-47d2-43ce-b26d-c302c1093825-palguna-2.jpg',NULL,NULL,NULL,'2022-05-09 08:23:10.254','2022-05-09 08:23:10.255',1),
	(285,'pande-1.jpg','image/jpeg','USER-32/ART-71/b84867ce-ec13-4e0e-8240-478dc48a5248-pande-1.jpg',NULL,NULL,NULL,'2022-05-09 08:24:17.229','2022-05-09 08:24:17.229',1),
	(286,'pande-2.jpg','image/jpeg','USER-32/ART-72/fc99da49-0759-4e80-adbc-6d40763cc09e-pande-2.jpg',NULL,NULL,NULL,'2022-05-09 08:26:09.281','2022-05-09 08:26:09.281',1),
	(287,'pande-5.jpg','image/jpeg','USER-32/ART-73/d547dfbc-62a7-4a3e-aafe-07041a1016b3-pande-5.jpg',NULL,NULL,NULL,'2022-05-09 08:27:06.776','2022-05-09 08:27:06.777',1),
	(288,'pande-4.jpg','image/jpeg','USER-32/ART-74/5625071f-1ba9-471a-8330-7505ab7180c9-pande-4.jpg',NULL,NULL,NULL,'2022-05-09 08:27:51.194','2022-05-09 08:27:51.194',1),
	(289,'pande-3.jpg','image/jpeg','USER-32/ART-75/f555f72f-fd32-4e36-89f7-40e71015c965-pande-3.jpg',NULL,NULL,NULL,'2022-05-09 08:28:44.327','2022-05-09 08:28:44.327',1),
	(290,'wira-1.jpg','image/jpeg','USER-27/ART-76/cc703086-e3eb-4e8a-9d86-bfa7bd127007-wira-1.jpg',NULL,NULL,NULL,'2022-05-09 08:29:51.545','2022-05-09 08:29:51.546',1),
	(291,'IMG-20220429-WA0023.jpg','image/jpeg','USER-1/2b6d518c-ad37-4820-a7fe-7a9e78700ae6-IMG-20220429-WA0023.jpg',NULL,NULL,NULL,'2022-05-09 08:37:52.780','2022-05-09 08:37:52.780',1),
	(292,'IMG_20220408_164022.jpg','image/jpeg','USER-6/ART-77/72bc4732-925f-41d1-b0a8-e9b0a8f73e12-IMG_20220408_164022.jpg',NULL,NULL,NULL,'2022-05-10 03:13:27.027','2022-05-10 03:13:27.027',1),
	(293,'IMG_20220410_174825.jpg','image/jpeg','USER-6/ART-78/7e062d2e-aae4-42fb-b81d-8af11f5a80d1-IMG_20220410_174825.jpg',NULL,NULL,NULL,'2022-05-10 03:15:09.565','2022-05-10 03:15:09.566',1),
	(294,'IMG_20220410_174825.jpg','image/jpeg','USER-6/ART-78/a7ed04a6-8234-41e1-bf4b-0f098891f4df-IMG_20220410_174825.jpg',NULL,NULL,NULL,'2022-05-10 03:16:57.595','2022-05-10 03:16:57.595',1),
	(295,'duatmika-5.jpg','image/jpeg','USER-6/ART-77/ae1598d7-e649-4c0b-af68-6841bfaec828-duatmika-5.jpg',NULL,NULL,NULL,'2022-05-10 03:19:16.945','2022-05-10 03:19:16.945',1),
	(296,'armika-1.jpg','image/jpeg','USER-51/ART-79/77100305-6b28-4d1a-a8bb-f162482110f6-armika-1.jpg',NULL,NULL,NULL,'2022-05-10 10:26:19.060','2022-05-10 10:26:19.061',1),
	(297,'armika-2.jpg','image/jpeg','USER-51/ART-80/5df668c4-40e1-4613-a9fc-970e691ee80f-armika-2.jpg',NULL,NULL,NULL,'2022-05-10 10:58:11.838','2022-05-10 10:58:11.839',1),
	(298,'WhatsApp Image 2022-05-10 at 6.03.23 PM.jpeg','image/jpeg','USER-51/ART-81/52e1e68a-7cda-4474-823e-dcf000db4eb5-WhatsApp Image 2022-05-10 at 6.03.23 PM.jpeg',NULL,NULL,NULL,'2022-05-10 11:01:43.921','2022-05-10 11:01:43.921',1),
	(299,'WhatsApp Image 2022-05-10 at 7.02.36 PM.jpeg','image/jpeg','USER-51/84952418-f43f-4b3d-9775-d22977868aa9-WhatsApp Image 2022-05-10 at 7.02.36 PM.jpeg',NULL,NULL,NULL,'2022-05-10 11:06:14.088','2022-05-10 11:06:14.088',1),
	(300,'duatmika-1.jpg','image/jpeg','USER-6/ART-82/1cbffee8-9947-4b81-91d1-251867dda2af-duatmika-1.jpg',NULL,NULL,NULL,'2022-05-11 06:40:01.745','2022-05-11 06:40:01.746',1),
	(301,'duatmika-2.jpg','image/jpeg','USER-6/ART-83/271dfb94-f7db-4f29-994f-3f994b133131-duatmika-2.jpg',NULL,NULL,NULL,'2022-05-11 06:41:17.407','2022-05-11 06:41:17.407',1),
	(302,'asdasdasd.png','image/png','USER-51/ART-84/c7521a3b-e7d3-46d5-a8ca-9e2dd87e44d4-asdasdasd.png',NULL,NULL,NULL,'2022-05-12 11:22:50.363','2022-05-12 11:22:50.364',1),
	(303,'222781899_824400895137694_8879938303723149417_n.jpg','image/jpeg','USER-51/393b245d-cec3-4f10-b83f-0df79d8ffcc8-222781899_824400895137694_8879938303723149417_n.jpg',NULL,NULL,NULL,'2022-05-12 14:59:17.317','2022-05-12 14:59:17.318',1),
	(304,'maxresdefault.jpg','image/jpeg','USER-1/a919e95f-d1d5-4d1a-887e-a1dfdc389b86-maxresdefault.jpg',NULL,NULL,NULL,'2022-05-13 13:13:38.381','2022-05-13 13:13:38.382',1),
	(305,'BULLFIGHTER-1.jpg','image/jpeg','USER-31/ART-62/9dcd1af1-d04b-4233-a2a6-64d8a2c2d475-BULLFIGHTER-1.jpg',NULL,NULL,NULL,'2022-05-14 02:09:20.586','2022-05-14 02:09:20.587',1),
	(306,'BULLFIGHTER-2.jpg','image/jpeg','USER-31/ART-62/697a6ab3-ea4c-435e-b650-9f9197db11c5-BULLFIGHTER-2.jpg',NULL,NULL,NULL,'2022-05-14 02:09:30.404','2022-05-14 02:09:30.404',1),
	(307,'BULLFIGHTER-3.jpg','image/jpeg','USER-31/ART-62/b04797bc-6aba-4233-a1db-0e81bd8cd4b6-BULLFIGHTER-3.jpg',NULL,NULL,NULL,'2022-05-14 02:09:40.087','2022-05-14 02:09:40.087',1),
	(308,'AFFICTION-1.jpg','image/jpeg','USER-31/ART-63/c7678ad4-96de-40c3-8221-f0f91e90b9ff-AFFICTION-1.jpg',NULL,NULL,NULL,'2022-05-14 02:10:37.590','2022-05-14 02:10:37.590',1),
	(309,'AFFICTION-2.jpg','image/jpeg','USER-31/ART-63/0f884229-9794-4dba-adf2-dee55f11e5ee-AFFICTION-2.jpg',NULL,NULL,NULL,'2022-05-14 02:10:51.524','2022-05-14 02:10:51.524',1),
	(310,'AFFICTION-3.jpg','image/jpeg','USER-31/ART-63/a6a4d892-876e-4d4e-9202-f7a22ea817f2-AFFICTION-3.jpg',NULL,NULL,NULL,'2022-05-14 02:11:00.357','2022-05-14 02:11:00.357',1),
	(311,'BUTTERFLY-01.jpg','image/jpeg','USER-29/ART-64/16ae1d33-6585-446f-b1f7-1897670aceda-BUTTERFLY-01.jpg',NULL,NULL,NULL,'2022-05-14 02:11:30.821','2022-05-14 02:11:30.821',1),
	(312,'BUTTERFLY-02.jpg','image/jpeg','USER-29/ART-64/04b7dd88-8a3d-4533-9d3c-51625486492f-BUTTERFLY-02.jpg',NULL,NULL,NULL,'2022-05-14 02:11:36.329','2022-05-14 02:11:36.330',1),
	(313,'BUTTERFLY-03.jpg','image/jpeg','USER-29/ART-64/7cc5226d-c127-4429-b62c-f29e739a56c5-BUTTERFLY-03.jpg',NULL,NULL,NULL,'2022-05-14 02:11:42.790','2022-05-14 02:11:42.791',1),
	(314,'VIEW-01.jpg','image/jpeg','USER-29/ART-65/c0d06a39-97c5-4caf-853e-3800df3393ea-VIEW-01.jpg',NULL,NULL,NULL,'2022-05-14 02:12:05.289','2022-05-14 02:12:05.289',1),
	(315,'VIEW-02.jpg','image/jpeg','USER-29/ART-65/565f6623-8cff-4512-9a36-235b0db8c3c0-VIEW-02.jpg',NULL,NULL,NULL,'2022-05-14 02:12:12.590','2022-05-14 02:12:12.591',1),
	(316,'VIEW-03.jpg','image/jpeg','USER-29/ART-65/bd1df5b4-21d4-45a0-9b6f-103b551eb014-VIEW-03.jpg',NULL,NULL,NULL,'2022-05-14 02:12:18.122','2022-05-14 02:12:18.122',1),
	(317,'DUNIAKU-1.jpg','image/jpeg','USER-6/ART-66/626806ab-a34b-4115-936a-80d1c62ec4bf-DUNIAKU-1.jpg',NULL,NULL,NULL,'2022-05-14 02:13:19.656','2022-05-14 02:13:19.656',1),
	(318,'DUNIAKU-2.jpg','image/jpeg','USER-6/ART-66/1ab4c44a-ab4b-4dc3-a42a-72aa6af3bc73-DUNIAKU-2.jpg',NULL,NULL,NULL,'2022-05-14 02:13:25.861','2022-05-14 02:13:25.862',1),
	(319,'DUNIAKU-3.jpg','image/jpeg','USER-6/ART-66/cf233958-c829-4462-83db-2f619e2972d0-DUNIAKU-3.jpg',NULL,NULL,NULL,'2022-05-14 02:13:32.925','2022-05-14 02:13:32.926',1),
	(320,'GAMBARA-1.jpg','image/jpeg','USER-6/ART-67/46ec19a8-3268-4a0a-954c-59daeb92ad56-GAMBARA-1.jpg',NULL,NULL,NULL,'2022-05-14 02:14:09.229','2022-05-14 02:14:09.229',1),
	(321,'GAMBARA-2.jpg','image/jpeg','USER-6/ART-67/a8e00eac-e171-48be-86ec-50a09cbd8165-GAMBARA-2.jpg',NULL,NULL,NULL,'2022-05-14 02:14:15.328','2022-05-14 02:14:15.329',1),
	(322,'GAMBARA-3.jpg','image/jpeg','USER-6/ART-67/9180e7ff-3e39-4c03-a5ab-23ff3133f190-GAMBARA-3.jpg',NULL,NULL,NULL,'2022-05-14 02:14:23.685','2022-05-14 02:14:23.685',1),
	(323,'BELENGGU-CINTA-1.jpg','image/jpeg','USER-6/ART-68/b03dec9d-0daf-46bc-878e-cae69064450f-BELENGGU-CINTA-1.jpg',NULL,NULL,NULL,'2022-05-14 02:19:47.805','2022-05-14 02:19:47.805',1),
	(324,'BELENGGU-CINTA-2.jpg','image/jpeg','USER-6/ART-68/b7bc6007-224b-4b87-8033-d1fa0bb6f50b-BELENGGU-CINTA-2.jpg',NULL,NULL,NULL,'2022-05-14 02:19:53.647','2022-05-14 02:19:53.648',1),
	(325,'BELENGGU-CINTA-3.jpg','image/jpeg','USER-6/ART-68/07cf0107-d82d-4607-9f3c-4f83cabd954a-BELENGGU-CINTA-3.jpg',NULL,NULL,NULL,'2022-05-14 02:19:59.826','2022-05-14 02:19:59.826',1),
	(326,'STONES-S2.jpg','image/jpeg','USER-50/ART-69/f5c6bfa4-cb6d-4b62-a563-00ffe716305c-STONES-S2.jpg',NULL,NULL,NULL,'2022-05-14 02:20:50.130','2022-05-14 02:20:50.130',1),
	(327,'STONES-S2-2.jpg','image/jpeg','USER-50/ART-69/7e19a5eb-f718-40a2-adc9-df4c7c6a8c1e-STONES-S2-2.jpg',NULL,NULL,NULL,'2022-05-14 02:20:56.325','2022-05-14 02:20:56.326',1),
	(328,'STONES-S2-3.jpg','image/jpeg','USER-50/ART-69/944b8ece-2890-4bfd-90c1-ea77ed86079c-STONES-S2-3.jpg',NULL,NULL,NULL,'2022-05-14 02:21:02.651','2022-05-14 02:21:02.652',1),
	(329,'STONES-S1.jpg','image/jpeg','USER-50/ART-70/ee0aed30-0be4-474f-ba5d-bd5bc740f2de-STONES-S1.jpg',NULL,NULL,NULL,'2022-05-14 02:21:31.385','2022-05-14 02:21:31.386',1),
	(330,'STONES-S1-2.jpg','image/jpeg','USER-50/ART-70/a782441f-83d6-41d5-92fd-802d8d97c41d-STONES-S1-2.jpg',NULL,NULL,NULL,'2022-05-14 02:22:03.216','2022-05-14 02:22:03.216',1),
	(331,'STONES-S1-3.jpg','image/jpeg','USER-50/ART-70/011ba1e3-178d-4662-ac21-1541753a3ad8-STONES-S1-3.jpg',NULL,NULL,NULL,'2022-05-14 02:22:09.356','2022-05-14 02:22:09.356',1),
	(332,'GREEN-MASK-01.jpg','image/jpeg','USER-32/ART-71/4d4db5a3-0783-41fd-a4b8-2445a280592f-GREEN-MASK-01.jpg',NULL,NULL,NULL,'2022-05-14 02:23:09.467','2022-05-14 02:23:09.468',1),
	(333,'GREEN-MASK-02.jpg','image/jpeg','USER-32/ART-71/c2e6b267-6318-4206-9fb9-18488085f7c1-GREEN-MASK-02.jpg',NULL,NULL,NULL,'2022-05-14 02:23:16.750','2022-05-14 02:23:16.751',1),
	(334,'GREEN-MASK-03.jpg','image/jpeg','USER-32/ART-71/b115291c-98f4-4aed-a76e-1da0a5f161e7-GREEN-MASK-03.jpg',NULL,NULL,NULL,'2022-05-14 02:23:23.292','2022-05-14 02:23:23.293',1),
	(335,'MASK-01.jpg','image/jpeg','USER-32/ART-72/1cd37e6a-8577-42ec-923c-d580bae13d06-MASK-01.jpg',NULL,NULL,NULL,'2022-05-14 02:23:51.810','2022-05-14 02:23:51.810',1),
	(336,'MASK-02.jpg','image/jpeg','USER-32/ART-72/1df75baa-9ea7-423c-960f-de9b27313547-MASK-02.jpg',NULL,NULL,NULL,'2022-05-14 02:23:59.586','2022-05-14 02:23:59.587',1),
	(337,'MASK-03.jpg','image/jpeg','USER-32/ART-72/659ad728-3b2c-4651-a834-e34bd012dd69-MASK-03.jpg',NULL,NULL,NULL,'2022-05-14 02:24:05.788','2022-05-14 02:24:05.788',1),
	(338,'RATU-01.jpg','image/jpeg','USER-32/ART-73/568eef21-fb92-42bd-978d-5c66f5e700c3-RATU-01.jpg',NULL,NULL,NULL,'2022-05-14 02:24:41.381','2022-05-14 02:24:41.382',1),
	(339,'RATU-02.jpg','image/jpeg','USER-32/ART-73/ee3b7978-3419-42f4-95af-3e06c08f7922-RATU-02.jpg',NULL,NULL,NULL,'2022-05-14 02:24:49.000','2022-05-14 02:24:49.001',1),
	(340,'RATU-03.jpg','image/jpeg','USER-32/ART-73/ec4d2ee2-5251-4b3e-a91a-98588939b54f-RATU-03.jpg',NULL,NULL,NULL,'2022-05-14 02:24:55.381','2022-05-14 02:24:55.382',1),
	(341,'RILEX-01.jpg','image/jpeg','USER-32/ART-74/d52e6152-e3b0-4472-b180-8afa5552df52-RILEX-01.jpg',NULL,NULL,NULL,'2022-05-14 02:26:24.131','2022-05-14 02:26:24.132',1),
	(342,'RILEX-02.jpg','image/jpeg','USER-32/ART-74/dc2be105-eb8e-429c-ad65-5d9a4dd857ec-RILEX-02.jpg',NULL,NULL,NULL,'2022-05-14 02:26:32.381','2022-05-14 02:26:32.382',1),
	(343,'RILEX-03.jpg','image/jpeg','USER-32/ART-74/ed813749-2c9f-4988-8dd0-c122e8558ee7-RILEX-03.jpg',NULL,NULL,NULL,'2022-05-14 02:26:49.295','2022-05-14 02:26:49.295',1),
	(344,'WANITA-01.jpg','image/jpeg','USER-32/ART-75/855061a2-1818-4d7e-b874-b6211fe9bd79-WANITA-01.jpg',NULL,NULL,NULL,'2022-05-14 02:27:43.720','2022-05-14 02:27:43.721',1),
	(345,'WANITA-02.jpg','image/jpeg','USER-32/ART-75/e23ca40c-16a1-4852-8958-b8cfe56dea2e-WANITA-02.jpg',NULL,NULL,NULL,'2022-05-14 02:27:51.026','2022-05-14 02:27:51.026',1),
	(346,'WANITA-03.jpg','image/jpeg','USER-32/ART-75/7490022f-ee8a-45cb-9705-52ed8e8e2c1f-WANITA-03.jpg',NULL,NULL,NULL,'2022-05-14 02:27:56.942','2022-05-14 02:27:56.943',1),
	(347,'META-1.jpg','image/jpeg','USER-6/ART-82/1c2b0e02-63b1-4b6d-a49d-6a805ecd894c-META-1.jpg',NULL,NULL,NULL,'2022-05-14 02:28:38.551','2022-05-14 02:28:38.552',1),
	(348,'META-2.jpg','image/jpeg','USER-6/ART-82/f28a1b11-cf87-491d-aae0-770f838d1256-META-2.jpg',NULL,NULL,NULL,'2022-05-14 02:28:45.020','2022-05-14 02:28:45.021',1),
	(349,'META-3.jpg','image/jpeg','USER-6/ART-82/418d0322-7c31-4790-837a-08a676f4e370-META-3.jpg',NULL,NULL,NULL,'2022-05-14 02:28:50.444','2022-05-14 02:28:50.444',1),
	(350,'MELIHAT-DUNIA-BARU-1.jpg','image/jpeg','USER-6/ART-83/c7950f36-dd83-46d7-8409-21ab181dc429-MELIHAT-DUNIA-BARU-1.jpg',NULL,NULL,NULL,'2022-05-14 02:29:44.612','2022-05-14 02:29:44.612',1),
	(351,'MELIHAT-DUNIA-BARU-2.jpg','image/jpeg','USER-6/ART-83/227b0556-f739-427d-82b8-90e40c0d65a2-MELIHAT-DUNIA-BARU-2.jpg',NULL,NULL,NULL,'2022-05-14 02:29:50.961','2022-05-14 02:29:50.961',1),
	(352,'MELIHAT-DUNIA-BARU-3.jpg','image/jpeg','USER-6/ART-83/614fc2e3-7ff3-46eb-9180-430f5e34d7cb-MELIHAT-DUNIA-BARU-3.jpg',NULL,NULL,NULL,'2022-05-14 02:30:01.326','2022-05-14 02:30:01.327',1),
	(353,'Plant_on_wooden_drawers.jpg','image/jpeg','USER-51/ART-84/9914c19c-a454-44f2-98db-a7a3282103f2-Plant_on_wooden_drawers.jpg',NULL,NULL,NULL,'2022-05-14 02:30:47.512','2022-05-14 02:30:47.513',1),
	(354,'Stylish_bright_dining_room.jpg','image/jpeg','USER-51/ART-84/fd374418-ebce-4256-bbb0-d5796f641f35-Stylish_bright_dining_room.jpg',NULL,NULL,NULL,'2022-05-14 02:30:53.978','2022-05-14 02:30:53.978',1),
	(355,'Warm_bright_sitting_room_with_tropical_plants.jpg','image/jpeg','USER-51/ART-84/6417924f-0cff-4951-a3b5-9b3d73e39d1f-Warm_bright_sitting_room_with_tropical_plants.jpg',NULL,NULL,NULL,'2022-05-14 02:31:00.238','2022-05-14 02:31:00.238',1),
	(356,'WhatsApp Image 2022-05-10 at 4.57.13 PM.jpeg','image/jpeg','USER-51/2a5d5465-f085-4cc2-8252-462064972f5d-WhatsApp Image 2022-05-10 at 4.57.13 PM.jpeg',NULL,NULL,NULL,'2022-05-27 13:48:12.473','2022-05-27 13:48:12.474',1),
	(357,'Artchive-logo.png','image/png','USER-1/e8eee106-f686-4ac4-95c3-e735b25fb590-Artchive-logo.png',NULL,NULL,NULL,'2022-06-04 12:11:27.591','2022-06-04 12:11:27.592',1),
	(358,'IMG_7406.JPG','image/jpeg','USER-1/2085c4fb-f767-4c26-8df8-d5ddc08952a6-IMG_7406.JPG',NULL,NULL,NULL,'2022-06-17 12:49:41.830','2022-06-17 12:49:41.831',1),
	(359,'IMG_7517.JPG','image/jpeg','USER-1/6b5b32d0-58e7-45c0-b2d6-8d0f713d87b4-IMG_7517.JPG',NULL,NULL,NULL,'2022-06-20 07:28:31.306','2022-06-20 07:28:31.307',1),
	(360,'tari-bali.webp','image/webp','USER-1/3a02763f-40e7-4ed6-930d-96f1ce21c1cc-tari-bali.webp',NULL,NULL,NULL,'2022-06-21 06:00:03.945','2022-06-21 06:00:03.948',1),
	(361,'pesta-kesenian-bali-pkb-ke-44-akan-ditutup-hari-ini-minggu-10-juli-2022-hari-terakhir-pkb-bakal-dirangkai-dengan-pementasan-se_169.jpeg','image/jpeg','USER-1/daddb9c0-61a2-406c-a2a6-8d042dca7c12-pesta-kesenian-bali-pkb-ke-44-akan-ditutup-hari-ini-minggu-10-juli-2022-hari-terakhir-pkb-bakal-dirangkai-dengan-pementasan-se_169.jpeg',NULL,NULL,NULL,'2022-07-10 13:10:13.724','2022-07-10 13:10:13.725',1),
	(362,'IMG_20220714_133340.jpg','image/jpeg','Default/d446b998-04e9-4fea-971a-eb8dccd1e966-IMG_20220714_133340.jpg',NULL,NULL,NULL,'2022-07-16 04:39:30.300','2022-07-16 04:39:30.301',6),
	(363,'IMG_20220714_133340.jpg','image/jpeg','Default/f6783e24-cada-450a-b869-904ae5fed614-IMG_20220714_133340.jpg',NULL,NULL,NULL,'2022-07-16 04:48:56.083','2022-07-16 04:48:56.083',6),
	(364,'IMG_20220714_133246.jpg','image/jpeg','Default/1bf92923-957a-438a-96c9-a033c01bb2c2-IMG_20220714_133246.jpg',NULL,NULL,NULL,'2022-07-16 04:49:43.040','2022-07-16 04:49:43.040',6),
	(365,'IMG_20220714_133246.jpg','image/jpeg','Default/9c831d75-1023-4c85-9ad5-f32fc710c51e-IMG_20220714_133246.jpg',NULL,NULL,NULL,'2022-07-16 04:50:00.313','2022-07-16 04:50:00.314',6),
	(366,'IMG_20220714_132818.jpg','image/jpeg','Default/fb7e87b7-6848-4756-b626-2d29be7e3ebd-IMG_20220714_132818.jpg',NULL,NULL,NULL,'2022-07-16 04:53:41.636','2022-07-16 04:53:41.637',6),
	(367,'IMG_20220714_132738.jpg','image/jpeg','Default/41bd84e6-3773-464b-8e5d-3b1c610a0ba2-IMG_20220714_132738.jpg',NULL,NULL,NULL,'2022-07-16 04:55:43.598','2022-07-16 04:55:43.598',6),
	(368,'IMG_20220325_125244.jpg','image/jpeg','Default/33599203-4edd-4ba0-a9f1-2016aa1f9743-IMG_20220325_125244.jpg',NULL,NULL,NULL,'2022-07-18 07:55:56.309','2022-07-18 07:55:56.309',6),
	(369,'G20 Lukisan Bapak.jpg','image/jpeg','Default/e3d78b55-c3a2-4311-a39b-4fc6aa070cdf-G20 Lukisan Bapak.jpg',NULL,NULL,NULL,'2022-07-18 07:57:47.087','2022-07-18 07:57:47.087',6),
	(370,'inbound7933280659475104478.jpg','image/jpeg','USER-59/54a584f4-6cd7-4e54-bf32-e2fc64f7731f-inbound7933280659475104478.jpg',NULL,NULL,NULL,'2022-08-03 08:56:11.100','2022-08-03 08:56:11.100',59),
	(371,'inbound4132631984535911151.jpg','image/jpeg','Default/a822a2dd-5748-436c-8bf7-38fd347a6573-inbound4132631984535911151.jpg',NULL,NULL,NULL,'2022-08-03 09:03:10.752','2022-08-03 09:03:10.753',59),
	(372,'inbound7822547004361114536.jpg','image/jpeg','USER-59/5d68fc99-09c5-4e8f-9d0b-b2d1268556f1-inbound7822547004361114536.jpg',NULL,NULL,NULL,'2022-08-03 09:11:51.483','2022-08-03 09:11:51.483',59),
	(373,'inbound4448474344055747552.jpg','image/jpeg','USER-59/694c1d8d-403e-4187-8d63-aca96788ce83-inbound4448474344055747552.jpg',NULL,NULL,NULL,'2022-08-04 05:57:44.794','2022-08-04 05:57:44.795',59),
	(374,'inbound8855614434402307279.jpg','image/jpeg','Default/6808cedb-78ff-4b53-ada9-7718964c02d0-inbound8855614434402307279.jpg',NULL,NULL,NULL,'2022-08-06 12:19:48.109','2022-08-06 12:19:48.110',59),
	(375,'inbound3160519810874869728.jpg','image/jpeg','Default/a45047f2-3134-4b83-9e4d-0d5349f9da0c-inbound3160519810874869728.jpg',NULL,NULL,NULL,'2022-08-06 12:24:04.486','2022-08-06 12:24:04.487',59),
	(376,'inbound4952376395700960550.jpg','image/jpeg','Default/fc94f094-acb4-4f3b-8b31-8bc63b40c262-inbound4952376395700960550.jpg',NULL,NULL,NULL,'2022-08-06 12:26:58.468','2022-08-06 12:26:58.469',59),
	(377,'inbound500953214831569808.jpg','image/jpeg','USER-59/ART-91/d3d55672-dd7c-496b-b2c2-5d9cce0d516c-inbound500953214831569808.jpg',NULL,NULL,NULL,'2022-08-06 12:38:47.098','2022-08-06 12:38:47.098',59),
	(378,'inbound2045711608973383350.png','image/png','Default/a67653f9-3fa2-434c-9d08-b3f2e69d8cc0-inbound2045711608973383350.png',NULL,NULL,NULL,'2022-08-09 10:15:38.470','2022-08-09 10:15:38.471',59),
	(379,'inbound3300100415438416325.png','image/png','USER-59/ART-92/512ef097-40dc-4eaf-9cc3-03f547de5502-inbound3300100415438416325.png',NULL,NULL,NULL,'2022-08-09 10:19:33.406','2022-08-09 10:19:33.407',59),
	(380,'IMG_20220811_192535_764.jpg','image/jpeg','Default/0dc28c36-8715-48fe-93cb-9ea2b66d9bb1-IMG_20220811_192535_764.jpg',NULL,NULL,NULL,'2022-08-11 12:33:16.799','2022-08-11 12:33:16.800',6),
	(381,'113911f3718f678fa7dc67cf01ad5d70.jpg','image/jpeg','Default/a5ca747a-69ca-406a-a15c-477fd3215c11-113911f3718f678fa7dc67cf01ad5d70.jpg',NULL,NULL,NULL,'2022-08-12 09:23:08.823','2022-08-12 09:23:08.824',NULL),
	(382,'113911f3718f678fa7dc67cf01ad5d70.jpg','image/jpeg','USER-17/ART-94/d369d896-259a-4355-b8e2-d163327283da-113911f3718f678fa7dc67cf01ad5d70.jpg',NULL,NULL,NULL,'2022-08-12 09:23:50.338','2022-08-12 09:23:50.339',NULL),
	(383,'IMG-20220817-WA0043(1).jpg','image/jpeg','Default/150c89e5-2464-4b7d-b8a1-e4d0d0393c38-IMG-20220817-WA0043(1).jpg',NULL,NULL,NULL,'2022-08-21 23:16:14.180','2022-08-21 23:16:14.181',6),
	(384,'IMG_20220826_071828.jpg','image/jpeg','Default/f88fa21a-7335-4535-b6d3-4a05d57b3516-IMG_20220826_071828.jpg',NULL,NULL,NULL,'2022-08-28 06:02:50.990','2022-08-28 06:02:50.991',6),
	(385,'IMG_20220826_102301.jpg','image/jpeg','Default/0a6abdaa-0377-43a6-af57-31b332859233-IMG_20220826_102301.jpg',NULL,NULL,NULL,'2022-08-28 06:08:09.272','2022-08-28 06:08:09.273',6),
	(386,'IMG_20220826_102301.jpg','image/jpeg','Default/b13623f0-bc56-4f0a-9cf3-c08675e35150-IMG_20220826_102301.jpg',NULL,NULL,NULL,'2022-08-28 07:37:57.377','2022-08-28 07:37:57.378',6),
	(387,'IMG_20220828_143638_355.jpg','image/jpeg','Default/f088ce61-aab8-4bed-b613-abff6ec78961-IMG_20220828_143638_355.jpg',NULL,NULL,NULL,'2022-08-28 07:38:36.830','2022-08-28 07:38:36.830',6),
	(388,'inbound7501533679617156708.jpg','image/jpeg','Default/d375fe36-e217-444b-8d9e-35569d7f0ce7-inbound7501533679617156708.jpg',NULL,NULL,NULL,'2022-08-29 14:43:44.146','2022-08-29 14:43:44.146',59),
	(389,'inbound7450803884073270904.jpg','image/jpeg','USER-59/ART-98/a51061b3-3a65-4485-9e5f-7845c21dce83-inbound7450803884073270904.jpg',NULL,NULL,NULL,'2022-08-29 14:48:17.486','2022-08-29 14:48:17.487',59),
	(390,'inbound6828609625134353522.png','image/png','Default/96156cbd-98fc-4d88-b642-6f9952731a0d-inbound6828609625134353522.png',NULL,NULL,NULL,'2022-08-29 14:51:06.740','2022-08-29 14:51:06.741',59),
	(391,'inbound4401999463332229193.png','image/png','USER-59/ART-99/43d86a6f-3df3-4b1d-8f29-73fe13571d63-inbound4401999463332229193.png',NULL,NULL,NULL,'2022-08-29 14:53:24.066','2022-08-29 14:53:24.066',59),
	(392,'IMG_20220829_152906.jpg','image/jpeg','Default/2d84eccd-7d74-4f90-8f31-ddd5b19ff2aa-IMG_20220829_152906.jpg',NULL,NULL,NULL,'2022-09-01 08:19:31.632','2022-09-01 08:19:31.633',6),
	(393,'IMG_20220901_154805.jpg','image/jpeg','Default/933789c0-fb1e-4aaf-a0c0-07c60b413f78-IMG_20220901_154805.jpg',NULL,NULL,NULL,'2022-09-01 08:24:00.838','2022-09-01 08:24:00.839',6),
	(394,'Screenshot_20220805-155520_Drive.jpg','image/jpeg','USER-65/30982894-78d4-4034-b587-cbbecd48eaf1-Screenshot_20220805-155520_Drive.jpg',NULL,NULL,NULL,'2022-09-01 12:46:05.841','2022-09-01 12:46:05.841',65),
	(395,'FB_IMG_1647705154982.jpg','image/jpeg','USER-65/adf93327-159f-442c-b1ee-feced2a418f3-FB_IMG_1647705154982.jpg',NULL,NULL,NULL,'2022-09-01 12:47:29.996','2022-09-01 12:47:29.997',65),
	(396,'tofan.jpg','image/jpeg','USER-66/dc8b3b1e-c9f0-44b9-87ce-3fb06810dfb7-tofan.jpg',NULL,NULL,NULL,'2022-09-02 11:16:58.849','2022-09-02 11:16:58.850',66),
	(397,'the heart_60 x 100 cm. oil on canvas. 2022..jpg','image/jpeg','Default/b91fd0cd-7aba-44e6-8e69-121bdd10b0e2-the heart_60 x 100 cm. oil on canvas. 2022..jpg',NULL,NULL,NULL,'2022-09-02 11:19:29.779','2022-09-02 11:19:29.780',66),
	(398,'the heart_60 x 100 cm. oil on canvas. 2022..jpg','image/jpeg','Default/9c7353c1-a9f9-489b-a05d-6e591ec3cde1-the heart_60 x 100 cm. oil on canvas. 2022..jpg',NULL,NULL,NULL,'2022-09-02 11:29:02.955','2022-09-02 11:29:02.956',66),
	(399,'the heart1_60 x 100 cm. oil on canvas. 2022..jpg','image/jpeg','USER-66/ART-102/e44fa583-f961-48a0-b96b-4e00125c4ad7-the heart1_60 x 100 cm. oil on canvas. 2022..jpg',NULL,NULL,NULL,'2022-09-02 11:35:47.966','2022-09-02 11:35:47.966',66),
	(400,'black.jpg','image/jpeg','USER-67/5d8bf478-20cd-4716-b5a6-89ccbfb8f154-black.jpg',NULL,NULL,NULL,'2022-09-02 12:34:04.404','2022-09-02 12:34:04.405',67),
	(401,'spora 01.jpg','image/jpeg','USER-67/369bd4d8-6eaa-47b5-a305-1513de9169ad-spora 01.jpg',NULL,NULL,NULL,'2022-09-02 12:34:24.826','2022-09-02 12:34:24.827',67),
	(402,'FB_IMG_1639194333933.jpg','image/jpeg','USER-68/490557d2-58be-4fb0-b58d-fe5e9d66591d-FB_IMG_1639194333933.jpg',NULL,NULL,NULL,'2022-09-03 00:15:57.978','2022-09-03 00:15:57.978',68),
	(403,'20220902_162301.jpg','image/jpeg','USER-68/861c56e0-fccc-4297-a2e3-1e1e705711c9-20220902_162301.jpg',NULL,NULL,NULL,'2022-09-03 00:16:33.490','2022-09-03 00:16:33.491',68),
	(404,'Travelling Without Moving. 110 x 140 cm. Oil On Canvas. 2022.jpg','image/jpeg','USER-66/a8e59824-ff7e-487b-a00a-de3c4df51d9c-Travelling Without Moving. 110 x 140 cm. Oil On Canvas. 2022.jpg',NULL,NULL,NULL,'2022-09-17 18:25:46.929','2022-09-17 18:25:46.930',66),
	(405,'WhatsApp Image 2022-09-18 at 10.27.08 (1).jpeg','image/jpeg','USER-1/514b8280-f046-488e-a765-117eaead858e-WhatsApp Image 2022-09-18 at 10.27.08 (1).jpeg',NULL,NULL,NULL,'2022-09-29 08:53:58.313','2022-09-29 08:53:58.314',1),
	(406,'IMG_20220917_195830.jpg','image/jpeg','USER-1/a975fd62-06d9-4766-866b-c031815d9e95-IMG_20220917_195830.jpg',NULL,NULL,NULL,'2022-09-29 08:54:13.259','2022-09-29 08:54:13.260',1),
	(407,'IMG_20220917_195839.jpg','image/jpeg','USER-1/40b5de0e-b3e5-4dcb-a8d4-d3f41be544fc-IMG_20220917_195839.jpg',NULL,NULL,NULL,'2022-09-29 08:54:21.432','2022-09-29 08:54:21.432',1),
	(408,'Travelling Without Moving. 110 x 140 cm. Oil On Canvas. 2022.jpg','image/jpeg','Default/9a90bb6b-5ae0-4033-83e9-890ebc325aa0-Travelling Without Moving. 110 x 140 cm. Oil On Canvas. 2022.jpg',NULL,NULL,NULL,'2022-10-07 12:58:35.642','2022-10-07 12:58:35.643',66),
	(409,'IMG_20220313_154903.jpg','image/jpeg','USER-69/48292f1b-d39b-4e85-a22d-bea8fdb42dd1-IMG_20220313_154903.jpg',NULL,NULL,NULL,'2022-10-13 05:03:55.880','2022-10-13 05:03:55.880',69),
	(410,'IMG_20221013_115524.jpg','image/jpeg','Default/96578902-7e86-46d5-8945-38819842bea4-IMG_20221013_115524.jpg',NULL,NULL,NULL,'2022-10-13 05:09:24.406','2022-10-13 05:09:24.406',69),
	(411,'PSX_20210617_215646_013721.jpg','image/jpeg','USER-70/f309ffac-b58e-477b-a334-6cefa07ab0c8-PSX_20210617_215646_013721.jpg',NULL,NULL,NULL,'2022-10-18 09:17:08.295','2022-10-18 09:17:08.296',70),
	(412,'Hi beautiful #2 60x80cm Acrylic on canvas 2021_041111.jpg','image/jpeg','USER-70/8caebd61-7294-4e97-82c1-dabe858081db-Hi beautiful #2 60x80cm Acrylic on canvas 2021_041111.jpg',NULL,NULL,NULL,'2022-10-18 09:24:11.016','2022-10-18 09:24:11.017',70),
	(413,'Hi beautiful #2 60x80cm Acrylic on canvas 2021_041111.jpg','image/jpeg','USER-70/f4da65d7-3219-4529-a88b-82f7b1635e51-Hi beautiful #2 60x80cm Acrylic on canvas 2021_041111.jpg',NULL,NULL,NULL,'2022-10-18 09:24:31.132','2022-10-18 09:24:31.132',70),
	(414,'Hi beautiful #2 60x80cm Acrylic on canvas 2021_041111.jpg','image/jpeg','USER-70/01590e2e-626e-4268-a3dd-add5de909bbe-Hi beautiful #2 60x80cm Acrylic on canvas 2021_041111.jpg',NULL,NULL,NULL,'2022-10-18 09:26:34.074','2022-10-18 09:26:34.075',70),
	(415,'paNEN 01_041024.jpg','image/jpeg','Default/6925a595-36dd-411d-a37f-980bd5fa7529-paNEN 01_041024.jpg',NULL,NULL,NULL,'2022-10-18 09:27:28.293','2022-10-18 09:27:28.294',70),
	(416,'20220908125728_IMG_6548.JPG','image/jpeg','USER-70/ART-105/a244cbdc-d179-411a-9281-bacf4120d1a7-20220908125728_IMG_6548.JPG',NULL,NULL,NULL,'2022-10-18 09:30:50.102','2022-10-18 09:30:50.103',70),
	(417,'HI BEAUTIFUL 1 90x150cm AOC 2021_040752.jpg','image/jpeg','Default/87a3838e-3498-4975-83a8-c0e53c45c5b3-HI BEAUTIFUL 1 90x150cm AOC 2021_040752.jpg',NULL,NULL,NULL,'2022-10-18 09:31:38.676','2022-10-18 09:31:38.676',70),
	(418,'Hi beautiful #2 60x80cm Acrylic on canvas 2021_041111.jpg','image/jpeg','Default/8c507fbd-0f65-431e-8794-36b6d7fb641c-Hi beautiful #2 60x80cm Acrylic on canvas 2021_041111.jpg',NULL,NULL,NULL,'2022-10-18 09:36:13.681','2022-10-18 09:36:13.682',70),
	(419,'panen 1_040933.jpg','image/jpeg','Default/1e31629b-93cb-4fe7-993f-afd3aefcc068-panen 1_040933.jpg',NULL,NULL,NULL,'2022-10-18 09:39:13.696','2022-10-18 09:39:13.697',70),
	(420,'20220908125920_IMG_6549.JPG','image/jpeg','USER-70/ART-108/3846898a-86b0-4ebe-816c-e45e5a034fcc-20220908125920_IMG_6549.JPG',NULL,NULL,NULL,'2022-10-18 09:42:08.732','2022-10-18 09:42:08.732',70),
	(421,'PANEN 2_040838.jpg','image/jpeg','Default/c817cbb1-4a1e-4101-9ad5-ab50e53b15b3-PANEN 2_040838.jpg',NULL,NULL,NULL,'2022-10-18 09:42:40.143','2022-10-18 09:42:40.144',70),
	(422,'20220908130039_IMG_6550.JPG','image/jpeg','USER-70/ART-109/4e85ed6e-9be3-46a4-a825-f1fe97724678-20220908130039_IMG_6550.JPG',NULL,NULL,NULL,'2022-10-18 09:44:39.271','2022-10-18 09:44:39.272',70),
	(423,'8c507fbd-0f65-431e-8794-36b6d7fb641c-Hi beautiful #2 60x80cm Acrylic on canvas 2021_041111.jpg','image/jpeg','USER-70/ART-107/f7c56d27-7489-4c32-a055-26548f2d3003-8c507fbd-0f65-431e-8794-36b6d7fb641c-Hi beautiful #2 60x80cm Acrylic on canvas 2021_041111.jpg',NULL,NULL,NULL,'2022-10-19 04:09:44.421','2022-10-19 04:09:44.422',1),
	(424,'Hi-Beautifull-2.jpg','image/jpeg','USER-70/ART-107/3bf374d4-ea09-489a-9891-05b3b5b3dbf4-Hi-Beautifull-2.jpg',NULL,NULL,NULL,'2022-10-19 04:10:25.392','2022-10-19 04:10:25.393',1),
	(425,'6237D6BF-F27D-4EFC-9C5A-EA953F46FAC0.jpeg','image/jpeg','USER-71/6fe6383c-779b-4b70-9cc2-b8a8f0bc0637-6237D6BF-F27D-4EFC-9C5A-EA953F46FAC0.jpeg',NULL,NULL,NULL,'2022-10-23 06:07:32.591','2022-10-23 06:07:32.591',71),
	(426,'BE440A7C-8560-4A54-83D9-D504A628DBB3.jpeg','image/jpeg','USER-71/0bff4978-65fe-4e6a-975a-ca133cb65a54-BE440A7C-8560-4A54-83D9-D504A628DBB3.jpeg',NULL,NULL,NULL,'2022-10-23 06:08:16.076','2022-10-23 06:08:16.076',71),
	(427,'IMG_20220729_124613.jpg','image/jpeg','USER-72/89ea73d3-0e8a-4662-a098-0bc3652de82e-IMG_20220729_124613.jpg',NULL,NULL,NULL,'2022-10-25 03:45:26.265','2022-10-25 03:45:26.266',72),
	(428,'20190118_081110.jpg','image/jpeg','USER-72/1268dd09-4fa1-4577-9d9d-e22951432758-20190118_081110.jpg',NULL,NULL,NULL,'2022-10-25 03:46:20.300','2022-10-25 03:46:20.301',72),
	(429,'IMG-20211221-WA0013.jpg','image/jpeg','Default/9325cb33-d879-46e6-80d4-cd3f74020e93-IMG-20211221-WA0013.jpg',NULL,NULL,NULL,'2022-10-25 04:09:31.450','2022-10-25 04:09:31.451',72),
	(430,'16666718517356496300451003874958.jpg','image/jpeg','USER-72/ART-110/980e6722-9769-49b3-9d85-822438816c99-16666718517356496300451003874958.jpg',NULL,NULL,NULL,'2022-10-25 04:28:09.858','2022-10-25 04:28:09.858',72),
	(431,'16666721718164903349991206919650.jpg','image/jpeg','USER-72/ART-110/bd4a5fb9-4bb8-475d-846e-394ca4034169-16666721718164903349991206919650.jpg',NULL,NULL,NULL,'2022-10-25 04:30:34.208','2022-10-25 04:30:34.208',72),
	(432,'16666722633095255169275187872524.jpg','image/jpeg','USER-72/ART-110/eceb227e-d522-443c-aff9-fcfc8ecd2481-16666722633095255169275187872524.jpg',NULL,NULL,NULL,'2022-10-25 04:33:17.165','2022-10-25 04:33:17.165',72),
	(433,'16666724243347123171768018799719.jpg','image/jpeg','USER-72/ART-110/4ca973bb-5872-4756-b9b7-6192a952e074-16666724243347123171768018799719.jpg',NULL,NULL,NULL,'2022-10-25 04:34:14.589','2022-10-25 04:34:14.590',72),
	(434,'360_F_220776577_XB8bwrDBgSwZ8cMQJrQlAosMv3j9rj8E.jpg','image/jpeg','USER-6/ART-111/d0cb5770-b133-4434-b966-dbaa2d180025-360_F_220776577_XB8bwrDBgSwZ8cMQJrQlAosMv3j9rj8E.jpg',NULL,NULL,NULL,'2022-11-02 14:10:28.829','2022-11-02 14:10:28.830',1),
	(435,'IMG_20220119_154727.jpg','image/jpeg','USER-73/a4b0b977-6506-4ee8-b3f6-b29e20701e98-IMG_20220119_154727.jpg',NULL,NULL,NULL,'2022-11-07 04:01:48.607','2022-11-07 04:01:48.607',73),
	(436,'IMG_20220512_175117.jpg','image/jpeg','Default/a30df32d-40e6-4da0-8d4c-dd894a6046b2-IMG_20220512_175117.jpg',NULL,NULL,NULL,'2022-11-07 04:04:34.796','2022-11-07 04:04:34.797',73),
	(437,'1667793937614..jpg','image/jpeg','USER-73/ART-111/8341fd37-90e2-4d8c-85b3-f1ff0f43313e-1667793937614..jpg',NULL,NULL,NULL,'2022-11-07 04:15:50.247','2022-11-07 04:15:50.247',73),
	(438,'1667794146555..jpg','image/jpeg','USER-73/ART-111/64463a86-4721-49ad-9126-5a8f2780509c-1667794146555..jpg',NULL,NULL,NULL,'2022-11-07 04:18:46.504','2022-11-07 04:18:46.505',73),
	(439,'IMG_20220501_132031.jpg','image/jpeg','Default/7596760b-0eb9-4050-af22-b312afd549be-IMG_20220501_132031.jpg',NULL,NULL,NULL,'2022-11-07 04:24:05.427','2022-11-07 04:24:05.428',73),
	(440,'1667794844081..jpg','image/jpeg','USER-73/ART-113/ef174ebd-032f-47d9-a43c-4b99e3762b2e-1667794844081..jpg',NULL,NULL,NULL,'2022-11-07 04:28:44.686','2022-11-07 04:28:44.687',73),
	(441,'1667794916130..jpg','image/jpeg','USER-73/ART-113/998ade93-c466-43d0-a805-0a039c2dbfed-1667794916130..jpg',NULL,NULL,NULL,'2022-11-07 04:30:23.774','2022-11-07 04:30:23.775',73),
	(442,'123.PNG','image/png','USER-75/ART-114/d8440f04-e509-40d6-9578-fc8183b5cf68-123.PNG',NULL,NULL,NULL,'2022-11-08 02:58:12.509','2022-11-08 02:58:12.510',NULL),
	(443,'8caebd61-7294-4e97-82c1-dabe858081db-Hi beautiful #2 60x80cm Acrylic on canvas 2021_041111.jpg','image/jpeg','USER-70/4ee8df3e-78b4-4af6-aa22-d3cd33bfba9d-8caebd61-7294-4e97-82c1-dabe858081db-Hi beautiful #2 60x80cm Acrylic on canvas 2021_041111.jpg',NULL,NULL,NULL,'2022-11-11 11:15:24.517','2022-11-11 11:15:24.518',1),
	(444,'Hi-beautifull2.jpg','image/jpeg','USER-70/4e1f7f73-86f3-44df-8e2a-295991f4d911-Hi-beautifull2.jpg',NULL,NULL,NULL,'2022-11-11 11:15:44.446','2022-11-11 11:15:44.446',1),
	(445,'IMG_20221118_115155_313.jpg','image/jpeg','Default/e6b71292-ddf1-4176-b6b9-efcf4bdde551-IMG_20221118_115155_313.jpg',NULL,NULL,NULL,'2022-11-18 09:26:29.320','2022-11-18 09:26:29.320',6),
	(446,'IMG_20221120_204734.jpg','image/jpeg','Default/49355731-e24d-4651-95c3-5e73f58d1ffd-IMG_20221120_204734.jpg',NULL,NULL,NULL,'2022-11-20 12:48:46.216','2022-11-20 12:48:46.217',6),
	(447,'IMG_20221108_114411-01.jpeg','image/jpeg','USER-84/e2085e1f-67e5-4ac4-b99f-dd4389bf30be-IMG_20221108_114411-01.jpeg',NULL,NULL,NULL,'2022-11-23 00:46:49.666','2022-11-23 00:46:49.667',84),
	(448,'IMG_20221111_203811-01.jpeg','image/jpeg','USER-84/ce15be32-2184-450e-b2e2-82cc8cc6d895-IMG_20221111_203811-01.jpeg',NULL,NULL,NULL,'2022-11-23 00:47:39.422','2022-11-23 00:47:39.422',84),
	(449,'IMG_20220824_105957-01-01.jpeg','image/jpeg','USER-84/50f6d191-c29a-481f-90f5-dfeb1f6be29b-IMG_20220824_105957-01-01.jpeg',NULL,NULL,NULL,'2022-11-23 00:48:21.835','2022-11-23 00:48:21.835',84),
	(450,'IMG_20221108_131829.jpg','image/jpeg','USER-84/4b43924c-5274-4434-a6ac-a59969cdb85e-IMG_20221108_131829.jpg',NULL,NULL,NULL,'2022-11-23 00:48:39.671','2022-11-23 00:48:39.672',84),
	(451,'IMG_20221123_075635.jpg','image/jpeg','USER-84/f5cda6c3-1f1b-41a8-9a23-d4ebdbc57302-IMG_20221123_075635.jpg',NULL,NULL,NULL,'2022-11-23 00:57:38.614','2022-11-23 00:57:38.614',84),
	(452,'IMG_20221108_131829-01.jpeg','image/jpeg','Default/9d01bc11-7d21-4cc4-b0e8-584a15ebac3d-IMG_20221108_131829-01.jpeg',NULL,NULL,NULL,'2022-11-23 00:59:12.499','2022-11-23 00:59:12.499',84),
	(453,'inbound2087766571812329763.jpg','image/jpeg','USER-84/d2bbd12e-e03a-48d0-9480-1bf23220fe42-inbound2087766571812329763.jpg',NULL,NULL,NULL,'2022-11-24 01:46:24.815','2022-11-24 01:46:24.816',84),
	(454,'inbound6496724048807011200.jpg','image/jpeg','USER-84/8c37f889-87b0-435d-93c5-e3e4e66a2ccb-inbound6496724048807011200.jpg',NULL,NULL,NULL,'2022-11-24 01:49:47.959','2022-11-24 01:49:47.960',84),
	(455,'inbound5858751807254497995.jpg','image/jpeg','USER-84/2a6ba2e7-2b48-46bf-a806-ce1e97fc0568-inbound5858751807254497995.jpg',NULL,NULL,NULL,'2022-11-24 01:50:03.882','2022-11-24 01:50:03.883',84),
	(456,'inbound1405898866360065932.jpg','image/jpeg','USER-84/15e28a06-8667-4682-a798-b64e6a0da44a-inbound1405898866360065932.jpg',NULL,NULL,NULL,'2022-11-24 01:51:01.439','2022-11-24 01:51:01.440',84);

/*!40000 ALTER TABLE `media` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table order
# ------------------------------------------------------------

DROP TABLE IF EXISTS `order`;

CREATE TABLE `order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `shipping_address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fraud` enum('SETTLEMENT','REFUND','CANCEL','PENDING') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'PENDING',
  `shipping_city` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shipping_country` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shipping_zip_code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('PENDING','PROCEED','SHIPPING','SUCCESS') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'PENDING',
  `total_amount` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `transaction_time` datetime(3) NOT NULL,
  `order_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `recipient_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `recipient_phone_number` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notes` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `transaction_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `order_order_id_key` (`order_id`),
  KEY `order_user_id_fkey` (`user_id`),
  CONSTRAINT `order_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;

INSERT INTO `order` (`id`, `user_id`, `shipping_address`, `fraud`, `shipping_city`, `shipping_country`, `shipping_zip_code`, `status`, `total_amount`, `transaction_time`, `order_id`, `recipient_name`, `recipient_phone_number`, `notes`, `transaction_id`)
VALUES
	(1,1,'Jl. Padma Gg Jaya Raya No.7','PENDING','Denpasar','Bali','80238','PENDING','37800000','2022-10-08 16:31:57.000','ARTCHIVEID/ORDER/USR-1/1665246717173','Yosa Rama','081236947277','Testing',NULL),
	(3,1,'Jl. Padma Gg Jaya Raya No 7','PENDING','Denpasar','Bali','80238','PENDING','35000000','2022-11-06 13:06:35.000','ARTCHIVEID/ORDER/USR-1/1667739995299','Yosa Rama','081236947277',NULL,NULL),
	(4,1,'Jalan Cisitu Indah 1','PENDING','Bandung','Indonesia','32502','PENDING','35000000','2022-12-17 06:02:20.000','ARTCHIVEID/ORDER/USR-1/1671256940028','Dion Pramana','081835868888',NULL,NULL),
	(5,1,'Jalan cisitu indah 1','PENDING','Denpasar','Indonesia','80255','PENDING','35000000','2022-12-17 06:04:34.000','ARTCHIVEID/ORDER/USR-1/1671257074914','Dion','085085085085',NULL,NULL);

/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table payment_history
# ------------------------------------------------------------

DROP TABLE IF EXISTS `payment_history`;

CREATE TABLE `payment_history` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `artwork_id` int NOT NULL,
  `transaction_time` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `transaction_status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `transaction_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `signature_key` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payment_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `order_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gross_amount` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fraud_status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `currency` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `merchant_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `payment_history_user_id_fkey` (`user_id`),
  KEY `payment_history_artwork_id_fkey` (`artwork_id`),
  CONSTRAINT `payment_history_artwork_id_fkey` FOREIGN KEY (`artwork_id`) REFERENCES `artwork` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `payment_history_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `full_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` enum('ARTIST','GALLERY','ADMIN','COLLECTOR') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) DEFAULT NULL,
  `profile_img_id` int DEFAULT NULL,
  `signature_id` int DEFAULT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `billing_address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `biography` text COLLATE utf8mb4_unicode_ci,
  `city` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `facebook_url` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `instagram_url` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `banner_id` int DEFAULT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL,
  `provider` enum('CREDENTIALS','GOOGLE','FACEBOOK') COLLATE utf8mb4_unicode_ci NOT NULL,
  `birth_date` date DEFAULT NULL,
  `phone_number` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_email_key` (`email`),
  UNIQUE KEY `user_slug_key` (`slug`),
  UNIQUE KEY `user_profile_img_id_key` (`profile_img_id`),
  UNIQUE KEY `user_signature_id_key` (`signature_id`),
  UNIQUE KEY `user_banner_id_key` (`banner_id`),
  CONSTRAINT `user_banner_id_fkey` FOREIGN KEY (`banner_id`) REFERENCES `media` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `user_profile_img_id_fkey` FOREIGN KEY (`profile_img_id`) REFERENCES `media` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `user_signature_id_fkey` FOREIGN KEY (`signature_id`) REFERENCES `media` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;

INSERT INTO `user` (`id`, `email`, `full_name`, `password`, `role`, `createdAt`, `updatedAt`, `profile_img_id`, `signature_id`, `address`, `billing_address`, `biography`, `city`, `facebook_url`, `instagram_url`, `banner_id`, `slug`, `status`, `provider`, `birth_date`, `phone_number`)
VALUES
	(1,'admin@artchive.id','Admin','$2a$12$cRjk2CNy8/bnaOLAAFnH/u4XoGvOigZ5wm7dJQFT40gR1LFKiriyu','ADMIN','2022-03-30 11:14:09.678','2022-03-30 13:45:57.978',2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'admin',1,'CREDENTIALS',NULL,NULL),
	(6,'imadeduatmika@gmail.com','I Made Duatmika','$2a$12$BiprxjR/LMziNJKrxxdPHO6wEWos.fXtqgSoNz1Rbfsslc.51WDtu','ARTIST','2022-03-30 14:17:59.119','2022-07-16 04:33:55.344',230,NULL,NULL,NULL,'Decorative Naive Artist. He has a vision on his painting for Contemporer art, talking about Balinese traditional behaviour, Indonesian development, Indonesian politics, and every life aspect in Bali and Indonesia. Started his professional painter career since 1990, he has produced many art works and held exhibitions','Jembrana Bali',NULL,NULL,208,'i-made-duatmika',1,'GOOGLE',NULL,NULL),
	(19,'riadamayanti1998@gmail.com','Made Ria Damayanti','$2a$12$C6XolsXKpqU/JaPTo3eu0urXACf/f3Ov0BjOSDslJMQrOt71UulFK','COLLECTOR','2022-04-02 02:37:33.215','2022-04-09 03:51:40.122',34,NULL,'Jl. Trenggana No.110',NULL,NULL,'Denpasar',NULL,NULL,219,'made-ria-damayanti',1,'CREDENTIALS','1998-03-19',NULL),
	(21,'iwyarnata1@gmail.com','Wayan Arnata',NULL,'COLLECTOR','2022-04-02 03:07:04.339','2022-04-02 03:12:59.163',36,NULL,'Bali',NULL,'A sci-art enthusiast ','Bali',NULL,NULL,NULL,'wayan-arnata',1,'GOOGLE','2000-12-25',NULL),
	(26,'dollarastawa1@gmail.com','Dollar Astawa',NULL,'ARTIST','2022-04-07 11:15:12.645','2022-04-07 12:22:29.762',202,NULL,'Batubulan gianyar',NULL,NULL,'Gianyar',NULL,NULL,201,'dollar-astawa',1,'GOOGLE','1972-08-21',NULL),
	(27,'madewiradana212@gmail.com','Made Wiradana',NULL,'ARTIST','2022-04-07 11:15:27.620','2022-04-08 05:58:17.178',198,NULL,'Jl Ratna GG Jepun no 3 denpasar',NULL,NULL,'Denpasar Bali Indonesia',NULL,NULL,195,'made-wiradana',1,'GOOGLE','1968-10-27',NULL),
	(28,'paramarthangurah752@gmail.com','Ngurah Paramartha',NULL,'ARTIST','2022-04-07 11:15:43.945','2022-04-07 12:27:07.322',203,NULL,'Jln trengguli',NULL,'Figuratip naif','Bali',NULL,NULL,204,'ngurah-paramartha',1,'GOOGLE',NULL,NULL),
	(29,'dedyreru6@gmail.com','V Dedy Reru',NULL,'ARTIST','2022-04-07 11:16:08.647','2022-04-27 07:01:43.215',197,NULL,'Jl Tukad Badung XIX blok B no 99 Renon Denpasar ',NULL,NULL,'Denpasar',NULL,NULL,249,'dari-rumah-art',1,'GOOGLE','1973-02-15',NULL),
	(30,'dekbudi74@gmail.com','Budiadnyana',NULL,'ARTIST','2022-04-07 11:16:44.443','2022-04-08 01:47:35.298',211,NULL,'Batubulan',NULL,'Budiadnyana','Gianyar',NULL,NULL,210,'dek-budi',1,'GOOGLE','1974-08-08',NULL),
	(31,'romisukadanamd@gmail.com','Romi Sukadana',NULL,'ARTIST','2022-04-07 11:16:51.294','2022-04-07 11:38:12.184',179,NULL,'Jln kecubung gang kemoning no 8 Denpasar ',NULL,NULL,'Denpasar ',NULL,NULL,187,'romi-sukadana',1,'GOOGLE','1973-01-22',NULL),
	(32,'sutaartresidence@gmail.com','Pande Nyoman Alit Wijaya Suta','$2a$12$CfeIJWjOoog8BoWybiTTr.o5v/ydxZHWFrn1zIcG5iX63lRurnzxa','ARTIST','2022-04-07 11:35:26.932','2022-04-07 12:00:16.228',189,NULL,'Jln. Ratna No. 50, Bjr. Tatasan Kelod, Tonja',NULL,NULL,'Denpasar Utara',NULL,NULL,192,'suta-art-residence',1,'GOOGLE','1984-08-29',NULL),
	(33,'igedewinaya@gmail.com','Gede Winaya',NULL,'COLLECTOR','2022-04-11 06:23:03.569','2022-04-11 06:23:11.374',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'gede-winaya',1,'GOOGLE',NULL,NULL),
	(35,'jbre8096@gmail.com','John Bre',NULL,'GALLERY','2022-04-14 13:01:13.471','2022-04-14 13:01:30.053',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'john-bre',1,'GOOGLE',NULL,NULL),
	(36,'tienhong425@gmail.com','Tien Hong',NULL,'ARTIST','2022-04-15 06:41:30.978','2022-04-15 07:36:29.714',240,NULL,NULL,NULL,NULL,NULL,NULL,NULL,241,'tien-hong',1,'GOOGLE',NULL,NULL),
	(37,'ratayoga79@gmail.com','dewa ratayoga',NULL,'ARTIST','2022-04-15 08:56:09.653','2022-04-15 08:56:17.057',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'dewa-ratayoga',1,'GOOGLE',NULL,NULL),
	(38,'aryawanlie@gmail.com','Aryawan Lie',NULL,'ARTIST','2022-04-15 08:58:38.539','2022-04-15 08:58:55.957',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'aryawan-lie',1,'GOOGLE',NULL,NULL),
	(39,'ariwinata1471@gmail.com','Ari Winata',NULL,'ARTIST','2022-04-15 09:00:32.381','2022-11-22 13:32:08.366',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'ari-winata',1,'GOOGLE',NULL,NULL),
	(40,'artchive.id@gmail.com','Artchive. Id',NULL,'COLLECTOR','2022-04-18 14:38:25.277','2022-04-18 14:38:33.422',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'artchive-id',1,'GOOGLE',NULL,NULL),
	(45,'narusekiyoshi1@gmail.com','Kiyoshi Naruse',NULL,'COLLECTOR','2022-04-25 00:24:35.688','2022-04-25 00:24:59.558',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'kiyoshi-naruse',1,'GOOGLE',NULL,NULL),
	(46,'Anasbgl5@gmail.com','Muhammad Anas','$2a$12$DU8en4tAUVpeGKEzHIESqudyrRWeSpadxTdvVT25d/b9DVVR0UJGC','ARTIST','2022-04-25 09:54:34.060','2022-05-02 09:45:15.236',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'muhammad-anas',1,'CREDENTIALS',NULL,NULL),
	(47,'dimas2.ds4@gmail.com','Dimas_Agus_Wahyudi',NULL,'GALLERY','2022-04-26 04:14:08.328','2022-04-26 04:14:15.305',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'dimasaguswahyudi',1,'GOOGLE',NULL,NULL),
	(48,'madelindaimagi@gmail.com','52 Hananta Lida Imagi X IPS 4',NULL,'COLLECTOR','2022-04-27 12:31:14.567','2022-04-27 12:31:22.795',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'52-hananta-lida-imagi-x-ips-4',1,'GOOGLE',NULL,NULL),
	(50,'mdpalguna@gmail.com','I Made Arya Palguna','$2a$12$jpfRjQCEsiGOJCri7SgLRusUBfvaDzqqtKvWde.EYUO4t5xHdkRLy','ARTIST','2022-05-09 03:41:32.406','2022-05-09 03:48:18.338',272,NULL,'Jalan Bisma  No : 76, Ubud',NULL,NULL,'Gianyar',NULL,NULL,273,'made-palguna',1,'GOOGLE','1976-10-12',NULL),
	(51,'kadekguet@yahoo.co.id','I Kadek Dwi Armika','$2a$12$Hv6SNVUIxu70eSoIuQccbeIrPFqM0zzmO1.9oSDIAoa0hAAeQhwau','ARTIST','2022-05-10 09:59:29.886','2022-05-27 13:48:12.570',299,NULL,NULL,NULL,NULL,NULL,NULL,NULL,356,'i-kadek-dwi-armika',1,'CREDENTIALS',NULL,NULL),
	(52,'laksmi.adityarani@gmail.com','Laksmi Adityarani',NULL,'ARTIST','2022-05-16 05:00:18.781','2022-05-16 05:00:25.958',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'laksmi-adityarani',1,'GOOGLE',NULL,NULL),
	(53,'vkaviani69@gmail.com','Vahishta Kaviani','$2a$12$CIBl0Qdkw9QUdDk4ziXxvuFzXkNt6j2r3vWQjD6QV7x80k7JQRcum','ARTIST','2022-05-16 09:42:57.255','2022-05-27 13:46:41.173',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'vahishta-kaviani',1,'CREDENTIALS',NULL,NULL),
	(54,'nengahwinarsih79@gmail.com','Nengah Winarsih',NULL,'ARTIST','2022-06-19 11:46:08.412','2022-06-19 11:46:21.176',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'nengah-winarsih',1,'GOOGLE',NULL,NULL),
	(55,'ekomang92@gmail.com','komang erni',NULL,'GALLERY','2022-06-19 11:47:38.218','2022-06-19 11:48:20.682',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'komang-erni',1,'GOOGLE',NULL,NULL),
	(58,'denayarahadika@gmail.com','Denaya Rahadika',NULL,'COLLECTOR','2022-07-24 07:49:35.720','2022-07-24 07:50:07.269',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'denaya-rahadika',1,'GOOGLE',NULL,NULL),
	(59,'revandrakrisnov@gmail.com','Adhik Kristiantoro','$2a$12$6XuVOcflUz8idXUzjvOsOeEElqt7Qno9MBwmZda9myrYdb01aiPk6','ARTIST','2022-08-02 10:25:57.929','2022-08-21 16:30:11.289',370,NULL,NULL,NULL,NULL,NULL,NULL,NULL,372,'adhik-kristiantoro',1,'CREDENTIALS',NULL,NULL),
	(63,'dedysumantrayasa@gmail.com','Dedysumantra Yasa','$2a$12$yk7qaWzhy3MW1fjNMrNnQOMiWXp6zQAOH2O28bpwOWrsspjQSbB/6','ARTIST','2022-08-19 10:10:52.723','2022-08-25 10:56:01.877',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'dedysumantra-yasa',1,'GOOGLE',NULL,NULL),
	(65,'general.nai@gmail.com','Sonny Hendrawan','$2a$12$g27kDjkK6AFt7EWAK/gwU.sZYrRJ.F1bao4MdLEjqVkFmg16xZf3G','ARTIST','2022-09-01 12:42:39.255','2022-09-01 12:50:35.602',395,NULL,'Jl. Prenjak 1, Kampung Joho, Kerten, Surakarta',NULL,NULL,'Surakarta',NULL,NULL,394,'sonny-hendrawan',1,'CREDENTIALS','1986-02-11',NULL),
	(66,'aliemohammed79@gmail.com','Tofan Muhammad Ali Siregar','$2a$12$C9CMCNxSJrjJ/4R5p0V/ee1qjwQ2/J1cpo/Kp6xeOVYdiGIpn1KMm','ARTIST','2022-09-02 11:11:10.611','2022-09-17 18:25:47.041',396,NULL,'Garon. Rt. 01 Panggungharjo. kabupaten Bantul.',NULL,'Seniman','Yogyakarta',NULL,NULL,404,'tofan-muhammad-ali-siregar',1,'CREDENTIALS','1980-05-09',NULL),
	(67,'a.c.komeng@gmail.com','elka alva chandra','$2a$12$PAr0ajhh3aEDqz0CVaD9UuZMF3OV5IicYtTDSKpbd5QKf25BcFsTm','ARTIST','2022-09-02 12:30:06.665','2022-09-02 12:34:24.965',401,NULL,NULL,NULL,NULL,'jawatimur',NULL,NULL,400,'elka-alva-chandra',1,'GOOGLE',NULL,NULL),
	(68,'ruhiyatilyas23@yahoo.com','MUHAMAD ILYAS RUHIYAT','$2a$12$xNg5iD77vZNJt5d5u5c83OYpYNfFalwz3JPKYrP4v7gSctiMjcZVi','ARTIST','2022-09-03 00:13:20.668','2022-09-03 00:20:37.828',403,NULL,'Jln. K.H Abdul karim, Desa Tambirejo',NULL,'\"Melukis untuk menghidupiku\"\nMuh Ilyas Ruhiyat is an award-winning artist based in Indonesia whose paintings have been exhibited nationally. Describing his works as abstract, contemporary, and impressionist, his artistic practice centers around portraiture. Through his compositions, Ruhiyat translates his feelings and emotions via the expressions of his subjects. In his artistic process, he most often employs acrylics and oils on canvas.','Demak',NULL,NULL,402,'muh-ilyas-ruhiyat',1,'CREDENTIALS','1995-11-16',NULL),
	(69,'giringwijayakusuma@gmail.com','Giring Prihatyasono','$2a$12$jZcPTcxFxt07vGdKi9wCXeALN2x7IrnmYTpGJpb7Wah1L9eAlL7z2','ARTIST','2022-10-13 04:28:43.215','2022-10-13 05:19:14.022',409,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'giring-prihatyasono',1,'CREDENTIALS',NULL,NULL),
	(70,'gondrongsekale@gmail.com','Tri Pandrong',NULL,'ARTIST','2022-10-18 08:57:45.519','2022-11-11 11:15:44.542',411,NULL,'Dsn. Jurug no32 RT01 google map : tri pandrong  ',NULL,'Tri Pamuji Wikanto AKA Tri Pandrong, graduated from painting at ISI Yogyakarta in 2009. Actively participates in joint and duo exhibitions, three solo exhibitions;  Jakarta, Yogyakarta and Melbourne.  Twice received art residency awards in Belgium and South Korea, as well as several awards at competition events.\n Since the beginning of studying art (2004), he has been interested in digital, at the end of 2005 using techniques from digital effects until now.','Yogyakarta ',NULL,NULL,444,'tri-pandrong',1,'GOOGLE','1979-12-22',NULL),
	(71,'farid_sycumbang@yahoo.com','Farid Sycumbang','$2a$12$wdEeCbLd5lrnJ4QJt3YlG.qH5NFh6M5.bDAmt0ZQ9VjYJOsWbwUg.','ARTIST','2022-10-23 05:59:13.041','2022-10-23 06:08:59.499',426,NULL,NULL,NULL,NULL,NULL,NULL,NULL,425,'farid-sycumbang',1,'CREDENTIALS',NULL,NULL),
	(72,'santosoyk90@gmail.com','S.Soneo Santoso','$2a$12$GqKQ7Xuwf71V1UtFmckgk.jXlwL44AnmJrzqCvfy5vHdfNWV6Zv7W','ARTIST','2022-10-24 09:56:15.746','2022-10-25 03:57:23.177',428,NULL,'Klajuran, gg mawar 10, Jl Godean, km 8, Sleman, Yogyakarta S',NULL,'S.Soneo Santoso lahir di Sleman , 28 maret 1977 , Lulus sarjana Seni Rupa S1 Institut Seni Indonesia Yogyakarta. Hingga sekarang aktif berpameran baik di dalam maupun di luar negeri..Beberapa penghargaan pernah diraih. Tinggal dan berkarya di Yogyakarta,Indonesia','Yogyakarta',NULL,NULL,427,'santoso-santoso',1,'GOOGLE','1977-03-28',NULL),
	(73,'fatonimakturodi@gmail.com','Fatoni Makturodi','$2a$12$UJtS2xUSWrwdHT87fDjNaOImHvVkr9a3ZPv1GsqPf36oMo9BU1pj2','ARTIST','2022-11-07 03:49:55.592','2022-11-07 04:03:10.588',435,NULL,'Bantul Yogyakarta',NULL,'Modern School of Design 1998\nISI Yogyakarta 2003','Yogyakarta',NULL,NULL,NULL,'fatoni-makturodi',1,'CREDENTIALS','1979-11-20',NULL),
	(76,'gintingta60@gmail.com','Edy Suranta Ginting','$2a$12$qVaEM6AH62OwsHFhrbA6aeGNFMkvqtTp4AdIaDg/TIgq4u552FKOW','ARTIST','2022-11-13 15:01:06.303','2022-11-13 15:07:06.346',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'edy-suranta-ginting',1,'CREDENTIALS',NULL,NULL),
	(83,'sri.pram@yahoo.com','Sri Pramono','$2a$12$/uEI1yZu4Qr2M/XH8fEWBOHEW/J2oVJ7Ghh8g1xdGenwwtFIbsRGe','ARTIST','2022-11-22 03:09:57.748','2022-11-22 03:10:28.480',NULL,NULL,NULL,NULL,NULL,'Yogyakarta',NULL,NULL,NULL,'sri-pramono',1,'CREDENTIALS',NULL,NULL),
	(84,'Irwanguntarto@yahoo.com','Irwan Guntarto','$2a$12$lAOVq1BjpMb73uZnHPb4hev/DQhj80WDPEE6ggwuC9nLzBcgT1/oC','ARTIST','2022-11-23 00:43:16.100','2022-11-25 01:43:31.957',451,NULL,'Jln godean km 4,5 .gamping sleman yogaykarta',NULL,NULL,'Yogyakarta',NULL,NULL,456,'irwan-guntarto',1,'CREDENTIALS','1978-01-12',NULL),
	(85,'aryaindratanaya@gmail.com','Indra Tanaya',NULL,NULL,'2022-12-27 13:27:27.945','2022-12-27 13:27:27.947',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'indra-tanaya',0,'GOOGLE',NULL,NULL),
	(86,'yosaramadinata@gmail.com','Yosa Rama Dinata',NULL,'COLLECTOR','2022-12-29 07:11:17.076','2022-12-29 07:11:40.813',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'yosa-rama-dinata',1,'GOOGLE',NULL,NULL),
	(87,'bagus.gigih@qoala.id','Bagus Gigih',NULL,NULL,'2022-12-29 08:25:16.388','2022-12-29 08:25:16.388',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'bagus-gigih',0,'GOOGLE',NULL,NULL),
	(88,'duatmikamade@gmail.com','Duatmika Made',NULL,'ARTIST','2022-12-29 17:02:07.706','2022-12-29 17:02:45.321',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'duatmika-made',1,'GOOGLE',NULL,NULL),
	(89,'yosamelody07@gmail.com','Yosa Melody',NULL,'GALLERY','2023-01-14 17:44:09.292','2023-01-14 17:44:16.738',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'yosa-melody',1,'FACEBOOK',NULL,NULL);

/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
