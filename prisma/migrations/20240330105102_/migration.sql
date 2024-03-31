-- AlterTable
ALTER TABLE "post" ADD COLUMN     "type" TEXT NOT NULL DEFAULT 'public';

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "type" SET DEFAULT 'user',
ALTER COLUMN "type" SET DATA TYPE TEXT;
