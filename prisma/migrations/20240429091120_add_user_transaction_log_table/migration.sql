-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "user_transaction_log" (
    "id" TEXT NOT NULL,
    "user_id" TEXT,
    "product_id" INTEGER NOT NULL,
    "product_name" TEXT NOT NULL,
    "type" "TransactionType" NOT NULL,
    "amount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_transaction_log_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_transaction_log" ADD CONSTRAINT "user_transaction_log_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
