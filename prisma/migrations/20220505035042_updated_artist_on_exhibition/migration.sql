/*
  Warnings:

  - The primary key for the `artists_on_exhibitions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `artists_on_exhibitions` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[exhibition_id,user_id]` on the table `artists_on_exhibitions` will be added. If there are existing duplicate values, this will fail.
  - Made the column `user_id` on table `artists_on_exhibitions` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `artists_on_exhibitions` DROP FOREIGN KEY `artists_on_exhibitions_user_id_fkey`;

-- AlterTable
ALTER TABLE `artists_on_exhibitions` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    MODIFY `user_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`exhibition_id`, `user_id`);

-- CreateIndex
CREATE UNIQUE INDEX `artists_on_exhibitions_exhibition_id_user_id_key` ON `artists_on_exhibitions`(`exhibition_id`, `user_id`);

-- AddForeignKey
ALTER TABLE `artists_on_exhibitions` ADD CONSTRAINT `artists_on_exhibitions_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
