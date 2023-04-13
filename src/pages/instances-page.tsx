import { Renderer } from "@k8slens/extensions";
import React from "react";
import { Instance } from "../instances/instance"
import { instanceStore } from "../instances/instance-store";

enum sortBy {
  name = "name"
}

export class InstancesPage extends React.Component<{ extension: Renderer.LensExtension }> {

  render() {
    return (
        <Renderer.Component.KubeObjectListLayout
            tableId="InstancesTable"
            className="Instances" store={instanceStore}
            sortingCallbacks={{
              [sortBy.name]: (instance: Instance) => instance.getName()
            }}
            searchFilters={[
              (instance: Instance) => instance.getSearchFields()
            ]}
            renderHeaderTitle="Instances"
            renderTableHeader={[
              { title: "Name", className: "name", sortBy: sortBy.name }              
            ]}
            renderTableContents={(instance: Instance ) => [
              instance.getName(),
            ]}
        />
    ) 
  }
}