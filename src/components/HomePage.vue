<template>
  <v-container>
    <div id="map"></div>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { getFreeParkingSpots, type ParkingSpotResponse } from '@/fetch/CustomerData.ts';
import parkingIcon from '@/assets/parking.svg';
import { useParkingMap } from '@/composables/useParkingMap';

const { map, initMap } = useParkingMap('map');

function createIconHTML() {
  return `<img src="${parkingIcon}" width="24" height="24" alt="Free Parking" />`;
}

onMounted(async () => {
  const location = await initMap();
  if (!location || !map.value) return;

  try {
    const spots: ParkingSpotResponse[] = await getFreeParkingSpots(
      location.latitude,
      location.longitude,
    );

    spots.forEach((spot) => {
      const icon = L.divIcon({
        html: createIconHTML(),
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        className: '',
      });

      L.marker([spot.latitude, spot.longitude], { icon })
        .addTo(map.value!)
        .bindPopup('🅿️ Free spot');
    });
  } catch (error) {
    console.error('Failed to load parking spots:', error);
  }
});
</script>

<style>
#map {
  width: 180%;
  height: 600px;
}
</style>
