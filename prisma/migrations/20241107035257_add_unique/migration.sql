/*
  Warnings:

  - A unique constraint covering the columns `[siteId,link]` on the table `Feed` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Feed_siteId_link_key" ON "Feed"("siteId", "link");
