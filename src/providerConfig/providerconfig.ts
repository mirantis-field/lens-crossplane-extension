import { Renderer} from "@k8slens/extensions";

export class ProviderConfig extends Renderer.K8sApi.KubeObject {
  static kind = "ProviderConfig";
  static apiBase = "/apis/openstack.upbound.io/v1beta1/providerconfigs";

  kind!: string;
  apiVersion!: string;
  metadata!: ProviderConfigMetadata; 
  spec!: ProviderSpec;
}

export type ProviderConfigMetadata = {
  name: string;
  namespace: string;
  selfLink: string;
  uid: string;
  resourceVersion: string;
  creationTimestamp: string;
  labels?: {
      [key: string]: string;
  };
  annotations?: {
      [key: string]: string;
  };
};

export type ProviderSpec = {
  package: string;
};