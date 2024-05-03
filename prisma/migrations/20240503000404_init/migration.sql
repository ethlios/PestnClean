-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "img" TEXT,
    "rule" TEXT,
    "address" TEXT,
    "district" TEXT,
    "Ward" TEXT,
    "city" TEXT,
    "phone" TEXT,
    "avatar" TEXT
);

-- CreateTable
CREATE TABLE "Cart" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "authorId" TEXT NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "price" INTEGER,
    "img" TEXT,
    "quantity" INTEGER,
    "code" TEXT,
    CONSTRAINT "Cart_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Email" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "authorId" TEXT NOT NULL,
    "email" TEXT,
    CONSTRAINT "Email_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "authorId" TEXT NOT NULL,
    "title" TEXT,
    "desHead" TEXT,
    "detail" TEXT,
    "price" INTEGER,
    "code" TEXT,
    "status" TEXT,
    "priceSales" INTEGER,
    "weight" TEXT,
    "expiry" TEXT,
    "new" BOOLEAN,
    "box" TEXT,
    "package" TEXT,
    "pieces" TEXT,
    "bag" TEXT,
    "plate" TEXT,
    "quantity" INTEGER,
    CONSTRAINT "Product_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CategoryMain" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productId" INTEGER,
    "type" TEXT,
    CONSTRAINT "CategoryMain_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CategorySecond" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "categoryMainId" INTEGER,
    "type" TEXT,
    CONSTRAINT "CategorySecond_categoryMainId_fkey" FOREIGN KEY ("categoryMainId") REFERENCES "CategoryMain" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CategoryThird" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "CategorySecondId" INTEGER,
    "type" TEXT,
    CONSTRAINT "CategoryThird_CategorySecondId_fkey" FOREIGN KEY ("CategorySecondId") REFERENCES "CategorySecond" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CommentBlogs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "authorId" TEXT NOT NULL,
    "blogName" TEXT,
    "message" TEXT,
    "img" TEXT,
    "name" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,
    "type" TEXT,
    "email" TEXT,
    "avatar" TEXT,
    CONSTRAINT "CommentBlogs_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Comments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productId" INTEGER,
    "message" TEXT,
    "img" TEXT,
    "name" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT,
    CONSTRAINT "Comments_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Image" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productId" INTEGER,
    "img" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Image_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "authorId" TEXT NOT NULL,
    "userId" TEXT,
    "name" TEXT,
    "address" TEXT,
    "city" TEXT,
    "district" TEXT,
    "Ward" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "message" TEXT,
    "product" TEXT,
    "orderAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "code" TEXT,
    "status" TEXT,
    "payment" TEXT,
    "paymentStatus" TEXT,
    CONSTRAINT "Order_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Discount" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "authorId" TEXT NOT NULL,
    "code" TEXT,
    "percent" INTEGER,
    "name" TEXT,
    "dateStart" DATETIME,
    "dateEnd" DATETIME,
    "description" TEXT,
    CONSTRAINT "Discount_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ImgWork" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "authorId" TEXT NOT NULL,
    "img" TEXT,
    "type" TEXT,
    CONSTRAINT "ImgWork_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "authorId" TEXT NOT NULL,
    "message" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Notification_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
