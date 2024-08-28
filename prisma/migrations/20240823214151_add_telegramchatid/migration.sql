-- AlterTable
ALTER TABLE `task` ADD COLUMN `telegramChatId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `telegramChatId` VARCHAR(191) NULL;
