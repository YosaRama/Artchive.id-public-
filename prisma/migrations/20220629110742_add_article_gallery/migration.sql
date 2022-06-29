-- CreateTable
CREATE TABLE `_ArticleToMedia` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ArticleToMedia_AB_unique`(`A`, `B`),
    INDEX `_ArticleToMedia_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_ArticleToMedia` ADD CONSTRAINT `_ArticleToMedia_A_fkey` FOREIGN KEY (`A`) REFERENCES `article`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ArticleToMedia` ADD CONSTRAINT `_ArticleToMedia_B_fkey` FOREIGN KEY (`B`) REFERENCES `media`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
