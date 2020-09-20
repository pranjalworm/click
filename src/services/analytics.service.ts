import { AnalyticsEvent } from "../global/analytics";
import { Utils } from "../global/utils";

export default class AnalyticsService {

  private static analytics = window['analytics'];

  public static logEvent(key: AnalyticsEvent, data: {}) {


    // don't log events if running in local
    if (Utils.isRunningLocally()) {
      console.log(`key: ${key}\ndata: ${JSON.stringify(data, null, '\t')}`)
      return;
    }

    AnalyticsService.analytics.logEvent(key, data);
  }
}