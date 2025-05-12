/*
  Warnings:

  - You are about to drop the column `sell` on the `Submission` table. All the data in the column will be lost.
  - Added the required column `find` to the `Submission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medium` to the `Submission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Submission" DROP COLUMN "sell",
ADD COLUMN     "find" TEXT NOT NULL,
ADD COLUMN     "medium" TEXT NOT NULL;
