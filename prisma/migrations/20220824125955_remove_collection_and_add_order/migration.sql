/*
  Warnings:

  - You are about to drop the column `artwork_id` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `cart_id` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `order` table. All the data in the column will be lost.
  - You are about to drop the `collection` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `recipent_name` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recipent_phone_number` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shipping_city` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shipping_country` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shipping_zip_code` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_amount` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transaction_time` to the `order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `collection` DROP FOREIGN KEY `collection_artwork_id_fkey`;

-- DropForeignKey
ALTER TABLE `collection` DROP FOREIGN KEY `collection_order_id_fkey`;

-- DropForeignKey
ALTER TABLE `collection` DROP FOREIGN KEY `collection_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `order_artwork_id_fkey`;

-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `order_cart_id_fkey`;

-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `order_user_id_fkey`;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `artwork_id`,
    DROP COLUMN `cart_id`,
    DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `fraud` ENUM('SETTLEMENT', 'REFUND', 'CANCEL', 'PENDING') NOT NULL DEFAULT 'PENDING',
    ADD COLUMN `recipent_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `recipent_phone_number` VARCHAR(191) NOT NULL,
    ADD COLUMN `shipping_city` VARCHAR(191) NOT NULL,
    ADD COLUMN `shipping_country` VARCHAR(191) NOT NULL,
    ADD COLUMN `shipping_zip_code` VARCHAR(191) NOT NULL,
    ADD COLUMN `status` ENUM('PENDING', 'PROCEED', 'SHIPPING', 'SUCCEESS') NOT NULL DEFAULT 'PENDING',
    ADD COLUMN `total_amount` VARCHAR(191) NOT NULL,
    ADD COLUMN `transaction_time` DATETIME(3) NOT NULL,
    MODIFY `shipping_address` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `collection`;

-- CreateTable
CREATE TABLE `_ArtworkToOrder` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ArtworkToOrder_AB_unique`(`A`, `B`),
    INDEX `_ArtworkToOrder_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `order` ADD CONSTRAINT `order_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ArtworkToOrder` ADD CONSTRAINT `_ArtworkToOrder_A_fkey` FOREIGN KEY (`A`) REFERENCES `artwork`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ArtworkToOrder` ADD CONSTRAINT `_ArtworkToOrder_B_fkey` FOREIGN KEY (`B`) REFERENCES `order`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
