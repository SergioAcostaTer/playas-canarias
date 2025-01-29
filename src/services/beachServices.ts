/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "@/lib/axiosInstance";
import { Beach, Page, ErrorResponse, BeachPreview } from "@/types";

export const BeachService = {
  async getBeach(id: number): Promise<Beach> {
    try {
      const response = await axiosInstance.get<Beach>(`/beaches/${id}`);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  async searchBeaches(
    query = "",
    page = 0,
    size = 10,
    sortBy = "name",
    direction = "asc"
  ): Promise<Page<Beach>> {
    try {
      const response = await axiosInstance.get<Page<Beach>>("/beaches/search", {
        params: { query, page, size, sortBy, direction },
      });
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  async searchBeachesPreview(
    query = "",
    size = 5,
    sortBy = "name",
    direction = "asc"
  ): Promise<Page<Beach>> {
    try {
      const response = await axiosInstance.get<Page<Beach>>(
        "/beaches/search/preview",
        {
          params: { query, size, sortBy, direction },
        }
      );
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  async getRandomBeach(island = ""): Promise<Beach> {
    try {
      const response = await axiosInstance.get<Beach>("/beaches/random", {
        params: { island },
      });
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  async getNearbyBeaches(
    latitude: number,
    longitude: number,
    radius = 5500,
    size = 5,
    page = 0,
    sortBy = "distance",
    direction = "asc"
  ): Promise<Page<BeachPreview>> {
    try {
      const response = await axiosInstance.get<Page<BeachPreview>>("/beaches/nearby", {
        params: { latitude, longitude, radius, size, page, sortBy, direction },
      });
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },
};

function handleApiError(error: any): ErrorResponse {
  if (error.response) {
    return {
      status: error.response.status,
      message: error.response.data?.message || "An error occurred",
      timestamp: Date.now(),
    };
  }
  return {
    status: 500,
    message: "Network error or unknown issue",
    timestamp: Date.now(),
  };
}
