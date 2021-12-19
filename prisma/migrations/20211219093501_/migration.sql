/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `full_name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('ARTIST', 'GALLERY', 'ADMIN', 'COLLECTOR') NOT NULL,

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `artwork` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sku` VARCHAR(191) NOT NULL,
    `artist_id` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `material` VARCHAR(191) NULL,
    `description` VARCHAR(191) NOT NULL,
    `type` ENUM('UNIQUE', 'EDITION') NOT NULL,
    `height` INTEGER NOT NULL,
    `length` INTEGER NOT NULL,
    `price` VARCHAR(191) NOT NULL,
    `status` ENUM('SOLD', 'DRAFT', 'PUBLISH') NOT NULL,
    `approve` BOOLEAN NOT NULL,

    UNIQUE INDEX `artwork_sku_key`(`sku`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `artwork` ADD CONSTRAINT `artwork_artist_id_fkey` FOREIGN KEY (`artist_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
