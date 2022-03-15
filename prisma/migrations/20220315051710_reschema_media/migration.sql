/*
  Warnings:

  - You are about to drop the column `dimension` on the `media` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[medium_url]` on the table `media` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `media` DROP COLUMN `dimension`,
    ADD COLUMN `medium_url` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `media_medium_url_key` ON `media`(`medium_url`);
