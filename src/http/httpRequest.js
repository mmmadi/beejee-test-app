import axios from "axios";

export const baseURL = "https://uxcandy.com/~shapoval/test-task-backend/v2";

export const developerName = "?developer=Madiyar";

export const httpRequest = async (url, method = "GET", formData) => {
  const response = await axios({
    url: baseURL + url,
    method,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response.data;
};
