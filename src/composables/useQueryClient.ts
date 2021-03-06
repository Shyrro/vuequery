import { QueryClient } from "react-query/core";
import { onMounted, onUnmounted } from "vue";

export const useQueryClient = (client: QueryClient) => {
  onMounted(() => {
    client.mount();
  });

  onUnmounted(() => {
    client.unmount();
  });
};
