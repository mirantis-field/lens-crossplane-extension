import { Renderer} from "@k8slens/extensions";

export class Instance extends Renderer.K8sApi.KubeObject {
  static kind = "Instance";
  static namespaced = true;
  static apiBase = "/apis/compute.openstack.upbound.io/v1alpha1/instancev2s";

  kind!: string;
  apiVersion!: string;
  metadata!: InstanceMetadata; 
  spec!: InstanceSpec;
}

export type InstanceMetadata = {
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

export type InstanceSpec = {
  package: string;
};