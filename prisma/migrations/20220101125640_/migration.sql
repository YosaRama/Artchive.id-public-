-- AlterTable
ALTER TABLE `user` ADD COLUMN `address` VARCHAR(191) NULL,
    ADD COLUMN `billing_address` VARCHAR(191) NULL,
    ADD COLUMN `biography` VARCHAR(191) NULL,
    ADD COLUMN `city` VARCHAR(191) NULL,
    ADD COLUMN `facebook_url` VARCHAR(191) NULL,
    ADD COLUMN `instagram_url` VARCHAR(191) NULL;
