/*
  Warnings:

  - You are about to alter the column `material` on the `artwork` table. The data in that column could be lost. The data in that column will be cast from `Enum("artwork_material")` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `artwork` MODIFY `material` VARCHAR(191) NULL;
