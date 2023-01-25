/*
  Warnings:

  - Added the required column `description` to the `genre` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `genre` ADD COLUMN `description` TEXT NOT NULL;
