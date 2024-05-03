/*
  Warnings:

  - Made the column `email` on table `Email` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Email" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "authorId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    CONSTRAINT "Email_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Email" ("authorId", "email", "id") SELECT "authorId", "email", "id" FROM "Email";
DROP TABLE "Email";
ALTER TABLE "new_Email" RENAME TO "Email";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
