import { Renderer} from "@k8slens/extensions";
import { Instance } from "./instance";

export class InstanceApi extends Renderer.K8sApi.KubeApi<Instance> {
}

export class InstanceStore extends Renderer.K8sApi.KubeObjectStore<Instance> {
  api = new InstanceApi({
    objectConstructor: Instance
  });
}

export const instanceStore = new InstanceStore();

Renderer.K8sApi.apiManager.registerStore(instanceStore);