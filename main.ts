import { Renderer } from "@k8slens/extensions";

export default class CrossplaneExtensionMain extends Renderer.LensExtension {
  onActivate() {
    console.log("Crossplane extension activated");
  }

  onDeactivate() {
    console.log("Crossplane extension de-activated");
  }
}
