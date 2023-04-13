import { Renderer } from "@k8slens/extensions";
import React from "react";
import { ProviderConfig } from "../providerconfig/providerConfig"
import { providerConfigStore } from "../providerconfig/providerConfig-store";

enum sortBy {
  name = "name",
}

export class ProvidersConfigPage extends React.Component<{ extension: Renderer.LensExtension }> {
  render() {
    return (
      <Renderer.Component.KubeObjectListLayout 
        tableId="providersTable"
        className="ProviderConfig" store={ providerConfigStore }
        sortingCallbacks={{
          [sortBy.name]: (provider: ProviderConfig) => provider.getName(),
        }}
        searchFilters={[
          (providerConfig: ProviderConfig) => providerConfig.getSearchFields()
        ]}
        renderHeaderTitle="ProviderConfig"
        renderTableHeader={[
          { title: "Name", className: "name", sortBy: sortBy.name }
        ]}
        renderTableContents={(providerConfig: ProviderConfig) => [
          providerConfig.getName()
        ]}
      />
    );
  }
}