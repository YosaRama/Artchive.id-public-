/*
  Warnings:

  - You are about to drop the column `user_id` on the `media` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `media` DROP FOREIGN KEY `media_user_id_fkey`;

-- AlterTable
ALTER TABLE `media` DROP COLUMN `user_id`,
    ADD COLUMN `upload_by` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `media` ADD CONSTRAINT `media_upload_by_fkey` FOREIGN KEY (`upload_by`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
