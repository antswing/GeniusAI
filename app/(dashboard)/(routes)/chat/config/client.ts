import { BuildConfig, getBuildConfig } from "./build";

export function getClientConfig() {
  /*
  if (typeof document !== "undefined") {
    // client side
    console.log("client config", queryMeta("config"));
    return JSON.parse(queryMeta("config")) as BuildConfig;
  }*/

  if (typeof process !== "undefined") {
    // server side
    console.log("server config", getBuildConfig());
    return getBuildConfig();
  }
}

function queryMeta(key: string, defaultValue?: string): string {
  let ret: string;
  if (document) {
    const meta = document.head.querySelector(
      `meta[name='${key}']`,
    ) as HTMLMetaElement;
    ret = meta?.content ?? "";
  } else {
    ret = defaultValue ?? "";
  }

  return ret;
}
