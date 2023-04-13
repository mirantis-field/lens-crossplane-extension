import { Renderer} from "@k8slens/extensions";
import { Provider } from "./provider";

export class ProviderApi extends Renderer.K8sApi.KubeApi<Provider> {
}

export class ProviderStore extends Renderer.K8sApi.KubeObjectStore<Provider> {
  api = new ProviderApi({
    objectConstructor: Provider
  });
}

export const providerStore = new ProviderStore();

Renderer.K8sApi.apiManager.registerStore(providerStore);