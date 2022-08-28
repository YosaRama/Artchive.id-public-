/*
  Warnings:

  - You are about to drop the column `recipent_name` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `recipent_phone_number` on the `order` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[order_id]` on the table `order` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `order_id` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recipient_name` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recipient_phone_number` to the `order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order` DROP COLUMN `recipent_name`,
    DROP COLUMN `recipent_phone_number`,
    ADD COLUMN `order_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `recipient_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `recipient_phone_number` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `order_order_id_key` ON `order`(`order_id`);
