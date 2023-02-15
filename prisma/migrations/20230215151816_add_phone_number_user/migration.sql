/*
  Warnings:

  - A unique constraint covering the columns `[phone_number]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `phone_number` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `user_phone_number_key` ON `user`(`phone_number`);
