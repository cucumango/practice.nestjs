-- CreateTable
CREATE TABLE "user" (
    "index" SERIAL NOT NULL,
    "id" VARCHAR(20) NOT NULL,
    "password" VARCHAR(40) NOT NULL,
    "type" VARCHAR(10) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("index")
);

-- CreateTable
CREATE TABLE "post" (
    "index" SERIAL NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "post_pkey" PRIMARY KEY ("index")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
