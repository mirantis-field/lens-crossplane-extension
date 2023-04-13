import { Renderer } from "@k8slens/extensions";
import React from "react";
import { Provider } from "../provider/provider"
import { providerStore } from "../provider/provider-store";

enum sortBy {
  name = "name",
  provider = "provider",
  age = "age"
}

export class ProvidersPage extends React.Component<{ extension: Renderer.LensExtension }> {
  render() {
    return (
      <Renderer.Component.KubeObjectListLayout 
        tableId="providersTable" 
        className="Providers" store={ providerStore }
        sortingCallbacks={{
          [sortBy.name]: (provider: Provider) => provider.getName(),
          [sortBy.provider]: (provider: Provider) => provider.metadata.namespace,
        }}
        searchFilters={[
          (provider: Provider) => provider.getSearchFields()
        ]}
        renderHeaderTitle="Providers"
        renderTableHeader={[
          { title: "Name", className: "name", sortBy: sortBy.name },
          { title: "Provider", className: "provider", sortBy: sortBy.provider },              
        ]}
        renderTableContents={(provider: Provider) => [
          provider.getName()
        ]}
      />
    );
  }
}