<template>
  <div>Hello Vue 3 + Vite</div>
</template>

<script lang="ts">
import { Query, QueryCache, QueryClient, QueryOptions } from "react-query/core";
import { defineComponent, Ref, ref } from "vue";
import { useQueryClient } from "./composables/useQueryClient";

export default defineComponent({
  name: "App",
  setup() {
    // cache: QueryCache
    // queryKey: QueryKey
    // queryHash: string
    // options?: QueryOptions<TQueryFnData, TError, TData>
    // defaultOptions?: QueryOptions<TQueryFnData, TError, TData>
    // state?: QueryState<TData, TError>

    const client = ref(new QueryClient()) as Ref<QueryClient>;
    const queryClient = useQueryClient(client.value);

    // console.log('Query : ', query);
    console.log('Client', client);
    console.log('Query client', queryClient);
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
