/*
  Warnings:

  - You are about to drop the column `telegramChatId` on the `task` table. All the data in the column will be lost.
  - You are about to drop the column `telegramChatId` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `task` DROP COLUMN `telegramChatId`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `telegramChatId`;
