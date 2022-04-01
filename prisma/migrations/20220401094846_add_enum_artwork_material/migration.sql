/*
  Warnings:

  - Made the column `material` on table `artwork` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `artwork` MODIFY `material` ENUM('WATER_COLOUR', 'ACRYLIC_ON_CANVAS', 'ACRYLIC_ON_PAPER', 'OIL_ON_CANVAS', 'MIXED_MEDIA', 'OTHER') NOT NULL;
