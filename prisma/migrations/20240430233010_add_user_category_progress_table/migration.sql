/*
  Warnings:

  - Added the required column `category_id` to the `user_course_content_progress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `course_id` to the `user_course_content_progress` table without a default value. This is not possible if the table is not empty.
  - Made the column `user_id` on table `user_course_content_progress` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `user_subscriptions` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "user_course_content_progress" ADD COLUMN     "category_id" INTEGER NOT NULL,
ADD COLUMN     "course_id" INTEGER NOT NULL,
ALTER COLUMN "user_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "user_subscriptions" ALTER COLUMN "user_id" SET NOT NULL;

-- CreateTable
CREATE TABLE "user_category_progress" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "category_id" INTEGER NOT NULL,
    "is_complete" BOOLEAN NOT NULL,
    "certificate_url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_category_progress_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_category_progress" ADD CONSTRAINT "user_category_progress_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
