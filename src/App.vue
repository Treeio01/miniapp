<script setup>
import Layout from './components/Layout.vue';
import LiveBar from './components/LiveBar.vue';
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <Layout>
    <template #live>
      <LiveBar></LiveBar>
    </template>
    <template #content>
      <RouterView></RouterView>
    </template>
    <template #navbar>
      <Navbar></Navbar>
    </template>
  </Layout>
</template>

<style scoped></style>
