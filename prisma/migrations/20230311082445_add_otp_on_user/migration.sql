-- AlterTable
ALTER TABLE `user` ADD COLUMN `otp_code` VARCHAR(191) NULL,
    ADD COLUMN `otp_expired_date` DATETIME(3) NULL;
