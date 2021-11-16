import { SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT } from "./appTypes";

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}
export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}
export function showAlert(message) {
  return (dispath) => {
    dispath({
      type: SHOW_ALERT,
      payload: message,
    });

    setTimeout(() => {
      dispath(hideAlert());
    }, 3000);
  };
}
export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}
