-- DropForeignKey
ALTER TABLE `artwork` DROP FOREIGN KEY `artwork_artist_id_fkey`;

-- DropForeignKey
ALTER TABLE `artwork` DROP FOREIGN KEY `artwork_media_cover_id_fkey`;

-- AddForeignKey
ALTER TABLE `artwork` ADD CONSTRAINT `artwork_artist_id_fkey` FOREIGN KEY (`artist_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `artwork` ADD CONSTRAINT `artwork_media_cover_id_fkey` FOREIGN KEY (`media_cover_id`) REFERENCES `media`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
