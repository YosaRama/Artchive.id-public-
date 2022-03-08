/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `genre` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `genre_title_key` ON `genre`(`title`);