export const analytics = window['analytics'];

export enum AnalyticsEvent {
  SELECT_CONTENT = 'select_content',
  SELECT_ITEM = 'select_item'
}

export enum AnalyticsEventProp {
  IN_APP_CLICK = 'in_app_click',
  IN_APP_LINK = 'in_app_link',
}

export enum AnalyticsEventValue {
  CARD_CLICK = 'card_click',
  EMAIL_ID_CLICK = 'email_id_click',
  EXIT_IMAGE_CLICK = 'exit_image_click',
  IMAGE_CLICK = 'image_click',
  INSTAGRAM_CLICK = 'instagram_click',
  LANDING_BANNER_CLICK = 'landing_banner_click',
  MENU_TOGGLE_CLICK = 'menu_toggle_click',
  MENU_ITEM_CLICK = 'menu_item_click',
  NEXT_IMAGE_CLICK = 'next_image_click',
  NIGHT_MODE_CLICK = 'night_mode_click',
  PREV_IMAGE_CLICK = 'prev_image_click',
  VIEW_ALL_GALLERIES = 'view_all_galleries'
}