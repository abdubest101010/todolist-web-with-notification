/*
  Warnings:

  - You are about to alter the column `telegramChatId` on the `task` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Made the column `description` on table `task` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `task` MODIFY `description` VARCHAR(191) NOT NULL,
    MODIFY `telegramChatId` INTEGER NULL;
