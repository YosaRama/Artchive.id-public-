-- AlterTable
ALTER TABLE `artwork` MODIFY `status` ENUM('SOLD', 'DRAFT', 'PUBLISH', 'EDIT') NOT NULL;
