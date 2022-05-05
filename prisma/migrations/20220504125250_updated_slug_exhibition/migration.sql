/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `exhibition` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `exhibition` MODIFY `slug` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `exhibition_slug_key` ON `exhibition`(`slug`);
