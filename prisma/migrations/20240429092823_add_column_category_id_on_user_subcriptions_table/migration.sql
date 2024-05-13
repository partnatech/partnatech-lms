/*
  Warnings:

  - Added the required column `category_id` to the `user_subscriptions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user_subscriptions" ADD COLUMN     "category_id" INTEGER NOT NULL;
