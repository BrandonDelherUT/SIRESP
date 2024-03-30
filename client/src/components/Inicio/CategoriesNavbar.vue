<template>
  <div class="categories-navbar">
    <div class="category-item" v-for="category in categories" :key="category.id">
      <b-icon :icon="category.icon" font-scale="2"></b-icon>
      <span>{{ category.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default: () => [
        { id: 1, name: 'Casas', icon: 'house-fill' },
        { id: 2, name: 'Apartamentos', icon: 'building' },
        { id: 3, name: 'Playa', icon: 'umbrella' },
        { id: 4, name: 'Villas', icon: 'tree' }
      ]
    }
  }
}
</script>

<style scoped>
.categories-navbar {
  background-color: #f8f9fa;
  color: #007bff;
  padding: 0.5rem 1rem;
  position: fixed;
  top: 3.5rem;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  margin: 0 10px;
}

.category-item span {
  margin-top: 0.5rem;
  color: #007bff;
}

.category-item:hover {
  background-color: #e2e6ea;
  border-radius: 0.25rem;
  cursor: pointer;
}

.category-item b-icon {
  margin-bottom: 0.5rem;
  color: #007bff;
}
</style>
