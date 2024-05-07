import SaasLayout from "@app/components/layouts/saas.layout";
import React, { ReactElement } from "react";

function Page() {
  return <div>Saas Board</div>;
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <SaasLayout>{page}</SaasLayout>;
};
