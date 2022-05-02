/*
  Warnings:

  - Added the required column `thumbnail_id` to the `article` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `article` ADD COLUMN `thumbnail_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `article` ADD CONSTRAINT `article_thumbnail_id_fkey` FOREIGN KEY (`thumbnail_id`) REFERENCES `media`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
