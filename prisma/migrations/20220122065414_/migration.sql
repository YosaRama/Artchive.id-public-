-- DropForeignKey
ALTER TABLE `cart` DROP FOREIGN KEY `cart_artwork_id_fkey`;

-- DropForeignKey
ALTER TABLE `cart` DROP FOREIGN KEY `cart_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `certificate` DROP FOREIGN KEY `certificate_artworkId_fkey`;

-- DropForeignKey
ALTER TABLE `certificate` DROP FOREIGN KEY `certificate_userId_fkey`;

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

-- AddForeignKey
ALTER TABLE `cart` ADD CONSTRAINT `cart_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cart` ADD CONSTRAINT `cart_artwork_id_fkey` FOREIGN KEY (`artwork_id`) REFERENCES `artwork`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order` ADD CONSTRAINT `order_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order` ADD CONSTRAINT `order_artwork_id_fkey` FOREIGN KEY (`artwork_id`) REFERENCES `artwork`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order` ADD CONSTRAINT `order_cart_id_fkey` FOREIGN KEY (`cart_id`) REFERENCES `cart`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `collection` ADD CONSTRAINT `collection_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `collection` ADD CONSTRAINT `collection_artwork_id_fkey` FOREIGN KEY (`artwork_id`) REFERENCES `artwork`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `collection` ADD CONSTRAINT `collection_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `order`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `certificate` ADD CONSTRAINT `certificate_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `certificate` ADD CONSTRAINT `certificate_artworkId_fkey` FOREIGN KEY (`artworkId`) REFERENCES `artwork`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
