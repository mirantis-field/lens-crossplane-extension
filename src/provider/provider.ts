import { Renderer} from "@k8slens/extensions";

export class Provider extends Renderer.K8sApi.KubeObject {
  static kind = "Provider";
  static apiBase = "/apis/pkg.crossplane.io/v1/providers";

  kind!: string;
  apiVersion!: string;
  metadata!: ProviderMetadata; 
  spec!: ProviderSpec;
}

export type ProviderMetadata = {
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