import { ref, type Ref } from 'vue';
import L, { type Map as LeafletMap } from 'leaflet';

export function useParkingMap(mapContainerId: string = 'map') {
  const map: Ref<LeafletMap | null> = ref(null);
  const userLocation = ref<{ latitude: number; longitude: number } | null>(null);

  async function initMap(): Promise<{ latitude: number; longitude: number } | null> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;

        const instance = L.map(mapContainerId).setView([latitude, longitude], 15);
        map.value = instance;

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors',
        }).addTo(instance);

        L.marker([latitude, longitude]).addTo(instance).bindPopup('You are here');

        userLocation.value = { latitude, longitude };
        resolve(userLocation.value);
      }, reject);
    });
  }

  return {
    map,
    userLocation,
    initMap,
  };
}
