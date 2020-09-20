import { AnalyticsEvent } from "../global/analytics";

export default class AnalyticsService {

  private static analytics = window['analytics'];

  public static logEvent(key: AnalyticsEvent, data: {}) {

    const isRunningLocally = window.location.href.includes('localhost');

    // don't log events if running in local
    if (isRunningLocally) {
      console.log(`key: ${key}, data: ${JSON.stringify(data)}`)
      return;
    }

    AnalyticsService.analytics.logEvent(key, data);
  }
}