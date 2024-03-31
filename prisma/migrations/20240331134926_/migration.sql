/*
  Warnings:

  - The `type` column on the `post` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "PostType" AS ENUM ('PUBLIC', 'PRIVATE');

-- AlterTable
ALTER TABLE "post" DROP COLUMN "type",
ADD COLUMN     "type" "PostType" NOT NULL DEFAULT 'PUBLIC';
