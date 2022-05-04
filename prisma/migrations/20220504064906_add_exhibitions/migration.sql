-- CreateTable
CREATE TABLE `exhibition` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` TEXT NOT NULL,
    `slug` TEXT NOT NULL,
    `description` TEXT NOT NULL,
    `short_description` TEXT NULL,
    `start_date` DATETIME(3) NOT NULL,
    `end_date` DATETIME(3) NOT NULL,
    `organized_by` TEXT NOT NULL,
    `address` TEXT NULL,
    `lat` VARCHAR(191) NULL,
    `lng` VARCHAR(191) NULL,
    `start_time` TEXT NULL,
    `end_time` TEXT NULL,
    `catalogue_link` TEXT NULL,
    `thumbnail_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `created_by_id` INTEGER NOT NULL,
    `updated_at` DATETIME(3) NULL,
    `updated_by_id` INTEGER NULL,

    UNIQUE INDEX `exhibition_thumbnail_id_key`(`thumbnail_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `artists_on_exhibitions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `exhibition_id` INTEGER NOT NULL,
    `user_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `artworks_on_exhibitions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `artwork_id` INTEGER NOT NULL,
    `exhibition_id` INTEGER NOT NULL,
    `exhibition_price` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ArtworkToArtworksOnExhibitions` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ArtworkToArtworksOnExhibitions_AB_unique`(`A`, `B`),
    INDEX `_ArtworkToArtworksOnExhibitions_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_exhibition_media_gallery` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_exhibition_media_gallery_AB_unique`(`A`, `B`),
    INDEX `_exhibition_media_gallery_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ArtistsOnExhibitionsToExhibition` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ArtistsOnExhibitionsToExhibition_AB_unique`(`A`, `B`),
    INDEX `_ArtistsOnExhibitionsToExhibition_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ArtistsOnExhibitionsToUser` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ArtistsOnExhibitionsToUser_AB_unique`(`A`, `B`),
    INDEX `_ArtistsOnExhibitionsToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ArtworksOnExhibitionsToExhibition` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ArtworksOnExhibitionsToExhibition_AB_unique`(`A`, `B`),
    INDEX `_ArtworksOnExhibitionsToExhibition_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `exhibition` ADD CONSTRAINT `exhibition_created_by_id_fkey` FOREIGN KEY (`created_by_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `exhibition` ADD CONSTRAINT `exhibition_updated_by_id_fkey` FOREIGN KEY (`updated_by_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `exhibition` ADD CONSTRAINT `exhibition_thumbnail_id_fkey` FOREIGN KEY (`thumbnail_id`) REFERENCES `media`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ArtworkToArtworksOnExhibitions` ADD CONSTRAINT `_ArtworkToArtworksOnExhibitions_A_fkey` FOREIGN KEY (`A`) REFERENCES `artwork`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ArtworkToArtworksOnExhibitions` ADD CONSTRAINT `_ArtworkToArtworksOnExhibitions_B_fkey` FOREIGN KEY (`B`) REFERENCES `artworks_on_exhibitions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_exhibition_media_gallery` ADD CONSTRAINT `_exhibition_media_gallery_A_fkey` FOREIGN KEY (`A`) REFERENCES `exhibition`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_exhibition_media_gallery` ADD CONSTRAINT `_exhibition_media_gallery_B_fkey` FOREIGN KEY (`B`) REFERENCES `media`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ArtistsOnExhibitionsToExhibition` ADD CONSTRAINT `_ArtistsOnExhibitionsToExhibition_A_fkey` FOREIGN KEY (`A`) REFERENCES `artists_on_exhibitions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ArtistsOnExhibitionsToExhibition` ADD CONSTRAINT `_ArtistsOnExhibitionsToExhibition_B_fkey` FOREIGN KEY (`B`) REFERENCES `exhibition`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ArtistsOnExhibitionsToUser` ADD CONSTRAINT `_ArtistsOnExhibitionsToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `artists_on_exhibitions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ArtistsOnExhibitionsToUser` ADD CONSTRAINT `_ArtistsOnExhibitionsToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ArtworksOnExhibitionsToExhibition` ADD CONSTRAINT `_ArtworksOnExhibitionsToExhibition_A_fkey` FOREIGN KEY (`A`) REFERENCES `artworks_on_exhibitions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ArtworksOnExhibitionsToExhibition` ADD CONSTRAINT `_ArtworksOnExhibitionsToExhibition_B_fkey` FOREIGN KEY (`B`) REFERENCES `exhibition`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
