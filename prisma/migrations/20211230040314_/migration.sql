/*
  Warnings:

  - Added the required column `serial_no` to the `certificate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `certificate` ADD COLUMN `serial_no` VARCHAR(191) NOT NULL;
