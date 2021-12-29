/*
  Warnings:

  - A unique constraint covering the columns `[profile_img_id]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[signature_id]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `profile_img_id` INTEGER NULL,
    ADD COLUMN `signature_id` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `user_profile_img_id_key` ON `user`(`profile_img_id`);

-- CreateIndex
CREATE UNIQUE INDEX `user_signature_id_key` ON `user`(`signature_id`);

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_profile_img_id_fkey` FOREIGN KEY (`profile_img_id`) REFERENCES `media`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_signature_id_fkey` FOREIGN KEY (`signature_id`) REFERENCES `media`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
