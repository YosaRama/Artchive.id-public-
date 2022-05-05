/*
  Warnings:

  - The primary key for the `artworks_on_exhibitions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `artworks_on_exhibitions` table. All the data in the column will be lost.
  - You are about to drop the `_ArtworkToArtworksOnExhibitions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ArtworksOnExhibitionsToExhibition` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[exhibition_id,artwork_id]` on the table `artworks_on_exhibitions` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `_ArtworkToArtworksOnExhibitions` DROP FOREIGN KEY `_ArtworkToArtworksOnExhibitions_A_fkey`;

-- DropForeignKey
ALTER TABLE `_ArtworkToArtworksOnExhibitions` DROP FOREIGN KEY `_ArtworkToArtworksOnExhibitions_B_fkey`;

-- DropForeignKey
ALTER TABLE `_ArtworksOnExhibitionsToExhibition` DROP FOREIGN KEY `_ArtworksOnExhibitionsToExhibition_A_fkey`;

-- DropForeignKey
ALTER TABLE `_ArtworksOnExhibitionsToExhibition` DROP FOREIGN KEY `_ArtworksOnExhibitionsToExhibition_B_fkey`;

-- AlterTable
ALTER TABLE `artworks_on_exhibitions` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD PRIMARY KEY (`artwork_id`, `exhibition_id`);

-- DropTable
DROP TABLE `_ArtworkToArtworksOnExhibitions`;

-- DropTable
DROP TABLE `_ArtworksOnExhibitionsToExhibition`;

-- CreateIndex
CREATE UNIQUE INDEX `artworks_on_exhibitions_exhibition_id_artwork_id_key` ON `artworks_on_exhibitions`(`exhibition_id`, `artwork_id`);

-- AddForeignKey
ALTER TABLE `artworks_on_exhibitions` ADD CONSTRAINT `artworks_on_exhibitions_artwork_id_fkey` FOREIGN KEY (`artwork_id`) REFERENCES `artwork`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `artworks_on_exhibitions` ADD CONSTRAINT `artworks_on_exhibitions_exhibition_id_fkey` FOREIGN KEY (`exhibition_id`) REFERENCES `exhibition`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
