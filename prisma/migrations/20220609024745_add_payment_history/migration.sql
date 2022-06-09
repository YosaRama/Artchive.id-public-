-- CreateTable
CREATE TABLE `PaymentHistory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `artwork_id` INTEGER NOT NULL,
    `transaction_time` TEXT NOT NULL,
    `transaction_status` VARCHAR(191) NOT NULL,
    `transaction_id` VARCHAR(191) NOT NULL,
    `signature_key` VARCHAR(191) NOT NULL,
    `payment_type` VARCHAR(191) NOT NULL,
    `order_id` VARCHAR(191) NOT NULL,
    `gross_amount` VARCHAR(191) NOT NULL,
    `fraud_status` VARCHAR(191) NOT NULL,
    `currency` VARCHAR(191) NOT NULL,
    `merchant_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PaymentHistory` ADD CONSTRAINT `PaymentHistory_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PaymentHistory` ADD CONSTRAINT `PaymentHistory_artwork_id_fkey` FOREIGN KEY (`artwork_id`) REFERENCES `artwork`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;