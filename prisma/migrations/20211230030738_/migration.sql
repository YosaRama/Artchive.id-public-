/*
  Warnings:

  - Added the required column `media_cover_id` to the `artwork` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `artwork` ADD COLUMN `media_cover_id` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `certificate` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `artworkId` INTEGER NOT NULL,
    `cretedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `artwork` ADD CONSTRAINT `artwork_media_cover_id_fkey` FOREIGN KEY (`media_cover_id`) REFERENCES `media`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `certificate` ADD CONSTRAINT `certificate_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `certificate` ADD CONSTRAINT `certificate_artworkId_fkey` FOREIGN KEY (`artworkId`) REFERENCES `artwork`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
