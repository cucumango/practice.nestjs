/*
  Warnings:

  - The `type` column on the `user` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('USER', 'MANAGER');

-- AlterTable
ALTER TABLE "user" DROP COLUMN "type",
ADD COLUMN     "type" "UserType" NOT NULL DEFAULT 'USER';
