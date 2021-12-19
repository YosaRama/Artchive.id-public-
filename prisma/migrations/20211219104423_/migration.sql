-- CreateTable
CREATE TABLE `genre` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `media` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `parent_id` INTEGER NOT NULL,
    `dimension` ENUM('MAIN', 'LARGE', 'MEDIUM', 'SMALL') NOT NULL DEFAULT 'MAIN',
    `filename` TEXT NOT NULL,
    `mimetype` VARCHAR(191) NOT NULL,
    `url` TEXT NOT NULL,
    `title` TEXT NULL,
    `description` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ArtworkToGenre` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ArtworkToGenre_AB_unique`(`A`, `B`),
    INDEX `_ArtworkToGenre_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ArtworkToMedia` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ArtworkToMedia_AB_unique`(`A`, `B`),
    INDEX `_ArtworkToMedia_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_ArtworkToGenre` ADD FOREIGN KEY (`A`) REFERENCES `artwork`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ArtworkToGenre` ADD FOREIGN KEY (`B`) REFERENCES `genre`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ArtworkToMedia` ADD FOREIGN KEY (`A`) REFERENCES `artwork`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ArtworkToMedia` ADD FOREIGN KEY (`B`) REFERENCES `media`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
