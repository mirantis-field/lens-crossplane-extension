import { Renderer} from "@k8slens/extensions";
import { ProviderConfig } from "./providerconfig";

export class ProviderConfigApi extends Renderer.K8sApi.KubeApi<ProviderConfig> {
}

export class ProviderConfigStore extends Renderer.K8sApi.KubeObjectStore<ProviderConfig> {
  api = new ProviderConfigApi({
    objectConstructor: ProviderConfig
  });
}

export const providerConfigStore = new ProviderConfigStore();

Renderer.K8sApi.apiManager.registerStore(providerConfigStore);