/*
  Warnings:

  - The primary key for the `post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `index` on the `post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "post" DROP CONSTRAINT "post_pkey",
DROP COLUMN "index",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "post_pkey" PRIMARY KEY ("id");
