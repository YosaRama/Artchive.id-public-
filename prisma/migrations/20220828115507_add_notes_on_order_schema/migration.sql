/*
  Warnings:

  - Added the required column `notes` to the `order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order` ADD COLUMN `notes` VARCHAR(191) NOT NULL;
