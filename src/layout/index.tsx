import type { NextPage } from "next";
import { MainLayout } from "src/layout/layout";

import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

export const Layout = (page: NextPage) => {
  return (
    <main>
      <LayoutErrorBoundary>
        <MainLayout>{page}</MainLayout>
      </LayoutErrorBoundary>

      {/* Loading Chrome scripts */}
      <script defer src="../content.js"></script>
      <script defer src="../background.js"></script>
    </main>
  );
};
