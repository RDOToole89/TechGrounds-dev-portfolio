// Any object implementing this interface must at least have a location
// with a lat and a lng that is a number. Basically instructions to a class
// on how the can be an argement to 'addMarker'.
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  // This private property means we can only reference methods from inside the CustomMap
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.querySelector(divId), {
      zoom: 2,
      center: {
        lat: 52.373072104297016,
        lng: 4.892650637158713,
      },
    });
  }

  // We can add the User | Company class Types to access the addMarker method.
  // Better practice is to create an interface The interface Mappable
  // acts as a gatekeeper to the method AddMarker. It needs to at least
  // adhere to the interface. To be eligble as an argument to addMarker.
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        // argument mappable now has a method called markerContent()
        // attached to it.
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
