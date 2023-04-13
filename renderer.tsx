import { Renderer } from "@k8slens/extensions";
import React from "react";
import { InstancesPage } from "./src/pages/instances-page";
import { ProvidersPage } from "./src/pages/provider-page";
import { ProvidersConfigPage } from "./src/pages/providerconfig-page";


const enum id {
  vms = "vms",
  provider = "provider",
  providerConfig = "providerConfig"
}

export function IcecreamIcon(props: Renderer.Component.IconProps) {
  return <Renderer.Component.Icon {...props} material="icecream"/>;
}

export function ProviderIcon(props: Renderer.Component.IconProps) {
  return <Renderer.Component.Icon {...props} material="filter_drama"/>;
}

export function ProviderConfigIcon(props: Renderer.Component.IconProps) {
  return <Renderer.Component.Icon {...props} material="cloud_sync"/>;
}

export function InstancesIcon(props: Renderer.Component.IconProps) {
  return <Renderer.Component.Icon {...props} material="dns"/>;
}

export function SubIcon(props: Renderer.Component.IconProps): React.ReactElement {
  return (null)
}

export default class CrossplaneExtension extends Renderer.LensExtension {

    clusterPages = [
      {
        id: id.vms,
        components: {
          Page: () => <InstancesPage extension={this}/>,
        }
      },
      {
        id: id.provider,
        components: {
          Page: () => <ProvidersPage extension={this}/>,
        }
      },
      {
        id: id.providerConfig,
        components: {
          Page: () => <ProvidersPage extension={this}/>,
        }
      }
    ];

    clusterPageMenus = [
      {
        id: "crossplane",
        title: "Crossplane",
        components: {
          Icon: IcecreamIcon
        }
      },
      {
        parentId: "crossplane",
        target: {pageId: id.vms},
        title: "Instances",
        components: {
          Icon: InstancesIcon
        }
      },
      {
        parentId: "crossplane",
        target: {pageId: id.provider},
        title: "Provider",
        components: {
          Icon: ProviderIcon
        }
      },
      {
        parentId: "crossplane",
        target: {pageId: id.providerConfig},
        title: "Provider Config",
        components: {
          Icon: ProviderConfigIcon
        }
      }
    ];
}
