/*
  Warnings:

  - You are about to drop the `bootcamps` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `course_categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `course_mentor_mappings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `course_module_lectures` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `course_modules` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `course_student_mappings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `courses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `duration_units` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mentors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `student_course_lecture_mappings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `students` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `subscriptions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "bootcamps" DROP CONSTRAINT "bootcamps_mentor_id_fkey";

-- DropForeignKey
ALTER TABLE "course_mentor_mappings" DROP CONSTRAINT "public_course_mentor_mapping_course_id_fkey";

-- DropForeignKey
ALTER TABLE "course_mentor_mappings" DROP CONSTRAINT "public_course_mentor_mapping_mentor_id_fkey";

-- DropForeignKey
ALTER TABLE "course_module_lectures" DROP CONSTRAINT "public_course_section_lecture_course_section_id_fkey";

-- DropForeignKey
ALTER TABLE "course_modules" DROP CONSTRAINT "public_course_sections_course_id_fkey";

-- DropForeignKey
ALTER TABLE "course_student_mappings" DROP CONSTRAINT "public_course_student_mapping_course_id_fkey";

-- DropForeignKey
ALTER TABLE "course_student_mappings" DROP CONSTRAINT "public_course_student_mapping_student_id_fkey";

-- DropForeignKey
ALTER TABLE "courses" DROP CONSTRAINT "courses_category_id_fkey";

-- DropForeignKey
ALTER TABLE "courses" DROP CONSTRAINT "public_courses_duration_unit_id_fkey";

-- DropForeignKey
ALTER TABLE "student_course_lecture_mappings" DROP CONSTRAINT "public_student_course_lecture_mappings_lecture_id_fkey";

-- DropForeignKey
ALTER TABLE "student_course_lecture_mappings" DROP CONSTRAINT "public_student_course_lecture_mappings_student_id_fkey";

-- DropForeignKey
ALTER TABLE "students" DROP CONSTRAINT "public_students_user_id_fkey";

-- DropTable
DROP TABLE "bootcamps";

-- DropTable
DROP TABLE "course_categories";

-- DropTable
DROP TABLE "course_mentor_mappings";

-- DropTable
DROP TABLE "course_module_lectures";

-- DropTable
DROP TABLE "course_modules";

-- DropTable
DROP TABLE "course_student_mappings";

-- DropTable
DROP TABLE "courses";

-- DropTable
DROP TABLE "duration_units";

-- DropTable
DROP TABLE "mentors";

-- DropTable
DROP TABLE "student_course_lecture_mappings";

-- DropTable
DROP TABLE "students";

-- DropTable
DROP TABLE "subscriptions";
