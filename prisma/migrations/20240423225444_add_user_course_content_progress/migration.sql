-- CreateTable
CREATE TABLE "user_course_content_progress" (
    "id" TEXT NOT NULL,
    "user_id" TEXT,
    "course_content_id" INTEGER NOT NULL,
    "is_complete" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_course_content_progress_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_course_content_progress" ADD CONSTRAINT "user_course_content_progress_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
