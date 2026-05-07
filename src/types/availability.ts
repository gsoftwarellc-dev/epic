export interface AvailabilityResponse {
  productId: number;
  date: string;
  available: boolean;
  unavailableReason?: string;
  availableSlots?: {
    startTime: string;
    endTime: string;
  }[];
}
