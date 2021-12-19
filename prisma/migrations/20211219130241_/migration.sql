/*
  Warnings:

  - Added the required column `order_id` to the `collection` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `collection` ADD COLUMN `order_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `collection` ADD CONSTRAINT `collection_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
