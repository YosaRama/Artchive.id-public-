-- DropForeignKey
ALTER TABLE `artists_on_exhibitions` DROP FOREIGN KEY `artists_on_exhibitions_exhibition_id_fkey`;

-- DropForeignKey
ALTER TABLE `artists_on_exhibitions` DROP FOREIGN KEY `artists_on_exhibitions_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `artworks_on_exhibitions` DROP FOREIGN KEY `artworks_on_exhibitions_artwork_id_fkey`;

-- DropForeignKey
ALTER TABLE `artworks_on_exhibitions` DROP FOREIGN KEY `artworks_on_exhibitions_exhibition_id_fkey`;

-- AddForeignKey
ALTER TABLE `artists_on_exhibitions` ADD CONSTRAINT `artists_on_exhibitions_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `artists_on_exhibitions` ADD CONSTRAINT `artists_on_exhibitions_exhibition_id_fkey` FOREIGN KEY (`exhibition_id`) REFERENCES `exhibition`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `artworks_on_exhibitions` ADD CONSTRAINT `artworks_on_exhibitions_artwork_id_fkey` FOREIGN KEY (`artwork_id`) REFERENCES `artwork`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `artworks_on_exhibitions` ADD CONSTRAINT `artworks_on_exhibitions_exhibition_id_fkey` FOREIGN KEY (`exhibition_id`) REFERENCES `exhibition`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
