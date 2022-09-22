/*
  Warnings:

  - The values [SUCCEESS] on the enum `order_status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `order` MODIFY `status` ENUM('PENDING', 'PROCEED', 'SHIPPING', 'SUCCESS') NOT NULL DEFAULT 'PENDING';
