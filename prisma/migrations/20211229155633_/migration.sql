/*
  Warnings:

  - You are about to drop the column `length` on the `artwork` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[url]` on the table `media` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `width` to the `artwork` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `artwork` DROP COLUMN `length`,
    ADD COLUMN `width` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `media` MODIFY `url` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `media_url_key` ON `media`(`url`);
