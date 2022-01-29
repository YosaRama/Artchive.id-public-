/*
  Warnings:

  - A unique constraint covering the columns `[banner_id]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `banner_id` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `user_banner_id_key` ON `user`(`banner_id`);

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_banner_id_fkey` FOREIGN KEY (`banner_id`) REFERENCES `media`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
