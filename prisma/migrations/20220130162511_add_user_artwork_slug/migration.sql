/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `artwork` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `artwork` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `artwork` ADD COLUMN `slug` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `slug` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `artwork_slug_key` ON `artwork`(`slug`);

-- CreateIndex
CREATE UNIQUE INDEX `user_slug_key` ON `user`(`slug`);
