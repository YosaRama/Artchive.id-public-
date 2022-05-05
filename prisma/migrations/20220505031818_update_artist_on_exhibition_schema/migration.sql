/*
  Warnings:

  - You are about to drop the `_ArtistsOnExhibitionsToExhibition` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ArtistsOnExhibitionsToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_ArtistsOnExhibitionsToExhibition` DROP FOREIGN KEY `_ArtistsOnExhibitionsToExhibition_A_fkey`;

-- DropForeignKey
ALTER TABLE `_ArtistsOnExhibitionsToExhibition` DROP FOREIGN KEY `_ArtistsOnExhibitionsToExhibition_B_fkey`;

-- DropForeignKey
ALTER TABLE `_ArtistsOnExhibitionsToUser` DROP FOREIGN KEY `_ArtistsOnExhibitionsToUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_ArtistsOnExhibitionsToUser` DROP FOREIGN KEY `_ArtistsOnExhibitionsToUser_B_fkey`;

-- DropTable
DROP TABLE `_ArtistsOnExhibitionsToExhibition`;

-- DropTable
DROP TABLE `_ArtistsOnExhibitionsToUser`;

-- AddForeignKey
ALTER TABLE `artists_on_exhibitions` ADD CONSTRAINT `artists_on_exhibitions_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `artists_on_exhibitions` ADD CONSTRAINT `artists_on_exhibitions_exhibition_id_fkey` FOREIGN KEY (`exhibition_id`) REFERENCES `exhibition`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
