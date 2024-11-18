import { mocks } from "./mock";

export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mockData = mocks[location];
    if (!mockData) {
      reject("Location not found");
    }
    resolve(mockData);
  });
};
