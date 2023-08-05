-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `full_name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NULL,
    `phone_number` VARCHAR(191) NULL,
    `profile_img_id` INTEGER NULL,
    `signature_id` INTEGER NULL,
    `banner_id` INTEGER NULL,
    `instagram_url` VARCHAR(191) NULL,
    `facebook_url` VARCHAR(191) NULL,
    `city` VARCHAR(191) NULL,
    `billing_address` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `phone_number` VARCHAR(191) NULL,
    `biography` TEXT NULL,
    `birth_date` DATE NULL,
    `role` ENUM('ARTIST', 'GALLERY', 'ADMIN', 'COLLECTOR') NULL,
    `otp_code` VARCHAR(191) NULL,
    `otp_expired_date` DATETIME(3) NULL,
    `provider` ENUM('CREDENTIALS', 'PHONE_NUMBER', 'GOOGLE', 'FACEBOOK') NOT NULL,
    `status` BOOLEAN NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    UNIQUE INDEX `user_email_key`(`email`),
    UNIQUE INDEX `user_slug_key`(`slug`),
    UNIQUE INDEX `user_phone_number_key`(`phone_number`),
    UNIQUE INDEX `user_profile_img_id_key`(`profile_img_id`),
    UNIQUE INDEX `user_signature_id_key`(`signature_id`),
    UNIQUE INDEX `user_banner_id_key`(`banner_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `artwork` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sku` VARCHAR(191) NOT NULL,
    `artist_id` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `material` VARCHAR(191) NULL,
    `description` TEXT NOT NULL,
    `type` ENUM('UNIQUE', 'EDITION') NOT NULL,
    `media_cover_id` INTEGER NOT NULL,
    `height` INTEGER NOT NULL,
    `width` INTEGER NOT NULL,
    `price` VARCHAR(191) NOT NULL,
    `markup_price` VARCHAR(191) NOT NULL DEFAULT '0',
    `status` ENUM('SOLD', 'DRAFT', 'PUBLISH', 'EDIT', 'EXHIBITION') NOT NULL,
    `approve` BOOLEAN NOT NULL,
    `isDeleted` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `curatorial_pick` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `artwork_sku_key`(`sku`),
    UNIQUE INDEX `artwork_slug_key`(`slug`),
    INDEX `artwork_artist_id_idx`(`artist_id`),
    INDEX `artwork_media_cover_id_idx`(`media_cover_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `genre` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `description` TEXT NULL,

    UNIQUE INDEX `genre_title_key`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `media` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `filename` TEXT NOT NULL,
    `mimetype` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `medium_url` VARCHAR(191) NULL,
    `title` TEXT NULL,
    `description` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,
    `upload_by` INTEGER NULL,

    UNIQUE INDEX `media_url_key`(`url`),
    UNIQUE INDEX `media_medium_url_key`(`medium_url`),
    INDEX `media_upload_by_idx`(`upload_by`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cart` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `artwork_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,
    `status` BOOLEAN NOT NULL DEFAULT false,

    INDEX `cart_user_id_idx`(`user_id`),
    INDEX `cart_artwork_id_idx`(`artwork_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `certificate` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `artworkId` INTEGER NOT NULL,
    `serial_no` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `type` ENUM('MAIN', 'EDITION') NOT NULL,
    `cretedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `certificate_userId_idx`(`userId`),
    INDEX `certificate_artworkId_idx`(`artworkId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `article` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` TEXT NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `short_description` TEXT NULL,
    `content` TEXT NOT NULL,
    `status` ENUM('PUBLISHED', 'DRAFT') NOT NULL DEFAULT 'DRAFT',
    `author` TEXT NOT NULL,
    `thumbnail_id` INTEGER NOT NULL,
    `created_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_id` INTEGER NULL,
    `updated_at` DATETIME(3) NULL,

    UNIQUE INDEX `article_slug_key`(`slug`),
    INDEX `article_thumbnail_id_idx`(`thumbnail_id`),
    INDEX `article_created_id_idx`(`created_id`),
    INDEX `article_updated_id_idx`(`updated_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `exhibition` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` TEXT NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `short_description` TEXT NULL,
    `start_date` DATETIME(3) NOT NULL,
    `end_date` DATETIME(3) NOT NULL,
    `organized_by` TEXT NOT NULL,
    `address` TEXT NULL,
    `lat` VARCHAR(191) NULL,
    `lng` VARCHAR(191) NULL,
    `start_time` TEXT NULL,
    `end_time` TEXT NULL,
    `catalogue_link` TEXT NULL,
    `thumbnail_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `created_by` INTEGER NOT NULL,
    `updated_at` DATETIME(3) NULL,
    `updated_by` INTEGER NULL,

    UNIQUE INDEX `exhibition_slug_key`(`slug`),
    UNIQUE INDEX `exhibition_thumbnail_id_key`(`thumbnail_id`),
    INDEX `exhibition_created_by_idx`(`created_by`),
    INDEX `exhibition_updated_by_idx`(`updated_by`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `artists_on_exhibitions` (
    `exhibition_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,

    INDEX `artists_on_exhibitions_user_id_idx`(`user_id`),
    UNIQUE INDEX `artists_on_exhibitions_exhibition_id_user_id_key`(`exhibition_id`, `user_id`),
    PRIMARY KEY (`exhibition_id`, `user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `artworks_on_exhibitions` (
    `artwork_id` INTEGER NOT NULL,
    `exhibition_id` INTEGER NOT NULL,
    `exhibition_price` TEXT NULL,

    INDEX `artworks_on_exhibitions_artwork_id_idx`(`artwork_id`),
    UNIQUE INDEX `artworks_on_exhibitions_exhibition_id_artwork_id_key`(`exhibition_id`, `artwork_id`),
    PRIMARY KEY (`artwork_id`, `exhibition_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payment_history` (
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

    INDEX `payment_history_user_id_idx`(`user_id`),
    INDEX `payment_history_artwork_id_idx`(`artwork_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order_id` VARCHAR(191) NOT NULL,
    `user_id` INTEGER NOT NULL,
    `status` ENUM('PENDING', 'PROCEED', 'SHIPPING', 'SUCCESS') NOT NULL DEFAULT 'PENDING',
    `fraud` ENUM('SETTLEMENT', 'REFUND', 'CANCEL', 'PENDING') NOT NULL DEFAULT 'PENDING',
    `total_amount` VARCHAR(191) NOT NULL,
    `transaction_time` DATETIME(3) NOT NULL,
    `shipping_address` VARCHAR(191) NOT NULL,
    `shipping_city` VARCHAR(191) NOT NULL,
    `shipping_country` VARCHAR(191) NOT NULL,
    `shipping_zip_code` VARCHAR(191) NOT NULL,
    `recipient_name` VARCHAR(191) NOT NULL,
    `recipient_phone_number` VARCHAR(191) NOT NULL,
    `notes` VARCHAR(191) NULL,
    `transaction_id` VARCHAR(191) NULL,

    UNIQUE INDEX `order_order_id_key`(`order_id`),
    INDEX `order_user_id_idx`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ArtworkToGenre` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ArtworkToGenre_AB_unique`(`A`, `B`),
    INDEX `_ArtworkToGenre_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ArtworkToMedia` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ArtworkToMedia_AB_unique`(`A`, `B`),
    INDEX `_ArtworkToMedia_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ArtworkToOrder` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ArtworkToOrder_AB_unique`(`A`, `B`),
    INDEX `_ArtworkToOrder_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ArticleToMedia` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ArticleToMedia_AB_unique`(`A`, `B`),
    INDEX `_ArticleToMedia_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_exhibition_media_gallery` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_exhibition_media_gallery_AB_unique`(`A`, `B`),
    INDEX `_exhibition_media_gallery_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
