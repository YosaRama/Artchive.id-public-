/*
  Warnings:

  - You are about to drop the column `created_by_id` on the `exhibition` table. All the data in the column will be lost.
  - You are about to drop the column `updated_by_id` on the `exhibition` table. All the data in the column will be lost.
  - Added the required column `created_by` to the `exhibition` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `exhibition` DROP FOREIGN KEY `exhibition_created_by_id_fkey`;

-- DropForeignKey
ALTER TABLE `exhibition` DROP FOREIGN KEY `exhibition_updated_by_id_fkey`;

-- AlterTable
ALTER TABLE `exhibition` DROP COLUMN `created_by_id`,
    DROP COLUMN `updated_by_id`,
    ADD COLUMN `created_by` INTEGER NOT NULL,
    ADD COLUMN `updated_by` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `exhibition` ADD CONSTRAINT `exhibition_created_by_fkey` FOREIGN KEY (`created_by`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `exhibition` ADD CONSTRAINT `exhibition_updated_by_fkey` FOREIGN KEY (`updated_by`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
